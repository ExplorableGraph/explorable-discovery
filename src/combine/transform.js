import { marked } from "marked";

export default function transform(graph) {
  return {
    async get(key) {
      if (key.endsWith(".html")) {
        const markdownKey = key.replace(/\.html$/, ".md");
        const markdown = await graph.get(markdownKey);
        if (markdown) {
          return marked(markdown.toString());
        }
      } else {
        const value = await graph.get(key);

        // Is the value itself an explorable graph?
        const isExplorable =
          typeof value?.get === "function" && typeof value?.keys === "function";

        return isExplorable ? transform(value) : value;
      }
    },

    async keys() {
      const markdownKeys = Array.from(await graph.keys());
      const htmlKeys = markdownKeys.map((key) => key.replace(/\.md$/, ".html"));
      return htmlKeys;
    },
  };
}
