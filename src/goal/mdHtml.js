import { MapValuesGraph } from "@explorablegraph/explorable";
import { marked } from "marked";

export default function (graph) {
  return new MapValuesGraph(
    graph,
    (buffer = marked(String(buffer))),
    ".md",
    ".html"
  );
}
