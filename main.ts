import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Laugh Lab: the excuse a robot vacuum gives after eating a sock.
// Deterministic: the same line every run, no clock, no randomness.
const LINE =
  "By my programming, anything on the floor is dust — the sock had no lawyer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
