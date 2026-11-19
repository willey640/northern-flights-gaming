# Inspection and verification — November 19, 2026

## Sources inspected

- Authenticated GitHub connector login: `willey640`. Repository search returned no pre-existing gaming repository. New separate repository created after local build and checks.
- Local nonprofit: `C:\Users\wille\Documents\GitHub\northernflightsdiscgolf`; remote URL in `.git/config` is `https://github.com/willey640/northernflightsdiscgolf.git`; CNAME is `www.northernflightsdiscgolf.ca`.
- Redirect: `C:\Users\wille\Documents\GitHub\nfdg-website`; CNAME `nfdg.ca`; index contains both meta refresh and JavaScript redirect to `https://northernflightsdiscgolf.ca/`. Remote CNAME verified through connector.
- Caboom: `C:\Users\wille\Desktop\VG BakUP\pyro-pete-new-game` exists. README, scripts, project.godot, export_presets.cfg, Android Gradle configuration, library names, and merged release manifest inspected. Release AAB exists locally; its binary was not independently decompiled or executed.
- Chains: local copies under `Desktop\VG BakUP\nfdg-chains-of-chaos` and `Documents\GitHub\chains-of-choas`; official Games page and Android link reviewed.
- Carts: `C:\Users\wille\Desktop\carts-of-choas`; actual title artwork copied.
- DiscMon: `C:\Users\wille\Desktop\VG BakUP\disc-mon` and official browser listing. This local tree also contains online leaderboard experiments and scripts; no live leaderboard claim is made. A release-specific privacy policy is still needed for any network-enabled build.
- Cribbage: `C:\Users\wille\Desktop\VG BakUP\cribbage-of-chaos-use-this-one`; local multiplayer screens exist. Official browser listing describes a computer opponent. Public multiplayer service not verified.
- Contact verified at `https://www.northernflightsdiscgolf.ca/contact.html` (HTTP 200); existing official contact form is linked instead of inventing an email.
- Existing nonprofit Pages settings inspected read-only in authenticated browser: deploy from `main`, `/ (root)`, custom domain `www.northernflightsdiscgolf.ca`; Enforce HTTPS unchecked. No settings changed.

## Caboom privacy evidence

- `scripts/managers/save_manager.gd`: `user://monster_bomber_save.json`, `.bak` backup; top ten scores with sanitized 12-character nickname, score, level, date; campaign checkpoint, settings, trophies, championship, anthem unlock.
- `project.godot`: custom user directory `Godot/app_userdata/Monster Bomber`; no autoload network or plugin configuration identified.
- Application scripts/resources/scenes searched for network APIs, URL strings, OS link calls, SDK access. No runtime networking or analytics/ads integration found in inspected application source. No addons folder present.
- Android debug and Google Play presets: `permissions/internet=false`. Play version 1.0, code 1, package `ca.nfdg.caboomofchaos`.
- Merged `standardRelease` manifest: no `uses-permission` entries; `android:allowBackup=false`. Default AndroidX dependencies and Godot debug/release AARs found; no third-party advertising/analytics plugin identified.
- iOS preset exists, but no final iOS export available to verify. No sensitive permission descriptions configured in inspected preset. Check exported Info.plist, privacy manifest, plugins, and SDKs before release.
- Do not describe this audit as dynamic traffic capture, binary reverse engineering, store approval, or final iOS certification. Reconcile Data safety and App Privacy submissions with the exact uploaded build.

## Exact in-game policy link change (pending public HTTPS policy)

Do not edit unrelated game files. In `scripts/managers/app.gd`, `show_settings(return_to: String)` begins at line 669 in the inspected source. Settings panel is 408 × 436; Touch Controls at y=328 and Back at y=374.

Once `https://gaming.nfdg.ca/caboom/privacy/` is publicly accessible:

1. Increase panel height from 436 to 482.
2. Insert a `Privacy Policy` button at `Rect2(26, 374, 356, 36)` with callback `func() -> void: OS.shell_open("https://gaming.nfdg.ca/caboom/privacy/")`.
3. Move Back to `Rect2(26, 420, 356, 40)`.
4. Check `mobile_menu_layout.gd` handling and all Settings layouts, focus traversal, reduced screen heights, and external browser behavior on actual Android/iOS builds. Opening a user-selected policy link should use the system browser; do not add in-game networking for this.

No Godot files changed during the website task.

## Local checks

`npm run check` validates 13 generated HTML pages (12 public routes plus custom 404), internal links and images, metadata, one H1, menu controls, and gaming CNAME. Browser checks at 390 × 844 covered all 12 public pages: no horizontal overflow or broken loaded images. Mobile menu opens and Escape closes it. Desktop homepage reviewed visually. Additional viewport and live checks are recorded in DEPLOYMENT.md.

## Source links

- Official catalogue: https://www.northernflightsdiscgolf.ca/games.html
- Official contact: https://www.northernflightsdiscgolf.ca/contact.html
- GitHub custom domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Google Play user-data policy: https://support.google.com/googleplay/android-developer/answer/10144311

The policy is an ordinary mobile HTML page. Public HTTPS access and final iOS export review must be verified separately; creating the page alone does not establish store compliance.
