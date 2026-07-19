#!/usr/bin/env node
// generate.mjs — renders the catalogue block inside README.md from /data.
// ONLY the region between the CATALOGUE markers is generated; the surrounding
// prose is hand-authored and left untouched.
//   node scripts/generate.mjs           rewrites the block in README.md
//   node scripts/generate.mjs --check    exits non-zero if the block is out of sync (CI)

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
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

// Tags are shields.io badges colored per value from labels.json, so each
// dimension is recognizable at a glance. Status is exception-only: "live" is
// the overwhelming default, so only deviations get a badge.
// Shields' flat badge format splits on "-", so literal "-"/"_" in the label
// must be doubled or they get parsed as field separators.
const escapeBadgeText = (s) => String(s).replace(/-/g, "--").replace(/_/g, "__");
const FALLBACK_COLOR = "6a737d";

const badge = (group, token) => {
  const { en: text = token, color = FALLBACK_COLOR } = labels[group]?.[token] ?? {};
  return `![${text}](https://img.shields.io/badge/-${encodeURIComponent(escapeBadgeText(text))}-${color})`;
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

if (check) {
  if (readme !== rendered) {
    console.error("✖ README.md catalogue is out of sync with /data. Run `npm run generate` and commit.");
    process.exit(1);
  }
  console.log("✓ README.md catalogue is in sync with /data.");
} else {
  writeFileSync(readmePath, rendered);
  console.log(`✓ updated README.md catalogue (${total} listing(s)).`);
}
