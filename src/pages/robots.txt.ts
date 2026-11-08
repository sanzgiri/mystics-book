import site from '../data/site.json';
// Indexing follows the "launched" flag in src/data/site.json.
export function GET({ site: origin }) {
  const sitemap = origin ? `Sitemap: ${new URL('/sitemap-index.xml', origin).href}\n` : '';
  const body = site.launched ? `User-agent: *\nAllow: /\n${sitemap}` : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
