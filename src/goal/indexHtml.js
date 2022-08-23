import path from "path";

export default async function index(graph) {
  let items = [];
  for await (const key of graph) {
    const text = path.basename(key, ".html");
    items.push(`  <li><a href="${key}">${text}</a></li>`);
  }
  const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
  <ul>
${items.join("\n")}
</ul>`;
  return html;
}
