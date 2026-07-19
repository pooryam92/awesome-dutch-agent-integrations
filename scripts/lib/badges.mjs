// badges.mjs — self-contained badge subsystem for the catalogue.
//
// Tags render as shields-style flat "strip" SVGs generated into
// /assets/badges and committed, so the README makes zero external image
// requests (shields.io outages left every badge broken via GitHub's camo
// proxy). One SVG is emitted per tag COMBINATION, not per tag: browsers may
// wrap between separate <img>s in a table cell (even across &nbsp;), stacking
// the badges into a ragged column on GitHub — a single strip image cannot wrap.
//
// createBadges(labels, badgesDir) returns a renderer that closes over its own
// set of needed badges — no module-level mutable state.

import { readFileSync, readdirSync, mkdirSync, existsSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FALLBACK_COLOR = "6a737d";

// Per-character Verdana 11px advance widths. textLength pins each label to its
// computed width so rendering is identical regardless of installed fonts — but
// that only looks right if the computed width matches the text's natural width,
// so use real per-character metrics, not a flat average. Unknown glyphs fall
// back to 7px; keep tag text ASCII-alphabetic so nothing silently mis-sizes.
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

// SVG escaping. Covers element content (<title>, <text>) and the double-quoted
// aria-label attribute, so quotes are escaped too.
const esc = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const PILL_GAP = 4;

// Render a row of colored pills into one strip SVG. Returns { svg, width } so
// callers never have to re-parse the serialized markup to recover the width.
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
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${total}" height="20" role="img" aria-label="${label}">` +
    `<title>${label}</title>` +
    `<linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient>` +
    body +
    `</svg>\n`;
  return { svg, width: total };
};

export const createBadges = (labels, badgesDir) => {
  const needed = new Map(); // filename -> svg content

  // Build the strip for a listing's tags. Status is exception-only: "live" is
  // the overwhelming default, so only deviations get a status pill.
  const tagBadge = (r) => {
    const tokens = [["type", r.type], ["origin", r.origin]];
    if (r.status !== "live") tokens.push(["status", r.status]);
    const parts = tokens.map(([group, token]) => ({
      text: labels[group]?.[token]?.en ?? token,
      color: labels[group]?.[token]?.color ?? FALLBACK_COLOR,
    }));
    const file = `tags-${tokens.map(([, token]) => token).join("-")}.svg`;
    const { svg, width } = stripSvg(parts);
    needed.set(file, svg);
    return { markdown: `![${parts.map((p) => p.text).join(" · ")}](assets/badges/${file})`, width };
  };

  // Reconcile badgesDir with exactly the combinations the catalogue used:
  // write the needed strips and drop orphans. In check mode, touch nothing and
  // return the list of missing/stale/orphaned files instead.
  const sync = (check) => {
    const stale = [];
    const existing = (existsSync(badgesDir) ? readdirSync(badgesDir) : []).filter((f) => f.endsWith(".svg"));
    if (check) {
      for (const [file, svg] of needed) {
        const path = join(badgesDir, file);
        if (!existsSync(path) || readFileSync(path, "utf8") !== svg) stale.push(file);
      }
      for (const file of existing) if (!needed.has(file)) stale.push(`${file} (orphan)`);
    } else {
      mkdirSync(badgesDir, { recursive: true });
      for (const [file, svg] of needed) writeFileSync(join(badgesDir, file), svg);
      for (const file of existing) if (!needed.has(file)) rmSync(join(badgesDir, file));
    }
    return stale;
  };

  return { tagBadge, sync };
};
