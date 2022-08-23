import assert from "node:assert";
import test from "node:test";

// Direct Explorable representation of a function and domain
const graph = {
  // Iterator that return the keys (domain) in this graph
  async *[Symbol.asyncIterator]() {
    const domain = ["Alice", "Bob", "Carol"];
    for (const key of domain) {
      yield key;
    }
  },

  // Function that returns the value for a given key
  // get("Alice") returns "Hello, Alice!"
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
