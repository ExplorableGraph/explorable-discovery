import rehype from "../rehype.js";

export default function (graph) {
  return {
    async *[Symbol.asyncIterator]() {
      for await (const key of graph) {
        yield key;
      }
    },

    async get(key) {
      const markdown = await graph.get(key);
      const html = markdown ? await rehype(markdown) : undefined;
      return html;
    },
  };
}
