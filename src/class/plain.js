// Resolve an asynchronous explorable graph to an in-memory object.
// Also converts Buffer values to strings.
export default async function plain(graph) {
  const result = {};
  // Get each of the values from the graph.
  for await (const key of graph) {
    const value = await graph.get(key);

    // Is the value itself an explorable graph?
    const isExplorable =
      typeof value?.[Symbol.asyncIterator] === "function" &&
      typeof value?.get === "function";

    result[key] = isExplorable
      ? await plain(value) // Traverse into explorable value.
      : value instanceof Buffer
      ? value.toString()
      : value;
  }
  return result;
}
