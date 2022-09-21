const domain = ["Alice.md", "Bob.md", "Carol.md"];

function fn(key) {
  if (key.endsWith(".md")) {
    const name = key.slice(0, -3);
    return `Hello, **${name}**.`;
  }
}

for (const key of domain) {
  const value = fn(key);
  console.log(`${key}: ${value}`);
}
