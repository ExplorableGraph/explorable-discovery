import assert from "node:assert";
import test from "node:test";
import graph from "./fn.js";

test("can get the keys of the graph", async () => {
  assert.deepEqual(await graph.keys(), ["Alice.md", "Bob.md", "Carol.md"]);
});

test("can get the value for a key", async () => {
  const alice = await graph.get("Alice.md");
  assert.equal(alice, "Hello, **Alice**.");
});

test("getting an unsupported key returns undefined", async () => {
  assert.equal(await graph.get("xyz"), undefined);
});
