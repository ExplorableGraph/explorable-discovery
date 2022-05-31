import path from "path";
import { fileURLToPath } from "url";
import FilesGraph from "./FilesGraph.js";
import MdHtmlGraph from "./MdHtmlGraph.js";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.resolve(moduleFolder, "markdown");
const mdFiles = new FilesGraph(dirname);
const htmlFiles = new MdHtmlGraph(mdFiles);

export default htmlFiles;
