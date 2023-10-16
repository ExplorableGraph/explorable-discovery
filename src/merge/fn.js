import FunctionTree from "./FunctionTree.js";

function fn(key) {
  if (key.endsWith(".md") && key !== "index.md") {
    const name = key.slice(0, -3);
    return `Hello, **${name}**.`;
  }
}

const domain = ["Kelly.md", "Larry.md", "Michelle.md"];

export default new FunctionTree(fn, domain);
