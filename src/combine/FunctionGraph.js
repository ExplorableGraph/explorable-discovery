export default class FunctionGraph {
  constructor(fn, domain) {
    this.fn = fn;
    this.domain = domain;
  }

  async get(key) {
    return this.fn(key);
  }

  async keys() {
    return this.domain;
  }
}
