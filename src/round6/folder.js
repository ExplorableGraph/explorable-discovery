import { ExplorableFiles } from "@explorablegraph/explorable";
import path from "path";
import { fileURLToPath } from "url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.resolve(moduleFolder, "../markdown");

const graph = new ExplorableFiles(dirname);

export default graph;
