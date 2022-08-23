import { MapExtensionsGraph } from "@explorablegraph/explorable";
import { marked } from "marked";

export default function (graph) {
  return new MapExtensionsGraph(graph, (buffer) => marked(String(buffer)), {
    innerExtension: ".md",
    outerExtension: ".html",
  });
}
