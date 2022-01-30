import object from "./object.js";

export default {
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
