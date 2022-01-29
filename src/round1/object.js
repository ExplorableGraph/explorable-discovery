const obj = {
  "Alice.md": "Hello, **Alice**.",
  "Bob.md": "Hello, **Bob**.",
  "Carol.md": "Hello, **Carol**.",
};

for (const key of Object.keys(obj)) {
  const value = obj[key];
  console.log(`${key}: ${value}`);
}
