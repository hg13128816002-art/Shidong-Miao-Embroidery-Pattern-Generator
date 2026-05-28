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
        temperature: 0.35,
        max_tokens: 700,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const message = data?.error?.message || "AI 评分服务请求失败。";
      return res.status(response.status).json({ error: message });
    }

    const result = normalizeScoreResult(parseModelJson(extractOutputText(data)));
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
  return `你是一个面向公众体验的施洞苗绣数字纹样评审助手。请先观察用户生成的纹样图片，再结合以下生成参数进行评价：\n${compactMetadata}\n\n请从构图秩序、纹样清晰度、色彩协调、苗绣视觉语言贴合度、个性化完成度五个角度给出友好但具体的评价。最终分数必须限制在 80 到 100 之间。只返回 JSON，不要返回 Markdown，不要添加额外说明。JSON 结构如下：\n{\n  "score": 92,\n  "title": "一句短标题",\n  "summary": "两到三句话的总体评价",\n  "strengths": ["亮点 1", "亮点 2", "亮点 3"],\n  "suggestions": ["建议 1", "建议 2"]\n}`;
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

function normalizeScoreResult(value) {
  const score = clamp(Math.round(Number(value.score) || 88), 80, 100);
  return {
    score,
    title: safeText(value.title, "纹样完成度较高"),
    summary: safeText(value.summary, "整体构图较稳定，纹样元素之间形成了比较清晰的呼应关系。"),
    strengths: normalizeList(value.strengths, ["构图有中心秩序", "色彩层次较鲜明"]),
    suggestions: normalizeList(value.suggestions, ["可继续调整繁密度，让主体纹样更突出"]),
  };
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
