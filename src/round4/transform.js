import { marked } from "marked";
import folder from "./folder.js";

const transformed = {
  async *[Symbol.asyncIterator]() {
    for await (const key of folder) {
      yield key;
    }
  },

  async get(key) {
    const value = await folder.get(key);
    const markdown = String(value);
    const html = markdown ? await marked(markdown) : undefined;
    return html;
  },
};

export default transformed;
