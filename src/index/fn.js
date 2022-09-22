import FunctionGraph from "./FunctionGraph.js";

export default new FunctionGraph(
  (key) => {
    if (key.endsWith(".md")) {
      const name = key.slice(0, -3);
      return `Hello, **${name}**.`;
    }
  },
  ["David.md", "Eve.md", "Frank.md", "Grace.md"]
);
