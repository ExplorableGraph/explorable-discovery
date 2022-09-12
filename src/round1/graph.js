// Explorable graph representation of a function and a domain
export default {
  // Iterator returns the keys (domain) in this graph.
  async *[Symbol.asyncIterator]() {
    yield* ["Alice.md", "Bob.md", "Carol.md"];
  },

  // Get function returns the value for a given key.
  async get(key) {
    if (key.endsWith(".md")) {
      const name = key.replace(/\.md$/, "");
      return `Hello, **${name}**.`;
    }
  },
};
