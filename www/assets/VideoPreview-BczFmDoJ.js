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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3ddc99c2-a1ca-48d5-82da-60de12686afb", e._sentryDebugIdIdentifier = "sentry-dbid-3ddc99c2-a1ca-48d5-82da-60de12686afb");
    })();
  } catch (e) {
  }
}
;
import { r as reactExports, j as jsxRuntimeExports } from "./index-QDWrPZVl.js";
import { B as Button } from "./ThemeContext-DpCtXEQO.js";
import { S as Slider } from "./slider-cSE3Ce1I.js";
import { P as Pause, V as VolumeX, M as Maximize } from "./App-BaxkTEzv.js";
import { P as Play } from "./overflow-container-DyMtcAJN.js";
import { V as Volume2 } from "./PluginNotificationListener-Du9yUocX.js";
import "./createLucideIcon-DpKH3z2Y.js";
import "./x-CQmyYKZf.js";
import "./index-CPRIZRW0.js";
import "./preload-helper-CMFanSWE.js";
import "./index-VS1TZs9E.js";
import "./label-BAfkmtb6.js";
import "./wand-sparkles-D2Hj8XgY.js";
import "./mermaid-NA5CF7SZ-Csw4K-Tz.js";
import "./image-B4vYIVuC.js";
import "./useLiveCoding-BzSWUIOo.js";
import "./loader-circle-BpkrgG6D.js";
import "./artifactWorkspaceContextDef-B7Ya0Sdf.js";
import "./pencil-cD_G6xQo.js";
import "./trash-2-RjU6eS7u.js";
import "./TwemojiIcon-r7IN-5RV.js";
import "./ExecutionHistory-BVfBSfxm.js";
import "./alma-icon-B8RPphk-.js";
import "./apiClient-cUCQ0Kr0.js";
import "./generative-ui-block-C7GvtCRh.js";
import "./en-US-BuvoVFDd.js";
import "./addLeadingZeros-Dj-FsaTC.js";
import "./PlatformContext-CPYD-NIZ.js";
/* empty css                   */
import "./ImageAnnotator-e-Xz52kR.js";
import "./v4-BeQDhHHF.js";
import "./ConditionalPostHogProvider-DAHJgQRm.js";
const VideoPreview = reactExports.memo(function VideoPreview2({ src, mimeType }) {
  const videoRef = reactExports.useRef(null);
  const [isPlaying, setIsPlaying] = reactExports.useState(false);
  const [isMuted, setIsMuted] = reactExports.useState(false);
  const [currentTime, setCurrentTime] = reactExports.useState(0);
  const [duration, setDuration] = reactExports.useState(0);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setError(null);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [src]);
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };
  const handleSeek = (value) => {
    if (videoRef.current && value[0] !== void 0) {
      videoRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
    }
  };
  const handleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  if (error) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-full text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Failed to load video: ",
      error
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full bg-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "video",
      {
        ref: videoRef,
        className: "max-w-full max-h-full",
        onTimeUpdate: handleTimeUpdate,
        onLoadedMetadata: handleLoadedMetadata,
        onEnded: () => setIsPlaying(false),
        onError: () => setError("Could not load video"),
        onPlay: () => setIsPlaying(true),
        onPause: () => setIsPlaying(false),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src, type: mimeType }),
          "Your browser does not support the video tag."
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 p-3 bg-background/90 border-t border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-8 w-8", onClick: togglePlay, children: isPlaying ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground min-w-[40px]", children: formatTime(currentTime) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Slider, { className: "flex-1", value: [currentTime], max: duration || 100, step: 0.1, onValueChange: handleSeek }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground min-w-[40px]", children: formatTime(duration) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-8 w-8", onClick: toggleMute, children: isMuted ? /* @__PURE__ */ jsxRuntimeExports.jsx(VolumeX, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "size-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "ghost", className: "h-8 w-8", onClick: handleFullscreen, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Maximize, { className: "size-4" }) })
    ] })
  ] });
});
export {
  VideoPreview
};
