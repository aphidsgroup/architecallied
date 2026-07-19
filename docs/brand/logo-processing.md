# Logo asset processing

Sources (preserved unmodified at project root and source-assets/):
- ARCHITEC ALLIED LOGO.png — black mark, 9933x6052, true alpha bounds 3351x1606
- ARCHITEC ALLIED LOGO C1.png — gold mark #C5A75F, 4841x4027, true alpha bounds 3351x1606

Process (Pillow, no redrawing/reinterpretation):
1. Alpha-channel bbox detected; cropped with 2% padding to avoid clipping antialiased edges → 3485x1740.
2. Downscaled LANCZOS to 1200px wide production PNGs + lossless WebP.
3. favicon.ico (16/32/48) and apple-touch-icon.png (180): gold mark centred on navy #1F2A44 square.
4. og-default.png 1200x630: gold mark on navy.
5. Colours untouched — gold remains source #C5A75F (interface accent #C6A75E is separate).
6. No traced SVG produced: mark's stepped diagonals would need manual redraw verification; favicon.svg intentionally omitted rather than risk an unfaithful trace.

Outputs in public/brand/: logo-black.png/webp, logo-gold.png/webp, favicon.ico, apple-touch-icon.png, og-default.png.

QA: composite sheet (all assets on navy/beige/cream/white at 320/160/80/40px + favicon at 64px) visually inspected — proportions intact, edges clean, small sizes legible.
