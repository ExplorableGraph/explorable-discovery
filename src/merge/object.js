import ObjectGraph from "./ObjectGraph.js";

export default new ObjectGraph({
  "Alice.md": "Hello, **Alice**.",
  "Bob.md": "Hello, **Bob**.",
  "Carol.md": "Hello, **Carol**.",
  more: {
    "David.md": "Hello, **David**.",
    "Eve.md": "Hello, **Eve**.",
  },
});
