import ComposeGraph from "./ComposeGraph.js";
import htmlFn from "./htmlFn.js";
import htmlFolder from "./htmlFolder.js";
import htmlObject from "./htmlObject.js";
import indexPages from "./indexPages.js";

const composed = new ComposeGraph(htmlFolder, htmlFn, htmlObject);

export default indexPages(composed);
