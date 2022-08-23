import assert from "node:assert";
import test from "node:test";

// Explorable graph representation of a function and a domain
const graph = {
  // Iterator returns the keys (domain) in this graph.
  async *[Symbol.asyncIterator]() {
    const domain = ["Alice", "Bob", "Carol"];
    for (const key of domain) {
      yield key;
    }
  },

  // Get function returns the value for a given key.
  async get(key) {
    return `Hello, ${key}!`;
  },
};

test("can iterate over the keys of the graph", async () => {
  const keys = [];
  for await (const key of graph) {
    keys.push(key);
  }
  assert.deepEqual(keys, ["Alice", "Bob", "Carol"]);
});

test("can get the value for a key", async () => {
  const alice = await graph.get("Alice");
  assert.equal(alice, "Hello, Alice!");
});

test("can get the value for a key that is not included by the iterator", async () => {
  const alice = await graph.get("David");
  assert.equal(alice, "Hello, David!");
});
