import { MapValuesGraph } from "@explorablegraph/explorable";
import rehype from "../rehype.js";

export default function (graph) {
  return new MapValuesGraph(graph, rehype, ".md", ".html");
}
