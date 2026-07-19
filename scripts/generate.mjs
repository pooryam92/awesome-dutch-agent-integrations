#!/usr/bin/env node
// generate.mjs — renders the catalogue block inside README.md from /data.
// ONLY the region between the CATALOGUE markers is generated; the surrounding
// prose is hand-authored and left untouched.
//   node scripts/generate.mjs           rewrites the block in README.md
//   node scripts/generate.mjs --check    exits non-zero if the block is out of sync (CI)

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "data");
const readmePath = join(root, "README.md");
const check = process.argv.includes("--check");

const BEGIN = "<!-- BEGIN CATALOGUE";
const END = "<!-- END CATALOGUE -->";

const readJson = (p) => JSON.parse(readFileSync(p, "utf8"));
const labels = readJson(join(dataDir, "labels.json"));
const services = readJson(join(dataDir, "services.json"));

// filename → human category title: "work-hr" -> "Work HR"
const ACRONYMS = { hr: "HR" };
const titleFromFile = (file) =>
  file
    .replace(/\.json$/, "")
    .split("-")
    .map((w) => ACRONYMS[w] ?? w[0].toUpperCase() + w.slice(1))
    .join(" ");

const REGISTRY_FILES = new Set(["labels.json", "services.json"]);
const categoryFiles = readdirSync(dataDir)
  .filter((f) => f.endsWith(".json") && !REGISTRY_FILES.has(f))
  .sort();

// Table cells are pipe-delimited and the Name cell is wrapped in a [text](url)
// link — escape backslashes, pipes, and link brackets, and collapse newlines.
const escapeCell = (s) =>
  String(s)
    .replace(/\\/g, "\\\\")
    .replace(/\|/g, "\\|")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\r?\n/g, " ");

// Tags are badge SVGs colored per value from labels.json, generated into
// /assets/badges and committed, so the README makes zero external image
// requests (shields.io outages left every badge broken via GitHub's camo
// proxy). Status is exception-only: "live" is the overwhelming default, so
// only deviations get a badge.
const FALLBACK_COLOR = "6a737d";
const badgesDir = join(root, "assets", "badges");

// Shields-style flat badge, single segment. textLength pins the text to the
// computed width, so rendering is identical regardless of installed fonts —
// but that only looks right if the computed width matches the text's natural
// width, so use per-character Verdana 11px advance widths, not a flat average.
const CHAR_WIDTHS = {
  A: 7.5, B: 7.5, C: 7.6, D: 8.4, E: 6.9, F: 6.3, G: 8.4, H: 8.2, I: 4.6,
  J: 5.0, K: 7.5, L: 6.1, M: 9.4, N: 8.2, O: 8.7, P: 7.0, Q: 8.7, R: 7.7,
  S: 7.5, T: 6.8, U: 8.0, V: 7.5, W: 10.9, X: 7.5, Y: 6.8, Z: 7.5,
  a: 6.7, b: 6.9, c: 5.9, d: 6.9, e: 6.6, f: 3.9, g: 6.9, h: 6.9, i: 3.0,
  j: 3.9, k: 6.5, l: 3.0, m: 10.6, n: 6.9, o: 6.7, p: 6.9, q: 6.9, r: 4.8,
  s: 5.9, t: 4.3, u: 6.9, v: 6.5, w: 9.0, x: 6.5, y: 6.5, z: 5.9,
  " ": 3.9, ".": 3.9, "-": 4.9,
};
const measure = (text) => [...text].reduce((w, ch) => w + (CHAR_WIDTHS[ch] ?? 7), 0);

// One SVG per tag COMBINATION, not per tag: browsers may wrap between
// separate <img>s in a table cell (even across &nbsp;), which stacked the
// badges into a ragged column on GitHub. A single strip image cannot wrap.
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const PILL_GAP = 4;

const stripSvg = (parts) => {
  const pills = [];
  let x = 0;
  for (const { text, color } of parts) {
    const textWidth = Math.round(measure(text));
    const width = textWidth + 12;
    pills.push({ text: esc(text), color, x, width, textWidth });
    x += width + PILL_GAP;
  }
  const total = x - PILL_GAP;
  const label = esc(parts.map((p) => p.text).join(" · "));
  const body = pills
    .map(
      (p, i) =>
        `<clipPath id="r${i}"><rect x="${p.x}" width="${p.width}" height="20" rx="3"/></clipPath>` +
        `<g clip-path="url(#r${i})"><rect x="${p.x}" width="${p.width}" height="20" fill="#${p.color}"/><rect x="${p.x}" width="${p.width}" height="20" fill="url(#s)"/></g>` +
        `<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">` +
        `<text aria-hidden="true" x="${(p.x + p.width / 2) * 10}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${p.textWidth * 10}">${p.text}</text>` +
        `<text x="${(p.x + p.width / 2) * 10}" y="140" transform="scale(.1)" textLength="${p.textWidth * 10}">${p.text}</text>` +
        `</g>`
    )
    .join("");
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${total}" height="20" role="img" aria-label="${label}">` +
    `<title>${label}</title>` +
    `<linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient>` +
    body +
    `</svg>\n`
  );
};

// Strips are collected while rendering rows, then written (or verified in
// --check mode) against /assets/badges; orphaned files are removed so the
// directory always mirrors exactly the combinations the catalogue uses.
const neededBadges = new Map(); // filename -> svg content

const tagBadge = (r) => {
  const tokens = [["type", r.type], ["origin", r.origin]];
  if (r.status !== "live") tokens.push(["status", r.status]);
  const parts = tokens.map(([group, token]) => ({
    text: labels[group]?.[token]?.en ?? token,
    color: labels[group]?.[token]?.color ?? FALLBACK_COLOR,
  }));
  const file = `tags-${tokens.map(([, token]) => token).join("-")}.svg`;
  const svg = stripSvg(parts);
  neededBadges.set(file, svg);
  const width = Number(svg.match(/width="(\d+)"/)[1]);
  return { markdown: `![${parts.map((p) => p.text).join(" · ")}](assets/badges/${file})`, width };
};

const syncBadgeFiles = () => {
  const stale = [];
  const existing = existsSync(badgesDir) ? readdirSync(badgesDir) : [];
  if (check) {
    for (const [file, svg] of neededBadges) {
      const path = join(badgesDir, file);
      if (!existsSync(path) || readFileSync(path, "utf8") !== svg) stale.push(file);
    }
    for (const file of existing) if (!neededBadges.has(file)) stale.push(`${file} (orphan)`);
  } else {
    mkdirSync(badgesDir, { recursive: true });
    for (const [file, svg] of neededBadges) writeFileSync(join(badgesDir, file), svg);
    for (const file of existing) if (!neededBadges.has(file)) rmSync(join(badgesDir, file));
  }
  return stale;
};

const serviceNames = (ids) => ids.map((sid) => services[sid]?.name ?? sid).join(" / ");

const TABLE_DIVIDER = "|---|---|---|---|";

// GitHub's auto table layout lets the description column starve the Tags
// column, and its img { max-width: 100% } then scales the strip down. Header
// text can't shrink, so pad the Tags header with &nbsp; until it is at least
// as wide as the table's widest strip (~4px per nbsp, "Tags" itself ~30px).
const tagsHeader = (maxStripWidth) => {
  const pad = Math.max(0, Math.ceil((maxStripWidth - 30) / 4));
  return `| Name | Description | Service | Tags${"&nbsp;".repeat(pad)} |`;
};

const listingRow = (r) => {
  const tags = tagBadge(r);
  const cells = [
    `[${escapeCell(r.name)}](${r.source_url})`,
    escapeCell(r.description_en),
    escapeCell(serviceNames(r.services)),
    tags.markdown,
  ];
  return { row: `| ${cells.join(" | ")} |`, tagWidth: tags.width };
};

// --- build only the catalogue block (between the markers) ---
const block = [
  "_Every listing is tagged with its type and origin; a status badge appears only when it is **not** live (beta, preview, concept, abandoned)._",
  "",
];

let total = 0;
for (const file of categoryFiles) {
  const listings = readJson(join(dataDir, file));
  block.push(`## ${titleFromFile(file)}`, "");
  if (listings.length === 0) {
    block.push("_No listings yet._", "");
    continue;
  }
  const rows = [...listings].sort((a, b) => a.name.localeCompare(b.name)).map(listingRow);
  block.push(tagsHeader(Math.max(...rows.map((r) => r.tagWidth))), TABLE_DIVIDER);
  for (const r of rows) {
    block.push(r.row);
    total++;
  }
  block.push("");
}
block.push("---", "");
block.push(`_Curated — ${total} listing(s) across ${categoryFiles.length} categories._`);

// --- splice the block between the markers, preserving surrounding prose ---
const readme = readFileSync(readmePath, "utf8");
const beginIdx = readme.indexOf(BEGIN);
const endIdx = readme.indexOf(END);
if (beginIdx === -1 || endIdx === -1 || endIdx < beginIdx) {
  console.error(`✖ README.md must contain the "${BEGIN} … ${END}" markers.`);
  process.exit(1);
}

const beginLineEnd = readme.indexOf("\n", beginIdx); // keep the BEGIN marker line
const before = readme.slice(0, beginLineEnd + 1);
const after = readme.slice(endIdx); // keep the END marker line onward
const rendered = `${before}\n${block.join("\n")}\n\n${after}`;

const staleBadges = syncBadgeFiles();

if (check) {
  if (staleBadges.length) {
    console.error(`✖ badge file(s) out of sync with labels.json: ${staleBadges.join(", ")}. Run \`npm run generate\` and commit.`);
    process.exit(1);
  }
  if (readme !== rendered) {
    console.error("✖ README.md catalogue is out of sync with /data. Run `npm run generate` and commit.");
    process.exit(1);
  }
  console.log("✓ README.md catalogue and badge files are in sync with /data.");
} else {
  writeFileSync(readmePath, rendered);
  console.log(`✓ updated README.md catalogue (${total} listing(s)) and assets/badges.`);
}
