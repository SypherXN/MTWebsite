import fs from "node:fs";
import path from "node:path";

const dir = path.join("src", "content", "projects");
const pattern =
  /<figure class="media-frame" style="--frame-bg: url\([^)]+\)">\s*<div class="media-frame-bg" aria-hidden="true"><\/div>\s*/g;

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".md"))) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, "utf8");
  const next = content.replace(pattern, '<figure class="media-frame">');
  if (next !== content) {
    fs.writeFileSync(filePath, next);
    console.log("updated", file);
  }
}
