// Serverless proxy for the en-US fallback voice used by speakOnline() in index.html.
// index.html calls /api/tts?text=... whenever the browser has no usable
// SpeechSynthesis voice, so this endpoint has to exist or the button goes silent.
const MAX_LENGTH = 200;

module.exports = async function handler(req, res) {
  const text = String(req.query.text || "").trim();
  if (!text) {
    res.status(400).json({ error: "Missing ?text" });
    return;
  }
  if (text.length > MAX_LENGTH) {
    res.status(400).json({ error: `Text must be ${MAX_LENGTH} characters or fewer` });
    return;
  }

  const upstream = "https://translate.google.com/translate_tts"
    + "?ie=UTF-8&client=tw-ob&tl=en-US&ttsspeed=1"
    + "&q=" + encodeURIComponent(text);

  try {
    const response = await fetch(upstream, {
      headers: {
        // translate_tts refuses requests without a browser-like User-Agent.
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
        "Referer": "https://translate.google.com/"
      }
    });
    if (!response.ok) {
      res.status(502).json({ error: "Upstream voice service returned " + response.status });
      return;
    }
    const audio = Buffer.from(await response.arrayBuffer());
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Length", String(audio.length));
    // The same word is replayed constantly during practice, so cache hard.
    res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=604800, immutable");
    res.status(200).send(audio);
  } catch (error) {
    res.status(502).json({ error: "Could not reach the voice service" });
  }
};
