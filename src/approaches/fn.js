const domain = ["Alice.md", "Bob.md", "Carol.md"];

// Function to generate markdown for a key of the format "Alice.md"
function fn(key) {
  if (key.endsWith(".md")) {
    const name = key.slice(0, -3);
    return `Hello, **${name}**.`;
  }
}

// Display the function over the given domain in the console.
for (const key of domain) {
  const value = fn(key);
  console.log(`${key}: ${value}`);
}
