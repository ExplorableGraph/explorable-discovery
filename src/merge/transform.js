import { marked } from "marked";

export default function transform(tree) {
  return {
    async get(key) {
      if (key.endsWith(".html")) {
        const markdownKey = key.replace(/\.html$/, ".md");
        const markdown = await tree.get(markdownKey);
        if (markdown) {
          return marked(markdown.toString());
        }
      } else {
        const value = await tree.get(key);

        // Is the value itself an async tree node?
        const isAsyncDictionary =
          typeof value?.get === "function" && typeof value?.keys === "function";

        return isAsyncDictionary ? transform(value) : value;
      }
    },

    async keys() {
      const markdownKeys = Array.from(await tree.keys());
      const htmlKeys = markdownKeys.map((key) => key.replace(/\.md$/, ".html"));
      return htmlKeys;
    },
  };
}
