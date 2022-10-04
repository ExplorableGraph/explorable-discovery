import htmlFn from "./htmlFn.js";
import htmlFolder from "./htmlFolder.js";
import htmlObject from "./htmlObject.js";
import indexPages from "./indexPages.js";
import MergeGraph from "./MergeGraph.js";

const merged = new MergeGraph(htmlFolder, htmlFn, htmlObject);

export default indexPages(merged);
