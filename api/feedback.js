const MAX_MESSAGE_LENGTH = 800;
const MAX_CONTACT_LENGTH = 120;

module.exports = async function feedback(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Only POST requests are supported." });
  }

  const body = parseBody(req.body);
  if (body.website) return res.status(200).json({ ok: true });

  const message = cleanText(body.message, MAX_MESSAGE_LENGTH);
  const contact = cleanText(body.contact, MAX_CONTACT_LENGTH);

  if (message.length < 2) {
    return res.status(400).json({ error: "请填写反馈内容。" });
  }

  const feedback = {
    message,
    contact,
    page: cleanText(body.page, 500),
    pattern: normalizePattern(body.pattern),
    userAgent: req.headers["user-agent"] || "",
    referer: req.headers.referer || "",
    createdAt: new Date().toISOString(),
  };

  console.log("[USER_FEEDBACK]", JSON.stringify(feedback));
  return res.status(200).json({ ok: true });
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

function cleanText(value, maxLength) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function normalizePattern(pattern) {
  if (!pattern || typeof pattern !== "object") return null;
  return {
    seed: cleanText(pattern.seed, 24),
    layout: cleanText(pattern.layout, 80),
    palette: cleanText(pattern.palette, 80),
    texture: cleanText(pattern.texture, 80),
    motifs: Array.isArray(pattern.motifs) ? pattern.motifs.map((item) => cleanText(item, 60)).filter(Boolean).slice(0, 12) : [],
    density: Number(pattern.density),
    complexity: Number(pattern.complexity),
    symmetry: Boolean(pattern.symmetry),
    border: Boolean(pattern.border),
  };
}
