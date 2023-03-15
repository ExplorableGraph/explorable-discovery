import { marked } from "marked";

export default function (graph) {
  return {
    async get(key) {
      if (key.endsWith(".html")) {
        const markdownKey = key.replace(/\.html$/, ".md");
        const markdown = await graph.get(markdownKey);
        if (markdown) {
          return marked(markdown.toString());
        }
      } else {
        return graph.get(key);
      }
    },

    async keys() {
      const markdownKeys = Array.from(await graph.keys());
      const htmlKeys = markdownKeys.map((key) => key.replace(/\.md$/, ".html"));
      return htmlKeys;
    },
  };
}
