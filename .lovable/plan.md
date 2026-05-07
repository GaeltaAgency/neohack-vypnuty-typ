## Goal
Fix the SEO/meta on the root `index.html`, add `noindex`, eliminate the brief white/loading page when visiting `/`, and ensure the project syncs to GitHub.

## Changes

### 1. `index.html` — SEO + noindex + instant redirect
Replace the current generic Lovable meta with content matching the document, add `noindex,nofollow`, set the canonical URL, and replace the React mount with an immediate meta-refresh + JS redirect to `/neohack.html`. This removes the white "Načítavam…" flash.

- `<title>`: `NEOHACK — Energetický Kompas: Vypnutý typ`
- `<meta name="description">`: short Slovak description matching the report (e.g. "Personalizovaný report Energetického Kompasu — archetyp Vypnutý typ.")
- `<meta name="robots" content="noindex, nofollow">`
- `<link rel="canonical" href="https://neohack-vypnuty-typ.lovable.app/neohack.html">`
- Update `og:title`, `og:description`, `twitter:title`, `twitter:description` to match
- Keep `og:image` (or drop it since noindex)
- Add `<meta http-equiv="refresh" content="0; url=/neohack.html">` in `<head>` and a tiny inline script `location.replace('/neohack.html')` so there is no white flash; body shows a styled dark fallback (black background, white text link) instead of the current white "Načítavam…".

### 2. `src/pages/Index.tsx` — match dark fallback
Update the fallback markup to use a black background and white text so even if React loads briefly, no white page appears.

### 3. GitHub
GitHub sync is set up via the editor's Connectors panel (GitHub → Connect project), not via code. I'll instruct you in chat how to click through it after the code change. Once connected, all current files (including `public/neohack.html`) push automatically.

## Technical notes
- Meta-refresh in `<head>` fires before React hydration → no white flash.
- `noindex, nofollow` blocks search engines from listing the URL.
- Canonical points to the actual document so any accidental indexing resolves cleanly.
- The Lovable preview/published deploy serves `index.html` for `/` and `public/neohack.html` for `/neohack.html` — both keep working.
