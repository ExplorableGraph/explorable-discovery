export default class Compose {
  constructor(...graphs) {
    this.graphs = graphs;
  }

  async *[Symbol.asyncIterator]() {
    for (const graph of this.graphs) {
      yield* graph;
    }
  }

  async get(key) {
    for (const graph of this.graphs) {
      const value = await graph.get(key);
      if (value !== undefined) {
        return value;
      }
    }
  }
}
