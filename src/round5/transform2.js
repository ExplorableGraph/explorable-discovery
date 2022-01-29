import path from "path";
import rehype from "../rehype.js";

export default function (graph) {
  return {
    async *[Symbol.asyncIterator]() {
      for await (const key of graph) {
        yield changeExtension(key, ".md", ".html");
      }
    },

    async get(key) {
      const markdownKey = changeExtension(key, ".html", ".md");
      const markdown = await graph.get(markdownKey);
      const html = markdown ? await rehype(markdown) : undefined;
      return html;
    },
  };
}

function changeExtension(key, extension, newExtension) {
  return path.extname(key) === extension
    ? `${path.basename(key, extension)}${newExtension}`
    : key;
}
