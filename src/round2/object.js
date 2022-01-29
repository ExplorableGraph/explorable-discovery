const obj = {
  "Alice.md": "Hello, **Alice**.",
  "Bob.md": "Hello, **Bob**.",
  "Carol.md": "Hello, **Carol**.",
};

const graph = {
  async *[Symbol.asyncIterator]() {
    for await (const key of Object.keys(obj)) {
      yield key;
    }
  },

  async get(key) {
    const value = obj[key];
    return value;
  },
};

for await (const key of graph) {
  const value = await graph.get(key);
  console.log(`${key}: ${value}`);
}
