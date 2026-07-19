// catalogue.mjs — turns listing data into the Markdown catalogue block.
// Presentation only; the badge renderer and services registry are injected.

// filename → human category title: "work-hr" -> "Work HR"
const ACRONYMS = { hr: "HR" };
export const titleFromFile = (file) =>
  file
    .replace(/\.json$/, "")
    .split("-")
    .map((w) => ACRONYMS[w] ?? w[0].toUpperCase() + w.slice(1))
    .join(" ");

// Table cells are pipe-delimited and the Name cell is wrapped in a [text](url)
// link — escape backslashes, pipes, and link brackets, and collapse newlines.
const escapeCell = (s) =>
  String(s)
    .replace(/\\/g, "\\\\")
    .replace(/\|/g, "\\|")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\r?\n/g, " ");

const TABLE_DIVIDER = "|---|---|---|---|";

// GitHub's auto table layout lets the description column starve the Tags
// column, and its img { max-width: 100% } then scales the strip down. Header
// text can't shrink, so pad the Tags header with &nbsp; until it is at least
// as wide as the table's widest strip (~4px per nbsp, "Tags" itself ~30px).
const tagsHeader = (maxStripWidth) => {
  const pad = Math.max(0, Math.ceil((maxStripWidth - 30) / 4));
  return `| Name | Description | Service | Tags${"&nbsp;".repeat(pad)} |`;
};

// buildCatalogue(categories, { services, badges }) -> { block, count }
//   categories: [{ title, listings }] — each rendered as its own table.
//   block:      the Markdown string to splice between the CATALOGUE markers.
//   count:      total listings rendered (for the CLI summary line).
export const buildCatalogue = (categories, { services, badges }) => {
  const serviceNames = (ids) => ids.map((sid) => services[sid]?.name ?? sid).join(" / ");

  const listingRow = (r) => {
    const tags = badges.tagBadge(r);
    const cells = [
      `[${escapeCell(r.name)}](${r.source_url})`,
      escapeCell(r.description_en),
      escapeCell(serviceNames(r.services)),
      tags.markdown,
    ];
    return { row: `| ${cells.join(" | ")} |`, tagWidth: tags.width };
  };

  const block = [
    "_Every listing is tagged with its type and origin; a status badge appears only when it is **not** live (beta, preview, concept, abandoned)._",
    "",
  ];

  let count = 0;
  for (const { title, listings } of categories) {
    block.push(`## ${title}`, "");
    if (listings.length === 0) {
      block.push("_No listings yet._", "");
      continue;
    }
    const rows = [...listings].sort((a, b) => a.name.localeCompare(b.name)).map(listingRow);
    block.push(tagsHeader(Math.max(...rows.map((r) => r.tagWidth))), TABLE_DIVIDER);
    for (const r of rows) {
      block.push(r.row);
      count++;
    }
    block.push("");
  }
  block.push("---", "");
  block.push(`_Curated — ${count} listing(s) across ${categories.length} categories._`);

  return { block: block.join("\n"), count };
};
