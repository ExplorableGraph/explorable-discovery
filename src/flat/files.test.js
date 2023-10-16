import assert from "node:assert";
import test from "node:test";
import tree from "./files.js";

test("can get the keys of the tree", async () => {
  assert.deepEqual(await tree.keys(), ["Alice.md", "Bob.md", "Carol.md"]);
});

test("can get the value for a key", async () => {
  const alice = await tree.get("Alice.md");
  assert.equal(alice, "Hello, **Alice**.");
});

test("getting an unsupported key returns undefined", async () => {
  assert.equal(await tree.get("xyz"), undefined);
});
