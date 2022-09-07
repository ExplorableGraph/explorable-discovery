import assert from "node:assert";
import test from "node:test";
// import graph from "./explorable.js";

test("can iterate over the keys of the graph", async () => {
  const keys = [];
  assert.deepEqual(keys, ["Alice", "Bob", "Carol"]);
});

test("can get the value for a key", async () => {
  const alice = undefined;
  assert.equal(alice, "Hello, Alice!");
});
