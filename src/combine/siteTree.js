import htmlFiles from "./htmlFiles.js";
import htmlFn from "./htmlFn.js";
import htmlObject from "./htmlObject.js";
import indexPages from "./indexPages.js";
import ObjectTree from "./ObjectTree.js";

const combined = new ObjectTree({
  files: htmlFiles,
  function: htmlFn,
  object: htmlObject,
});

export default indexPages(combined);
