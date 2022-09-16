export default async function index(graph) {
  const keys = [];
  for await (const key of graph) {
    if (key.endsWith(".html")) {
      keys.push(key);
    }
  }
  const links = keys.map((key) => {
    const name = key.slice(0, -5);
    return `<li><a href="people/${key}">${name}</a></li>`;
  });
  const html = `<!DOCTYPE html>
<html>
<body>
<ul>
${links.join("\n")}
</ul>
</body>
</html>`;
  return html;
}
