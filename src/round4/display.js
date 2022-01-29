#!/usr/bin/env node

import path from "path";
import process from "process";

// Get a file name from the command line.
const [node, display, fileName] = process.argv;
const filePath = path.resolve(process.cwd(), fileName);

// Load the file.
const module = await import(filePath);
const graph = module.default;

// Display the graph.
for await (const key of graph) {
  const value = await graph.get(key);
  console.log(`${key}: ${value}`);
}
