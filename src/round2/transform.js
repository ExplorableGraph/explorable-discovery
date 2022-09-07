import { marked } from "marked";

export default function transform(graph) {
  return {
    async *[Symbol.asyncIterator]() {
      for await (const markdownKey of graph) {
        const htmlKey = markdownKey.replace(/\.md$/, ".html");
        yield htmlKey;
      }
    },

    async get(htmlKey) {
      const markdownKey = htmlKey.replace(/\.html$/, ".md");
      let markdown = await graph.get(markdownKey);
      if (markdown === undefined) {
        return undefined;
      }
      markdown = markdown.toString();
      return marked(markdown);
    },
  };
}
