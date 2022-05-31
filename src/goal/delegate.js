import object from "./object.js";

const graph = {
  async *[Symbol.asyncIterator]() {
    yield* object;
  },

  async get(key) {
    const value = await object.get(key);
    return value;
  },
};

export default graph;
