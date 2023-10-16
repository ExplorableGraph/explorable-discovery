import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";

// Resolve an async tree to an object with string keys and string values.
async function plain(tree) {
  const result = {};
  // Get each of the values from the tree.
  for (const key of await tree.keys()) {
    const value = await tree.get(key);
    result[key.toString()] = value.toString();
  }
  return result;
}

// Get a file name from the command line.
const [node, command, moduleName] = process.argv;
const modulePath = path.resolve(process.cwd(), moduleName);

// On Windows, import paths must be valid file:// URLs.
const moduleUrl = pathToFileURL(modulePath);

// Load the module.
const module = await import(moduleUrl);

// Take the module's default export as a tree.
const tree = module.default;

// Resolve the tree to an in-memory object.
const obj = await plain(tree);

// Convert to JSON text and display it.
const json = JSON.stringify(obj, null, 2);
console.log(json);
