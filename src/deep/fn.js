import FunctionGraph from "./FunctionGraph.js";

export default new FunctionGraph(
  (key) => {
    if (key.endsWith(".md")) {
      const name = key.slice(0, -3);
      return `Hello, **${name}**.`;
    }
  },
  ["Alice.md", "Bob.md", "Carol.md"]
);
