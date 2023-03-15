export default class ObjectGraph {
  constructor(obj) {
    this.obj = obj;
  }

  async get(key) {
    const value = this.obj[key];
    const isPlainObject =
      typeof value === "object" &&
      Object.getPrototypeOf(value) === Object.prototype;
    const isExplorable =
      typeof value?.get === "function" && typeof value?.keys === "function";
    return isPlainObject && !isExplorable ? new this.constructor(value) : value;
  }

  async keys() {
    return Object.keys(this.obj);
  }
}
