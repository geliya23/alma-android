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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "82cb19e1-2965-4c60-85ae-91f54e17f42f", e._sentryDebugIdIdentifier = "sentry-dbid-82cb19e1-2965-4c60-85ae-91f54e17f42f");
    })();
  } catch (e) {
  }
}
;
import { j as jsxRuntimeExports, R as React, r as reactExports } from "./index-QDWrPZVl.js";
import { a as client } from "./client-BXLdlihr.js";
import { i as initObservability, S as SWRConfig, s as swrConfig, T as ThemeProvider, b as usePostHog, d as Toaster } from "./ThemeContext-DpCtXEQO.js";
import "./createLucideIcon-DpKH3z2Y.js";
import "./clipboard-polyfill-Bp72c4FG.js";
import { C as ConditionalPostHogProvider } from "./ConditionalPostHogProvider-DAHJgQRm.js";
import { S as SettingsWindow, P as PluginInputBoxModal, a as PluginQuickPickModal, b as PluginConfirmModal, c as PluginNotificationListener } from "./PluginNotificationListener-Du9yUocX.js";
import { P as PlatformProvider } from "./PlatformContext-CPYD-NIZ.js";
import { u as useTheme } from "./overflow-container-DyMtcAJN.js";
import "./index-CPRIZRW0.js";
import "./x-CQmyYKZf.js";
import "./preload-helper-CMFanSWE.js";
import "./label-BAfkmtb6.js";
import "./wand-sparkles-D2Hj8XgY.js";
import "./TwemojiIcon-r7IN-5RV.js";
import "./index-VS1TZs9E.js";
import "./apiClient-cUCQ0Kr0.js";
import "./loader-circle-BpkrgG6D.js";
import "./slider-cSE3Ce1I.js";
import "./pencil-cD_G6xQo.js";
import "./trash-2-RjU6eS7u.js";
import "./image-B4vYIVuC.js";
import "./alma-icon-B8RPphk-.js";
import "./addLeadingZeros-Dj-FsaTC.js";
initObservability();
function SettingsPageView() {
  const posthog = usePostHog();
  reactExports.useEffect(() => {
    if (posthog) {
      posthog.capture("$pageview", {
        $current_url: "/settings"
      });
    }
  }, [posthog]);
  return null;
}
function ThemedToaster() {
  const { effectiveTheme } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "top-center", theme: effectiveTheme });
}
function SettingsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PlatformProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SWRConfig, { value: swrConfig, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ConditionalPostHogProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsPageView, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsWindow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThemedToaster, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PluginInputBoxModal, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PluginQuickPickModal, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PluginConfirmModal, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PluginNotificationListener, {})
  ] }) }) }) });
}
function Root() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsApp, {});
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Root, {}) })
);
window.ipcRenderer?.on("main-process-message", (_event, message) => {
  console.log(message);
});
