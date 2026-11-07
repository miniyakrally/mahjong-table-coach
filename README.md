# Mahjong Table Coach

A static learning app for friends learning American mahjong together.

## What It Does

- Teaches tile families, calls, table flow, and annual card concepts.
- Explains the current-year card idea without reproducing copyrighted NMJL hands.
- Includes a starting-hand coach with beginner-friendly direction and Charleston pass suggestions.
- Includes a tile-set customizer so players can label tiles to match their physical set.
- Keeps uploaded tile reference photos and custom labels in the browser only.

## Local Preview

```bash
python3 -m http.server 4177
```

Then open:

```text
http://127.0.0.1:4177/
```

## Deployment

This is a plain static site. It can be hosted on GitHub Pages, Netlify, Vercel, Render static sites, or any static file host.

This repo includes a GitHub Pages workflow in `.github/workflows/pages.yml`.

Recommended temporary URL plan:

1. In the GitHub repo settings, enable GitHub Pages with the source set to GitHub Actions.
2. Push to `main`; the Pages workflow deploys the static site.
3. After the new URL is live, keep `https://bookblendapp.com/mahjong.html` as a redirect so previously shared links keep working.

## Copyright Boundary

The app can teach how to read the annual NMJL card and let players practice rules and notation, but it should not reproduce the official card's full hand list.

## Friends learning visit — local review draft (2026-11-06)

The learning path is Lessons → Tile Trainer → Charleston → Practice Table → Group Quiz. Experienced players can skip directly to practice. No account, backend, or multiplayer connection is required.

- Lessons and calls teach American mahjong, replacing the inherited Chinese-game guidance.
- The Charleston deals four simulated racks from a 152-tile supply. Select tiles to pass, receive replacements, choose whether to start the second Charleston, and negotiate a simulated courtesy exchange. Blind passing is available only on first left and second right. Other players use simple legal selections, not strategic play.
- Practice Table is a short, scripted draw/discard/declare drill with an invented visible target. It is not a full game or an official annual-card hand validator.
- Tools' older direction/pass suggestions remain rough heuristics, not advice evaluated against the official card. Use the chosen card line to make actual decisions.
- Reset restarts the learning session and Charleston while preserving saved tile labels and the local reference photo.

Rules references: [National Mah Jongg League](https://www.nationalmahjonggleague.org/) for the agreed annual card and official rulebook; [American Mah Jongg Association glossary](https://www.americanmahjonggassociation.com/glossary) for terminology; [tournament rules](https://mahjongg.org/wp-content/uploads/2023/06/STANDARDIZED-NATIONAL-MAH-JONGG-TOURNAMENT-RULES-1.pdf) for first/second Charleston structure; [Winning Moves booklet](https://winning-moves.com/images/MAHJONGGRULES.pdf), Charleston section, for passing and blind-pass mechanics. The latter also contains its own simplified game and Chinese rules, which are not used here. The app does not reproduce the official card.

Verification: `npm run check` and `npm test`. Tests cover tile conservation, rack counts, passing direction, joker retention, blind-pass limits, courtesy counts, app initialization, the scripted turn, stopping the second Charleston, and reset. Desktop Chrome was visually reviewed and the first exchange exercised. Phone layout and a complete novice walkthrough still need review.

Publishing: pushing `main` deploys to GitHub Pages. This draft stays on `revive-american-mahjong` until reviewed; the existing public site remains unchanged.
