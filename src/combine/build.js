import distFolder from "./distFolder.js";
import setDeep from "./setDeep.js";
import combined from "./site.js";

await setDeep(distFolder, combined);
