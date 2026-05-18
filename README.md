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
