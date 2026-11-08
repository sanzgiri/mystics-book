# Media log

Pass status: blocked, no portraits or audio added.

## Blocker
- The shell gets 403 from the proxy for upload.wikimedia.org and commons.wikimedia.org.
- WebFetch returns URL_NOT_ON_ALLOWLIST for commons.wikimedia.org (File: pages and the API, both query forms tried) and for upload.wikimedia.org.
- WebSearch returns only third-party mirrors (wiki.riteme.site, commons.wikipedia.com, etc.). Mirror pages do not give a direct upload.wikimedia.org URL, and the two Commons mirror pages tried for audio did not load.
- Rule applied: no src URL that cannot be confirmed to resolve, and no licence or author taken from a mirror alone. So no `photo` fields were set and no entries were added to src/data/credits.json.

## Leads (unverified, not used)
- Ramakrishna: File:Ramakrishna.jpg (mirror reports "Public domain", photographer Abinash Chandra Dna, October 1885; the source field on the mirror conflicts with that attribution, and no direct upload URL was available).
- Gandhi audio: File:Gandhi - His Spiritual Message to the World, 17 October 1931.mp3 on Commons (licence and uploader not read).

## Skipped
All 30 priority figures and all audio candidates: skipped, reason above.

## To finish
Run this pass from a session where commons.wikimedia.org and upload.wikimedia.org are allowlisted, or supply the File: URLs and licence details.
