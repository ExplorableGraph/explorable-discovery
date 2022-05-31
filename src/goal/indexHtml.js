import path from "path";

export default async function index(graph) {
  let items = [];
  for await (const key of graph) {
    const text = path.basename(key, ".html");
    items.push(`  <li><a href="${key}">${text}</a></li>`);
  }
  const html = `<ul>
${items.join("\n")}
</ul>`;
  return html;
}
