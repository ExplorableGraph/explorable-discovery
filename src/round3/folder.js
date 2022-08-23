import { FilesGraph } from "@explorablegraph/explorable";
import path from "path";
import { fileURLToPath } from "url";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const dirname = path.resolve(moduleFolder, "../markdown");

export default new FilesGraph(dirname);
