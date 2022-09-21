import { marked } from "marked";

export default function transform(graph) {
  return {
    async *[Symbol.asyncIterator]() {
      for await (const markdownKey of graph) {
        const htmlKey = markdownKey.replace(/\.md$/, ".html");
        yield htmlKey;
      }
    },

    async get(key) {
      if (key.endsWith(".html")) {
        const markdownKey = key.replace(/\.html$/, ".md");
        const markdown = await graph.get(markdownKey);
        if (markdown) {
          return marked(markdown.toString());
        }
      } else {
        const value = await graph.get(key);
        const isExplorable =
          typeof value?.[Symbol.asyncIterator] === "function" &&
          typeof value?.get === "function";
        return isExplorable ? transform(value) : value;
      }
    },
  };
}
