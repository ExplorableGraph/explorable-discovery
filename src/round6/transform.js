import { MapGraph } from "@explorablegraph/explorable";
import rehype from "../rehype.js";

export default function (graph) {
  return new MapGraph(graph, rehype);
}
