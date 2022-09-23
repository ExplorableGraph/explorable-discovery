import FunctionGraph from "./FunctionGraph.js";

function fn(key) {
  if (key.endsWith(".md") && key !== "index.md") {
    const name = key.slice(0, -3);
    return `Hello, **${name}**.`;
  }
}

const domain = ["David.md", "Eve.md", "Frank.md", "Grace.md"];

export default new FunctionGraph(fn, domain);
