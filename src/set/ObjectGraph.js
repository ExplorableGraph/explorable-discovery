export default class ObjectGraph {
  constructor(obj) {
    this.obj = obj;
  }

  async *[Symbol.asyncIterator]() {
    yield* Object.keys(this.obj);
  }

  async get(key) {
    const value = this.obj[key];

    // Is the value itself an explorable graph?
    const isExplorable =
      typeof value?.[Symbol.asyncIterator] === "function" &&
      typeof value?.get === "function";

    return isExplorable ? new ObjectGraph(value) : value;
  }

  // async set(key, value) {
  //   this.obj[key] = value;
  // }

  async set(key, value) {
    if (key === undefined) {
      // Apply the value as updates on top of this graph.
      for await (const subKey of value) {
        const subValue = await value.get(subKey);
        await this.set(subKey, subValue);
      }
    } else {
      // Set the value for the key.
      this.object[key] = value;
    }
  }
}
