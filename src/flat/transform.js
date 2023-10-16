import { marked } from "marked";

export default function (tree) {
  return {
    async get(key) {
      if (key.endsWith(".html")) {
        const markdownKey = key.replace(/\.html$/, ".md");
        const markdown = await tree.get(markdownKey);
        if (markdown) {
          return marked(markdown.toString());
        }
      } else {
        return tree.get(key);
      }
    },

    async keys() {
      const markdownKeys = Array.from(await tree.keys());
      const htmlKeys = markdownKeys.map((key) => key.replace(/\.md$/, ".html"));
      return htmlKeys;
    },
  };
}
