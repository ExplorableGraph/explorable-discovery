import * as fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Get the path of the markdown folder relative to this JavaScript file.
const moduleFolder = path.dirname(fileURLToPath(import.meta.url));
const markdownFolder = path.resolve(moduleFolder, "markdown");

// Display the files in the console.
const filenames = await fs.readdir(markdownFolder);
for (const filename of filenames) {
  const filePath = path.join(markdownFolder, filename);
  const content = await fs.readFile(filePath);
  console.log(`${filename}: ${content}`);
}
