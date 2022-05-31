import { marked } from "marked";
import path from "path";
import { fileURLToPath } from "url";
import FilesGraph from "./FilesGraph.js";
import MapKeysValuesGraph from "./MapKeysValuesGraph.js";

const modulePath = path.dirname(fileURLToPath(import.meta.url));
const markdownPath = path.resolve(modulePath, "markdown");
const markdownFiles = new FilesGraph(markdownPath);
const htmlFiles = new MapKeysValuesGraph(
  markdownFiles,
  (buffer) => marked(String(buffer)),
  ".md",
  ".html"
);
export default htmlFiles;
