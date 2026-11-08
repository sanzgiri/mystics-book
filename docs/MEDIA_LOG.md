# Media log

Pass status: portraits done for 67 of 89 chapters (8 November 2026). No audio added.

## Method
- Each figure's English Wikipedia article was read (`index.php?action=raw`) to find its infobox image and other images. The file's Wikimedia Commons description page (or the en.wikipedia file page for one local file) was then read for author, date, source and licence. The API endpoints were rate-limited from this environment, and upload.wikimedia.org was refused for about 15 minutes after the first fetches. Images were downloaded at 500 px through Commons `thumb.php` instead.
- Images are self-hosted in `public/photos/<id>.jpg` (5 MB total) rather than hotlinked. Each chapter's frontmatter has a `photo` block whose `sourceUrl` points to the Commons file page. The Credits page lists all 67 automatically.
- Accepted: public-domain files with a PD tag that fits the date and source (PD-India, PD-old, PD-US, PD-USGov, PD-Bain, PD-Art), India Post stamps under GODL-India, and CC/GFDL files whose uploader is plausibly the rights holder: own work of a living subject, a Flickr licence review, or a VRT permission ticket for organisation photos.
- Rejected: "own work" uploads of photographs of people who died long before the upload date (almost certainly scans of others' photographs); organisation licences with no permission ticket; derivatives such as a photograph of a poster or a book cover; non-free (fair-use) files; images that are not portraits.
- Every image was viewed on a contact sheet before use, and the alt text was written from what each image shows. `node scripts/style-check.mjs`: 0 errors. `astro build`: 341 pages, no errors. Desktop and mobile chapter pages checked in a browser.

## Notes on individual choices
- **Stamps used in place of photographs** (GODL-India): Sivananda (1986), Mirra Alfassa (1978), Acharya Tulsi (1998), Vinoba Bhave (1983). For Mirra Alfassa, the infobox image is a 1950 Henri Cartier-Bresson photograph. Commons tags it PD-India, but it is very probably still in copyright elsewhere, so it was not used. The Sivananda and Vinoba infobox files were "own work" uploads (2011, 2017) of men who died in 1963 and 1982. The Tulsi file was an unticketed "own work" upload of a man who died in 1997.
- **Ramakrishna:** Commons gives the photographer as "Abinash Chandra Dna", dated October 1885. The credit reads "Abinash Chandra Dawn", assuming "Dna" is a typo. Check this if it matters.
- **Vivekananda:** the signed Chicago portrait of September 1893. Commons tags it PD-anon, so the credit says "Photographer unknown".
- **Osho:** a still from a 1972 film by Jayendra Lashkari (CC BY-SA 3.0). The two Nationaal Archief CC0 files are crops of a portrait carried by demonstrators, so they were rejected as derivatives.
- **Shastriji / Pramukh:** a BAPS photograph (VRT ticket) of Shastriji Maharaj with the young Narayanswarupdas, which covers both figures in the chapter.
- **Blavatsky and Olcott:** Blavatsky alone (1877). **Lalaji and Babuji:** Babuji alone (Heartfulness, Flickr-reviewed).
- **Sarada Devi:** the infobox file carries an unticketed CC licence from "RKM ARCHIVES" (2025). A PD-old photograph of her at worship in the Udbodhan house was used instead; she is small in the frame. Commons dates it "c. 1888", which cannot be right because Udbodhan was built later, so no date is given in the credit.
- **Vallalar:** Commons tags it PD-old, "c. 1860–70". The chapter makes no claim about photographs of him, and the credit says "Artist unknown" because whether it is a photograph is uncertain.
- **Ram Singh (Namdhari):** a painting attributed by Commons to the style of Bishan Singh, c. 1845–50, in the Lahore Museum. The painting is public domain, but the upload's provenance note is unusual (supplied via Instagram, 2026). The identification of the sitter rests on Commons.
- **Kirpal Singh:** released by Ruhani Satsang USA with a request for credit (email permission on file at Commons). The licence is given as "Copyrighted free use".
- **Inayat Khan:** the 1916 Moscow photograph is a local en.wikipedia file (PD-US), not on Commons. Its sourceUrl points to en.wikipedia.

## Skipped (22), no usable free image found
abhishiktananda (CC claim for O. Baumer's photo, no permission ticket), atmananda-krishna-menon (no image), ayya-vaikundar (only a religious symbol), chandrasekharendra-saraswati (the 1933 PD photo from Brunton's book shows him too small to serve as a portrait; the infobox file is a 2025 "own work" upload), dayananda-arsha (only a 2023 "own work" upload of a man who died in 2015), dipa-ma (copy of an IMS photo), goenka (only a PIB group photo with his wife and a minister; a cropped version would work), gopi-krishna ("publicity photo" PD claim), kanji-swami (weak PD-US claim), krishna-prem, krishnamacharya, swami-rama, papa-ramdas (all non-free on en.wikipedia), lakshmanjoo (CC0 claimed by an archive.org uploader of unknown standing), muktananda (no image), neem-karoli-baba (2009 "PD-self" of a man who died in 1973), nisargadatta (organisation "Attribution" claim, no ticket), papaji (2026 "own work" uploads; he died in 1997), paul-brunton (licence taken from a Czech book edition), premanand-maharaj (the usable file is a street scene, and his portrait file shows two people), satyananda (file deleted), sri-m (CC claim by the subject's website, no ticket).

## Audio
- Gandhi, "His Spiritual Message to the World", 17 October 1931 (Commons). Tagged PD-old-70 and "Unclear-PD-US-old-70". Under US law a 1931 sound recording stays protected until 2032, so it was not embedded. The chapter already links to the recording on Open Culture.
- No other audio was attempted.

## To finish (optional)
- Crop the PIB Goenka photograph (GODL-India) to him alone and add it as a local file.
- Look for free images of the skipped figures in archives that publish under clear licences (Nationaal Archief, Library of Congress, Flickr Commons).
