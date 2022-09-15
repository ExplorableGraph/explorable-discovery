export default async function plain(graph) {
  const result = {};
  for await (const key of graph) {
    const value = await graph.get(key);
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
