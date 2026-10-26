import site from '../data/site.json';
export function GET() {
  const body = site.launched ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
