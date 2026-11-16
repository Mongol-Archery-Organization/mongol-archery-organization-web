# Educational content provenance

Source: the supplied `educational.pdf`, retained unchanged at `docs/sources/educational.pdf` for internal reference.

- PDF page 1: nine scoring provisions for the Washington, DC Mongolian community's National Naadam. The site preserves the distinction between qualifying target displacement, azraga-sur hits, short/over/wide shots, bouncing and insufficient movement, judge decisions, and khana versus khasaa pass-throughs. No total-arrow count, maximum score, or tie-break rules are invented.
- PDF pages 2–3: Mongol Archery Group safety instructions dated July 8, 2023. Content is grouped by preparation, shooting-line signals, assigned target duties, prohibitions, bow handling, and source-specific health requirements. The target-area guidance is for assigned personnel; it is not an invitation for visitors to enter the range. The health requirements preserve the supplied instructions.
- PDF pages 4–5: duplicate scans of illustrated book pages 90–91. Page 5 was rotated 180 degrees; its arrow, bowstring, belt, and khana target images were extracted.
- PDF page 6: rotated 180 degrees; bow, thumb protection, individual khasaa, and target arrangement illustrations were extracted from book pages 94–95.

Eight original scans remain in `public/images/education/`. Seven now also have illustrated versions generated with the built-in image_gen tool: arrow, bowstring, thumb protection, belt, individual khasaa, khasaa arrangement, and khana target area. These use navy contours, natural brown materials, gold accents, and an ivory background. The bow now uses a hand-drawn SVG authorized by the user after image-generation rejections, preserving figure 12’s silhouette and numbered part mapping. The source PDF and Downloads originals are unchanged.

The page labels redrawings as illustrated interpretations. Per the user’s request, individual original-scan links and the source footer have been removed. Colors and decorative details are artistic choices. The khana view is a schematic rather than an exact competition layout. Numbered equipment parts and the two 8 cm dimensions were checked visually against their source. Full prompts and saved asset paths are recorded in `docs/education-illustration-prompts.json`; website assets are mapped in `src/lib/education-illustrations.ts`.

The equipment guide includes bilingual explanations and numbered keys. The bow's string is numbered 7 in the drawing but omitted from the printed key; the site labels it as shown. The bowstring key omits number 4; the site preserves the numbering without inventing a label. Original Mongolian equipment terms are retained where useful.

The earlier Khalkh introduction incorrectly described khana and khasaa as two halves of twenty targets and supplied dimensions inconsistent with the handout. It now explains the separate arrangements and reports only the illustrated khasaa dimensions (8 cm high and 8 cm across).

Navigation: `/resources/#equipment`, `/resources/#safety`, `/resources/#scoring`. Equipment subsections also have `#equipment-bow`, `#equipment-arrow`, `#equipment-bowstring`, `#equipment-thumb-rings`, `#equipment-belt`, and `#equipment-targets` anchors. These preserve the active equipment section.

## Website simplification

The public site no longer includes handout links, source footers, or book figure numbers. The PDF is retained only at `docs/sources/educational.pdf`, outside the published assets. Getting Started is now the default resource section. Cultural Significance, Shooting Techniques, Our History, and What We Practice have been removed from the website.
