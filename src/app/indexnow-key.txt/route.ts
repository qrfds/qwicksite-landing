const INDEXNOW_KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;

export function GET() {
  const key = process.env.INDEXNOW_KEY?.trim();

  if (!key || !INDEXNOW_KEY_PATTERN.test(key)) {
    return new Response("Not found\n", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  return new Response(`${key}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
