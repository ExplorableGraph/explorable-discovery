import path from "node:path";
import { fileURLToPath } from "node:url";
import FileTree from "./FileTree.js";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.resolve(moduleFolder, "dist");

export default new FileTree(dirname);
