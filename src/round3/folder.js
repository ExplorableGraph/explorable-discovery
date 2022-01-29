import * as fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.resolve(moduleFolder, "../markdown");

const graph = {
  async *[Symbol.asyncIterator]() {
    const filenames = await fs.readdir(dirname);
    for await (const key of filenames) {
      yield key;
    }
  },

  async get(key) {
    let value;
    try {
      value = await fs.readFile(path.join(dirname, key));
    } catch (error) {
      if (error.code === "ENOENT") {
        value = undefined;
      } else {
        throw error;
      }
    }
    return value;
  },
};

export default graph;
