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
export function hasPage(n) {
  return n && n.tier !== 'root';
}

export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const href = (p) => `${base}${p}`;
export const figureHref = (id) => href(`/figures/${id}/`);
export const partHref = (slug) => href(`/parts/${slug}/`);
