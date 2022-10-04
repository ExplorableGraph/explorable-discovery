import htmlFiles from "./htmlfiles.js";
import htmlFn from "./htmlFn.js";
import htmlObject from "./htmlObject.js";
import indexPages from "./indexPages.js";
import ObjectGraph from "./ObjectGraph.js";

const combined = new ObjectGraph({
  files: htmlFiles,
  function: htmlFn,
  object: htmlObject,
});

export default indexPages(combined);
