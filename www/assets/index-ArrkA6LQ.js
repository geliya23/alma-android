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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "928cb61b-cbf2-4183-9dab-ab59ec139992", e._sentryDebugIdIdentifier = "sentry-dbid-928cb61b-cbf2-4183-9dab-ab59ec139992");
    })();
  } catch (e) {
  }
}
;
import { i as installRendererFetchTimeoutGuard, j as jsxRuntimeExports } from "./index-QDWrPZVl.js";
import { a as client } from "./client-BXLdlihr.js";
import "./createLucideIcon-DpKH3z2Y.js";
import "./clipboard-polyfill-Bp72c4FG.js";
import { i as initObservability } from "./ThemeContext-DpCtXEQO.js";
import "./generative-ui-block-C7GvtCRh.js";
import { setupDefaultGenerativeUIComponents } from "./index-0J4jFZjA.js";
import { A as App } from "./App-BaxkTEzv.js";
import "./index-CPRIZRW0.js";
import "./x-CQmyYKZf.js";
import "./preload-helper-CMFanSWE.js";
import "./artifactWorkspaceContextDef-B7Ya0Sdf.js";
import "./loader-circle-BpkrgG6D.js";
import "./PluginNotificationListener-Du9yUocX.js";
import "./label-BAfkmtb6.js";
import "./wand-sparkles-D2Hj8XgY.js";
import "./overflow-container-DyMtcAJN.js";
import "./PlatformContext-CPYD-NIZ.js";
import "./TwemojiIcon-r7IN-5RV.js";
import "./index-VS1TZs9E.js";
import "./apiClient-cUCQ0Kr0.js";
import "./slider-cSE3Ce1I.js";
import "./pencil-cD_G6xQo.js";
import "./trash-2-RjU6eS7u.js";
import "./image-B4vYIVuC.js";
import "./alma-icon-B8RPphk-.js";
import "./addLeadingZeros-Dj-FsaTC.js";
import "./mermaid-NA5CF7SZ-Csw4K-Tz.js";
import "./useLiveCoding-BzSWUIOo.js";
import "./ExecutionHistory-BVfBSfxm.js";
import "./en-US-BuvoVFDd.js";
/* empty css                   */
import "./ImageAnnotator-e-Xz52kR.js";
import "./v4-BeQDhHHF.js";
import "./ConditionalPostHogProvider-DAHJgQRm.js";
installRendererFetchTimeoutGuard();
setupDefaultGenerativeUIComponents();
initObservability();
client.createRoot(document.getElementById("root")).render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
window.ipcRenderer?.on("main-process-message", (_event, message) => {
  console.log(message);
});
