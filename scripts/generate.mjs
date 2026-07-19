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

const label = (group, token) => labels[group]?.[token]?.en ?? token;
// filename → human category title: "accounting-finance" -> "Accounting & Finance"
const titleFromFile = (file) =>
  file
    .replace(/\.json$/, "")
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ")
    .replace(/ And /g, " & ");

const categoryFiles = readdirSync(dataDir)
  .filter((f) => f.endsWith(".json") && f !== "labels.json")
  .sort();

const listingLine = (r) => {
  const badges = [
    label("provenance", r.provenance),
    label("status", r.status),
    label("type", r.type),
  ]
    .map((b) => `\`${b}\``)
    .join(" ");
  return `- **[${r.name}](${r.source_url})** — ${r.description_en} ${badges} · _${r.service}_ · checked ${r.last_checked}`;
};

// --- build only the catalogue block (between the markers) ---
const block = [];

// Badge legend, straight from labels.json.
block.push("**Legend** — ");
const legend = [];
for (const group of ["provenance", "status", "type"]) {
  const toks = Object.entries(labels[group]).map(([, v]) => v.en).join(", ");
  legend.push(`${group}: ${toks}`);
}
block.push(legend.map((l) => `\`${l}\``).join(" · "), "");

let total = 0;
for (const file of categoryFiles) {
  const listings = readJson(join(dataDir, file));
  block.push(`## ${titleFromFile(file)}`, "");
  if (listings.length === 0) {
    block.push("_No listings yet._", "");
    continue;
  }
  for (const r of [...listings].sort((a, b) => a.name.localeCompare(b.name))) {
    block.push(listingLine(r));
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
