# Mahjong Table Coach

A small, browser-only app for friends learning American mahjong together. No account, physical tiles, or separate card is needed for its lessons and practice exercises.

## Learning path

Twenty short lessons introduce the vocabulary before using it. Each has a pictured example, one question, and an explanation after answering. Learners may retry or skip ahead using the lesson picker.

The sequence covers the three numbered suits; each suit individually; winds, dragons, flowers, groups, and jokers; reading a pattern; 2026 year notation; exposed and concealed hands; walls, dealing, and fishtailing; the Charleston; turns; calls; joker exchanges; and a first social game. Caroline’s optional Bird Bam toast happens when 1 Bam is drawn. Any drink or opting out is welcome.

Tile faces are original SVG drawings with visible names and accessible labels. A bird represents 1 Bam; Dots show circles; Bams show bamboo; Craks show numbers and 萬. Actual sets vary.

## Included practice card and official 2026 boundary

The app includes three original, fixed practice patterns: Flowers and three suits, Four winds, and Seven pairs. These are not the official 2026 NMJL hands. The selected pattern appears in the Charleston and turn exercises. Hand comparisons and pass suggestions use that pattern rather than generic suit or connection heuristics. Jokers may fill matching groups of at least three; they never fill pairs.

The app explains annual-card notation, including reading 2026 as 2–Soap–2–6. That four-tile example is not a complete official hand and does not specify the official suits. The full official 2026 card is not reproduced, licensed, or validated here. For official NMJL games, players still need the agreed official card. No permission to reproduce it has been established.

## Practice limits

- Charleston: four racks dealt from a 152-tile supply; correct pass directions; joker retention; a choice before the second Charleston; courtesy exchange; optional blind passing only on first left/second right. Computer players make legal, simple passes, not strategic moves.
- Practice Table: a short, scripted draw/discard/declare exercise, not a full game. The first draw is unwanted; the next draw is the missing target tile. Opponents’ turns are skipped.
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

Run `npm run check` and `npm test`. Checks cover initialization, every lesson and example, three 14-tile patterns, joker eligibility, missing/wrong tiles, scripted turns, and 100 complete Charlestons including direction, tile conservation, rack counts, blind/courtesy passes, and reset.

Desktop Chrome review exercised lesson feedback/focus, the lesson picker, illustrated suit and flower lessons, and practice-card selection. Real-phone review and a human novice learning trial remain outstanding. Tests are not evidence of teaching effectiveness.

## Deployment

The GitHub Pages workflow deploys on pushes to `main`. Current work stays local on `revive-american-mahjong` for review. Do not publish it merely to make the local preview available. Keep this app standalone from Bookblend.
