import path from "path";

export default class MapKeysValuesGraph {
  constructor(graph, mapFn, innerExtension, outerExtension) {
    this.graph = graph;
    this.mapFn = mapFn;
    this.innerExtension = innerExtension;
    this.outerExtension = outerExtension;
  }

  async *[Symbol.asyncIterator]() {
    for await (const innerKey of this.graph) {
      const outerKey = changeExtension(
        innerKey,
        this.innerExtension,
        this.outerExtension
      );
      yield outerKey;
    }
  }

  async get(outerKey) {
    const innerKey = changeExtension(
      outerKey,
      this.outerExtension,
      this.innerExtension
    );
    const value = await this.graph.get(innerKey);
    return value ? this.mapFn(value) : undefined;
  }
}

function changeExtension(key, oldExtension, newExtension) {
  return path.extname(key) === oldExtension
    ? `${path.basename(key, oldExtension)}${newExtension}`
    : key;
}
