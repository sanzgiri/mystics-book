import graph from '../data/graph.json';
import parts from '../data/parts.json';

export const nodes = graph.nodes;
export const edges = graph.edges;
export const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
export const partByN = Object.fromEntries(parts.map((p) => [p.n, p]));
export { parts };

export const TIER_LABEL = {
  chapter: 'Chapter',
  profile: 'Profile',
  sidebar: 'Sidebar',
  node: 'On the tree',
  root: 'Root tradition',
};

export const EDGE_LABEL = {
  initiated: 'initiated',
  'lived-with': 'lived with / studied under',
  influenced: 'influenced',
  claimed: 'claimed connection',
  'reacted-against': 'reacted against',
  institutional: 'institution',
  family: 'family',
  lineage: 'lineage',
  protected: 'protected / sheltered',
};

export function lifespan(n) {
  if (!n) return '';
  if (n.era) return n.era;
  const b = n.born ? String(n.born) : '?';
  if (n.born && !n.died) return `b. ${n.born}`;
  if (!n.born && n.died) return `d. ${n.died}`;
  if (!n.born && !n.died) return '';
  return `${b}–${n.died}`;
}

export function figuresInPart(n) {
  return nodes.filter((x) => x.part === n);
}

export function parentsOf(id) {
  return edges.filter((e) => e.to === id).map((e) => ({ edge: e, node: byId[e.from] })).filter((x) => x.node);
}
export function childrenOf(id) {
  return edges.filter((e) => e.from === id).map((e) => ({ edge: e, node: byId[e.to] })).filter((x) => x.node);
}

// Figures that get their own page (everything that is a person-tier entry, not roots).
// A node with a custom `link` (for example an appendix entry, link "/appendix/#id") has no /figures/ page.
export function hasPage(n) {
  return n && n.tier !== 'root' && !n.link;
}

// Appendix entries: nodes whose link points into /appendix/.
export const isAppendix = (n) => !!(n && n.link && n.link.startsWith('/appendix/'));
export const appendixNodes = nodes.filter(isAppendix);

export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (p) => `${base}${p}`;
// Where a figure's name should link: its custom link if it has one, else its /figures/ page.
export const figureHref = (id) => (byId[id]?.link ? href(byId[id].link) : href(`/figures/${id}/`));
// Link for a node box on the trees: null for roots and other nodes with no page and no custom link.
export const nodeHref = (n) => (n?.link ? href(n.link) : hasPage(n) ? figureHref(n.id) : null);
export const partHref = (slug) => href(`/parts/${slug}/`);

// "Report a correction": opens a new GitHub issue with a title and body template.
// No form and no email; readers need a GitHub account.
import site from '../data/site.json';
export function correctionUrl(pageTitle = '', pageUrl = '') {
  const title = `Correction: ${pageTitle || 'page name'}`;
  const body = [
    `Page: ${pageUrl || '(paste the page address)'}`,
    '',
    'What is wrong (quote the sentence if you can):',
    '',
    'What it should say:',
    '',
    'Source (book, page, or link):',
  ].join('\n');
  return `${site.repo}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}&labels=correction`;
}
