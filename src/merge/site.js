import htmlFiles from "./htmlfiles.js";
import htmlFn from "./htmlFn.js";
import htmlObject from "./htmlObject.js";
import indexPages from "./indexPages.js";
import MergeGraph from "./MergeGraph.js";

const merged = new MergeGraph(htmlObject, htmlFiles, htmlFn);

export default indexPages(merged);
