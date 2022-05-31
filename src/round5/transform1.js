import { marked } from "marked";

export default function (graph) {
  return {
    async *[Symbol.asyncIterator]() {
      for await (const key of graph) {
        yield key;
      }
    },

    async get(key) {
      let markdown = await graph.get(key);
      markdown = String(markdown);
      const html = markdown ? await marked(markdown) : undefined;
      return html;
    },
  };
}
