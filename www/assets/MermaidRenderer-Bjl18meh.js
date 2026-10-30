const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mermaid.core-D1DOFZ5y.js","./preload-helper-CMFanSWE.js","./index-QDWrPZVl.js","./index-B38e07Bu.css","./mermaid-NA5CF7SZ-Csw4K-Tz.js","./ThemeContext-DpCtXEQO.js","./createLucideIcon-DpKH3z2Y.js","./x-CQmyYKZf.js","./index-CPRIZRW0.js","./label-BAfkmtb6.js","./wand-sparkles-D2Hj8XgY.js","./overflow-container-DyMtcAJN.js","./image-B4vYIVuC.js","./useLiveCoding-BzSWUIOo.js","./loader-circle-BpkrgG6D.js","./artifactWorkspaceContextDef-B7Ya0Sdf.js"])))=>i.map(i=>d[i]);
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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ca657d8c-417b-409c-8429-f1a3dffbaba8", e._sentryDebugIdIdentifier = "sentry-dbid-ca657d8c-417b-409c-8429-f1a3dffbaba8");
    })();
  } catch (e) {
  }
}
;
import { _ as __vitePreload } from "./preload-helper-CMFanSWE.js";
import { r as reactExports, j as jsxRuntimeExports } from "./index-QDWrPZVl.js";
import { a as useI18n, B as Button, c as cn } from "./ThemeContext-DpCtXEQO.js";
import "./x-CQmyYKZf.js";
import "./createLucideIcon-DpKH3z2Y.js";
import { u as useTheme, C as CircleAlert } from "./overflow-container-DyMtcAJN.js";
import { u as useZoomPan, r as rasterizeMermaidSvg, a as renderBeautifulMermaid, Z as ZoomOut, b as ZoomIn, M as MERMAID_DIAGRAM_FONT } from "./mermaid-NA5CF7SZ-Csw4K-Tz.js";
import { A as ArtifactWorkspaceContext } from "./artifactWorkspaceContextDef-B7Ya0Sdf.js";
import { L as LoaderCircle } from "./loader-circle-BpkrgG6D.js";
import { R as RotateCcw } from "./label-BAfkmtb6.js";
import { W as WandSparkles } from "./wand-sparkles-D2Hj8XgY.js";
import "./index-CPRIZRW0.js";
import "./image-B4vYIVuC.js";
import "./useLiveCoding-BzSWUIOo.js";
const MIN_SCALE = 0.25;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.25;
function MermaidRenderer({ artifact }) {
  const { effectiveTheme } = useTheme();
  const [error, setError] = reactExports.useState(null);
  const [isLoading, setIsLoading] = reactExports.useState(true);
  const [svg, setSvg] = reactExports.useState("");
  const { containerRef, scale, isDragging, isReset, transform, zoomIn, zoomOut, reset } = useZoomPan({
    minScale: MIN_SCALE,
    maxScale: MAX_SCALE,
    step: ZOOM_STEP,
    // The panel owns its space — zoom on a bare wheel (no Ctrl/Cmd needed).
    requireModifierForWheel: false
  });
  const { t } = useI18n();
  const workspaceCtx = reactExports.useContext(ArtifactWorkspaceContext);
  const threadId = workspaceCtx?.threadId ?? null;
  const containerElRef = reactExports.useRef(null);
  const setContainerRefs = reactExports.useCallback(
    (node) => {
      containerElRef.current = node;
      containerRef(node);
    },
    [containerRef]
  );
  const [isAnnotating, setIsAnnotating] = reactExports.useState(false);
  const handleAnnotate = reactExports.useCallback(async () => {
    if (!svg || !threadId || !window.lightboxWindow?.open || isAnnotating) return;
    setIsAnnotating(true);
    try {
      const dataUrl = await rasterizeMermaidSvg(svg, containerElRef.current);
      if (!dataUrl) return;
      await window.lightboxWindow.open({
        images: [
          {
            id: `mermaid-panel-${artifact.id}`,
            mediaType: "image/png",
            filename: "mermaid-diagram.png",
            threadId,
            url: dataUrl,
            mermaidSource: artifact.content
          }
        ],
        currentIndex: 0,
        annotate: true
      });
    } catch (err) {
      console.error("Failed to open mermaid annotator:", err);
    } finally {
      setIsAnnotating(false);
    }
  }, [svg, threadId, artifact.id, artifact.content, isAnnotating]);
  reactExports.useEffect(() => {
    let cancelled = false;
    let tempContainer = null;
    setError(null);
    const beautifulSvg = renderBeautifulMermaid(artifact.content);
    if (beautifulSvg) {
      setSvg(beautifulSvg);
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    async function renderWithMermaid() {
      try {
        const mermaid = (await __vitePreload(async () => {
          const { default: __vite_default__ } = await import("./mermaid.core-D1DOFZ5y.js").then((n) => n.at);
          return { default: __vite_default__ };
        }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) : void 0, import.meta.url)).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: effectiveTheme === "dark" ? "dark" : "default",
          securityLevel: "loose",
          fontFamily: MERMAID_DIAGRAM_FONT,
          // Suppress default error rendering to body
          suppressErrorRendering: true
        });
        const id = `mermaid-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
        tempContainer = document.createElement("div");
        tempContainer.style.position = "absolute";
        tempContainer.style.left = "-9999px";
        tempContainer.style.top = "-9999px";
        document.body.appendChild(tempContainer);
        const { svg: renderedSvg } = await mermaid.render(id, artifact.content, tempContainer);
        if (!cancelled) {
          setSvg(renderedSvg);
          setIsLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to render Mermaid diagram");
          setIsLoading(false);
        }
      } finally {
        if (tempContainer && tempContainer.parentNode) {
          tempContainer.parentNode.removeChild(tempContainer);
        }
        const strayElements = document.querySelectorAll('svg[id^="mermaid-"], div[id^="dmermaid-"], #d');
        strayElements.forEach((el) => {
          if (el.parentNode === document.body) {
            el.parentNode.removeChild(el);
          }
        });
      }
    }
    renderWithMermaid();
    return () => {
      cancelled = true;
    };
  }, [artifact.content, effectiveTheme]);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "size-6 animate-spin text-muted-foreground" }) });
  }
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center h-full p-4 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "size-8 text-destructive" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-destructive text-sm text-center max-w-md", children: error })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full flex flex-col overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-2 right-2 z-[5] flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-md border p-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "size-7", onClick: zoomOut, disabled: scale <= MIN_SCALE, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomOut, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground min-w-[3rem] text-center", children: [
        Math.round(scale * 100),
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "size-7", onClick: zoomIn, disabled: scale >= MAX_SCALE, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", className: "size-7", onClick: reset, disabled: isReset, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { className: "size-4" }) }),
      threadId && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-0.5 h-4 w-px bg-border", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            className: "size-7",
            onClick: handleAnnotate,
            disabled: isAnnotating,
            title: t("chat.mermaidAnnotate.buttonTitle"),
            children: isAnnotating ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "size-4" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: setContainerRefs, className: "flex-1 overflow-hidden touch-none", style: { cursor: isDragging ? "grabbing" : "grab" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn("flex items-center justify-center p-4 min-h-full origin-center", !isDragging && "transition-transform duration-75"),
        style: { transform },
        dangerouslySetInnerHTML: { __html: svg }
      }
    ) })
  ] });
}
export {
  MermaidRenderer
};
