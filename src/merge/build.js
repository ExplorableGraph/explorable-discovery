import distFiles from "./distfiles.js";
import setDeep from "./setDeep.js";
import site from "./site.js";

await setDeep(distFiles, site);
