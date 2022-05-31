import * as fs from "fs/promises";
import path from "path";

export default class FilesGraph {
  #dirname;

  constructor(dirname) {
    this.#dirname = dirname;
  }

  async *[Symbol.asyncIterator]() {
    const filenames = await fs.readdir(this.#dirname);
    for await (const key of filenames) {
      yield key;
    }
  }

  async get(key) {
    let value;
    try {
      value = await fs.readFile(path.join(this.#dirname, key));
    } catch (error) {
      if (error.code === "ENOENT") {
        value = undefined;
      } else {
        throw error;
      }
    }
    return value;
  }

  async set(key, value) {
    // Ensure the directory exists.
    await fs.mkdir(this.#dirname, { recursive: true });

    // Write out the value as the contents of a file.
    const filePath = path.join(this.#dirname, key);
    const data = value.toString();
    await fs.writeFile(filePath, data);
  }
}
