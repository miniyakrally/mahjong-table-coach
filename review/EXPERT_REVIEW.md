# American mahjong beginner app: review request

Status: local prototype; not instructor-approved. Prepared 2026-11-06.

## Learners and purpose

Four friends at a time, with mixed experience, preparing to play socially in a few weeks. Complete beginners have no annual card and may have no tiles while practicing online. The app must teach actual American mahjong table behavior, not just tile-name trivia.

The app includes original practice rows and a limited 2026 year-notation example. It does not reproduce the official 2026 NMJL card. Assess whether these original examples transfer cleanly to official-card play and which differences need explaining. Do not certify the app as a 2026-card trainer.

## Suggested engagement

Ask an instructor who regularly teaches first-time American mahjong players for a fixed quote for a 60–90 minute screen-share review, with a short written corrections list. Confirm that reviewing instructional software is within their scope; availability and fees have not been verified. No outreach, booking, or payment is authorized or completed.

A strong person to ask is [Michele Frizzell at Mahj Life](https://mahjlife.com/instructor-guild-directory/name/michele-frizzell/), whose published work includes instructor education and teaching materials. Alternatively use the [Mahj Life instructor directory](https://mahjlife.com/instructor-guild-directory/) to find someone who teaches beginners. These are candidates, not commitments from those providers.

Bring a complete beginner to part of the session. Ask them to think aloud while using the app. Let the instructor observe first rather than explaining every gap away. A follow-up trial with another beginner should check that the corrections worked.

## What we need back

1. Rules corrections, each tied to a lesson or scenario and a rule source. Especially verify the deal/break diagram, call window, joker exchanges, and blind passing.
2. A recommended sequence: which terms are introduced too early, which lessons should be combined or split, and what can be omitted for a first social game.
3. Corrections to diagrams and worked examples. Check orientation from the learner’s actual seat and the relation between the printed row and tile groups.
4. A review of the quiz. Are wrong answers plausible misunderstandings? Are any questions ambiguous, unfair, or answerable without looking at the pictured hand?
5. A short readiness judgment: what beginners can reasonably do after this course, what still needs supervised practice, and what must be corrected before sharing it.

No need for marketing copy or more features. Prioritize rules accuracy and a learner’s ability to carry out a turn.

## Observe a learner doing these tasks

- Identify a tile from each family and explain why two tiles do or do not match.
- Read a printed practice row and build one of its groups.
- Use a joker in a matching group, then explain why it cannot fill a pair.
- Distinguish an X hand with no exposures from a C hand.
- Point to racks, walls, drawing side, tail, and the next player on the table diagram.
- Explain the deal in four-tile batches and reach the correct final counts.
- Complete ROL and LOR, including the two adjacent left passes; decide whether a blind or courtesy pass is legal.
- Choose a discard with the actual pattern and full rack visible.
- Recognize when a discard is no longer available after the next player racks.
- Describe a joker exchange while keeping hands off the other player’s tiles.

## Caroline’s feedback and current response

| Concern | Revision to inspect |
| --- | --- |
| More blue | Blue gingham navigation, cobalt controls, pale blue table and reference panels; pink is an accent. |
| Quiz too easy | Ten decision scenarios about counts, jokers, C hands, ROL/LOR, courtesy/blind passing, timing, and exchanges. Answer order varies. |
| Jokers mentioned before introduction | Removed joker references from lessons 1–9. |
| Flowers assume unseen patterns | Flower lesson now teaches identity and equivalence; card examples follow. |
| Flower replacement aside is unnecessary | Removed the replacement instruction; one short note explains flowers are ordinary hand tiles rather than bonus tiles. |
| “Chow” sentence unclear | Removed from the lesson sequence. The main lesson does not require knowledge of another variant. |
| Joker lesson overloaded | Split substitution from singles/pairs restrictions; year notation and exchange are later topics. |
| Pattern not shown as printed | Repeated-digit/letter row with suit colors, written restriction, X/C mark, and tile translation. Clearly an original teaching row. |
| Open/concealed explanation weak | Comparison of an X hand with a shown pung and remaining hidden tiles against a C hand; X does not require an exposure. |
| Deal confusing | Table orientation first; four-stage example for building, breaking, four-tile batches, and final counts. |
| Wall needs table context | Same four-seat table for setup, dealing, and tail; enlarged tail illustration follows it. |
| Second Charleston | Separate ROL and LOR lesson diagrams; optional second-round decision remains in the exchange practice. |
| Discard example lacks context | Printed row and 13-tile rack with a missing 6 Dot shown beside the possible draws. First pattern’s turn drill now uses the same missing tile. |
| Racking cutoff | Normal racking cutoff explained directly; merely looking distinguished from racking; additional closing actions stated separately. |
| Touching others’ tiles | Explicit never-touch instruction covering tiles, rack, exposures, and joker exchange. |
| Remove old final lesson | Removed the “A friendly first game” wrap-up; the last lesson now teaches joker exchange. |

Lesson numbers changed because topics were split. Current course has 22 focused lessons, not the old 20.

## Sources and uncertainties

- [Mahj Life on the call window](https://mahjlife.com/wiki/action-taken-after-an-unnamed-discard-article-293/).
- [AMJA rulebook FAQs](https://guide.americanmahjonggassociation.com/faqs/) and [Tom Sloper’s American rules FAQ](https://www.sloperama.com/mjfaq/mjfaq19.html) provide additional published guidance on racking and other closing actions. Exact dispute cases still need expert review.
- [MahjCon etiquette](https://mahjcon.com/mahjpedia/id15-etiquette-and-sportsmanship/).
- Automated checks verify app behavior and modeled tile counts; they do not establish teaching effectiveness or replace expert rules review.
- No human instructor has reviewed this version. No novice learning trial has been completed.

## Opening the draft

Open the included index.html in a browser, or serve the folder with `python3 -m http.server 4177 --bind 127.0.0.1` and visit http://127.0.0.1:4177/. The localhost link on Caroline’s computer is not a remotely shareable preview. Share the self-contained review ZIP or arrange a screen share; do not publish automatically.
