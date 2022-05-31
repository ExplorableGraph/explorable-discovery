export default class MapValuesGraph {
  constructor(graph, mapFn) {
    this.graph = graph;
    this.mapFn = mapFn;
  }

  async *[Symbol.asyncIterator]() {
    yield* this.graph;
  }

  async get(key) {
    const value = await this.graph.get(key);
    return value ? this.mapFn(value) : undefined;
  }
}
