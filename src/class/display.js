import path from "path";
import process from "process";
import plain from "./plain.js";

// Get a file name from the command line.
const [node, display, fileName] = process.argv;
const filePath = path.resolve(process.cwd(), fileName);

// Load the file.
const module = await import(filePath);
const graph = module.default;

const obj = await plain(graph);
const json = JSON.stringify(obj, null, 2);
console.log(json);
