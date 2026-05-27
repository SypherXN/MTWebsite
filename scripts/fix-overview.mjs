import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";
const dir = "src/content/projects";
for (const f of readdirSync(dir)) {
  if (!f.endsWith(".md")) continue;
  let c = readFileSync(join(dir, f), "utf8");
  const sm = c.match(/^summary: "([^"]+)"/m);
  const summary = sm ? sm[1] : "";
  c = c.replace("## Overview\n\nundefined", "## Overview\n\n" + summary);
  writeFileSync(join(dir, f), c);
}
console.log("fixed");
