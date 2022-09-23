import { ObjectGraph } from "@explorablegraph/explorable";
import ComposeGraph from "./ComposeGraph.js";
import defaultMarkdown from "./defaultMarkdown.js";
import folder from "./folder.js";
import indexPages from "./indexPages.js";
import transform from "./transform.js";

const object = new ObjectGraph({
  "Frank.md": undefined,
  more: {
    "Gail.md": undefined,
  },
});

const composed = new ComposeGraph(folder, object, defaultMarkdown);

export default new indexPages(transform(composed));
