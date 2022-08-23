import * as fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.resolve(moduleFolder, "../markdown");

export default {
  async *[Symbol.asyncIterator]() {
    yield* await fs.readdir(dirname);
  },

  async get(key) {
    let value;
    try {
      value = await fs.readFile(path.join(dirname, key));
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }
    return value;
  },
};
