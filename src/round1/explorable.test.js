import assert from "node:assert";
import test from "node:test";
import graph from "./explorable.js";

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
  const david = await graph.get("David");
  assert.equal(david, "Hello, David!");
});
