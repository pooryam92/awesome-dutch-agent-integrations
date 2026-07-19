#!/usr/bin/env node
// validate.mjs — CI gate
// 1. Validate every /data/<category>.json against schema.json.
// 2. Fail on duplicate `id` across ALL files.
// 3. Fail on any enum token not present in labels.json (dangling token).
// 4. Fail on any services id not present in services.json (dangling id),
//    and on malformed services.json entries.
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
const services = readJson(join(dataDir, "services.json"));

// labels.json and services.json are registries, not listing files —
// everything else in /data is data.
const REGISTRY_FILES = new Set(["labels.json", "services.json"]);
const categoryFiles = readdirSync(dataDir)
  .filter((f) => f.endsWith(".json") && !REGISTRY_FILES.has(f))
  .sort();

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(schema);

// Which fields are label-backed enums, and which labels group backs each.
const ENUM_FIELDS = { type: "type", origin: "origin", status: "status" };

const errors = [];
const seenIds = new Map(); // id -> first file that used it

// Registry sanity: every services.json entry needs a name; kind is optional
// but must be a known value when present.
const SERVICE_KINDS = new Set(["provider", "dataset", "standard"]);
for (const [sid, entry] of Object.entries(services)) {
  if (!entry?.name) errors.push(`services.json[${sid}]: missing "name"`);
  if (entry?.kind != null && !SERVICE_KINDS.has(entry.kind)) {
    errors.push(`services.json[${sid}]: unknown kind "${entry.kind}"`);
  }
}

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

    // Dangling service ids: every id must resolve in services.json.
    if (Array.isArray(row?.services)) {
      for (const sid of row.services) {
        if (!services[sid]) {
          errors.push(`${where}: services id "${sid}" has no entry in services.json`);
        }
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
