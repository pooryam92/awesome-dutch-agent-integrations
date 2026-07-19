// readme.mjs — splice a generated block between the CATALOGUE markers,
// preserving the hand-authored prose that surrounds them.

const BEGIN = "<!-- BEGIN CATALOGUE";
const END = "<!-- END CATALOGUE -->";

// Returns the full README text with the region between the markers replaced by
// `block`. Throws if the markers are missing or out of order.
export const spliceCatalogue = (readme, block) => {
  const beginIdx = readme.indexOf(BEGIN);
  const endIdx = readme.indexOf(END);
  if (beginIdx === -1 || endIdx === -1 || endIdx < beginIdx) {
    throw new Error(`README.md must contain the "${BEGIN} … ${END}" markers.`);
  }
  const beginLineEnd = readme.indexOf("\n", beginIdx); // keep the BEGIN marker line
  const before = readme.slice(0, beginLineEnd + 1);
  const after = readme.slice(endIdx); // keep the END marker line onward
  return `${before}\n${block}\n\n${after}`;
};
