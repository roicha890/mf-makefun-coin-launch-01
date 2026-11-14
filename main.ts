// Copies LAUNCH.json from this repository to the grader's output directory.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const launch = readFileSync(join(botDir, "LAUNCH.json"), "utf8");
JSON.parse(launch); // fail fast if LAUNCH.json is not valid JSON
mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "LAUNCH.json"), join(outDir, "LAUNCH.json"));
