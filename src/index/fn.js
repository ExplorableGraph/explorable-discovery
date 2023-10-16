import FunctionTree from "./FunctionTree.js";

export default new FunctionTree(
  (key) => {
    if (key.endsWith(".md")) {
      const name = key.slice(0, -3);
      return `Hello, **${name}**.`;
    }
  },
  ["David.md", "Eve.md", "Frank.md", "Grace.md"]
);
