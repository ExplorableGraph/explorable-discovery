const obj = {
  "Alice.md": "Hello, **Alice**.",
  "Bob.md": "Hello, **Bob**.",
  "Carol.md": "Hello, **Carol**.",
};

export default {
  async get(key) {
    return obj[key];
  },

  async keys() {
    return Object.keys(obj);
  },
};
