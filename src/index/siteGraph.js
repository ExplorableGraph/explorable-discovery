import ComposeGraph from "./ComposeGraph.js";
import fn from "./fn.js";
import index from "./index.js";
import markdownFolder from "./markdownfiles.js";
import ObjectGraph from "./ObjectGraph.js";
import transform from "./transform.js";

const markdownGraph = new ComposeGraph(markdownFolder, fn);
const htmlGraph = transform(markdownGraph);
const indexHtml = index(htmlGraph);

export default new ObjectGraph({
  "index.html": indexHtml,
  people: htmlGraph,
});
