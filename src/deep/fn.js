import FunctionTree from "./FunctionTree.js";

export default new FunctionTree(
  (key) => {
    if (key.endsWith(".md")) {
      const name = key.slice(0, -3);
      return `Hello, **${name}**.`;
    }
  },
  ["Alice.md", "Bob.md", "Carol.md"]
);
