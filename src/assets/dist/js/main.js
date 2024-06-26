!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: r,
        });
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "/"),
    n((n.s = 7));
})([
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = n(11),
      i = Object.prototype.toString;
    function s(e) {
      return "[object Array]" === i.call(e);
    }
    function u(e) {
      return null !== e && "object" == typeof e;
    }
    function a(e) {
      return "[object Function]" === i.call(e);
    }
    function c(e, t) {
      if (null !== e && void 0 !== e)
        if (("object" != typeof e && (e = [e]), s(e)))
          for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e);
    }
    e.exports = {
      isArray: s,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === i.call(e);
      },
      isBuffer: o,
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: u,
      isUndefined: function (e) {
        return void 0 === e;
      },
      isDate: function (e) {
        return "[object Date]" === i.call(e);
      },
      isFile: function (e) {
        return "[object File]" === i.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === i.call(e);
      },
      isFunction: a,
      isStream: function (e) {
        return u(e) && a(e.pipe);
      },
      isURLSearchParams: function (e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            "ReactNative" !== navigator.product) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: c,
      merge: function e() {
        var t = {};
        function n(n, r) {
          "object" == typeof t[r] && "object" == typeof n
            ? (t[r] = e(t[r], n))
            : (t[r] = n);
        }
        for (var r = 0, o = arguments.length; r < o; r++) c(arguments[r], n);
        return t;
      },
      extend: function (e, t, n) {
        return (
          c(t, function (t, o) {
            e[o] = n && "function" == typeof t ? r(t, n) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      },
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var r = n(0),
        o = n(14),
        i = { "Content-Type": "application/x-www-form-urlencoded" };
      function s(e, t) {
        !r.isUndefined(e) &&
          r.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var u,
        a = {
          adapter:
            ("undefined" != typeof XMLHttpRequest
              ? (u = n(3))
              : void 0 !== t && (u = n(3)),
            u),
          transformRequest: [
            function (e, t) {
              return (
                o(t, "Content-Type"),
                r.isFormData(e) ||
                r.isArrayBuffer(e) ||
                r.isBuffer(e) ||
                r.isStream(e) ||
                r.isFile(e) ||
                r.isBlob(e)
                  ? e
                  : r.isArrayBufferView(e)
                  ? e.buffer
                  : r.isURLSearchParams(e)
                  ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : r.isObject(e)
                  ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (a.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        r.forEach(["delete", "get", "head"], function (e) {
          a.headers[e] = {};
        }),
        r.forEach(["post", "put", "patch"], function (e) {
          a.headers[e] = r.merge(i);
        }),
        (e.exports = a);
    }).call(t, n(13));
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r];
        return e.apply(t, n);
      };
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(15),
      i = n(17),
      s = n(18),
      u = n(19),
      a = n(4),
      c =
        ("undefined" != typeof window &&
          window.btoa &&
          window.btoa.bind(window)) ||
        n(20);
    e.exports = function (e) {
      return new Promise(function (t, f) {
        var p = e.data,
          l = e.headers;
        r.isFormData(p) && delete l["Content-Type"];
        var d = new XMLHttpRequest(),
          h = "onreadystatechange",
          m = !1;
        if (
          ("undefined" == typeof window ||
            !window.XDomainRequest ||
            "withCredentials" in d ||
            u(e.url) ||
            ((d = new window.XDomainRequest()),
            (h = "onload"),
            (m = !0),
            (d.onprogress = function () {}),
            (d.ontimeout = function () {})),
          e.auth)
        ) {
          var y = e.auth.username || "",
            v = e.auth.password || "";
          l.Authorization = "Basic " + c(y + ":" + v);
        }
        if (
          (d.open(
            e.method.toUpperCase(),
            i(e.url, e.params, e.paramsSerializer),
            !0
          ),
          (d.timeout = e.timeout),
          (d[h] = function () {
            if (
              d &&
              (4 === d.readyState || m) &&
              (0 !== d.status ||
                (d.responseURL && 0 === d.responseURL.indexOf("file:")))
            ) {
              var n =
                  "getAllResponseHeaders" in d
                    ? s(d.getAllResponseHeaders())
                    : null,
                r = {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? d.response
                      : d.responseText,
                  status: 1223 === d.status ? 204 : d.status,
                  statusText: 1223 === d.status ? "No Content" : d.statusText,
                  headers: n,
                  config: e,
                  request: d,
                };
              o(t, f, r), (d = null);
            }
          }),
          (d.onerror = function () {
            f(a("Network Error", e, null, d)), (d = null);
          }),
          (d.ontimeout = function () {
            f(
              a("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", d)
            ),
              (d = null);
          }),
          r.isStandardBrowserEnv())
        ) {
          var w = n(21),
            g =
              (e.withCredentials || u(e.url)) && e.xsrfCookieName
                ? w.read(e.xsrfCookieName)
                : void 0;
          g && (l[e.xsrfHeaderName] = g);
        }
        if (
          ("setRequestHeader" in d &&
            r.forEach(l, function (e, t) {
              void 0 === p && "content-type" === t.toLowerCase()
                ? delete l[t]
                : d.setRequestHeader(t, e);
            }),
          e.withCredentials && (d.withCredentials = !0),
          e.responseType)
        )
          try {
            d.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress &&
          d.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            d.upload &&
            d.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              d && (d.abort(), f(e), (d = null));
            }),
          void 0 === p && (p = null),
          d.send(p);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(16);
    e.exports = function (e, t, n, o, i) {
      var s = new Error(e);
      return r(s, t, n, o, i);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      this.message = e;
    }
    (r.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (r.prototype.__CANCEL__ = !0),
      (e.exports = r);
  },
  function (e, t, n) {
    e.exports = n(8);
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(9),
      o = n.n(r);
    function i() {
      o.a
        .post("" + window.sessionout.authpingEndpoint, { pinguser: 1 })
        .then(function (e) {
          0 === parseInt(e.data.auth)
            ? (document.getElementById("modal-klongchu").style.visibility =
                "visible")
            : (document.getElementById("modal-klongchu").style.visibility =
                "hidden");
        })
        .catch(function (e) {
          console.log(e);
        });
    }
    setInterval(i, 1e3 * parseInt(window.sessionout.requestGap)),
      1 === parseInt(window.sessionout.usingBroadcasting) &&
        Echo.private("user.sessiotrack." + window.sessionout.userId).listen(
          ".session.active",
          function (e) {
            document.getElementById("modal-klongchu").style.visibility =
              "hidden";
          }
        );
  },
  function (e, t, n) {
    e.exports = n(10);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(2),
      i = n(12),
      s = n(1);
    function u(e) {
      var t = new i(e),
        n = o(i.prototype.request, t);
      return r.extend(n, i.prototype, t), r.extend(n, t), n;
    }
    var a = u(s);
    (a.Axios = i),
      (a.create = function (e) {
        return u(r.merge(s, e));
      }),
      (a.Cancel = n(6)),
      (a.CancelToken = n(27)),
      (a.isCancel = n(5)),
      (a.all = function (e) {
        return Promise.all(e);
      }),
      (a.spread = n(28)),
      (e.exports = a),
      (e.exports.default = a);
  },
  function (e, t) {
    function n(e) {
      return (
        !!e.constructor &&
        "function" == typeof e.constructor.isBuffer &&
        e.constructor.isBuffer(e)
      );
    }
    e.exports = function (e) {
      return (
        null != e &&
        (n(e) ||
          (function (e) {
            return (
              "function" == typeof e.readFloatLE &&
              "function" == typeof e.slice &&
              n(e.slice(0, 0))
            );
          })(e) ||
          !!e._isBuffer)
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(1),
      o = n(0),
      i = n(22),
      s = n(23);
    function u(e) {
      (this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() });
    }
    (u.prototype.request = function (e) {
      "string" == typeof e &&
        (e = o.merge({ url: arguments[0] }, arguments[1])),
        ((e = o.merge(r, { method: "get" }, this.defaults, e)).method =
          e.method.toLowerCase());
      var t = [s, void 0],
        n = Promise.resolve(e);
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        t.length;

      )
        n = n.then(t.shift(), t.shift());
      return n;
    }),
      o.forEach(["delete", "get", "head", "options"], function (e) {
        u.prototype[e] = function (t, n) {
          return this.request(o.merge(n || {}, { method: e, url: t }));
        };
      }),
      o.forEach(["post", "put", "patch"], function (e) {
        u.prototype[e] = function (t, n, r) {
          return this.request(o.merge(r || {}, { method: e, url: t, data: n }));
        };
      }),
      (e.exports = u);
  },
  function (e, t) {
    var n,
      r,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function u(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        n = i;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        r = s;
      }
    })();
    var a,
      c = [],
      f = !1,
      p = -1;
    function l() {
      f &&
        a &&
        ((f = !1), a.length ? (c = a.concat(c)) : (p = -1), c.length && d());
    }
    function d() {
      if (!f) {
        var e = u(l);
        f = !0;
        for (var t = c.length; t; ) {
          for (a = c, c = []; ++p < t; ) a && a[p].run();
          (p = -1), (t = c.length);
        }
        (a = null),
          (f = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === s || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new h(e, t)), 1 !== c.length || f || u(d);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = m),
      (o.addListener = m),
      (o.once = m),
      (o.off = m),
      (o.removeListener = m),
      (o.removeAllListeners = m),
      (o.emit = m),
      (o.prependListener = m),
      (o.prependOnceListener = m),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t) {
      r.forEach(e, function (n, r) {
        r !== t &&
          r.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[r]);
      });
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(4);
    e.exports = function (e, t, n) {
      var o = n.config.validateStatus;
      n.status && o && !o(n.status)
        ? t(
            r(
              "Request failed with status code " + n.status,
              n.config,
              null,
              n.request,
              n
            )
          )
        : e(n);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, o) {
      return (
        (e.config = t), n && (e.code = n), (e.request = r), (e.response = o), e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    function o(e) {
      return encodeURIComponent(e)
        .replace(/%40/gi, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, n) {
      if (!t) return e;
      var i;
      if (n) i = n(t);
      else if (r.isURLSearchParams(t)) i = t.toString();
      else {
        var s = [];
        r.forEach(t, function (e, t) {
          null !== e &&
            void 0 !== e &&
            (r.isArray(e) ? (t += "[]") : (e = [e]),
            r.forEach(e, function (e) {
              r.isDate(e)
                ? (e = e.toISOString())
                : r.isObject(e) && (e = JSON.stringify(e)),
                s.push(o(t) + "=" + o(e));
            }));
        }),
          (i = s.join("&"));
      }
      return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        n,
        i,
        s = {};
      return e
        ? (r.forEach(e.split("\n"), function (e) {
            if (
              ((i = e.indexOf(":")),
              (t = r.trim(e.substr(0, i)).toLowerCase()),
              (n = r.trim(e.substr(i + 1))),
              t)
            ) {
              if (s[t] && o.indexOf(t) >= 0) return;
              s[t] =
                "set-cookie" === t
                  ? (s[t] ? s[t] : []).concat([n])
                  : s[t]
                  ? s[t] + ", " + n
                  : n;
            }
          }),
          s)
        : s;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function o(e) {
            var r = e;
            return (
              t && (n.setAttribute("href", r), (r = n.href)),
              n.setAttribute("href", r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname:
                  "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname,
              }
            );
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var n = r.isString(t) ? o(t) : t;
              return n.protocol === e.protocol && n.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (e, t, n) {
    "use strict";
    var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function o() {
      this.message = "String contains an invalid character";
    }
    (o.prototype = new Error()),
      (o.prototype.code = 5),
      (o.prototype.name = "InvalidCharacterError"),
      (e.exports = function (e) {
        for (
          var t, n, i = String(e), s = "", u = 0, a = r;
          i.charAt(0 | u) || ((a = "="), u % 1);
          s += a.charAt(63 & (t >> (8 - (u % 1) * 8)))
        ) {
          if ((n = i.charCodeAt((u += 0.75))) > 255) throw new o();
          t = (t << 8) | n;
        }
        return s;
      });
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv()
      ? {
          write: function (e, t, n, o, i, s) {
            var u = [];
            u.push(e + "=" + encodeURIComponent(t)),
              r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()),
              r.isString(o) && u.push("path=" + o),
              r.isString(i) && u.push("domain=" + i),
              !0 === s && u.push("secure"),
              (document.cookie = u.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t) {
      return (
        this.handlers.push({ fulfilled: e, rejected: t }),
        this.handlers.length - 1
      );
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (e) {
        r.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(24),
      i = n(5),
      s = n(1),
      u = n(25),
      a = n(26);
    function c(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        c(e),
        e.baseURL && !u(e.url) && (e.url = a(e.baseURL, e.url)),
        (e.headers = e.headers || {}),
        (e.data = o(e.data, e.headers, e.transformRequest)),
        (e.headers = r.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers || {}
        )),
        r.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || s.adapter)(e).then(
          function (t) {
            return (
              c(e), (t.data = o(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              i(t) ||
                (c(e),
                t &&
                  t.response &&
                  (t.response.data = o(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t, n) {
      return (
        r.forEach(n, function (n) {
          e = n(e, t);
        }),
        e
      );
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(6);
    function o(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var n = this;
      e(function (e) {
        n.reason || ((n.reason = new r(e)), t(n.reason));
      });
    }
    (o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (o.source = function () {
        var e;
        return {
          token: new o(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = o);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
]);
