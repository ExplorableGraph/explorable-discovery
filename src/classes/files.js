import path from "node:path";
import { fileURLToPath } from "node:url";
import FilesGraph from "./FilesGraph.js";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.resolve(moduleFolder, "markdown");

export default new FilesGraph(dirname);
