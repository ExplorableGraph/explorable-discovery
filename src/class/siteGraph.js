// import ObjectGraph from "./Object.js";
import FilesGraph from "./FilesGraph.js";
import transform from "./transform.js";

// export default new ObjectGraph({
//   "index.html": "<h1>Hello, world.</h1>",
//   "Alice.html": "Hello, Alice.",
// });

const markdownGraph = new FilesGraph("markdown");
const htmlGraph = transform(markdownGraph);

export default htmlGraph;
