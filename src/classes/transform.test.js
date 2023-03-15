import assert from "node:assert";
import test from "node:test";
import object from "./object.js";
import transform from "./transform.js";

const graph = transform(object);

test("can get the keys of the graph", async () => {
  assert.deepEqual(await graph.keys(), [
    "Alice.html",
    "Bob.html",
    "Carol.html",
  ]);
});

test("can get the value for a key", async () => {
  const alice = await graph.get("Alice.html");
  assert.equal(alice, "<p>Hello, <strong>Alice</strong>.</p>\n");
});

test("getting a non-existent value returns undefined", async () => {
  const david = await graph.get("David.html");
  assert.equal(david, undefined);
});
