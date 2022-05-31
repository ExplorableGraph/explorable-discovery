import path from "path";
import { fileURLToPath } from "url";
import FilesGraph from "./FilesGraph.js";
import htmlFiles from "./htmlFiles.js";

const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const distFiles = new FilesGraph(path.join(moduleFolder, "dist"));

for await (const key of htmlFiles) {
  const html = await htmlFiles.get(key);
  await distFiles.set(key, html);
}
