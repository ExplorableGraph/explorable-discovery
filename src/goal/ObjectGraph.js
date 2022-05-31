export default class ObjectGraph {
  constructor(object) {
    this.object = object;
  }

  async *[Symbol.asyncIterator]() {
    for await (const key of Object.keys(this.object)) {
      yield key;
    }
  }

  async get(key) {
    return this.object[key];
  }
}
