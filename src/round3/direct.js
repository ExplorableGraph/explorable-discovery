// Direct Explorable representation of a function and domain
const graph = {
  // Iterator that return the keys (domain) in this graph
  async *[Symbol.asyncIterator]() {
    const domain = ["Alice.md", "Bob.md", "Carol.md"];
    for (const key of domain) {
      yield key;
    }
  },

  // The function that returns the value for a given key
  // get("Alice.md") returns "Hello, **Alice**."
  async get(key) {
    const name = key.slice(0, key.length - 3);
    return `Hello, **${name}**.`;
  },
};

export default graph;
