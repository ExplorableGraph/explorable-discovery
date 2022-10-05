import distFiles from "./distfiles.js";
import setDeep from "./setDeep.js";
import siteGraph from "./siteGraph.js";

await setDeep(distFiles, siteGraph);
