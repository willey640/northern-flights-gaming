# Caboom of Chaos terms review — November 19, 2026

Published terms source: `content/caboom-terms.html`. `scripts/build.mjs` wraps it in the shared site layout, writes `docs/caboom/terms/index.html`, adds canonical/social metadata and the sitemap entry, and supplies links on the Caboom game page, Legal page, and Caboom/Legal footers. Use `npm run build` and `npm run check` after edits.

The user's 12-section draft and effective date were retained, with these focused changes:

- Saved-data section matches the existing privacy policy: local nicknames, high scores, achievements/trophies, settings, and progress. The inspected Android release manifest disables backup, so the draft's general backup recommendation was qualified. No cloud backup or recovery is promised.
- Publisher remains Northern Flights Disc Golf Inc., operating gaming activities as Northern Flights Gaming, Canada. Saskatchewan is the governing-law choice supplied by the user; no registration, office address, or establishment location is inferred from it.
- Google Play and App Store references remain conditional and do not announce public availability. Future online-services language does not imply that accounts, cloud saves, or leaderboards exist now.
- Personal-use and intellectual-property clauses preserve uses permitted by law and applicable third-party licences.
- Disclaimer, liability, governing-law, availability, and platform language retain non-waivable statutory rights, warranties, remedies, and applicable consumer protections, including protections where the player lives. No mandatory arbitration, exclusive-court requirement, or class-action waiver was introduced.
- Updated terms apply prospectively, with notice or agreement where law requires, rather than suggesting that simply publishing a replacement overrides existing rights.
- Contact points to the verified site support page and its official contact method; the privacy policy is cross-linked.

## Primary sources consulted

- Saskatchewan Financial and Consumer Affairs Authority, [Rules to protect consumers](https://fcaa.gov.sk.ca/consumers-investors-pension-plan-members/consumers/purchasing-goods-and-services/rules-to-protect-consumers): unfair-practice rules and statutory warranties.
- Saskatchewan, [The Consumer Protection and Business Practices Act, section 101](https://pubsaskdev.blob.core.windows.net/pubsask-prod/79349/C30-2.pdf): preserves statutory protections notwithstanding contrary agreements, subject to the section's stated exception. The terms retain a broad mandatory-rights safeguard rather than attempting to determine every jurisdiction's application to each transaction.
- Canada, [Copyright Act, sections 30.6 and 30.61](https://laws-lois.justice.gc.ca/eng/acts/C-42/page-9.html): computer-program exceptions support preserving activities permitted by law.
- Financial Consumer Agency of Canada, [Before you sign any contract](https://www.canada.ca/en/financial-consumer-agency/services/signing-contract.html): contract changes generally require agreement; the terms preserve any required notice/agreement.

This is a consistency and drafting review against the cited sources and inspected game configuration, not a determination of enforceability for every user or a legal opinion. No changes were made to the existing privacy-policy text, game project, nonprofit website, DNS, or nfdg.ca redirect.

## Validation

- Generated site: 14 HTML pages passed the existing internal link, image, metadata, H1, navigation, and CNAME checks.
- Browser: Terms page has all 12 numbered sections and no horizontal overflow at desktop or 390 × 844. Mobile navigation opens and closes with Escape.
- Required links verified in the Caboom and Legal page bodies and their footers, as well as the Caboom privacy/terms footers.
- Existing privacy article text remains unchanged; only its footer gains the Terms link.
