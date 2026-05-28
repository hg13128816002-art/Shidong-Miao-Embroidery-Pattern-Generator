const DEFAULT_MODEL = "gpt-4.1-mini";
const DEFAULT_BASE_URL = "https://api.openai.com/v1";
const MAX_IMAGE_LENGTH = 8 * 1024 * 1024;

module.exports = async function scorePattern(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Only POST requests are supported." });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "还没有配置 OPENAI_API_KEY。" });
  }

  const body = parseBody(req.body);
  const { image, metadata = {} } = body;
  if (!isValidPngDataUrl(image)) {
    return res.status(400).json({ error: "没有收到有效的 PNG 纹样图片。" });
  }

  try {
    const model = process.env.OPENAI_MODEL || DEFAULT_MODEL;
    const baseUrl = (process.env.OPENAI_BASE_URL || DEFAULT_BASE_URL).replace(/\/$/, "");
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: buildPrompt(metadata),
              },
              {
                type: "image_url",
                image_url: {
                  url: image,
                },
              },
            ],
          },
        ],
        temperature: 0.55,
        max_tokens: 700,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message = data?.error?.message || "AI 评分服务请求失败。";
      return res.status(response.status).json({ error: message });
    }

    const result = normalizeScoreResult(parseModelJson(extractOutputText(data)), metadata);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message || "AI 评分失败，请稍后再试。" });
  }
};

function parseBody(body) {
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return body && typeof body === "object" ? body : {};
}

function isValidPngDataUrl(value) {
  return typeof value === "string" && value.startsWith("data:image/png;base64,") && value.length <= MAX_IMAGE_LENGTH;
}

function buildPrompt(metadata) {
  const compactMetadata = JSON.stringify(metadata, null, 2);
  return `你是一个面向公众体验的施洞苗绣数字纹样评审助手。请先观察用户生成的纹样图片，再结合以下生成参数进行评价：\n${compactMetadata}\n\n请分别判断五个维度：composition 构图秩序、clarity 纹样清晰度、color 色彩协调、culture 苗绣视觉语言贴合度、personalization 个性化完成度。每个维度给出 16 到 20 之间的整数小分。不要把所有维度都给同一个分数，要根据当前图像的真实差异拉开层次。\n\n评分标尺：\n- 总体 80-84：画面可用，但秩序、主题或色彩存在明显问题。\n- 总体 85-89：整体成立，有一定美感，但局部拥挤、松散或文化特征不够明确。\n- 总体 90-94：完成度较好，构图和纹样关系清楚，适合展示。\n- 总体 95-100：非常成熟，主体突出、层次丰富、节奏稳定，并且有鲜明的苗绣视觉气质。\n\n请输出严格 JSON，不要返回 Markdown，不要添加额外说明。JSON 字段必须是：score、rubric、title、summary、strengths、suggestions。rubric 必须包含 composition、clarity、color、culture、personalization 五个整数小分。score 可以给出你的总体参考分，但最终总分会由系统根据 rubric 重新计算。`;
}

function extractOutputText(data) {
  const chatContent = data.choices?.[0]?.message?.content;
  if (typeof chatContent === "string") return chatContent;

  if (typeof data.output_text === "string") return data.output_text;

  const chunks = [];
  for (const outputItem of data.output || []) {
    for (const contentItem of outputItem.content || []) {
      if (typeof contentItem.text === "string") chunks.push(contentItem.text);
    }
  }
  return chunks.join("\n");
}

function parseModelJson(text) {
  if (!text) throw new Error("AI 没有返回可解析的评分结果。");

  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("AI 返回格式不符合预期。");
    return JSON.parse(match[0]);
  }
}

function normalizeScoreResult(value, metadata) {
  const score = computeFinalScore(value, metadata);
  return {
    score,
    title: safeText(value.title, "纹样完成度较高"),
    summary: safeText(value.summary, "整体构图较稳定，纹样元素之间形成了比较清晰的呼应关系。"),
    strengths: normalizeList(value.strengths, ["构图有中心秩序", "色彩层次较鲜明"]),
    suggestions: normalizeList(value.suggestions, ["可继续调整繁密度，让主体纹样更突出"]),
  };
}

function computeFinalScore(value, metadata) {
  const rubricScore = getRubricScore(value.rubric || value.rubricScores || value.dimensionScores);
  const modelScore = Number(value.score);
  const baseScore = Number.isFinite(rubricScore)
    ? rubricScore
    : Number.isFinite(modelScore)
      ? modelScore
      : 88;
  return clamp(Math.round(baseScore + getPatternAdjustment(metadata)), 80, 100);
}

function getRubricScore(rubric) {
  if (!rubric || typeof rubric !== "object") return NaN;

  const keys = ["composition", "clarity", "color", "culture", "personalization"];
  const scores = keys.map((key) => Number(rubric[key])).filter(Number.isFinite);
  if (scores.length < 3) return NaN;

  if (scores.every((score) => score >= 0 && score <= 20)) {
    return scores.reduce((sum, score) => sum + score, 0);
  }

  if (scores.every((score) => score >= 0 && score <= 100)) {
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
  }

  return NaN;
}

function getPatternAdjustment(metadata) {
  const seedSwing = (hashString(String(metadata.seed || "")) % 7) - 3;
  const density = Number(metadata.density);
  const complexity = Number(metadata.complexity);
  const motifs = Array.isArray(metadata.motifs) ? metadata.motifs.length : 0;
  let structureSwing = 0;

  if (Number.isFinite(density) && density > 0.82) structureSwing -= 1;
  if (Number.isFinite(complexity) && complexity > 0.78) structureSwing -= 1;
  if (Number.isFinite(density) && density >= 0.42 && density <= 0.72) structureSwing += 1;
  if (metadata.symmetry) structureSwing += 1;
  if (metadata.border) structureSwing += 1;
  if (motifs >= 5 && Number.isFinite(density) && density > 0.68) structureSwing -= 1;

  return clamp(seedSwing + structureSwing, -5, 5);
}

function normalizeList(value, fallback) {
  const list = Array.isArray(value) ? value : fallback;
  return list.map((item) => safeText(item, "")).filter(Boolean).slice(0, 3);
}

function safeText(value, fallback) {
  const text = typeof value === "string" ? value.trim() : "";
  return text.slice(0, 180) || fallback;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function hashString(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}
