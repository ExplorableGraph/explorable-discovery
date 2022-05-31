import ComposeGraph from "./ComposeGraph.js";
import htmlFiles from "./htmlFiles.js";
import indexHtml from "./indexHtml.js";
import ObjectGraph from "./ObjectGraph.js";

const indexFiles = new ObjectGraph({
  "index.html": indexHtml(htmlFiles),
});

export default new ComposeGraph(indexFiles, htmlFiles);
