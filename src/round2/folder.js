// import * as fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.resolve(moduleFolder, "../data/folder");

export default {
  async *[Symbol.asyncIterator]() {},

  async get(key) {},
};
