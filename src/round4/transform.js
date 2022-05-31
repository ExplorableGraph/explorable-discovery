import { marked } from "marked";
import folder from "./folder.js";

const graph = {
  async *[Symbol.asyncIterator]() {
    for await (const key of folder) {
      yield key;
    }
  },

  async get(key) {
    let markdown = await folder.get(key);
    markdown = String(markdown);
    const html = markdown ? await marked(markdown) : undefined;
    return html;
  },
};

export default graph;
