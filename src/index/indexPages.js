export default function indexPages(graph) {
  return {
    async get(key) {
      let value = await graph.get(key);
      if (value === undefined && key === "index.html") {
        // No index page defined; create one
        return indexPage(graph);
      } else {
        // If we're returning an explorable subgraph, add index pages to it too.
        const isExplorable =
          typeof value?.get === "function" && typeof value?.keys === "function";
        return isExplorable ? indexPages(value) : value;
      }
    },

    async keys() {
      // Yield the keys of the graph and remember what they are.
      const keys = new Set(await graph.keys());
      // Add index.html to the set of keys.
      keys.add("index.html");
      return keys;
    },
  };
}

// Return a default index page for the given graph.
async function indexPage(graph) {
  // Collect all the keys in the graph.
  const keys = [];
  for (const key of await graph.keys()) {
    // Ignore the key `index.html`
    if (key !== "index.html") {
      keys.push(key);
    }
  }

  // Map the keys to HTML links.
  const links = keys.map((key) => {
    const basename = key.replace(/\..+$/, "");
    return `      <li><a href="${key}">${basename}</a></li>`;
  });

  // Incorporate the link HTML into a simple page.
  const html = `<!DOCTYPE html>
<html>
  <body>
    <ul>
${links.join("\n")}
    </ul>
  </body>
</html>`;
  return html;
}
