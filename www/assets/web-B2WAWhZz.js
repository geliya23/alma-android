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
      n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d0938b8b-33fa-4a83-a0cd-97bdb02f0da4", e._sentryDebugIdIdentifier = "sentry-dbid-d0938b8b-33fa-4a83-a0cd-97bdb02f0da4");
    })();
  } catch (e) {
  }
}
;
import { W as WebPlugin } from "./connected-lHd1vCng.js";
import "./preload-helper-CMFanSWE.js";
import "./index-QDWrPZVl.js";
import "./apiClient-cUCQ0Kr0.js";
class ShareWeb extends WebPlugin {
  async canShare() {
    if (typeof navigator === "undefined" || !navigator.share) {
      return { value: false };
    } else {
      return { value: true };
    }
  }
  async share(options) {
    if (typeof navigator === "undefined" || !navigator.share) {
      throw this.unavailable("Share API not available in this browser");
    }
    await navigator.share({
      title: options.title,
      text: options.text,
      url: options.url
    });
    return {};
  }
}
export {
  ShareWeb
};
