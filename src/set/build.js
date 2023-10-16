import distFiles from "./distFiles.js";
import setDeep from "./setDeep.js";
import siteTree from "./siteTree.js";

await setDeep(distFiles, siteTree);
