# Work queue

Run at most 4 agents at a time. Writer briefs: docs/WRITER_BRIEF.md + docs/TEMPLATE.md. Checker brief: docs/CHECKER_BRIEF.md.
After a writer unit finishes, queue its checker. After a checker finishes: `python3 scripts/merge-batches.py`, `npm run build`, `npm run links`, commit, push.
Status: todo / running / written / checked / merged.

## Check existing drafts (checker also writes the batch file, since the writer did not)

| Unit | Files | Status |
|---|---|---|
| x01 | narayana-guru, chattampi-swamikal (P2) | merged |
| x02 | lakshmanjoo (P6), krishnamacharya (P5) | running |
| x03 | sri-sri-ravi-shankar (P5), ramdev (P13) | running |
| x04 | anandamayi-ma (P7), shirdi-sai-baba (P8) | todo |
| x05 | shiv-dayal-singh (P9), gandhi (P10) | todo |
| x06 | j-krishnamurti (P12) | todo |

## Writer units

| Unit | Entries | Intro | Status |
|---|---|---|---|
| w01 | rammohan-roy (c) | | todo |
| w02 | dayananda-saraswati (c) | | todo |
| w03 | debendranath-tagore, keshab-chandra-sen, jyotirao-phule (s) | reason | todo |
| w04 | ramakrishna (c) | | running |
| w05 | vivekananda (c) | | running |
| w06 | chandrasekharendra-saraswati (c) | | todo |
| w07 | sarada-devi, rama-tirtha, sarvapriyananda | neo-vedanta | todo |
| w08 | radhakrishnan, chinmayananda, dayananda-arsha, acharya-prashant | | todo |
| w09 | aurobindo (c) | | todo |
| w10 | rabindranath-tagore, iqbal, kc-bhattacharya, gopi-krishna | integral | todo |
| w11 | lahiri-mahasaya (c) | | todo |
| w12 | yogananda (c) | | todo |
| w13 | sivananda (c) | | todo |
| w14 | maharishi (c) | | todo |
| w15 | sadhguru (c) | | todo |
| w16 | yukteswar, kuvalayananda, satyananda, swami-rama | | todo |
| w17 | iyengar, pattabhi-jois, vethathiri, sri-m | technique | todo |
| w18 | muktananda (c) | | todo |
| w19 | bamakhepa, shri-mataji, pr-sarkar | shakti | todo |
| w20 | prabhupada (c) | | todo |
| w21 | amma (c) | | todo |
| w22 | bhaktivinoda, bhaktisiddhanta, shastriji-pramukh | grace | todo |
| w23 | papa-ramdas, neem-karoli-baba, premanand-maharaj | | todo |
| w24 | meher-baba (c) | | todo |
| w25 | upasni-maharaj; ug-krishnamurti, periyar (s) | across-the-line, against-authority | todo |
| w26 | inayat-khan (c) | | todo |
| w27 | kirpal-singh, ram-singh-namdhari, vallalar | sound-and-light | todo |
| w28 | ayya-vaikundar, lalaji-babuji | | todo |
| w29 | rajchandra, vinoba, kanji-swami | conduct | todo |
| w30 | tulsi-mahapragya, dada-bhagwan, dharmapala, dipa-ma | | todo |
| w31 | ambedkar (c) | buddha-returns | todo |
| w32 | osho (c) | | todo |
| w33 | sathya-sai-baba (c) | | todo |
| w34 | dada-lekhraj, sri-chinmoy | new-revelations (incl. godman essay) | todo |
| w35 | kalki-bhagavan, nithyananda, dhirendra-shastri | | todo |

## After all units

1. Epilogue from the verdicts and the finished graph.
2. Full build, link check, style check, status page review.
3. Compile docs/OPEN_ISSUES.md from docs/OPEN_ISSUES_BATCHES.md.
