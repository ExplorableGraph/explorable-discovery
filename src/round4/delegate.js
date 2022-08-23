import graph from "./object.js";

const delegate = {
  async *[Symbol.asyncIterator]() {
    for await (const key of graph) {
      yield key;
    }
  },

  async get(key) {
    return graph.get(key);
  },
};

export default delegate;
