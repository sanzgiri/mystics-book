# Sidebar additions, group 1 (7 Nov 2026)

Figures: mirra-alfassa, nivedita, annie-besant, blavatsky-olcott, krishna-prem. Ids follow the "Corrections" section of the brief. Prose words exclude frontmatter and Further reading.

| File | Words | Part and why |
|---|---|---|
| src/content/figures/mirra-alfassa.mdx | 822 | 4, Evolution and the Integral: her yoga of the cells and Auroville carry Aurobindo's evolutionary claim into body and community |
| src/content/figures/nivedita.mdx | 696 | 2, Neo-Vedanta: Vivekananda's doctrine of one religion tested by a Western disciple |
| src/content/figures/annie-besant.mdx | 654 | 12, Against Authority: the believer in a pre-identified World Teacher; Theosophical Society and Krishnamurti nodes already sit there |
| src/content/figures/blavatsky-olcott.mdx | 664 | 11, The Buddha Returns: Olcott's Ceylon work and the Dharmapala link (henry-olcott is in Part 11). Part 2 or 12 are alternatives |
| src/content/figures/krishna-prem.mdx | 677 | 7, Love and Grace: Gaudiya Vaishnava devotion; Mirtola is the last stage of the Theosophical circle at Lucknow |

Batches: docs/batches/zz_<id>.json for all five. The zz_ prefix is needed because older batches (o, s, w, x) re-add mirra-alfassa, nivedita and annie-besant as plain nodes on every merge, and a name sorting before them would let them revert the sidebar tier. merge-batches.py run twice with a stable result.

Nodes: tier sidebar for mirra-alfassa, nivedita, annie-besant (nodes_update); new sidebar nodes blavatsky-olcott (Part 11) and krishna-prem (Part 7); new minor nodes yashoda-ma, madhava-ashish (Part 7) and max-theon (Part 4).

Edges added (9 new + 0 changed): max-theon -> mirra-alfassa (testimony); vivekananda -> mirra-alfassa (testimony); nivedita -> aurobindo and nivedita -> rabindranath-tagore (testimony, unverified); blavatsky-olcott -> theosophical-society, dayananda-saraswati, dharmapala, gandhi, annie-besant (documented); blavatsky-olcott -> krishna-prem (documented); yashoda-ma -> krishna-prem (documented); krishna-prem -> madhava-ashish (documented); ramana-maharshi -> madhava-ashish (documented); gaudiya -> krishna-prem (documented). Existing edges for the Mother, Nivedita and Besant were left unchanged.

Places: 3 each for mirra-alfassa, nivedita; 2 annie-besant; 4 blavatsky-olcott; 3 krishna-prem (Mirtola coordinates approximate, marked unverified). Glossary: Yoga of the cells, Brahmacharini, Order of the Star in the East, Pansil, Masters of the Ancient Wisdom, Vairagya.

Style check: 0 errors, 0 warnings.

## Open uncertainties
- Sources were mostly Wikipedia, Theosophy Wiki and organisation sites, read through page summaries (WebFetch), not full texts. The Mother's 29 Feb 1956 quotation and Nivedita's epitaph come from such summaries and should be checked against primary editions.
- Nivedita: school date (13 Nov 1898 vs 1903) and death date (12 or 13 Oct 1911) differ between sources; the Aurobindo and Tagore edges are secondary only.
- Besant: guardianship date (March 1910) comes from the existing x06 edge, not from a source read here; membership date 1880 vs 1889 is flagged in the text; death 19 or 20 Sept 1933.
- Blavatsky and Olcott: Indian reform effect covered only through the Arya Samaj union and Gandhi's 1891 membership; Panchama schools and the Adyar Library were unsupported and left out. Mild date differences on Olcott's departure (1878) and arrival (Feb 1879).
- Krishna Prem: teaching and daily practice thinly sourced; disciples' memoirs (Aitken, Letters from Mirtola) not read. The "first Westerner in Gaudiya Vaishnavism" claim is Wikipedia's.
- Britannica's Blavatsky page was read; its Masters and root-race details were not covered, so those come from Wikipedia and the Theosophical Society page.
