import htmlFn from "./htmlFn.js";
import htmlFolder from "./htmlFolder.js";
import htmlObject from "./htmlObject.js";
import indexPages from "./indexPages.js";
import ObjectGraph from "./ObjectGraph.js";

const combined = new ObjectGraph({
  files: htmlFolder,
  function: htmlFn,
  object: htmlObject,
});

export default indexPages(combined);
