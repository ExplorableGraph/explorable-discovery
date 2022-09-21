import path from "node:path";
import process from "node:process";

// Resolve an asynchronous explorable graph to an in-memory object with string
// keys and string values.
export default async function plain(graph) {
  const result = {};
  // Get each of the values from the graph.
  for await (const key of graph) {
    let value = await graph.get(key);
    result[key.toString()] = value.toString();
  }
  return result;
}

// Get a file name from the command line.
const [node, display, moduleName] = process.argv;
const modulePath = path.resolve(process.cwd(), moduleName);

// Load the module.
const module = await import(modulePath);

// Take the module's default export as a graph.
const graph = module.default;

// Resolve the graph to an in-memory object.
const obj = await plain(graph);

// Convert to JSON text and display it.
const json = JSON.stringify(obj, null, 2);
console.log(json);
