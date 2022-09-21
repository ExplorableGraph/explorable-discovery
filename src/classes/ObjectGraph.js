export default class ObjectGraph {
  constructor(obj) {
    this.obj = obj;
  }

  async *[Symbol.asyncIterator]() {
    yield* Object.keys(this.obj);
  }

  async get(key) {
    return this.obj[key];
  }
}
