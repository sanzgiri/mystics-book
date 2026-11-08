import json,collections
g=json.load(open('src/data/graph.json'));N={n['id']:n for n in g['nodes']};E=g['edges']
tier=collections.Counter(n['tier'] for n in g['nodes']);print('nodes',len(N),'edges',len(E),dict(tier))
ent=[i for i,n in N.items() if n['tier'] in('chapter','profile','sidebar')];print('entries',len(ent))
print('types',collections.Counter(e['type'] for e in E).most_common())
print('evidence',collections.Counter(e['evidence'] for e in E).most_common(),'verified',sum(e.get('verified',False) for e in E))
roots={i for i,n in N.items() if n['tier']=='root'}
out=collections.Counter(e['from'] for e in E);inn=collections.Counter(e['to'] for e in E)
print('root out',[(r,out[r]) for r,_ in sorted(((r,out[r]) for r in roots),key=lambda x:-x[1])[:4]])
deg={i:out[i]+inn[i] for i in N if i not in roots}
print('top people',[(i,deg[i],out[i],inn[i]) for i in sorted(deg,key=lambda x:-deg[x])[:6]])
# components
adj=collections.defaultdict(set)
for e in E: adj[e['from']].add(e['to']);adj[e['to']].add(e['from'])
def comps(nodes):
    seen=set();res=[]
    for s in nodes:
        if s in seen:continue
        st=[s];c=set()
        while st:
            x=st.pop()
            if x in c:continue
            c.add(x);st+= [y for y in adj[x] if y in nodes and y not in c]
        seen|=c;res.append(c)
    return sorted(res,key=len,reverse=True)
allc=comps(set(N));print('components',[len(c) for c in allc][:16],len(allc))
big=allc[0];print('main body',len(big),'of',len(N),'other clusters>1',sum(1 for c in allc[1:] if len(c)>1),'singles',sum(1 for c in allc[1:] if len(c)==1))
print('singles',[list(c)[0] for c in allc if len(c)==1]);
for c in allc[1:]:
    if len(c)>1: print(' cluster',len(c),sorted(c)[:5])
nr=set(N)-roots;fam=comps(nr);print('families',len(fam),[ (len(c),sum(1 for x in c if x in ent)) for c in fam[:5]])
# advaita reach
adv=[r for r in roots if 'advaita' in r];print('advaita',adv)
d=collections.defaultdict(set)
for e in E:d[e['from']].add(e['to'])
reach=set();st=list(adv)
while st:
    x=st.pop()
    for y in d[x]:
        if y not in reach:reach.add(y);st.append(y)
print('entries reached from advaita',sum(1 for x in ent if x in reach),'not',sum(1 for x in ent if x not in reach))
print('claimed',[(e['from'],e['to'],e['evidence']) for e in E if e['type']=='claimed'][:30])
cross=sum(1 for e in E if N[e['from']].get('part') and N[e['to']].get('part') and N[e['from']]['part']!=N[e['to']]['part'] and N[e['from']]['tier']!='root');print('cross-part',cross)
