# About the data

## Data source

The data set is the Australian Government's **Energy Rating registration data** for televisions — an extract of registered TV models and their labelled energy performance (dated 2026-09-09).

## Data processing

The raw registration file (32 columns, one row per submitted registration) was cleaned in KNIME before any chart was built:

- Removed URL, image and other non-analytical columns.
- Removed duplicate registrations of the same model (`Model_No`).
- Filtered to `Availability Status = "Available"` — expired or superseded registrations were excluded.
- Filtered to models sold in Australia (`SoldIn` containing "Australia").
- Converted screen size from centimetres to inches, rounded to whole inches, for a unit Australian shoppers actually use.
- Standardised brand name casing (e.g. "Kogan", "KOGAN", "kogan" → "KOGAN") to avoid splitting one brand's models across multiple labels.
- Aggregated (grouped, counted, averaged or took the median, depending on the question) to build the summary tables behind each chart.

## Privacy

The data set contains no personal or household-level information — it describes TV models and their manufacturers, not individual consumers or their purchases. No privacy risk was identified in processing or presenting it.

## Accuracy and limitations

- **Brand name matching is imperfect.** Some registrations for the same real-world company appear under slightly different names (e.g. "SAMSUNG" vs "SAMSUNG ELECTRONICS") that uppercasing alone does not merge. Where this is visible in a chart, it is called out rather than silently corrected.
- **Brand comparisons can be skewed by small sample sizes.** A brand with only one or two registered models can appear as an extreme case (highest or lowest average power) purely by chance, not because it is systematically more or less efficient. Comparisons across brands should be read with model count in mind.
- **Power consumption is not purely a function of screen size or brand.** The screen size vs power relationship is a clear positive trend but not a straight line — other factors (screen technology, features, panel brightness) also affect the result, and this is stated explicitly alongside the relevant chart rather than implied to be causal.
- **The data reflects registrations, not sales.** A model being registered and "available" does not mean it is actually stocked or popular in stores; the data describes what could be bought, not what is being bought.
- **The extract is a single snapshot (2026-09-09)** and does not reflect any changes to the market since that date.

## Ethics

The data story presents efficiency and consumption findings without implying that any individual brand or model is universally "bad" — differences are described as measured patterns in registered models, not as judgements on manufacturers, and known limitations (small sample sizes, imperfect brand matching) are disclosed alongside the findings they affect rather than left for the reader to discover on their own.

---

# AI Declaration

Generative AI (Claude, by Anthropic) was used during the development of this website and its supporting analysis. All AI-assisted output was reviewed and, where needed, edited before being included in the final site. AI assistance was used for:

- **Code comments** — adding explanatory comments throughout the HTML, CSS and JavaScript to make the structure easier to navigate and edit.
- **Feature implementation** — writing the CSS/JavaScript for the image carousel component on the Televisions page, and CSS fixes for image display (`object-fit`) and equal-height cards (flexbox).

No AI tool was used to collect, clean or analyse the underlying dataset itself in a way that bypassed review — all KNIME workflow construction, chart generation and final analysis were reviewed and produced by the author, with AI assistance used as a drafting and structuring aid throughout.
