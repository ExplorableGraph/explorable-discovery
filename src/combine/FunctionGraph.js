export default class FunctionGraph {
  constructor(fn, keys) {
    this.fn = fn;
    this.keys = keys;
  }

  async *[Symbol.asyncIterator]() {
    yield* this.keys;
  }

  async get(key) {
    return this.fn(key);
  }
}
