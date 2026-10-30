# Work queue

Run at most 4 agents at a time. Writer briefs: docs/WRITER_BRIEF.md + docs/TEMPLATE.md. Checker brief: docs/CHECKER_BRIEF.md.
After a writer unit finishes, queue its checker. After a checker finishes: `python3 scripts/merge-batches.py`, `npm run build`, `npm run links`, commit, push.
Status: todo / running / written / checked / merged.

## Check existing drafts (checker also writes the batch file, since the writer did not)

| Unit | Files | Status |
|---|---|---|
| x01 | narayana-guru, chattampi-swamikal (P2) | merged |
| x02 | lakshmanjoo (P6), krishnamacharya (P5) | merged |
| x03 | sri-sri-ravi-shankar (P5), ramdev (P13) | merged |
| x04 | anandamayi-ma (P7), shirdi-sai-baba (P8) | merged |
| x05 | shiv-dayal-singh (P9), gandhi (P10) | merged |
| x06 | j-krishnamurti (P12) | merged |

## Writer units

| Unit | Entries | Intro | Status |
|---|---|---|---|
| w01 | rammohan-roy (c) | | merged |
| w02 | dayananda-saraswati (c) | | merged |
| w03 | debendranath-tagore, keshab-chandra-sen, jyotirao-phule (s) | reason | merged |
| w04 | ramakrishna (c) | | merged |
| w05 | vivekananda (c) | | merged |
| w06 | chandrasekharendra-saraswati (c) | | merged |
| w07 | sarada-devi, rama-tirtha, sarvapriyananda | neo-vedanta | merged |
| w08 | radhakrishnan, chinmayananda, dayananda-arsha, acharya-prashant | | merged |
| w09 | aurobindo (c) | | merged |
| w10 | rabindranath-tagore, iqbal, kc-bhattacharya, gopi-krishna | integral | merged |
| w11 | lahiri-mahasaya (c) | | merged |
| w12 | yogananda (c) | | merged |
| w13 | sivananda (c) | | merged |
| w14 | maharishi (c) | | merged |
| w15 | sadhguru (c) | | merged |
| w18 | muktananda (c) | | running |
| w20 | prabhupada (c) | | running |
| w21 | amma (c) | | running |
| w24 | meher-baba (c) | | todo |
| w26 | inayat-khan (c) | | todo |
| w31 | ambedkar (c) | buddha-returns | todo |
| w32 | osho (c) | | todo |
| w33 | sathya-sai-baba (c) | | todo |
| w34 | dada-lekhraj, sri-chinmoy | new-revelations (incl. godman essay) | todo |
| w35 | kalki-bhagavan, nithyananda, dhirendra-shastri | | todo |
| o16 | satyananda, swami-rama, pattabhi-jois | | todo |
| o17 | sri-m | technique | todo |
| o19 | shri-mataji, pr-sarkar | shakti | todo |
| o22 | premanand-maharaj | grace | todo |
| o25 | periyar (s) | across-the-line, against-authority | todo |
| o27 | ram-singh-namdhari | sound-and-light | todo |
| o29 | dharmapala | conduct | todo |

## Low-risk profiles: writer on Sonnet, fact-checker on Opus

Historical figures with no live legal or sensitive controversy. Writer agents use `model: sonnet`; their fact-check stays on Opus, so accuracy review is unchanged.

| Unit | Entries | Status |
|---|---|---|
| s01 | yukteswar, kuvalayananda, iyengar, vethathiri | merged |
| s02 | bamakhepa, papa-ramdas, neem-karoli-baba | checking |
| s03 | bhaktivinoda, bhaktisiddhanta, shastriji-pramukh | todo |
| s04 | upasni-maharaj, ug-krishnamurti, vallalar | todo |
| s05 | kirpal-singh, ayya-vaikundar, lalaji-babuji | todo |
| s06 | rajchandra, vinoba, kanji-swami | todo |
| s07 | tulsi-mahapragya, dada-bhagwan, dipa-ma | todo |

## After all units

1. Epilogue from the verdicts and the finished graph.
2. Full build, link check, style check, status page review.
3. Compile docs/OPEN_ISSUES.md from docs/OPEN_ISSUES_BATCHES.md.

## Auto-resume

A scheduled check-in fires every ~3 hours (send_later). On each check-in: resume stopped agents, merge finished units, keep 4 running, push, and schedule the next check-in. When a usage limit hits, schedule a check-in for 5 minutes after the reset time.

## Weekly cap note (26 Oct, 16:50)

Weekly usage nearly exhausted. No new units are launched until the weekly limit resets. Units in flight at that point: w10 (Part 4 profiles), w11 (Lahiri), w12 (Yogananda), s01 (Sonnet profiles). Any draft they leave on disk is pushed as Draft status; each still needs its Opus fact check before it counts as merged.
