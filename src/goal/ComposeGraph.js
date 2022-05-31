export default class ComposeGraph {
  constructor(...graphs) {
    this.graphs = graphs;
  }

  async *[Symbol.asyncIterator]() {
    // Use a Set to de-duplicate the keys from the graphs.
    const set = new Set();
    for (const graph of this.graphs) {
      for await (const key of graph) {
        if (!set.has(key)) {
          set.add(key);
          yield key;
        }
      }
    }
  }

  async get(key) {
    for (const graph of this.graphs) {
      const value = await graph.get(key);
      if (value !== undefined) {
        return value;
      }
    }
    return undefined;
  }
}
