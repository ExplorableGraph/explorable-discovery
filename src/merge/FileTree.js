import * as fs from "node:fs/promises";
import path from "node:path";

export default class FileTree {
  constructor(dirname) {
    this.dirname = path.resolve(process.cwd(), dirname);
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
      ? new this.constructor(filePath) // Return subdirectory as a tree
      : fs.readFile(filePath); // Return file contents
  }

  async keys() {
    return fs.readdir(this.dirname);
  }

  async set(key, value) {
    // Where are we going to write this value?
    const destPath = path.resolve(this.dirname, key ?? "");

    if (value === undefined) {
      // Delete the file or directory.
      let stats;
      try {
        stats = await stat(destPath);
      } catch (/** @type {any} */ error) {
        if (error.code === "ENOENT" /* File not found */) {
          return;
        }
        throw error;
      }
      if (stats.isDirectory()) {
        // Delete directory.
        await fs.rm(destPath, { recursive: true });
      } else if (stats) {
        // Delete file.
        await fs.unlink(destPath);
      }
    }

    const isAsyncDictionary =
      typeof value?.get === "function" && typeof value?.keys === "function";

    if (isAsyncDictionary) {
      // Write out the contents of the value tree to the destination.
      const destTree = new this.constructor(destPath);
      for (const subKey of await value.keys()) {
        const subValue = await value.get(subKey);
        await destTree.set(subKey, subValue);
      }
    } else {
      // Ensure this directory exists.
      await fs.mkdir(this.dirname, { recursive: true });
      // Write out the value as the contents of a file.
      await fs.writeFile(destPath, value);
    }
  }
}
