import distFiles from "./distfiles.js";
import htmlFiles from "./htmlfiles.js";
import setDeep from "./setDeep.js";

await setDeep(distFiles, htmlFiles);
