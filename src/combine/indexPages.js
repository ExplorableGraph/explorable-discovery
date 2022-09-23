export default function indexPages(graph) {
  return {
    async *[Symbol.asyncIterator]() {
      // Yield the keys of the graph and remember what they are.
      const keys = new Set();
      for await (const key of graph) {
        keys.add(key);
        yield key;
      }

      // If we haven't seen index.html yet, yield that now.
      if (!keys.has("index.html")) {
        yield "index.html";
      }
    },

    async get(key) {
      let value = await graph.get(key);
      if (value === undefined && key === "index.html") {
        // No index page defined; create one
        return indexPage(graph);
      } else {
        // If we're returning an explorable subgraph, add index pages to it too.
        const isExplorable =
          typeof value?.[Symbol.asyncIterator] === "function" &&
          typeof value?.get === "function";
        return isExplorable ? indexPages(value) : value;
      }
    },
  };
}

// Return a default index page for the given graph.
async function indexPage(graph) {
  // Collect all the keys in the graph.
  const keys = [];
  for await (const key of graph) {
    // Ignore the key `index.html`
    if (key !== "index.html") {
      keys.push(key);
    }
  }

  // Sort the keys.
  keys.sort();

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
