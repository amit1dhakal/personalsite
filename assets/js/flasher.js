!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = "undefined" != typeof globalThis ? globalThis : e || self).flasher =
        t());
})(this, function () {
  "use strict";
  var e = [],
    t = [];
  function n(e, t, n) {
    if (n || 2 === arguments.length)
      for (var r, o = 0, i = t.length; o < i; o++)
        (!r && o in t) ||
          (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
    return e.concat(r || Array.prototype.slice.call(t));
  }
  !(function (n, r) {
    if (n && "undefined" != typeof document) {
      var o,
        i = !0 === r.prepend ? "prepend" : "append",
        a = !0 === r.singleTag,
        l =
          "string" == typeof r.container
            ? document.querySelector(r.container)
            : document.getElementsByTagName("head")[0];
      if (a) {
        var f = e.indexOf(l);
        -1 === f && ((f = e.push(l) - 1), (t[f] = {})),
          (o = t[f] && t[f][i] ? t[f][i] : (t[f][i] = s()));
      } else o = s();
      65279 === n.charCodeAt(0) && (n = n.substring(1)),
        o.styleSheet
          ? (o.styleSheet.cssText += n)
          : o.appendChild(document.createTextNode(n));
    }
    function s() {
      var e = document.createElement("style");
      if ((e.setAttribute("type", "text/css"), r.attributes))
        for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++)
          e.setAttribute(t[n], r.attributes[t[n]]);
      var o = "prepend" === i ? "afterbegin" : "beforeend";
      return l.insertAdjacentElement(o, e), e;
    }
  })(
    '.fl-main-container{position:fixed;transition:all 1s ease-in-out;width:24em;z-index:99999}@media only screen and (max-width:480px){.fl-main-container{left:.5em;right:.5em;width:auto}}.fl-main-container[data-position^=top-]{top:.5em}.fl-main-container[data-position^=bottom-]{bottom:.5em}.fl-main-container[data-position$=-right]{right:.5em}.fl-main-container[data-position$=-right] .fl-container{transform:translateX(110%)}.fl-main-container[data-position$=-left]{left:.5em}.fl-main-container[data-position$=-left] .fl-container{transform:translateX(-110%)}.fl-main-container[data-position$=-center]{left:50%;transform:translateX(-50%)}.fl-main-container[data-position=top-center] .fl-container{transform:translateY(-100vh)}.fl-main-container[data-position=bottom-center] .fl-container{transform:translateY(100vh)}.fl-main-container .fl-container{transition:transform .3s ease-in-out}.fl-main-container .fl-container.fl-show{transform:translate(0)}.fl-main-container .fl-container .fl-progress-bar{display:flex;height:.125em;margin-left:-1px}.fl-main-container .fl-container.fl-rtl{direction:rtl}.fl-main-container .fl-container.fl-rtl .fl-progress-bar{margin-left:auto;margin-right:-1px}.fl-main-container .fl-container.fl-success .fl-icon{background-color:#059669}.fl-main-container .fl-container.fl-success .fl-progress-bar{background-color:#6dface}.fl-main-container .fl-container.fl-success .fl-progress-bar .fl-progress{background-color:#059669}.fl-main-container .fl-container.fl-flasher.fl-success{border-left:.8em solid #059669}.fl-main-container .fl-container.fl-flasher.fl-success.fl-rtl{border-left:none;border-right:.8em solid #059669}.fl-main-container .fl-container.fl-flasher.fl-success:not(.fl-rtl){border-left:.8em solid #059669;border-right:none}.fl-main-container .fl-container.fl-flasher.fl-success .fl-title{color:#059669}.fl-main-container .fl-container.fl-info .fl-icon{background-color:#2563eb}.fl-main-container .fl-container.fl-info .fl-progress-bar{background-color:#e0e9fc}.fl-main-container .fl-container.fl-info .fl-progress-bar .fl-progress{background-color:#2563eb}.fl-main-container .fl-container.fl-flasher.fl-info{border-left:.8em solid #2563eb}.fl-main-container .fl-container.fl-flasher.fl-info.fl-rtl{border-left:none;border-right:.8em solid #2563eb}.fl-main-container .fl-container.fl-flasher.fl-info:not(.fl-rtl){border-left:.8em solid #2563eb;border-right:none}.fl-main-container .fl-container.fl-flasher.fl-info .fl-title{color:#2563eb}.fl-main-container .fl-container.fl-warning .fl-icon{background-color:#d97706}.fl-main-container .fl-container.fl-warning .fl-progress-bar{background-color:#fdd8ae}.fl-main-container .fl-container.fl-warning .fl-progress-bar .fl-progress{background-color:#d97706}.fl-main-container .fl-container.fl-flasher.fl-warning{border-left:.8em solid #d97706}.fl-main-container .fl-container.fl-flasher.fl-warning.fl-rtl{border-left:none;border-right:.8em solid #d97706}.fl-main-container .fl-container.fl-flasher.fl-warning:not(.fl-rtl){border-left:.8em solid #d97706;border-right:none}.fl-main-container .fl-container.fl-flasher.fl-warning .fl-title{color:#d97706}.fl-main-container .fl-container.fl-error .fl-icon{background-color:#dc2626}.fl-main-container .fl-container.fl-error .fl-progress-bar{background-color:#f8d6d6}.fl-main-container .fl-container.fl-error .fl-progress-bar .fl-progress{background-color:#dc2626}.fl-main-container .fl-container.fl-flasher.fl-error{border-left:.8em solid #dc2626}.fl-main-container .fl-container.fl-flasher.fl-error.fl-rtl{border-left:none;border-right:.8em solid #dc2626}.fl-main-container .fl-container.fl-flasher.fl-error:not(.fl-rtl){border-left:.8em solid #dc2626;border-right:none}.fl-main-container .fl-container.fl-flasher.fl-error .fl-title{color:#dc2626}.fl-main-container .fl-container .fl-icon{border-radius:50%;box-sizing:border-box;color:#fff;display:inline-block;height:1em;margin:0;min-height:1em;min-width:1em;position:relative;transition:all 1s;width:1em}.fl-main-container .fl-container .fl-icon:after,.fl-main-container .fl-container .fl-icon:before{border-width:0;box-sizing:border-box;content:"";position:absolute;transition:all 1s}.fl-main-container .fl-container.fl-success .fl-icon:after,.fl-main-container .fl-container.fl-success .fl-icon:before{background-color:currentColor;border-radius:.1em;height:.6em;left:.35em;top:.6em;transform:rotate(-135deg);transform-origin:.08em .08em;width:.16em}.fl-main-container .fl-container.fl-success .fl-icon:after{height:.16em;width:.4em}.fl-main-container .fl-container.fl-info .fl-icon:after,.fl-main-container .fl-container.fl-info .fl-icon:before{background-color:currentColor;border-radius:.03em;left:50%;transform:translateX(-50%);width:.15em}.fl-main-container .fl-container.fl-info .fl-icon:before{height:.38em;top:.4em}.fl-main-container .fl-container.fl-info .fl-icon:after{box-shadow:-.06em .19em,-.06em .44em,.06em .44em;height:.13em;top:.21em}.fl-main-container .fl-container.fl-warning .fl-icon:after,.fl-main-container .fl-container.fl-warning .fl-icon:before{background-color:currentColor;border-radius:.03em;left:50%;transform:translateX(-50%);width:.15em}.fl-main-container .fl-container.fl-warning .fl-icon:before{height:.38em;top:.21em}.fl-main-container .fl-container.fl-warning .fl-icon:after{height:.13em;top:.65em}.fl-main-container .fl-container.fl-error .fl-icon:after,.fl-main-container .fl-container.fl-error .fl-icon:before{background-color:currentColor;border-radius:.1em;height:.7em;left:50%;top:50%;transform:translate(-50%,-50%) rotate(-135deg);width:.16em}.fl-main-container .fl-container.fl-error .fl-icon:after{transform:translate(-50%,-50%) rotate(-45deg)}.fl-main-container .fl-container.fl-flasher{background-color:#fff;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);color:#4b5563;cursor:pointer;line-height:1.5;margin-top:.5em;word-break:break-word}.fl-main-container .fl-container.fl-flasher.fl-rtl{border-radius:0 .375em .375em 0}.fl-main-container .fl-container.fl-flasher:not(.fl-rtl){border-radius:.375em 0 0 .375em}.fl-main-container .fl-container.fl-flasher .fl-content{align-items:center;display:flex;padding:.75em}.fl-main-container .fl-container.fl-flasher .fl-icon{font-size:2.5em}.fl-main-container .fl-container.fl-flasher .fl-message,.fl-main-container .fl-container.fl-flasher .fl-title{display:block;line-height:1.25em;margin-left:1em;margin-right:1em}.fl-main-container .fl-container.fl-flasher .fl-message:first-letter,.fl-main-container .fl-container.fl-flasher .fl-title:first-letter{text-transform:uppercase}.fl-main-container .fl-container.fl-flasher .fl-title{font-size:1em;font-weight:700}.fl-main-container .fl-container.fl-flasher .fl-message{font-size:.875em;margin-top:.25em}',
    {}
  );
  var r = (function () {
      function e(e) {
        (this.options = {
          timeout: 5e3,
          fps: 30,
          position: "top-right",
          direction: "top",
          rtl: !1,
          style: {},
          darkMode: "media",
        }),
          (this.viewFactory = e);
      }
      return (
        (e.prototype.success = function (e, t, n) {
          this.flash("success", e, t, n);
        }),
        (e.prototype.info = function (e, t, n) {
          this.flash("info", e, t, n);
        }),
        (e.prototype.warning = function (e, t, n) {
          this.flash("warning", e, t, n);
        }),
        (e.prototype.error = function (e, t, n) {
          this.flash("error", e, t, n);
        }),
        (e.prototype.flash = function (e, t, n, r) {
          var o = this.createNotification(e, t, n, r);
          this.renderOptions({}), this.render({ notification: o });
        }),
        (e.prototype.createNotification = function (e, t, n, r) {
          if (
            ("object" == typeof e
              ? ((e = (r = e).type), (t = r.message), (n = r.title))
              : "object" == typeof t
              ? ((t = (r = t).message), (n = r.title))
              : "object" == typeof n && (n = (r = n).title),
            void 0 === t)
          )
            throw new Error("message option is required");
          return { type: e || "info", message: t, title: n, options: r };
        }),
        (e.prototype.render = function (e) {
          var t = this,
            n = e.notification.options || {},
            r = Array.isArray(n)
              ? this.options
              : Object.assign({}, this.options, n),
            o = function () {
              var n = t.createContainer(r);
              t.addToContainer(n, e, r);
            };
          "loading" === document.readyState
            ? document.addEventListener("DOMContentLoaded", o)
            : o();
        }),
        (e.prototype.renderOptions = function (e) {
          (this.options = Object.assign({}, this.options, e)),
            this.applyDarkMode();
        }),
        (e.prototype.createContainer = function (e) {
          var t = '.fl-main-container[data-position="'.concat(e.position, '"]'),
            n = document.querySelector(t);
          return n
            ? ((n.dataset.turboCache = "false"), n)
            : ((n = document.createElement("div")).classList.add(
                "fl-main-container"
              ),
              (n.dataset.position = e.position),
              (n.dataset.turboCache = "false"),
              Object.keys(e.style).forEach(function (t) {
                null == n || n.style.setProperty(t, e.style[t]);
              }),
              document.body.append(n),
              n);
        }),
        (e.prototype.addToContainer = function (e, t, n) {
          var r = this.stringToHTML(t.template || this.viewFactory.render(t));
          r.classList.add("fl-container"),
            this.appendNotification(e, r, n),
            this.renderProgressBar(r, n),
            this.handleClick(r);
        }),
        (e.prototype.appendNotification = function (e, t, n) {
          "bottom" === n.direction ? e.append(t) : e.prepend(t),
            n.rtl && t.classList.add("fl-rtl"),
            setTimeout(function () {
              t.classList.add("fl-show");
            }, 100);
        }),
        (e.prototype.removeNotification = function (e) {
          var t = e.parentElement;
          e.classList.remove("fl-show"),
            e.addEventListener("transitionend", function () {
              e.remove(), t.hasChildNodes() || t.remove();
            });
        }),
        (e.prototype.handleClick = function (e) {
          var t = this;
          e.addEventListener("click", function () {
            return t.removeNotification(e);
          });
        }),
        (e.prototype.renderProgressBar = function (e, t) {
          var n = this;
          if (t.timeout && !(t.timeout <= 0)) {
            var r = document.createElement("span");
            r.classList.add("fl-progress");
            var o = e.querySelector(".fl-progress-bar");
            o && o.append(r);
            var i = 1e3 / t.fps,
              a = 0,
              l = function () {
                var o = 100 * (1 - i * ((a += 1) / t.timeout));
                (r.style.width = "".concat(o, "%")),
                  o <= 0 && (clearInterval(f), n.removeNotification(e));
              },
              f = window.setInterval(l, i);
            e.addEventListener("mouseout", function () {
              return (f = window.setInterval(l, i));
            }),
              e.addEventListener("mouseover", function () {
                return clearInterval(f);
              });
          }
        }),
        (e.prototype.applyDarkMode = function () {
          if (
            !document.body.classList.contains("fl-dark-mode") &&
            !document.querySelector("style.flasher-js")
          ) {
            var e = [].concat(this.options.darkMode),
              t = e[0],
              n = e[1],
              r = void 0 === n ? ".dark" : n,
              o =
                ".fl-main-container .fl-container.fl-flasher {background-color: rgb(15, 23, 42);color: rgb(255, 255, 255);}";
            o =
              "media" === t
                ? "@media (prefers-color-scheme: dark) {".concat(o, "}")
                : "".concat(r, " ").concat(o);
            var i = document.createElement("style");
            (i.type = "text/css"),
              i.classList.add("flasher-js"),
              i.appendChild(document.createTextNode(o)),
              document.head.appendChild(i),
              document.body.classList.add("fl-dark-mode");
          }
        }),
        (e.prototype.stringToHTML = function (e) {
          var t = (function () {
            if (!DOMParser) return !1;
            var e = new DOMParser();
            try {
              e.parseFromString("x", "text/html");
            } catch (e) {
              return !1;
            }
            return !0;
          })();
          if (t)
            return new DOMParser().parseFromString(e, "text/html").body
              .firstChild;
          var n = document.createElement("div");
          return (n.innerHTML = e), n.firstElementChild;
        }),
        e
      );
    })(),
    o = new ((function () {
      function e() {
        (this.defaultHandler = "theme.flasher"),
          (this.factories = new Map()),
          (this.themes = new Map());
      }
      return (
        (e.prototype.success = function (e, t, n) {
          this.flash("success", e, t, n);
        }),
        (e.prototype.info = function (e, t, n) {
          this.flash("info", e, t, n);
        }),
        (e.prototype.warning = function (e, t, n) {
          this.flash("warning", e, t, n);
        }),
        (e.prototype.error = function (e, t, n) {
          this.flash("error", e, t, n);
        }),
        (e.prototype.flash = function (e, t, n, r) {
          var o = this.createNotification(e, t, n, r),
            i = this.create(this.defaultHandler);
          i.renderOptions({}), i.render({ notification: o });
        }),
        (e.prototype.createNotification = function (e, t, n, r) {
          if (
            ("object" == typeof e
              ? ((e = (r = e).type), (t = r.message), (n = r.title))
              : "object" == typeof t
              ? ((t = (r = t).message), (n = r.title))
              : "object" == typeof n && (n = (r = n).title),
            void 0 === t)
          )
            throw new Error("message option is required");
          return { type: e || "info", message: t, title: n, options: r };
        }),
        (e.prototype.create = function (e) {
          (e = this.resolveHandler(e)), this.resolveThemeHandler(e);
          var t = this.factories.get(e);
          if (!t)
            throw new Error(
              'Unable to resolve "'.concat(
                e,
                '" notification factory, did you forget to register it?'
              )
            );
          return t;
        }),
        (e.prototype.renderOptions = function (e) {
          var t = this;
          Object.entries(e).forEach(function (e) {
            var n = e[0],
              r = e[1];
            t.create(n).renderOptions(r);
          });
        }),
        (e.prototype.render = function (e) {
          var t = this;
          (e = this.resolveResponse(e)),
            this.addStyles(e.styles, function () {
              t.addScripts(e.scripts, function () {
                t.renderOptions(e.options),
                  t.renderEnvelopes(e.envelopes, e.context);
              });
            });
        }),
        (e.prototype.addFactory = function (e, t) {
          this.factories.set(e, t);
        }),
        (e.prototype.addTheme = function (e, t) {
          this.themes.set(e, t);
        }),
        (e.prototype.using = function (e) {
          return (this.defaultHandler = e), this;
        }),
        (e.prototype.addStyles = function (e, t) {
          var n = this;
          if (0 !== e.length)
            if (
              null === document.querySelector('link[href="'.concat(e[0], '"]'))
            ) {
              var r = document.createElement("link");
              r.setAttribute("href", e[0]),
                r.setAttribute("type", "text/css"),
                r.setAttribute("rel", "stylesheet"),
                (r.onload = function () {
                  return n.addStyles(e.slice(1), t);
                }),
                document.head.appendChild(r);
            } else this.addStyles(e.slice(1), t);
          else "function" == typeof t && t();
        }),
        (e.prototype.addScripts = function (e, t) {
          var n = this;
          if (0 !== e.length)
            if (
              null === document.querySelector('script[src="'.concat(e[0], '"]'))
            ) {
              var r = document.createElement("script");
              r.setAttribute("src", e[0]),
                r.setAttribute("type", "text/javascript"),
                (r.onload = function () {
                  return n.addScripts(e.slice(1), t);
                }),
                document.head.appendChild(r);
            } else this.addScripts(e.slice(1), t);
          else "function" == typeof t && t();
        }),
        (e.prototype.renderEnvelopes = function (e, t) {
          var n = this,
            r = new Map();
          e.forEach(function (e) {
            (e.context = Object.assign({}, e.context || {}, t)),
              (e.handler = n.resolveHandler(e.handler));
            var o = n.create(e.handler);
            n.isQueueable(o)
              ? (r.get(e.handler) || o.resetQueue(),
                o.addEnvelope(e),
                r.set(e.handler, o))
              : o.render(e);
          }),
            r.forEach(function (e) {
              return e.renderQueue();
            });
        }),
        (e.prototype.isQueueable = function (e) {
          return (
            "function" == typeof e.addEnvelope &&
            "function" == typeof e.renderQueue
          );
        }),
        (e.prototype.resolveResponse = function (e) {
          var t = this;
          return (
            (e.envelopes = e.envelopes || []),
            (e.options = e.options || {}),
            (e.scripts = e.scripts || []),
            (e.styles = e.styles || []),
            (e.context = e.context || {}),
            Object.entries(e.options).forEach(function (n) {
              var r = n[0],
                o = n[1];
              e.options[r] = t.parseOptions(o);
            }),
            e.envelopes.forEach(function (n) {
              (n.handler = t.resolveHandler(n.handler)),
                (n.notification.options = t.parseOptions(
                  n.notification.options || {}
                )),
                t.pushStyles(e, n.handler);
            }),
            e
          );
        }),
        (e.prototype.parseOptions = function (e) {
          var t = this;
          return (
            Object.entries(e).forEach(function (n) {
              var r = n[0],
                o = n[1];
              e[r] = t.parseFunction(o);
            }),
            e
          );
        }),
        (e.prototype.parseFunction = function (e) {
          var t, r;
          if ("string" != typeof e) return e;
          var o = e.match(
            /^function(?:.+)?(?:\s+)?\((.+)?\)(?:\s+|\n+)?{(?:\s+|\n+)?((?:.|\n)+)}$/m
          );
          if (!o) return e;
          var i =
              null !==
                (r =
                  null === (t = o[1]) || void 0 === t
                    ? void 0
                    : t.split(",").map(function (e) {
                        return e.trim();
                      })) && void 0 !== r
                ? r
                : [],
            a = o[2];
          return new (Function.bind.apply(
            Function,
            n(n([void 0], i, !1), [a], !1)
          ))();
        }),
        (e.prototype.pushStyles = function (e, t) {
          var n;
          t = t.replace("theme.", "");
          var r =
            (null === (n = this.themes.get(t)) || void 0 === n
              ? void 0
              : n.styles) || [];
          e.styles = e.styles.concat(r).filter(function (e, t, n) {
            return n.indexOf(e) === t;
          });
        }),
        (e.prototype.resolveHandler = function (e) {
          return (
            (e = e || this.defaultHandler),
            ["flasher", "theme", "template"].includes(e) &&
              (e = "theme.flasher"),
            (e = e.replace("template.", "theme."))
          );
        }),
        (e.prototype.resolveThemeHandler = function (e) {
          if (!this.factories.get(e) && 0 === e.indexOf("theme.")) {
            var t = this.themes.get(e.replace("theme.", ""));
            t && this.addFactory(e, new r(t));
          }
        }),
        e
      );
    })())();
  return (
    o.addTheme("flasher", {
      render: function (e) {
        var t,
          n = e.notification;
        return (
          '<div class="fl-flasher fl-' +
          n.type +
          '"><div class="fl-content"><div class="fl-icon"></div><div><strong class="fl-title">' +
          (null !== (t = n.title) && void 0 !== t ? t : n.type) +
          '</strong><span class="fl-message">' +
          n.message +
          '</span></div></div><span class="fl-progress-bar"></span></div>'
        );
      },
    }),
    o
  );
});
