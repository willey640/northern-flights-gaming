# Northern Flights nonprofit website review and game migration

Reviewed November 19, 2026. Source: `willey640/northernflightsdiscgolf`, homepage, Games, Events, About, CSS and navigation JavaScript; compared with the live website and gaming catalogue.

## Targeted migration

| Game | Main browser destination | Treatment |
|---|---|---|
| Caboom of Chaos | `https://gaming.nfdg.ca/games/caboom/index.html` | Already hosted on gaming site |
| Chains of Chaos demo | `https://gaming.nfdg.ca/games/chains/index.html` | Copy of the existing public export, all nine files unchanged |
| Cribbage of Chaos | `https://gaming.nfdg.ca/games/cribbage/index.html` | Copy of the existing public export, all nine files unchanged |
| DiscMon | `https://www.northernflightsdiscgolf.ca/games/Disc_Mon/index.html` | Current Ubuntu-backed version retained at user's request |

The nonprofit homepage gets a compact branded gaming promotion with Play Caboom and Explore All Games links. Its existing game advertisements remain. Homepage catalogue links now go to the gaming catalogue, and DiscMon advertising goes through its gaming detail page to its existing playable version. The nonprofit Games page retains the existing three listings and adds Caboom, pointing to game details on the gaming website.

No old game files or URLs are removed or redirected. Browser storage belongs to its origin and path; saves from the nonprofit game copies do not automatically transfer to the gaming domain. Keeping the old copies accessible protects players' existing links and saved progress. The gaming catalogue explains this distinction.

The current DiscMon build references `scores.northernflightsdiscgolf.ca`. Read-only checks found its health and scores endpoints online, but no CORS allow-origin header for `https://gaming.nfdg.ca`; a preflight from that origin returned HTTP 400. No records were posted. The user confirmed the current web build should keep its Ubuntu service for now, so neither the game nor that service was migrated or modified.

Export checksums for Chains and Cribbage are in `data/website-game-migrations.json`. The gaming validator checks all three locally hosted exports (including Caboom), all 27 files, and the normal website pages. Game exports retain their original bytes and their own full-window HTML. No global site template is injected into a game export.

## Recommended improvements, in priority order

1. **Lead with disc golf.** The homepage currently opens with gaming/music announcements, while the mission is near its bottom. Add a brief introduction, a real disc-golf photo, and clear **Find a course**, **Upcoming events**, and **Get involved** actions above the news. Keep one compact Gaming promotion visible below that introduction. No claims about donations or game proceeds should be added without verification.
2. **Refresh the Events page.** The live page says “2025 Disc Golf Season — Closed” and promises 2026 updates. Replace that with verified current-season information, or an honest “Next season's dates will be posted here” notice. Archive past events separately; do not invent dates.
3. **Use one consistent navigation.** Home and Games currently show different Resources and Flight School links, such as Joke Store/Jokes and Training Videos/Training. Maintain a shared header/footer source, shorten the Resources dropdown, and give Games a clear link to Northern Flights Gaming.
4. **Make mobile navigation keyboard accessible.** The current hamburger is a clickable `div` with no button semantics, accessible label, expanded-state indication, or keyboard handler. Replace it with a real button and accessible dropdown behavior throughout the nonprofit site. This is a shared-component change and was not bundled into the game migration.
5. **Improve scan speed and loading.** Replace the long homepage announcement stream with short news previews and links to full posts. Compress large promotional images, declare image dimensions, and lazy-load below-the-fold images and video embeds. Preserve full-resolution originals elsewhere.
6. **Finish search and sharing metadata.** The homepage has a title and canonical link, but lacks a meta description and Open Graph information. Add accurate descriptions and sharing images, and use one consistent canonical hostname across the site after checking its current redirects. Improve page-heading hierarchy where the site title and page title both use H1.
7. **Clean up visible maintenance details.** The homepage footer still says 2025 while Games says 2026. Review footer dates, expired announcements, and contact links. These small inconsistencies make a maintained site appear older than it is.

These are recommendations for a follow-up update, not a blanket redesign performed during this migration.

## Evidence

- [Nonprofit homepage](https://www.northernflightsdiscgolf.ca/)
- [Nonprofit Games page](https://www.northernflightsdiscgolf.ca/games.html)
- [Events page](https://www.northernflightsdiscgolf.ca/events.html)
- [Gaming catalogue](https://gaming.nfdg.ca/games/)

## Validation before publication

- Gaming site: 14 standard HTML pages, three game export entries, and 27 byte-exact game files passed validation.
- Both migrated exports reached their title/menu screens in the local browser.
- Nonprofit homepage promotion and Games-page destination links checked in a local overlay, leaving the original checkout untouched during review.
- No horizontal overflow reported for the modified nonprofit pages during responsive checks; the existing navigation behavior itself remains a separate improvement recommendation.
- Preserve DNS, nfdg.ca redirect, existing game binaries, server configuration, and nonprofit branding.
