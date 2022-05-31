import * as fs from "fs/promises";
import path from "path";

export default class FilesGraph {
  constructor(dirname) {
    this.dirname = dirname;
  }

  async *[Symbol.asyncIterator]() {
    const filenames = await fs.readdir(this.dirname);
    for await (const key of filenames) {
      yield key;
    }
  }

  async get(key) {
    const filePath = path.join(this.dirname, key);
    try {
      return fs.readFile(filePath);
    } catch (error) {
      if (error.code === "ENOENT") {
        return undefined;
      } else {
        throw error;
      }
    }
  }

  async set(key, value) {
    // Ensure the directory exists.
    await fs.mkdir(this.dirname, { recursive: true });

    // Write out the value as the contents of a file.
    const filePath = path.join(this.dirname, key);
    await fs.writeFile(filePath, value);
  }
}
