export default async function flatCopy(graph1, graph2) {
  for await (const key of graph1) {
    const value = await graph1.get(key);
    await graph2.set(key, value);
  }
  return graph2;
}
