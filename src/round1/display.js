import graph from "./explorable.js";

// Display the graph.
for await (const key of graph) {
  const value = await graph.get(key);
  console.log(`${key}: ${value}`);
}
