import ObjectTree from "./ObjectTree.js";

export default new ObjectTree({
  "Alice.md": "Hello, **Alice**.",
  "Bob.md": "Hello, **Bob**.",
  "Carol.md": "Hello, **Carol**.",
  more: {
    "David.md": "Hello, **David**.",
    "Eve.md": "Hello, **Eve**.",
  },
});
