import * as fs from "node:fs/promises";
import path from "node:path";

export default class FilesGraph {
  constructor(dirname) {
    this.dirname = path.resolve(process.cwd(), dirname);
  }

  async get(key) {
    const fileName = path.resolve(this.dirname, key);
    try {
      return await fs.readFile(fileName); // Return file contents
    } catch (/** @type {any} */ error) {
      if (error.code === "ENOENT" /* File not found */) {
        return undefined;
      }
      throw error;
    }
  }

  async keys() {
    return fs.readdir(this.dirname);
  }
}
