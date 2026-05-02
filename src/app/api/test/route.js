export async function GET() {
  try {
    const res = await fetch('https://api.sofascore.com/api/v1/team/7652/events/next/0', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept': 'application/json',
        'Referer': 'https://www.sofascore.com/',
        'Origin': 'https://www.sofascore.com',
      }
    });
    const text = await res.text();
    return new Response(JSON.stringify({ status: res.status, ok: res.ok, body: text.slice(0, 500) }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
