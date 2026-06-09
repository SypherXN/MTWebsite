/** Inject a blurred backdrop into gallery figures from each image src. */
export function rehypeMediaFrameBg() {
  return (tree) => {
    walk(tree, (node) => {
      if (node.type !== "element" || node.tagName !== "figure") return;

      const classes = classList(node.properties?.className);
      if (!classes.includes("media-frame")) return;

      const img = node.children?.find(
        (child) => child.type === "element" && child.tagName === "img",
      );
      const src = img?.properties?.src;
      if (typeof src !== "string" || !src) return;
      if (
        node.children?.some(
          (child) =>
            child.type === "element" &&
            classList(child.properties?.className).includes("media-frame-bg"),
        )
      ) {
        return;
      }

      node.properties ??= {};
      node.properties.style = `--frame-bg: url('${src.replace(/'/g, "%27")}')`;

      const bg = {
        type: "element",
        tagName: "div",
        properties: {
          className: ["media-frame-bg"],
          ariaHidden: "true",
        },
        children: [],
      };

      const imgIndex = node.children.indexOf(img);
      node.children.splice(imgIndex, 0, bg);
    });
  };
}

function classList(value) {
  if (Array.isArray(value)) return value.map(String);
  if (typeof value === "string") return value.split(/\s+/).filter(Boolean);
  return [];
}

function walk(node, visit) {
  visit(node);
  if (Array.isArray(node.children)) {
    for (const child of node.children) walk(child, visit);
  }
}
