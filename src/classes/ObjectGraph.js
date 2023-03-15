export default class ObjectGraph {
  constructor(obj) {
    this.obj = obj;
  }

  async get(key) {
    return this.obj[key];
  }

  async keys() {
    return Object.keys(this.obj);
  }
}
