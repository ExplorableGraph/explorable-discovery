import rehype from "../rehype.js";
import folder from "./folder.js";

const graph = {
  async *[Symbol.asyncIterator]() {
    for await (const key of folder) {
      yield key;
    }
  },

  async get(key) {
    const markdown = await folder.get(key);
    const html = markdown ? await rehype(markdown) : undefined;
    return html;
  },
};

export default graph;
