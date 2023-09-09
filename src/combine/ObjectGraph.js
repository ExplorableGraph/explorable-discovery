export default class ObjectGraph {
  constructor(obj) {
    this.obj = obj;
  }

  async get(key) {
    const value = this.obj[key];
    const isPlainObject =
      typeof value === "object" &&
      Object.getPrototypeOf(value) === Object.prototype;
    const isAsyncDictionary =
      typeof value?.get === "function" && typeof value?.keys === "function";
    return isPlainObject && !isAsyncDictionary
      ? new this.constructor(value)
      : value;
  }

  async keys() {
    return Object.keys(this.obj);
  }

  async set(key, value) {
    if (value === undefined) {
      delete this.obj[key];
    } else {
      this.obj[key] = value;
    }
  }
}
