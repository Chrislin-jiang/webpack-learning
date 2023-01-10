"use strict";
var t = require("fs"),
  e = require("path"),
  s = require("purgecss"),
  o = require("webpack-sources");
function i(t) {
  return t && "object" == typeof t && "default" in t ? t : { default: t };
}
function r(t) {
  if (t && t.__esModule) return t;
  var e = Object.create(null);
  return (
    t &&
      Object.keys(t).forEach(function (s) {
        if ("default" !== s) {
          var o = Object.getOwnPropertyDescriptor(t, s);
          Object.defineProperty(
            e,
            s,
            o.get
              ? o
              : {
                  enumerable: !0,
                  get: function () {
                    return t[s];
                  },
                }
          );
        }
      }),
    (e.default = t),
    Object.freeze(e)
  );
}
var n = r(t),
  c = i(e),
  a = i(s);
const u = [".css", ".scss", ".styl", ".sass", ".less"];
module.exports = class {
  constructor(t) {
    (this.purgedStats = {}), (this.options = t);
  }
  apply(t) {
    t.hooks.compilation.tap("PurgeCSS", this.initializePlugin.bind(this));
  }
  initializePlugin(t) {
    t.hooks.additionalAssets.tapPromise("PurgeCSS", () => {
      const e =
        "function" == typeof this.options.paths
          ? this.options.paths()
          : this.options.paths;
      return (
        e.forEach((t) => {
          if (!n.existsSync(t)) throw new Error(`Path ${t} does not exist.`);
        }),
        this.runPluginHook(t, e)
      );
    });
  }
  async runPluginHook(t, e) {
    const i = Object.entries(t.assets).filter(([t]) =>
      (function (t, e) {
        const s = c.default.extname(
          (o = t).includes("?") ? o.split("?").slice(0, -1).join("") : o
        );
        var o;
        return e.includes(s);
      })(t, [".css"])
    );
    for (const r of t.chunks) {
      const n = i.filter(([t]) =>
        this.options.only
          ? this.options.only.some((e) => t.includes(e))
          : Array.isArray(r.files)
          ? r.files.includes(t)
          : r.files.has(t)
      );
      for (const [i, r] of n) {
        const n = e.filter((t) => !u.some((e) => t.endsWith(e))),
          c = {
            ...s.defaultOptions,
            ...this.options,
            content: n,
            css: [{ raw: r.source().toString() }],
          };
        "function" == typeof c.safelist && (c.safelist = c.safelist()),
          "function" == typeof c.blocklist && (c.blocklist = c.blocklist());
        const l = (
          await new a.default().purge({
            content: c.content,
            css: c.css,
            defaultExtractor: c.defaultExtractor,
            extractors: c.extractors,
            fontFace: c.fontFace,
            keyframes: c.keyframes,
            output: c.output,
            rejected: c.rejected,
            variables: c.variables,
            safelist: c.safelist,
            blocklist: c.blocklist,
          })
        )[0];
        l.rejected && (this.purgedStats[i] = l.rejected),
          t.updateAsset(i, new o.ConcatSource(l.css));
      }
    }
  }
};
