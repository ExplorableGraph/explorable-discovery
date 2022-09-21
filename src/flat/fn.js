const keys = ["Alice.md", "Bob.md", "Carol.md"];

function fn(key) {
  if (key.endsWith(".md")) {
    const name = key.slice(0, -3);
    return `Hello, **${name}**.`;
  }
}

export default {
  async *[Symbol.asyncIterator]() {
    yield* keys;
  },

  async get(key) {
    return fn(key);
  },
};
