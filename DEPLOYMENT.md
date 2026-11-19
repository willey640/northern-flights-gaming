# Deployment record

Date: November 19, 2026. Repository: https://github.com/willey640/northern-flights-gaming

The website was built and validated locally before publication. GitHub Pages is configured to publish `main` / `docs` with custom domain `gaming.nfdg.ca`.

Initial deployment verified successful: [Pages build and deployment](https://github.com/willey640/northern-flights-gaming/actions/runs/44552401644), website commit `cf248a78aaa4e9b69e399dfc9031e8e6a6dd92b7`. The Pages API reports `built`. The custom-domain HTTPS site is not publicly verified: DNS is missing, and Enforce HTTPS is unavailable until domain configuration and certificate issuance complete.

## Domain handoff

Read-only DNS check: `gaming.nfdg.ca` does not yet exist. No DNS changes were made. Add the following record only when authorized:

- Zone: `nfdg.ca`
- Type: `CNAME`
- Host/name: `gaming`
- Target/value: `willey640.github.io`
- TTL: provider default

Leave `@`, `www`, nonprofit domain records, and the existing redirect unchanged. After propagation, check the gaming repository's Pages DNS result, certificate, and Enforce HTTPS setting. Verify `https://gaming.nfdg.ca/` and `https://gaming.nfdg.ca/caboom/privacy/` publicly before submitting the privacy URL to app stores or adding the in-game button.

## Verified before publishing

- 13 HTML pages passed internal link, image path, metadata, H1, navigation markup, and CNAME checks.
- All 12 public routes passed browser layout checks at 390 × 844 with no horizontal overflow or broken loaded images.
- Homepage also checked at 320 × 740 and desktop; mobile menu click and Escape behavior passed.
- All 12 public routes also passed desktop browser checks with no horizontal overflow or broken loaded images.
- Official Chains demo, DiscMon browser game, and Cribbage browser game returned HTTP 200 after the gaming deployment.
- Public nonprofit contact page returned HTTP 200.
- `https://nfdg.ca` returned HTTP 200 with its existing JavaScript redirect intact (the redirect is HTML/JavaScript, not a server HTTP 301).
- No game files, nonprofit files, redirect files, or DNS records modified.

## Remaining checks

Custom-domain HTTPS is pending DNS. The nonprofit Games-page cross-link and Caboom in-game privacy link remain deferred until a suitable public destination is verified. Intended privacy URL: `https://gaming.nfdg.ca/caboom/privacy/`; do not submit it as a working policy URL until verified publicly reachable.

No nonprofit files were modified. Once the destination works, add a small link to its existing `games.html` without removing any current listings:

```html
<a href="https://gaming.nfdg.ca/">Northern Flights Gaming</a>
<p>Explore original arcade games, characters, and projects developed by Northern Flights Gaming.</p>
```
