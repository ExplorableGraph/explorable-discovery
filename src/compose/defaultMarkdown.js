const defaultMarkdownGraph = {
  async *[Symbol.asyncIterator]() {
    // This graph does not expose any keys of its own.
  },

  async get(key) {
    if (key.endsWith(".md")) {
      if (key !== "index.md") {
        const name = key.replace(/\.md$/, "");
        return `Hello, **${name}**.`;
      }
    } else if (!key.includes(".")) {
      // Assume the key returns another graph of the same type.
      return defaultMarkdownGraph;
    }
  },
};

export default defaultMarkdownGraph;
