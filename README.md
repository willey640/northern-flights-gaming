# Northern Flights Gaming

A static gaming website for Northern Flights Disc Golf Inc., Canada. Intended domain: **https://gaming.nfdg.ca**. This is a separate project from the nonprofit website and the nfdg.ca redirect.

## Structure and preview

- `data/games.json`: central game catalogue, features, artwork names, availability, verified links.
- `scripts/build.mjs`: reusable page templates, independent privacy article, metadata, sitemap.
- `assets/`: CSS, small accessible mobile-menu script, optimized copies of existing artwork.
- `docs/`: generated GitHub Pages output, committed for branch deployment.
- `docs/caboom/privacy/index.html`: ordinary static privacy webpage; no login or backend.
- `content/caboom-terms.html`: editable Caboom Terms of Service; generated at `/caboom/terms/`. Review notes and legal sources are recorded in `TERMS-REVIEW.md`.
- `docs/404.html`: custom error page.
- `docs/games/caboom/`: complete, unchanged HTML5 release export, served directly at `/games/caboom/index.html`.
- `data/caboom-web-build.json`: release archive checksum and byte/hash inventory for every exported game file.
- `data/website-game-migrations.json`: byte/hash inventories for the Chains demo and Cribbage exports migrated from the nonprofit site.
- `WEBSITE-REVIEW.md`: migration decisions, legacy-save compatibility, DiscMon's retained Ubuntu-backed version, and suggested nonprofit-site improvements.
- `VERIFICATION.md`: inspection findings and remaining release checks.

Requires Node.js 18+ (no npm dependencies). From this directory:

```powershell
npm run build
npm run check
npm run preview
```

Open http://127.0.0.1:4173. Rebuild and reload after changes. Ctrl+C stops the preview. Browser/network isolation may require allowing this local server to run outside the sandbox.

## Updating content

Edit `data/games.json` to add a game. Supply a unique slug, name, genre, status, image, tagline, description, platform description, features, and links array. Optional `screenshots` and `note` add detail. Build generates its page and both catalogues automatically. Never invent release status or store links.

Add optimized artwork to `assets/images/`, then update the data file. Original source artwork stays in its game project. `scripts/prepare-assets.ps1` documents and reproduces the initial asset copies from this computer, using Windows System.Drawing. It does not edit originals. Existing project artwork and the official NFDG logo were used; a separate gaming badge was not located in the inspected local folders.

Privacy content is written in `scripts/build.mjs`; change it there, rebuild, review `docs/caboom/privacy/index.html`, and recheck the actual release configuration before publishing. Other games have different practices and must get their own verified policies. Do not change only generated HTML: rebuilding would replace it.

## Deployment

### Updating the playable Caboom build

The supplied `CaboomOfChaos-html5-release.zip` was extracted in full into `docs/games/caboom/`. All nine files keep their original names and bytes. The site build preserves this directory; do not replace its `index.html` with a marketing-page template. No iframe or backend is required: the Caboom page links directly to the full-window game. Browser compatibility requires WebAssembly and WebGL 2; this supplied build disables threads and PWA service workers.

For a future release, inspect the new archive, replace the complete export together, and update `data/caboom-web-build.json` with its checksums and lengths. Do not upload signing keys or the Godot source tree. Keep each file below GitHub's 100 MiB file limit. `.gitattributes` prevents newline conversion in exported files. Run `npm run build` and `npm run check`, preview startup and a match, then commit the export and catalogue changes together. The local preview serves `.wasm` as `application/wasm` and `.pck` as binary; verify those MIME types on the published host too.

The browser build is a large initial download. Saves stay in that browser/site's storage and can be lost when site data is cleared. A browser Play label does not announce Android/iOS app-store availability. See [Godot web export documentation](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_web.html).

Repository: https://github.com/willey640/northern-flights-gaming

1. Build and check; preview desktop and mobile.
2. Review `git diff`, especially privacy claims and availability labels.
3. Commit source and generated `docs/` together, then push `main` without force.
4. In **this gaming repository only**, Settings → Pages → Deploy from a branch → `main` → `/docs` → Save.
5. Set custom domain to `gaming.nfdg.ca`; `docs/CNAME` contains that exact value.
6. Verify Pages deployment, public HTTPS pages, artwork, and policy. Once DNS and the certificate are ready, enable Enforce HTTPS.

No Actions build is required; Pages may internally run its own deployment workflow for branch publishing. The final publishing status is recorded in `DEPLOYMENT.md`.

## DNS: preserve the existing sites

Verified GitHub owner: `willey640`. When ready, **add only** this DNS record for `nfdg.ca`:

| Type | Host | Target |
|---|---|---|
| CNAME | gaming | willey640.github.io |

Use the provider's default TTL. Configure the gaming repository's custom domain before adding the DNS record. Do not put the repository name or `https://` in the CNAME target. Do not modify apex `@`, `www`, nonprofit domain records, or existing custom domains. DNS writes require the user's explicit authorization. See [GitHub custom-domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

Keep `nfdg.ca` redirecting to `northernflightsdiscgolf.ca`. The redirect lives in the separate `willey640/nfdg-website` repository. The nonprofit site lives in `willey640/northernflightsdiscgolf`. Only add a small Gaming link to its Games page after a destination is verified live; retain all existing listings and embeds.

## Ownership and releases

Northern Flights Gaming is a gaming initiative of Northern Flights Disc Golf Inc., Canada. This repository does not contain game builds, signing keys, tokens, or account credentials. Artwork is existing Northern Flights material; no redistribution license is granted here. Caboom's policy is based on inspected version 1.0 development source and Android configuration; final iOS export verification remains required.
