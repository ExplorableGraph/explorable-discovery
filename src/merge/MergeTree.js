export default class MergeTree {
  constructor(...trees) {
    this.trees = trees;
  }

  async get(key) {
    const subtrees = [];
    for (const tree of this.trees) {
      const value = await tree.get(key);

      const isAsyncDictionary =
        typeof value?.get === "function" && typeof value?.keys === "function";

      if (value !== undefined) {
        if (isAsyncDictionary) {
          subtrees.push(value);
        } else {
          return value;
        }
      }
    }

    return subtrees.length === 0
      ? undefined
      : subtrees.length === 1
      ? subtrees[0]
      : new this.constructor(...subtrees);
  }

  async keys() {
    const keys = new Set();
    for (const tree of this.trees) {
      for (const key of await tree.keys()) {
        keys.add(key);
      }
    }
    return keys;
  }
}
