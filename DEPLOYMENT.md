# Deployment record

Date: November 19, 2026. Repository: https://github.com/willey640/northern-flights-gaming

The website was built and validated locally before publication. GitHub Pages is intended to publish `main` / `docs` with custom domain `gaming.nfdg.ca`.

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
- Public nonprofit contact page returned HTTP 200.
- `https://nfdg.ca` returned HTTP 200 with its existing JavaScript redirect intact (the redirect is HTML/JavaScript, not a server HTTP 301).
- No game files, nonprofit files, redirect files, or DNS records modified.

## Pending checks

Publication status and public URLs are reported in the final task response after GitHub Pages verification. Custom-domain HTTPS is pending DNS. The nonprofit Games-page cross-link and Caboom in-game privacy link remain deferred until a suitable public destination is verified.
