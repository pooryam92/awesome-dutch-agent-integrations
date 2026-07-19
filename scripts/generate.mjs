#!/usr/bin/env node
// generate.mjs — renders the catalogue block inside README.md from /data.
// ONLY the region between the CATALOGUE markers is generated; the surrounding
// prose is hand-authored and left untouched.
//   node scripts/generate.mjs           rewrites the block in README.md
//   node scripts/generate.mjs --check    exits non-zero if the block is out of sync (CI)

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from "node:fs";
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
// computed width, so rendering is identical regardless of installed fonts.
const badgeSvg = (text, color) => {
  const textWidth = Math.round(text.length * 6.5);
  const width = textWidth + 12;
  const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const t = esc(text);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="20" role="img" aria-label="${t}">` +
    `<title>${t}</title>` +
    `<linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient>` +
    `<clipPath id="r"><rect width="${width}" height="20" rx="3" fill="#fff"/></clipPath>` +
    `<g clip-path="url(#r)"><rect width="${width}" height="20" fill="#${color}"/><rect width="${width}" height="20" fill="url(#s)"/></g>` +
    `<g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">` +
    `<text aria-hidden="true" x="${width * 5}" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="${textWidth * 10}">${t}</text>` +
    `<text x="${width * 5}" y="140" transform="scale(.1)" textLength="${textWidth * 10}">${t}</text>` +
    `</g></svg>\n`
  );
};

const badge = (group, token) => {
  const text = labels[group]?.[token]?.en ?? token;
  return `![${text}](assets/badges/${group}-${token}.svg)`;
};

// Emit (or, in --check mode, verify) one SVG per labels.json token. Every
// badge file is derived purely from labels.json, so out-of-date files fail
// CI the same way an out-of-date README does.
const syncBadgeFiles = () => {
  const stale = [];
  for (const [group, tokens] of Object.entries(labels)) {
    for (const [token, { en, color }] of Object.entries(tokens)) {
      const path = join(badgesDir, `${group}-${token}.svg`);
      const svg = badgeSvg(en ?? token, color ?? FALLBACK_COLOR);
      if (check) {
        if (!existsSync(path) || readFileSync(path, "utf8") !== svg) stale.push(`${group}-${token}.svg`);
      } else {
        mkdirSync(badgesDir, { recursive: true });
        writeFileSync(path, svg);
      }
    }
  }
  return stale;
};

const serviceNames = (ids) => ids.map((sid) => services[sid]?.name ?? sid).join(" / ");

const TABLE_HEADER = "| Name | Description | Service | Tags |";
const TABLE_DIVIDER = "|---|---|---|---|";

const listingRow = (r) => {
  const parts = [badge("type", r.type), badge("origin", r.origin)];
  if (r.status !== "live") parts.push(badge("status", r.status));
  const tags = parts.join(" ");
  const cells = [
    `[${escapeCell(r.name)}](${r.source_url})`,
    escapeCell(r.description_en),
    escapeCell(serviceNames(r.services)),
    tags,
  ];
  return `| ${cells.join(" | ")} |`;
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
  block.push(TABLE_HEADER, TABLE_DIVIDER);
  for (const r of [...listings].sort((a, b) => a.name.localeCompare(b.name))) {
    block.push(listingRow(r));
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
