import path from "path";
import { fileURLToPath } from "url";
import FilesGraph from "./FilesGraph.js";
import siteGraph from "./siteGraph.js";

const modulePath = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(modulePath, "dist");
const distGraph = new FilesGraph(distPath);

for await (const key of siteGraph) {
  const html = await siteGraph.get(key);
  await distGraph.set(key, html);
}
