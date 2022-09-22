export default class ObjectGraph {
  constructor(obj) {
    this.obj = obj;
  }

  async *[Symbol.asyncIterator]() {
    yield* Object.keys(this.obj);
  }

  async get(key) {
    const value = this.obj[key];
    const isPlainObject =
      typeof value === "object" &&
      Object.getPrototypeOf(value) === Object.prototype;
    return isPlainObject ? new ObjectGraph(value) : value;
  }
}
