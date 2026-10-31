import json,glob,re,collections,sys
rows=[]
for ln in open('docs/OPEN_ISSUES_BATCHES.md'):
    if ln.startswith('- ['):
        m=re.match(r'- \[(\S+?)( fact-check)?\] (.*)',ln.strip())
        rows.append((m.group(1)+('*' if m.group(2) else ''),m.group(3)))
def tier(t):
    l=t.lower()
    resolved=re.search(r'(text now|now (reads|says|gives|attributes)|left out|omitted|removed|cut from|hedged|stated as|given as a range|both (given|stated)|is not in the text|not included)',l)
    legal=re.search(r'(convict|charged|arrest|pocso|rape|abuse|assault|murder|fraud|court|police|cbi|lawsuit|allegation|acquit|sentence|royal commission|living|alive|defam|sued|case pending|bail|fir\b|accused)',l)
    quote=re.search(r'(quotation|quote|verbatim|word for word|translat|misquot)',l)
    weak=re.search(r'(wikipedia|single source|one source|only source|blog|goodreads|unverified|not verified|could not (verify|confirm|find)|couldn.t (verify|confirm|find)|not seen|not read|unconfirmed|rests (only|on))',l)
    date=re.search(r'(\b1[89]\d\d\b|\b20[0-2]\d\b|date|born|died|year)',l)
    author=re.search(r"(author|your decision|decide|decision|voice|verdict|title|photo|recording|portrait|domain)",l)
    if legal and not resolved: return 1
    if legal: return 2
    if quote and weak: return 2
    if weak and not resolved: return 3
    if author: return 2 if re.search(r'decid|decision|verdict|voice',l) else 4
    if date and not resolved: return 3
    return 4
by=collections.defaultdict(list)
for u,t in rows: by[tier(t)].append((u,t))
if len(sys.argv)>1:
    for k in sorted(by): print(k,len(by[k]))
    sys.exit()
json.dump({k:by[k] for k in by},open('/tmp/claude-0/triage.json','w'))
