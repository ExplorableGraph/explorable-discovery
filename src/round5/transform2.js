import { marked } from "marked";
import path from "path";

export default function (graph) {
  return {
    async *[Symbol.asyncIterator]() {
      for await (const key of graph) {
        yield changeExtension(key, ".md", ".html");
      }
    },

    async get(key) {
      const markdownKey = changeExtension(key, ".html", ".md");
      let markdown = await graph.get(markdownKey);
      markdown = String(markdown);
      const html = markdown ? await marked(markdown) : undefined;
      return html;
    },
  };
}

function changeExtension(key, extension, newExtension) {
  return path.extname(key) === extension
    ? `${path.basename(key, extension)}${newExtension}`
    : key;
}
