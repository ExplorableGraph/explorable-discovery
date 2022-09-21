// import distFolder from "./distFolder.js";
// import siteGraph from "./siteGraph.js";

export default async function copy(graph1, graph2) {
  for await (const key of graph1) {
    const value = await graph1.get(key);
    await graph2.set(key, value);
  }
  return graph2;
}
