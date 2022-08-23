const obj = {
  "Alice.md": "Hello, **Alice**.",
  "Bob.md": "Hello, **Bob**.",
  "Carol.md": "Hello, **Carol**.",
};

// Direct Explorable representation of a function and domain
const graph = {
  // The domain: an iteration of keys
  async *[Symbol.asyncIterator]() {
    const domain = Object.keys(obj);
    for (const key of domain) {
      yield key;
    }
  },

  // The function: returns the value for a given key
  async get(key) {
    return obj[key];
  },
};

for await (const key of graph) {
  const value = await graph.get(key);
  console.log(`${key}: ${value}`);
}
