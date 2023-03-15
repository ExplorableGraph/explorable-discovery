// A representative portion of the domain over which the function is defined.
const domain = ["Alice.md", "Bob.md", "Carol.md"];

// Function to generate markdown for a key of the format "Alice.md"
function fn(key) {
  if (key.endsWith(".md")) {
    const name = key.slice(0, -3);
    return `Hello, **${name}**.`;
  }
}

export default {
  async get(key) {
    return fn(key);
  },

  async keys() {
    return domain;
  },
};
