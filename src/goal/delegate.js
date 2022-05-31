import object from "./object.js";

const graph = {
  async *[Symbol.asyncIterator]() {
    for await (const key of object) {
      yield key;
    }
  },

  async get(key) {
    const value = await object.get(key);
    return value;
  },
};

export default graph;
