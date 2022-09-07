const filepath = path.resolve(dirname, key);
let value;
try {
  value = await fs.readFile(filepath);
} catch (error) {
  if (error.code !== "ENOENT") {
    throw error;
  }
}
return value;
