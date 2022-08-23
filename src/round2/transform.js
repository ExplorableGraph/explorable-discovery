import { marked } from "marked";

export default function transformMarkdownToHtml(graph) {
  return {
    async *[Symbol.asyncIterator]() {
      yield* graph;
    },

    async get(key) {
      const value = await graph.get(key);
      if (value) {
        const markdown = String(value);
        const html = markdown ? await marked(markdown) : undefined;
        return html;
      } else {
        return undefined;
      }
    },
  };
}
