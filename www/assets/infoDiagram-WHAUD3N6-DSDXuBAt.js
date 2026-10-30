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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "fbe4a4a3-ab59-4cea-9aaf-f9b97dbd4b55", e._sentryDebugIdIdentifier = "sentry-dbid-fbe4a4a3-ab59-4cea-9aaf-f9b97dbd4b55");
    })();
  } catch (e) {
  }
}
;
import { _ as __name, l as log, K as selectSvgElement, e as configureSvgSize, L as package_default } from "./mermaid.core-D1DOFZ5y.js";
import { p as parse } from "./treemap-KMMF4GRG-C1KuuRTs.js";
import "./preload-helper-CMFanSWE.js";
import "./index-QDWrPZVl.js";
import "./mermaid-NA5CF7SZ-Csw4K-Tz.js";
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
import "./_baseUniq-DXot1fNt.js";
import "./_basePickBy-mp2Qxhjb.js";
import "./clone-DLlFHzm0.js";
var parser = {
  parse: /* @__PURE__ */ __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};
var DEFAULT_INFO_DB = {
  version: package_default.version + ""
};
var getVersion = /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};
var draw = /* @__PURE__ */ __name((text, id, version) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version}`);
}, "draw");
var renderer = { draw };
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
