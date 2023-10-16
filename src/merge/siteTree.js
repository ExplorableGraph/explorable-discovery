import htmlFiles from "./htmlFiles.js";
import htmlFn from "./htmlFn.js";
import htmlObject from "./htmlObject.js";
import indexPages from "./indexPages.js";
import MergeTree from "./MergeTree.js";

const merged = new MergeTree(htmlObject, htmlFiles, htmlFn);

export default indexPages(merged);
