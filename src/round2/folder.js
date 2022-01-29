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
    const value = await fs.readFile(path.join(dirname, key));
    return value;
  },
};

for await (const key of graph) {
  const value = await graph.get(key);
  console.log(`${key}: ${value}`);
}
