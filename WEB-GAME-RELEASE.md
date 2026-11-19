# Caboom browser release — November 19, 2026

- Supplied archive: `CaboomOfChaos-html5-release.zip` (84,958,861 bytes), from the verified game's `build` directory.
- Public entry: `https://gaming.nfdg.ca/games/caboom/index.html`.
- All nine files were extracted unchanged into `docs/games/caboom/`. The archive itself, Godot source, signing material, and credentials were not added to the website.
- File lengths and SHA-256 hashes are recorded in `data/caboom-web-build.json`; the validator checks every exported file against that inventory. Largest file is `index.pck` at 71,817,564 bytes, below GitHub's 100 MiB per-file limit.
- Supplied HTML explicitly disables Godot threads. The inspected HTML5 export preset disables PWA support; no service-worker file is present in the ZIP. No server header configuration or DNS change is needed.
- The Caboom game page now includes a direct Play link. Homepage/catalogue labels distinguish browser availability from unverified public mobile app-store releases.
- Privacy information now explains browser/site storage, separate native/browser saves, site-data deletion, and game-file requests to the hosting provider. No new analytics or external services were added. The source scripts/resources/scenes were checked again for network APIs/URLs; no application networking or addons directory was identified.
- Local validation passed for 14 website HTML pages, exported game HTML, all local references, and all nine export hashes. Local preview serves `.wasm` as `application/wasm` and `.pck` as binary.
- Desktop browser smoke test reached the opening artwork, main menu, character selection, difficulty selection, and an active Last Player Standing arena. This is a startup smoke test, not extended gameplay, audio-quality, or physical mobile-device certification.

The website build preserves the tracked game folder, so later marketing or legal-page rebuilds do not overwrite the export. See README for future release updates. No nonprofit website, existing nfdg.ca redirect, DNS, or Godot game source was modified.
