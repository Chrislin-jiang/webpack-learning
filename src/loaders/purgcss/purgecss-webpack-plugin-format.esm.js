import * as s from "fs";
import t from "path";
import o, { defaultOptions as e } from "purgecss";
import { ConcatSource as i } from "webpack-sources";
const n = [".css", ".scss", ".styl", ".sass", ".less"];
class r {
  constructor(s) {
    (this.purgedStats = {}), (this.options = s);
  }
  apply(s) {
    s.hooks.compilation.tap("PurgeCSS", this.initializePlugin.bind(this));
  }
  initializePlugin(t) {
    t.hooks.additionalAssets.tapPromise("PurgeCSS", () => {
      const o =
        "function" == typeof this.options.paths
          ? this.options.paths()
          : this.options.paths;
      return (
        o.forEach((t) => {
          if (!s.existsSync(t)) throw new Error(`Path ${t} does not exist.`);
        }),
        this.runPluginHook(t, o)
      );
    });
  }
  async runPluginHook(s, r) {
    const c = Object.entries(s.assets).filter(([s]) =>
      (function (s, o) {
        const e = t.extname(
          (i = s).includes("?") ? i.split("?").slice(0, -1).join("") : i
        );
        var i;
        return o.includes(e);
      })(s, [".css"])
    );
    for (const t of s.chunks) {
      const a = c.filter(([s]) =>
        this.options.only
          ? this.options.only.some((t) => s.includes(t))
          : Array.isArray(t.files)
          ? t.files.includes(s)
          : t.files.has(s)
      );
      for (const [t, c] of a) {
        const a = r.filter((s) => !n.some((t) => s.endsWith(t))),
          l = {
            ...e,
            ...this.options,
            content: a,
            css: [{ raw: c.source().toString() }],
          };
        "function" == typeof l.safelist && (l.safelist = l.safelist()),
          "function" == typeof l.blocklist && (l.blocklist = l.blocklist());
        const f = (
          await new o().purge({
            content: l.content,
            css: l.css,
            defaultExtractor: l.defaultExtractor,
            extractors: l.extractors,
            fontFace: l.fontFace,
            keyframes: l.keyframes,
            output: l.output,
            rejected: l.rejected,
            variables: l.variables,
            safelist: l.safelist,
            blocklist: l.blocklist,
          })
        )[0];
        f.rejected && (this.purgedStats[t] = f.rejected),
          s.updateAsset(t, new i(f.css));
      }
    }
  }
}
export { r as default };
