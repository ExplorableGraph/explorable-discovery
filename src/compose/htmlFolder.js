import graph from "./folder.js";
import indexPages from "./indexPages.js";
import transform from "./transform.js";

export default indexPages(transform(graph));
