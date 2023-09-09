export default class MergeGraph {
  constructor(...graphs) {
    this.graphs = graphs;
  }

  async get(key) {
    const subgraphs = [];
    for (const graph of this.graphs) {
      const value = await graph.get(key);

      const isAsyncDictionary =
        typeof value?.get === "function" && typeof value?.keys === "function";

      if (value !== undefined) {
        if (isAsyncDictionary) {
          subgraphs.push(value);
        } else {
          return value;
        }
      }
    }

    return subgraphs.length === 0
      ? undefined
      : subgraphs.length === 1
      ? subgraphs[0]
      : new this.constructor(...subgraphs);
  }

  async keys() {
    const keys = new Set();
    for (const graph of this.graphs) {
      for (const key of await graph.keys()) {
        keys.add(key);
      }
    }
    return keys;
  }
}
