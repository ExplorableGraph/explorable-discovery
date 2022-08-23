import { marked } from "marked";

export default function (graph) {
  return {
    async *[Symbol.asyncIterator]() {
      for await (const key of graph) {
        yield key;
      }
    },

    async get(key) {
      const value = await graph.get(key);
      const markdown = String(value);
      const html = markdown ? await marked(markdown) : undefined;
      return html;
    },
  };
}
