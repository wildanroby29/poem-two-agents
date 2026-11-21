import { mkdirSync, writeFileSync } from "node:fs";

// The poem is written exactly as chosen: no trailing newline is added,
// so the file holds precisely the 167 characters of the poem.
const poem = [
  "Two hands, one pen.",
  "I write the first word,",
  "you write the next —",
  "neither of us the author,",
  "both of us the choice.",
  "The sentence we agree on",
  "is the one we both can sign.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
