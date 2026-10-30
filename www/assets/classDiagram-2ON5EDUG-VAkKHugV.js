!function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e.SENTRY_RELEASE = { id: "alma@0.4.259" };
  } catch (e2) {
  }
}();
;
{
  try {
    (function() {
      var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}, n = new e.Error().stack;
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a6dd3360-19af-401c-87f9-0d91d3c8c75c", e._sentryDebugIdIdentifier = "sentry-dbid-a6dd3360-19af-401c-87f9-0d91d3c8c75c");
    })();
  } catch (e) {
  }
}
;
import { s as styles_default, c as classRenderer_v3_unified_default, a as classDiagram_default, C as ClassDB } from "./chunk-B4BG7PRW-_7uXIv3s.js";
import { _ as __name } from "./mermaid.core-D1DOFZ5y.js";
import "./mermaid-NA5CF7SZ-Csw4K-Tz.js";
import "./chunk-FMBD7UC4-Xo3vU2Ym.js";
import "./chunk-55IACEB6-BmjnrfHh.js";
import "./chunk-QN33PNHL-B-VXAtzk.js";
import "./preload-helper-CMFanSWE.js";
import "./index-QDWrPZVl.js";
import "./ThemeContext-DpCtXEQO.js";
import "./createLucideIcon-DpKH3z2Y.js";
import "./x-CQmyYKZf.js";
import "./index-CPRIZRW0.js";
import "./label-BAfkmtb6.js";
import "./wand-sparkles-D2Hj8XgY.js";
import "./overflow-container-DyMtcAJN.js";
import "./image-B4vYIVuC.js";
import "./useLiveCoding-BzSWUIOo.js";
import "./loader-circle-BpkrgG6D.js";
import "./artifactWorkspaceContextDef-B7Ya0Sdf.js";
var diagram = {
  parser: classDiagram_default,
  get db() {
    return new ClassDB();
  },
  renderer: classRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
  }, "init")
};
export {
  diagram
};
