const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CRxI5eGf.js","./index-QDWrPZVl.js","./index-B38e07Bu.css","./PluginNotificationListener-Du9yUocX.js","./createLucideIcon-DpKH3z2Y.js","./ThemeContext-DpCtXEQO.js","./x-CQmyYKZf.js","./index-CPRIZRW0.js","./preload-helper-CMFanSWE.js","./label-BAfkmtb6.js","./wand-sparkles-D2Hj8XgY.js","./overflow-container-DyMtcAJN.js","./PlatformContext-CPYD-NIZ.js","./TwemojiIcon-r7IN-5RV.js","./index-VS1TZs9E.js","./apiClient-cUCQ0Kr0.js","./loader-circle-BpkrgG6D.js","./slider-cSE3Ce1I.js","./pencil-cD_G6xQo.js","./trash-2-RjU6eS7u.js","./image-B4vYIVuC.js","./alma-icon-B8RPphk-.js","./addLeadingZeros-Dj-FsaTC.js","./PluginNotificationListener-DrKknvT7.css"])))=>i.map(i=>d[i]);
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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "05705d2f-dd5b-474b-a54b-01735ac749a0", e._sentryDebugIdIdentifier = "sentry-dbid-05705d2f-dd5b-474b-a54b-01735ac749a0");
    })();
  } catch (e) {
  }
}
;
import { _ as __vitePreload } from "./preload-helper-CMFanSWE.js";
import { r as reactExports, j as jsxRuntimeExports } from "./index-QDWrPZVl.js";
import { u as useTheme, O as OverflowContainer } from "./overflow-container-DyMtcAJN.js";
import "./ThemeContext-DpCtXEQO.js";
import "./x-CQmyYKZf.js";
import "./createLucideIcon-DpKH3z2Y.js";
import { L as LoaderCircle } from "./loader-circle-BpkrgG6D.js";
import "./index-CPRIZRW0.js";
const DocxPreview = reactExports.memo(function DocxPreview2({ src }) {
  const [htmlContent, setHtmlContent] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [error, setError] = reactExports.useState(null);
  const { effectiveTheme } = useTheme();
  reactExports.useEffect(() => {
    let mounted = true;
    const loadDocx = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(src);
        if (!response.ok) throw new Error("Failed to fetch document");
        const arrayBuffer = await response.arrayBuffer();
        const mammoth = await __vitePreload(() => import("./index-CRxI5eGf.js").then((n) => n.i), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]) : void 0, import.meta.url);
        const result = await mammoth.convertToHtml({ arrayBuffer });
        if (mounted) {
          setHtmlContent(result.value);
          setIsLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(err instanceof Error ? err.message : "Failed to load document");
          setIsLoading(false);
        }
      }
    };
    loadDocx();
    return () => {
      mounted = false;
    };
  }, [src]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "size-8 animate-spin text-muted-foreground" }) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Failed to load document: ",
      error
    ] }) });
  }
  const isDark = effectiveTheme === "dark";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(OverflowContainer, { className: "h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
                    .docx-content {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        line-height: 1.6;
                        color: ${isDark ? "#e5e5e5" : "#1a1a1a"};
                        padding: 24px;
                        max-width: 800px;
                        margin: 0 auto;
                    }
                    .docx-content h1, .docx-content h2, .docx-content h3,
                    .docx-content h4, .docx-content h5, .docx-content h6 {
                        margin-top: 1.5em;
                        margin-bottom: 0.5em;
                    }
                    .docx-content p {
                        margin: 0.5em 0;
                    }
                    .docx-content table {
                        border-collapse: collapse;
                        width: 100%;
                        margin: 16px 0;
                    }
                    .docx-content th, .docx-content td {
                        border: 1px solid ${isDark ? "#404040" : "#e0e0e0"};
                        padding: 8px 12px;
                        text-align: left;
                    }
                    .docx-content th {
                        background: ${isDark ? "#2a2a2a" : "#f5f5f5"};
                    }
                    .docx-content img {
                        max-width: 100%;
                        height: auto;
                    }
                    .docx-content ul, .docx-content ol {
                        padding-left: 2em;
                        margin: 0.5em 0;
                    }
                    .docx-content li {
                        margin: 0.25em 0;
                    }
                ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "docx-content", dangerouslySetInnerHTML: { __html: htmlContent || "" } })
  ] });
});
export {
  DocxPreview
};
