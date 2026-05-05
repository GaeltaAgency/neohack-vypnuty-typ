I found the PDF issues in `public/neohack.html`:

- The export filename is still `NEOHACK-Rozptyleny-typ.pdf`, even though the page is now `Vypnutý typ`.
- PDF export still contains old purple color overrides (`#c9a3fa`, `#7c3aed`, `#5b3b8a`) in `pdf-export`, print, and A4 preview styles.
- The last PDF page is broken because html2pdf is slicing the full `main` canvas and the final section image does not cover the whole A4 page, leaving the default white PDF background visible.

Plan:

1. Rename the exported PDF exactly for this type
   - Change the JS constant from:
     `NEOHACK-Rozptyleny-typ.pdf`
   - To:
     `NEOHACK-Vypnuty-typ.pdf`
   - This will update both direct download and preview-modal download.

2. Replace old purple PDF colors with the muted blue palette
   - In `body.pdf-export`, replace purple text/accent overrides with blue values, for example:
     - highlight/accent: `#93c5fd` / `#60a5fa`
     - borders: `#3b82f6` / `rgba(59,130,246,...)`
     - quote background: dark blue tint instead of purple tint
   - Also update `@media print` and `body.a4-preview` overrides so there are no leftover purple colors in PDF/preview modes.

3. Fix the last-page white-space/background error
   - Keep the current dark theme, but change the PDF generation output from JPEG to PNG so transparent/partial canvas areas do not become white.
   - Add a stronger PDF background pass after generation:
     - insert a dark A4 rectangle on every PDF page
     - ensure it is behind the captured content
   - Add cleanup logic for the final page:
     - detect if html2pdf creates an almost-empty or broken trailing page
     - remove it when safe
   - Adjust the final section PDF CSS so the final section fills the remaining page area with black instead of being sliced into a partial black block with white around it.

4. Reduce the likelihood of final-section clipping
   - Make `.eb-final` render as a full A4-height dark page in PDF mode or keep it together as a controlled final page.
   - Ensure its text is not clipped at the bottom and the final paragraph remains readable.

5. Verify after implementation
   - Generate/export the PDF from the page.
   - Inspect the final page visually to confirm:
     - no white area remains,
     - final text is not cut,
     - colors are muted blue, not purple,
     - filename is `NEOHACK-Vypnuty-typ.pdf`.