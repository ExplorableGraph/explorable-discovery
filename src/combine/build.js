import distFiles from "./distFiles.js";
import setDeep from "./setDeep.js";
import combined from "./site.js";

await setDeep(distFiles, combined);
