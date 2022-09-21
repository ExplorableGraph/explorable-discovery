import * as fs from "node:fs/promises";
import path from "node:path";

export default class FilesGraph {
  constructor(dirname) {
    this.dirname = path.resolve(process.cwd(), dirname);
  }

  async *[Symbol.asyncIterator]() {
    const filenames = await fs.readdir(this.dirname);
    yield* filenames;
  }

  async get(key) {
    const filePath = path.resolve(this.dirname, key);

    let stats;
    try {
      stats = await fs.stat(filePath);
    } catch (/** @type {any} */ error) {
      if (error.code === "ENOENT" /* File not found */) {
        return undefined;
      }
      throw error;
    }

    return stats.isDirectory()
      ? new FilesGraph(filePath) // Return subdirectory as a graph
      : fs.readFile(filePath); // Return file contents
  }

  // async set(key, value) {
  //   const filename = path.resolve(this.dirname, key);
  //   await fs.writeFile(filename, value);
  // }

  async set(key, value) {
    // Ensure this directory exists.
    await fs.mkdir(this.dirname, { recursive: true });

    // Where are we going to write this value?
    const destPath = path.resolve(this.dirname, key ?? "");

    const isExplorable =
      typeof value?.[Symbol.asyncIterator] === "function" &&
      typeof value?.get === "function";
    if (isExplorable) {
      // Write out the contents of the value graph to the destination.
      const destGraph = key === undefined ? this : new FilesGraph(destPath);
      for await (const subKey of value) {
        const subValue = await value.get(subKey);
        await destGraph.set(subKey, subValue);
      }
    } else {
      // Write out the value as the contents of a file.
      await fs.writeFile(destPath, value);
    }
  }
}
