#!/usr/bin/env node
// validate.mjs — CI gate
// 1. Validate every /data/<category>.json against schema.json.
// 2. Fail on duplicate `id` across ALL files.
// 3. Fail on any enum token not present in labels.json (dangling token).
// Exits non-zero on any failure so CI blocks the merge.

import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import Ajv from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "data");

const readJson = (p) => JSON.parse(readFileSync(p, "utf8"));

const schema = readJson(join(root, "schema.json"));
const labels = readJson(join(dataDir, "labels.json"));

// labels.json is config, not a listing file — everything else in /data is data.
const categoryFiles = readdirSync(dataDir)
  .filter((f) => f.endsWith(".json") && f !== "labels.json")
  .sort();

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(schema);

// Which fields are label-backed enums, and which labels group backs each.
const ENUM_FIELDS = { type: "type", provenance: "provenance", status: "status" };

const errors = [];
const seenIds = new Map(); // id -> first file that used it

for (const file of categoryFiles) {
  const listings = readJson(join(dataDir, file));

  if (!validate(listings)) {
    for (const e of validate.errors) {
      errors.push(`${file}${e.instancePath} ${e.message}`);
    }
  }

  if (!Array.isArray(listings)) continue;

  listings.forEach((row, i) => {
    const where = `${file}[${i}]${row?.id ? ` (${row.id})` : ""}`;

    // Duplicate id across all files.
    if (row?.id != null) {
      if (seenIds.has(row.id)) {
        errors.push(`${where}: duplicate id "${row.id}" (also in ${seenIds.get(row.id)})`);
      } else {
        seenIds.set(row.id, file);
      }
    }

    // Dangling enum tokens: every token must resolve in labels.json.
    for (const [field, group] of Object.entries(ENUM_FIELDS)) {
      const token = row?.[field];
      if (token != null && !(labels[group] && labels[group][token])) {
        errors.push(`${where}: ${field} token "${token}" has no label in labels.json[${group}]`);
      }
    }
  });
}

if (errors.length) {
  console.error(`✖ validation failed (${errors.length} problem(s)):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(
  `✓ ${categoryFiles.length} category file(s) valid; ${seenIds.size} unique listing(s), no dangling enum tokens.`
);
