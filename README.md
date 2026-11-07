# Mahjong Table Coach

A small, browser-only app for friends learning American mahjong together. No account, physical tiles, or separate card is needed for its lessons and practice exercises.

## Learning path

The starting screen is a guided journey: visual tile introductions, a printed card row with its tile translation, joker placement, X/C, a table diagram, a complete Charleston, and turns using the same rack. It ends with six call/exchange decisions and six unfamiliar card rows. Learners can retry, return to an earlier step, or skip to passing and decisions. The twenty-two individual lessons remain available as reference.

The sequence covers the three numbered suits; each suit individually; winds, dragons, flowers, and matching groups; joker substitution; printed card notation; joker restrictions; 2026 year notation; X/C visibility; table layout, breaking/dealing, and fishtailing; ROL and LOR; turns with the pattern and rack together; calls; and joker exchanges. The earlier first-social-game wrap-up was removed. Caroline’s optional Bird Bam toast happens when 1 Bam is drawn. Any drink or opting out is welcome.

Tile faces are original SVG drawings with visible names and accessible labels. A bird represents 1 Bam; Dots show circles; Bams show bamboo; Craks show numbers and 萬. Actual sets vary.

## Included practice card and official 2026 boundary

The app includes three original, fixed practice patterns: Flowers and three suits, Four winds, and Seven pairs. These are not the official 2026 NMJL hands. The selected pattern appears in the Charleston and turn exercises. Hand comparisons and pass suggestions use that pattern rather than generic suit or connection heuristics. Jokers may fill matching groups of at least three; they never fill pairs.

The app explains annual-card notation, including reading 2026 as 2–Soap–2–6. That four-tile example is not a complete official hand and does not specify the official suits. The full official 2026 card is not reproduced, licensed, or validated here. For official NMJL games, players still need the agreed official card. No permission to reproduce it has been established.

## Practice limits

- Charleston: four racks dealt from a 152-tile supply; correct pass directions; joker retention; a choice before the second Charleston; courtesy exchange; optional blind passing only on first left/second right. Computer players make legal, simple passes, not strategic moves.
- Guided turns: the actual Charleston rack continues into a finite-wall draw/discard/declare exercise. Assisted draws bring needed tiles forward only when those tiles remain in the wall. Independent practice uses a shuffled wall without hints. Opponents are paused, so neither mode is a four-player game simulation. A wall may exhaust without a winner.
- Practice Table: the earlier short exercise now also uses a finite physical tile supply and tracks discards. It no longer manufactures repeated copies of its missing tile.
- Calls and quizzes: pictured scenarios with answers and explanations, not live multiplayer calls.
- Tools: compare 13 entered tiles with the selected practice pattern. Photos and custom labels remain in local browser storage. Reset preserves those preferences.

## Teaching review — 2026-11-06

Review found undefined terms, text-only tile introductions, references to an absent card, generic strategy advice, and feedback that rushed to the next question. Changes introduce one topic at a time, show labeled examples, allow untimed attempts, explain answers, retain manual progression, and use the same visible practice pattern throughout. New lessons and art are original.

Research informed the teaching approach; it does not establish measured learning outcomes:

- [Ladies That Mahj course overview](https://www.ladiesthatmahj.com/ONLINECOURSE): teach foundations in sequence, demonstrate play, and interleave skill-building exercises.
- [Mahj Life lesson kit](https://mahjlife.com/courses/mahj-life-lesson-kit/): teach transferable card-reading skills progressively.
- [School of Mahjong lessons](https://schoolofmahjong.com/lessons): visible tiles and short interactive activities, with no equipment needed to start.
- [NMJL Online terms](https://faqs.nmjlonline.com/legal/NMJL-Online_Terms-of-Service.pdf): official-content and physical-card boundaries; no game content was extracted.

Rules references: [National Mah Jongg League](https://www.nationalmahjonggleague.org/), [AMJA glossary](https://www.americanmahjonggassociation.com/glossary), [Charleston tournament reference](https://mahjongg.org/wp-content/uploads/2023/06/STANDARDIZED-NATIONAL-MAH-JONGG-TOURNAMENT-RULES-1.pdf), [wall-tail guidance](https://mahjongg.org/mah-jongg-rules/), and [MahjCon etiquette](https://mahjcon.com/mahjpedia/id15-etiquette-and-sportsmanship/). Social traditions and learning accommodations are labeled separately from game rules.

## Preview and checks

Run `python3 -m http.server 4177 --bind 127.0.0.1`, then open http://127.0.0.1:4177/.

Run `npm run check` and `npm test`. Checks cover initialization, every lesson and example, three 14-tile patterns, joker eligibility, missing/wrong tiles, finite draws, repeated poor discards, the entire guided UI path, six transfer rows, and 100 complete Charlestons including direction, tile conservation, rack counts, blind/courtesy passes, and reset.

Browser checks exercised the guided introduction, both Charlestons, courtesy choice, carry-over rack, and turns. A 390px phone viewport has no horizontal overflow. Physical-device testing and a human novice learning trial remain outstanding. First-attempt decision counts are practice feedback, not a validated readiness score. Tests are not evidence of teaching effectiveness.

## Deployment

The GitHub Pages workflow deploys on pushes to `main`. Current work stays local on `revive-american-mahjong` for review. Do not publish it merely to make the local preview available. Keep this app standalone from Bookblend.

## Visual palette

The approved palette uses dusty blue (#b8cde3), porcelain (#fcfcf7), powder blue (#eaf1f8), deep blue (#245e91), navy (#183b56), garden green (#4ca68b), and rose (#ae5277). The main app uses flat controls, system typography, white scalloped racks, and a quiet playing surface. Teaching tile artwork retains recognizable markings. The earlier standalone proposal remains in `design/`.

## Rules checked during the guided-flow revision

- [AMJA Charleston](https://guide.americanmahjonggassociation.com/how-to-play-american-mah-jongg/the-charleston/)
- [AMJA discard claims and calling window](https://guide.americanmahjonggassociation.com/how-to-play-american-mah-jongg/claiming-discarded-tile-exposure/)
- [AMJA jokers and exchanges](https://guide.americanmahjonggassociation.com/how-to-play-american-mah-jongg/jokers-and-joker-exchange/)
- [AMJA card interpretation](https://guide.americanmahjonggassociation.com/supplemental-guidance/understanding-the-card/)

The NMJL FAQ was under construction when checked. These sources inform the explanations; official NMJL rulings and its current card remain authoritative for NMJL play. The simulated expert-panel perspectives informed this revision; no independent human expert or complete beginner has tested it.
