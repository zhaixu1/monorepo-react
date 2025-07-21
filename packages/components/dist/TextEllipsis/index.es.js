import { j as wn } from "../jsx-runtime-C5mzlN2N.mjs";
import * as p from "react";
import Ae, { isValidElement as Lu, version as ju, useContext as jr, useRef as rt, useLayoutEffect as Du, useEffect as vr, useState as as, useMemo as os, forwardRef as zu, useImperativeHandle as Hu, memo as Wu } from "react";
import Wa, { createPortal as Bu } from "react-dom";
function qu(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var wi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ba;
function Uu() {
  return Ba || (Ba = 1, function(r) {
    (function() {
      var t = {}.hasOwnProperty;
      function e() {
        for (var a = "", o = 0; o < arguments.length; o++) {
          var s = arguments[o];
          s && (a = i(a, n(s)));
        }
        return a;
      }
      function n(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return e.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var o = "";
        for (var s in a)
          t.call(a, s) && a[s] && (o = i(o, s));
        return o;
      }
      function i(a, o) {
        return o ? a ? a + " " + o : a + o : a;
      }
      r.exports ? (e.default = e, r.exports = e) : window.classNames = e;
    })();
  }(wi)), wi.exports;
}
var Gu = Uu();
const je = /* @__PURE__ */ qu(Gu);
function bt() {
  return bt = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e) ({}).hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }, bt.apply(null, arguments);
}
function X(r) {
  "@babel/helpers - typeof";
  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, X(r);
}
var Xu = Symbol.for("react.element"), Ku = Symbol.for("react.transitional.element"), Zu = Symbol.for("react.fragment");
function ss(r) {
  return (
    // Base object type
    r && X(r) === "object" && // React Element type
    (r.$$typeof === Xu || r.$$typeof === Ku) && // React Fragment type
    r.type === Zu
  );
}
function Ln(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [];
  return Ae.Children.forEach(r, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? e = e.concat(Ln(n)) : ss(n) && n.props ? e = e.concat(Ln(n.props.children, t)) : e.push(n));
  }), e;
}
var $i = {}, Ca = [], Qu = function(t) {
  Ca.push(t);
};
function mr(r, t) {
  if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
    var e = Ca.reduce(function(n, i) {
      return i(n ?? "", "warning");
    }, t);
    e && console.error("Warning: ".concat(e));
  }
}
function Yu(r, t) {
  if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
    var e = Ca.reduce(function(n, i) {
      return i(n ?? "", "note");
    }, t);
    e && console.warn("Note: ".concat(e));
  }
}
function us() {
  $i = {};
}
function cs(r, t, e) {
  !t && !$i[e] && (r(!1, e), $i[e] = !0);
}
function he(r, t) {
  cs(mr, r, t);
}
function Ju(r, t) {
  cs(Yu, r, t);
}
he.preMessage = Qu;
he.resetWarned = us;
he.noteOnce = Ju;
function ec(r, t) {
  if (X(r) != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(r, t);
    if (X(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function ls(r) {
  var t = ec(r, "string");
  return X(t) == "symbol" ? t : t + "";
}
function x(r, t, e) {
  return (t = ls(t)) in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function qa(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function O(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qa(Object(e), !0).forEach(function(n) {
      x(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : qa(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
function Dr(r) {
  return r instanceof HTMLElement || r instanceof SVGElement;
}
function tc(r) {
  return r && X(r) === "object" && Dr(r.nativeElement) ? r.nativeElement : Dr(r) ? r : null;
}
function kn(r) {
  var t = tc(r);
  if (t)
    return t;
  if (r instanceof Ae.Component) {
    var e;
    return (e = Wa.findDOMNode) === null || e === void 0 ? void 0 : e.call(Wa, r);
  }
  return null;
}
var Sn = { exports: {} }, ee = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ua;
function rc() {
  if (Ua) return ee;
  Ua = 1;
  var r = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function h(d) {
    if (typeof d == "object" && d !== null) {
      var b = d.$$typeof;
      switch (b) {
        case r:
          switch (d = d.type, d) {
            case e:
            case i:
            case n:
            case c:
            case l:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case s:
                case o:
                case u:
                case v:
                case f:
                case a:
                  return d;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return ee.ContextConsumer = o, ee.ContextProvider = a, ee.Element = r, ee.ForwardRef = u, ee.Fragment = e, ee.Lazy = v, ee.Memo = f, ee.Portal = t, ee.Profiler = i, ee.StrictMode = n, ee.Suspense = c, ee.SuspenseList = l, ee.isAsyncMode = function() {
    return !1;
  }, ee.isConcurrentMode = function() {
    return !1;
  }, ee.isContextConsumer = function(d) {
    return h(d) === o;
  }, ee.isContextProvider = function(d) {
    return h(d) === a;
  }, ee.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, ee.isForwardRef = function(d) {
    return h(d) === u;
  }, ee.isFragment = function(d) {
    return h(d) === e;
  }, ee.isLazy = function(d) {
    return h(d) === v;
  }, ee.isMemo = function(d) {
    return h(d) === f;
  }, ee.isPortal = function(d) {
    return h(d) === t;
  }, ee.isProfiler = function(d) {
    return h(d) === i;
  }, ee.isStrictMode = function(d) {
    return h(d) === n;
  }, ee.isSuspense = function(d) {
    return h(d) === c;
  }, ee.isSuspenseList = function(d) {
    return h(d) === l;
  }, ee.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === e || d === i || d === n || d === c || d === l || d === m || typeof d == "object" && d !== null && (d.$$typeof === v || d.$$typeof === f || d.$$typeof === a || d.$$typeof === o || d.$$typeof === u || d.$$typeof === g || d.getModuleId !== void 0);
  }, ee.typeOf = h, ee;
}
var te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga;
function nc() {
  return Ga || (Ga = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), g = !1, h = !1, d = !1, b = !1, y = !1, S;
    S = Symbol.for("react.module.reference");
    function P($) {
      return !!(typeof $ == "string" || typeof $ == "function" || $ === e || $ === i || y || $ === n || $ === c || $ === l || b || $ === m || g || h || d || typeof $ == "object" && $ !== null && ($.$$typeof === v || $.$$typeof === f || $.$$typeof === a || $.$$typeof === o || $.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      $.$$typeof === S || $.getModuleId !== void 0));
    }
    function w($) {
      if (typeof $ == "object" && $ !== null) {
        var me = $.$$typeof;
        switch (me) {
          case r:
            var ce = $.type;
            switch (ce) {
              case e:
              case i:
              case n:
              case c:
              case l:
                return ce;
              default:
                var Fe = ce && ce.$$typeof;
                switch (Fe) {
                  case s:
                  case o:
                  case u:
                  case v:
                  case f:
                  case a:
                    return Fe;
                  default:
                    return me;
                }
            }
          case t:
            return me;
        }
      }
    }
    var E = o, C = a, _ = r, F = u, T = e, M = v, k = f, A = t, R = i, V = n, N = c, I = l, j = !1, B = !1;
    function U($) {
      return j || (j = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q($) {
      return B || (B = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function z($) {
      return w($) === o;
    }
    function G($) {
      return w($) === a;
    }
    function K($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === r;
    }
    function Y($) {
      return w($) === u;
    }
    function ie($) {
      return w($) === e;
    }
    function ae($) {
      return w($) === v;
    }
    function Pe($) {
      return w($) === f;
    }
    function ue($) {
      return w($) === t;
    }
    function Te($) {
      return w($) === i;
    }
    function Re($) {
      return w($) === n;
    }
    function ge($) {
      return w($) === c;
    }
    function Ee($) {
      return w($) === l;
    }
    te.ContextConsumer = E, te.ContextProvider = C, te.Element = _, te.ForwardRef = F, te.Fragment = T, te.Lazy = M, te.Memo = k, te.Portal = A, te.Profiler = R, te.StrictMode = V, te.Suspense = N, te.SuspenseList = I, te.isAsyncMode = U, te.isConcurrentMode = q, te.isContextConsumer = z, te.isContextProvider = G, te.isElement = K, te.isForwardRef = Y, te.isFragment = ie, te.isLazy = ae, te.isMemo = Pe, te.isPortal = ue, te.isProfiler = Te, te.isStrictMode = Re, te.isSuspense = ge, te.isSuspenseList = Ee, te.isValidElementType = P, te.typeOf = w;
  }()), te;
}
var Xa;
function ic() {
  return Xa || (Xa = 1, process.env.NODE_ENV === "production" ? Sn.exports = rc() : Sn.exports = nc()), Sn.exports;
}
var Si = ic();
function ac(r, t, e) {
  var n = p.useRef({});
  return (!("value" in n.current) || e(n.current.condition, t)) && (n.current.value = r(), n.current.condition = t), n.current.value;
}
var oc = Number(ju.split(".")[0]), xa = function(t, e) {
  typeof t == "function" ? t(e) : X(t) === "object" && t && "current" in t && (t.current = e);
}, fs = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var i = e.filter(Boolean);
  return i.length <= 1 ? i[0] : function(a) {
    e.forEach(function(o) {
      xa(o, a);
    });
  };
}, Pa = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return ac(function() {
    return fs.apply(void 0, e);
  }, e, function(i, a) {
    return i.length !== a.length || i.every(function(o, s) {
      return o !== a[s];
    });
  });
}, Gn = function(t) {
  var e, n;
  if (!t)
    return !1;
  if (ds(t) && oc >= 19)
    return !0;
  var i = Si.isMemo(t) ? t.type.type : t.type;
  return !(typeof i == "function" && !((e = i.prototype) !== null && e !== void 0 && e.render) && i.$$typeof !== Si.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== Si.ForwardRef);
};
function ds(r) {
  return /* @__PURE__ */ Lu(r) && !ss(r);
}
var _a = function(t) {
  if (t && ds(t)) {
    var e = t;
    return e.props.propertyIsEnumerable("ref") ? e.props.ref : e.ref;
  }
  return null;
}, Ii = /* @__PURE__ */ p.createContext(null);
function sc(r) {
  var t = r.children, e = r.onBatchResize, n = p.useRef(0), i = p.useRef([]), a = p.useContext(Ii), o = p.useCallback(function(s, u, c) {
    n.current += 1;
    var l = n.current;
    i.current.push({
      size: s,
      element: u,
      data: c
    }), Promise.resolve().then(function() {
      l === n.current && (e?.(i.current), i.current = []);
    }), a?.(s, u, c);
  }, [e, a]);
  return /* @__PURE__ */ p.createElement(Ii.Provider, {
    value: o
  }, t);
}
var vs = function() {
  if (typeof Map < "u")
    return Map;
  function r(t, e) {
    var n = -1;
    return t.some(function(i, a) {
      return i[0] === e ? (n = a, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(e) {
        var n = r(this.__entries__, e), i = this.__entries__[n];
        return i && i[1];
      }, t.prototype.set = function(e, n) {
        var i = r(this.__entries__, e);
        ~i ? this.__entries__[i][1] = n : this.__entries__.push([e, n]);
      }, t.prototype.delete = function(e) {
        var n = this.__entries__, i = r(n, e);
        ~i && n.splice(i, 1);
      }, t.prototype.has = function(e) {
        return !!~r(this.__entries__, e);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(e, n) {
        n === void 0 && (n = null);
        for (var i = 0, a = this.__entries__; i < a.length; i++) {
          var o = a[i];
          e.call(n, o[1], o[0]);
        }
      }, t;
    }()
  );
}(), Li = typeof window < "u" && typeof document < "u" && window.document === document, jn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), uc = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(jn) : function(r) {
    return setTimeout(function() {
      return r(Date.now());
    }, 1e3 / 60);
  };
}(), cc = 2;
function lc(r, t) {
  var e = !1, n = !1, i = 0;
  function a() {
    e && (e = !1, r()), n && s();
  }
  function o() {
    uc(a);
  }
  function s() {
    var u = Date.now();
    if (e) {
      if (u - i < cc)
        return;
      n = !0;
    } else
      e = !0, n = !1, setTimeout(o, t);
    i = u;
  }
  return s;
}
var fc = 20, dc = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], vc = typeof MutationObserver < "u", hc = (
  /** @class */
  function() {
    function r() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = lc(this.refresh.bind(this), fc);
    }
    return r.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, r.prototype.removeObserver = function(t) {
      var e = this.observers_, n = e.indexOf(t);
      ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_();
    }, r.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, r.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(e) {
        return e.gatherActive(), e.hasActive();
      });
      return t.forEach(function(e) {
        return e.broadcastActive();
      }), t.length > 0;
    }, r.prototype.connect_ = function() {
      !Li || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), vc ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, r.prototype.disconnect_ = function() {
      !Li || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, r.prototype.onTransitionEnd_ = function(t) {
      var e = t.propertyName, n = e === void 0 ? "" : e, i = dc.some(function(a) {
        return !!~n.indexOf(a);
      });
      i && this.refresh();
    }, r.getInstance = function() {
      return this.instance_ || (this.instance_ = new r()), this.instance_;
    }, r.instance_ = null, r;
  }()
), hs = function(r, t) {
  for (var e = 0, n = Object.keys(t); e < n.length; e++) {
    var i = n[e];
    Object.defineProperty(r, i, {
      value: t[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return r;
}, pr = function(r) {
  var t = r && r.ownerDocument && r.ownerDocument.defaultView;
  return t || jn;
}, gs = Xn(0, 0, 0, 0);
function Dn(r) {
  return parseFloat(r) || 0;
}
function Ka(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return t.reduce(function(n, i) {
    var a = r["border-" + i + "-width"];
    return n + Dn(a);
  }, 0);
}
function gc(r) {
  for (var t = ["top", "right", "bottom", "left"], e = {}, n = 0, i = t; n < i.length; n++) {
    var a = i[n], o = r["padding-" + a];
    e[a] = Dn(o);
  }
  return e;
}
function mc(r) {
  var t = r.getBBox();
  return Xn(0, 0, t.width, t.height);
}
function pc(r) {
  var t = r.clientWidth, e = r.clientHeight;
  if (!t && !e)
    return gs;
  var n = pr(r).getComputedStyle(r), i = gc(n), a = i.left + i.right, o = i.top + i.bottom, s = Dn(n.width), u = Dn(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + a) !== t && (s -= Ka(n, "left", "right") + a), Math.round(u + o) !== e && (u -= Ka(n, "top", "bottom") + o)), !bc(r)) {
    var c = Math.round(s + a) - t, l = Math.round(u + o) - e;
    Math.abs(c) !== 1 && (s -= c), Math.abs(l) !== 1 && (u -= l);
  }
  return Xn(i.left, i.top, s, u);
}
var yc = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(r) {
    return r instanceof pr(r).SVGGraphicsElement;
  } : function(r) {
    return r instanceof pr(r).SVGElement && typeof r.getBBox == "function";
  };
}();
function bc(r) {
  return r === pr(r).document.documentElement;
}
function wc(r) {
  return Li ? yc(r) ? mc(r) : pc(r) : gs;
}
function Sc(r) {
  var t = r.x, e = r.y, n = r.width, i = r.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(a.prototype);
  return hs(o, {
    x: t,
    y: e,
    width: n,
    height: i,
    top: e,
    right: t + n,
    bottom: i + e,
    left: t
  }), o;
}
function Xn(r, t, e, n) {
  return { x: r, y: t, width: e, height: n };
}
var Ec = (
  /** @class */
  function() {
    function r(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Xn(0, 0, 0, 0), this.target = t;
    }
    return r.prototype.isActive = function() {
      var t = wc(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, r.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, r;
  }()
), Cc = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(t, e) {
      var n = Sc(e);
      hs(this, { target: t, contentRect: n });
    }
    return r;
  }()
), xc = (
  /** @class */
  function() {
    function r(t, e, n) {
      if (this.activeObservations_ = [], this.observations_ = new vs(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n;
    }
    return r.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof pr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(t) || (e.set(t, new Ec(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, r.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof pr(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var e = this.observations_;
        e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this));
      }
    }, r.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, r.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(e) {
        e.isActive() && t.activeObservations_.push(e);
      });
    }, r.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, e = this.activeObservations_.map(function(n) {
          return new Cc(n.target, n.broadcastRect());
        });
        this.callback_.call(t, e, t), this.clearActive();
      }
    }, r.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, r.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, r;
  }()
), ms = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new vs(), ps = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(t) {
      if (!(this instanceof r))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var e = hc.getInstance(), n = new xc(t, e, this);
      ms.set(this, n);
    }
    return r;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(r) {
  ps.prototype[r] = function() {
    var t;
    return (t = ms.get(this))[r].apply(t, arguments);
  };
});
var Pc = function() {
  return typeof jn.ResizeObserver < "u" ? jn.ResizeObserver : ps;
}(), Pt = /* @__PURE__ */ new Map();
function ys(r) {
  r.forEach(function(t) {
    var e, n = t.target;
    (e = Pt.get(n)) === null || e === void 0 || e.forEach(function(i) {
      return i(n);
    });
  });
}
var bs = new Pc(ys);
process.env.NODE_ENV;
process.env.NODE_ENV;
function _c(r, t) {
  Pt.has(r) || (Pt.set(r, /* @__PURE__ */ new Set()), bs.observe(r)), Pt.get(r).add(t);
}
function Oc(r, t) {
  Pt.has(r) && (Pt.get(r).delete(t), Pt.get(r).size || (bs.unobserve(r), Pt.delete(r)));
}
function Ne(r, t) {
  if (!(r instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Za(r, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, ls(n.key), n);
  }
}
function Ve(r, t, e) {
  return t && Za(r.prototype, t), e && Za(r, e), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function zr(r, t) {
  return zr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
    return e.__proto__ = n, e;
  }, zr(r, t);
}
function Qt(r, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(r, "prototype", {
    writable: !1
  }), t && zr(r, t);
}
function Hr(r) {
  return Hr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Hr(r);
}
function Oa() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Oa = function() {
    return !!r;
  })();
}
function Z(r) {
  if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Fc(r, t) {
  if (t && (X(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Z(r);
}
function Yt(r) {
  var t = Oa();
  return function() {
    var e, n = Hr(r);
    if (t) {
      var i = Hr(this).constructor;
      e = Reflect.construct(n, arguments, i);
    } else e = n.apply(this, arguments);
    return Fc(this, e);
  };
}
var Tc = /* @__PURE__ */ function(r) {
  Qt(e, r);
  var t = Yt(e);
  function e() {
    return Ne(this, e), t.apply(this, arguments);
  }
  return Ve(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(p.Component);
function Rc(r, t) {
  var e = r.children, n = r.disabled, i = p.useRef(null), a = p.useRef(null), o = p.useContext(Ii), s = typeof e == "function", u = s ? e(i) : e, c = p.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), l = !s && /* @__PURE__ */ p.isValidElement(u) && Gn(u), f = l ? _a(u) : null, v = Pa(f, i), m = function() {
    var b;
    return kn(i.current) || // Support `nativeElement` format
    (i.current && X(i.current) === "object" ? kn((b = i.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || kn(a.current);
  };
  p.useImperativeHandle(t, function() {
    return m();
  });
  var g = p.useRef(r);
  g.current = r;
  var h = p.useCallback(function(d) {
    var b = g.current, y = b.onResize, S = b.data, P = d.getBoundingClientRect(), w = P.width, E = P.height, C = d.offsetWidth, _ = d.offsetHeight, F = Math.floor(w), T = Math.floor(E);
    if (c.current.width !== F || c.current.height !== T || c.current.offsetWidth !== C || c.current.offsetHeight !== _) {
      var M = {
        width: F,
        height: T,
        offsetWidth: C,
        offsetHeight: _
      };
      c.current = M;
      var k = C === Math.round(w) ? w : C, A = _ === Math.round(E) ? E : _, R = O(O({}, M), {}, {
        offsetWidth: k,
        offsetHeight: A
      });
      o?.(R, d, S), y && Promise.resolve().then(function() {
        y(R, d);
      });
    }
  }, []);
  return p.useEffect(function() {
    var d = m();
    return d && !n && _c(d, h), function() {
      return Oc(d, h);
    };
  }, [i.current, n]), /* @__PURE__ */ p.createElement(Tc, {
    ref: a
  }, l ? /* @__PURE__ */ p.cloneElement(u, {
    ref: v
  }) : u);
}
var ws = /* @__PURE__ */ p.forwardRef(Rc);
process.env.NODE_ENV !== "production" && (ws.displayName = "SingleObserver");
var Mc = "rc-observer-key";
function kc(r, t) {
  var e = r.children, n = typeof e == "function" ? [e] : Ln(e);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? mr(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && mr(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(i, a) {
    var o = i?.key || "".concat(Mc, "-").concat(a);
    return /* @__PURE__ */ p.createElement(ws, bt({}, r, {
      key: o,
      ref: a === 0 ? t : void 0
    }), i);
  });
}
var Kn = /* @__PURE__ */ p.forwardRef(kc);
process.env.NODE_ENV !== "production" && (Kn.displayName = "ResizeObserver");
Kn.Collection = sc;
function ji(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
  return n;
}
function Ac(r) {
  if (Array.isArray(r)) return ji(r);
}
function Ss(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function Fa(r, t) {
  if (r) {
    if (typeof r == "string") return ji(r, t);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? ji(r, t) : void 0;
  }
}
function Nc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(r) {
  return Ac(r) || Ss(r) || Fa(r) || Nc();
}
var Es = function(t) {
  return +setTimeout(t, 16);
}, Cs = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Es = function(t) {
  return window.requestAnimationFrame(t);
}, Cs = function(t) {
  return window.cancelAnimationFrame(t);
});
var Qa = 0, Zn = /* @__PURE__ */ new Map();
function xs(r) {
  Zn.delete(r);
}
var zn = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Qa += 1;
  var n = Qa;
  function i(a) {
    if (a === 0)
      xs(n), t();
    else {
      var o = Es(function() {
        i(a - 1);
      });
      Zn.set(n, o);
    }
  }
  return i(e), n;
};
zn.cancel = function(r) {
  var t = Zn.get(r);
  return xs(r), Cs(t);
};
process.env.NODE_ENV !== "production" && (zn.ids = function() {
  return Zn;
});
function Ps(r) {
  if (Array.isArray(r)) return r;
}
function Vc(r, t) {
  var e = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (e != null) {
    var n, i, a, o, s = [], u = !0, c = !1;
    try {
      if (a = (e = e.call(r)).next, t === 0) {
        if (Object(e) !== e) return;
        u = !1;
      } else for (; !(u = (n = a.call(e)).done) && (s.push(n.value), s.length !== t); u = !0) ;
    } catch (l) {
      c = !0, i = l;
    } finally {
      try {
        if (!u && e.return != null && (o = e.return(), Object(o) !== o)) return;
      } finally {
        if (c) throw i;
      }
    }
    return s;
  }
}
function _s() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L(r, t) {
  return Ps(r) || Vc(r, t) || Fa(r, t) || _s();
}
function Wr(r) {
  for (var t = 0, e, n = 0, i = r.length; i >= 4; ++n, i -= 4)
    e = r.charCodeAt(n) & 255 | (r.charCodeAt(++n) & 255) << 8 | (r.charCodeAt(++n) & 255) << 16 | (r.charCodeAt(++n) & 255) << 24, e = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), e ^= /* k >>> r: */
    e >>> 24, t = /* Math.imul(k, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (r.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (r.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= r.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Ue() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function $c(r, t) {
  if (!r)
    return !1;
  if (r.contains)
    return r.contains(t);
  for (var e = t; e; ) {
    if (e === r)
      return !0;
    e = e.parentNode;
  }
  return !1;
}
var Ya = "data-rc-order", Ja = "data-rc-priority", Ic = "rc-util-key", Di = /* @__PURE__ */ new Map();
function Os() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = r.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Ic;
}
function Qn(r) {
  if (r.attachTo)
    return r.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Lc(r) {
  return r === "queue" ? "prependQueue" : r ? "prepend" : "append";
}
function Ta(r) {
  return Array.from((Di.get(r) || r).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Fs(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ue())
    return null;
  var e = t.csp, n = t.prepend, i = t.priority, a = i === void 0 ? 0 : i, o = Lc(n), s = o === "prependQueue", u = document.createElement("style");
  u.setAttribute(Ya, o), s && a && u.setAttribute(Ja, "".concat(a)), e != null && e.nonce && (u.nonce = e?.nonce), u.innerHTML = r;
  var c = Qn(t), l = c.firstChild;
  if (n) {
    if (s) {
      var f = (t.styles || Ta(c)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(Ya)))
          return !1;
        var m = Number(v.getAttribute(Ja) || 0);
        return a >= m;
      });
      if (f.length)
        return c.insertBefore(u, f[f.length - 1].nextSibling), u;
    }
    c.insertBefore(u, l);
  } else
    c.appendChild(u);
  return u;
}
function Ts(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Qn(t);
  return (t.styles || Ta(e)).find(function(n) {
    return n.getAttribute(Os(t)) === r;
  });
}
function Br(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = Ts(r, t);
  if (e) {
    var n = Qn(t);
    n.removeChild(e);
  }
}
function jc(r, t) {
  var e = Di.get(r);
  if (!e || !$c(document, e)) {
    var n = Fs("", t), i = n.parentNode;
    Di.set(r, i), r.removeChild(n);
  }
}
function Gt(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Qn(e), i = Ta(n), a = O(O({}, e), {}, {
    styles: i
  });
  jc(n, a);
  var o = Ts(t, a);
  if (o) {
    var s, u;
    if ((s = a.csp) !== null && s !== void 0 && s.nonce && o.nonce !== ((u = a.csp) === null || u === void 0 ? void 0 : u.nonce)) {
      var c;
      o.nonce = (c = a.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return o.innerHTML !== r && (o.innerHTML = r), o;
  }
  var l = Fs(r, a);
  return l.setAttribute(Os(a), t), l;
}
function Dc(r, t) {
  if (r == null) return {};
  var e = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (t.indexOf(n) !== -1) continue;
    e[n] = r[n];
  }
  return e;
}
function Kt(r, t) {
  if (r == null) return {};
  var e, n, i = Dc(r, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    for (n = 0; n < a.length; n++) e = a[n], t.indexOf(e) === -1 && {}.propertyIsEnumerable.call(r, e) && (i[e] = r[e]);
  }
  return i;
}
function eo(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function i(a, o) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, u = n.has(a);
    if (he(!u, "Warning: There may be circular references"), u)
      return !1;
    if (a === o)
      return !0;
    if (e && s > 1)
      return !1;
    n.add(a);
    var c = s + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(o) || a.length !== o.length)
        return !1;
      for (var l = 0; l < a.length; l++)
        if (!i(a[l], o[l], c))
          return !1;
      return !0;
    }
    if (a && o && X(a) === "object" && X(o) === "object") {
      var f = Object.keys(a);
      return f.length !== Object.keys(o).length ? !1 : f.every(function(v) {
        return i(a[v], o[v], c);
      });
    }
    return !1;
  }
  return i(r, t);
}
var zc = "%";
function zi(r) {
  return r.join(zc);
}
var Hc = /* @__PURE__ */ function() {
  function r(t) {
    Ne(this, r), x(this, "instanceId", void 0), x(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Ve(r, [{
    key: "get",
    value: function(e) {
      return this.opGet(zi(e));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(e) {
      return this.cache.get(e) || null;
    }
  }, {
    key: "update",
    value: function(e, n) {
      return this.opUpdate(zi(e), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(e, n) {
      var i = this.cache.get(e), a = n(i);
      a === null ? this.cache.delete(e) : this.cache.set(e, a);
    }
  }]), r;
}(), yr = "data-token-hash", vt = "data-css-hash", Wc = "data-cache-path", Nt = "__cssinjs_instance__";
function Bc() {
  var r = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(vt, "]")) || [], e = document.head.firstChild;
    Array.from(t).forEach(function(i) {
      i[Nt] = i[Nt] || r, i[Nt] === r && document.head.insertBefore(i, e);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(vt, "]"))).forEach(function(i) {
      var a = i.getAttribute(vt);
      if (n[a]) {
        if (i[Nt] === r) {
          var o;
          (o = i.parentNode) === null || o === void 0 || o.removeChild(i);
        }
      } else
        n[a] = !0;
    });
  }
  return new Hc(r);
}
var Yn = /* @__PURE__ */ p.createContext({
  hashPriority: "low",
  cache: Bc(),
  defaultCache: !0
});
function qc(r, t) {
  if (r.length !== t.length)
    return !1;
  for (var e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !1;
  return !0;
}
var Ra = /* @__PURE__ */ function() {
  function r() {
    Ne(this, r), x(this, "cache", void 0), x(this, "keys", void 0), x(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ve(r, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(e) {
      var n, i, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = {
        map: this.cache
      };
      return e.forEach(function(s) {
        if (!o)
          o = void 0;
        else {
          var u;
          o = (u = o) === null || u === void 0 || (u = u.map) === null || u === void 0 ? void 0 : u.get(s);
        }
      }), (n = o) !== null && n !== void 0 && n.value && a && (o.value[1] = this.cacheCallTimes++), (i = o) === null || i === void 0 ? void 0 : i.value;
    }
  }, {
    key: "get",
    value: function(e) {
      var n;
      return (n = this.internalGet(e, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(e) {
      return !!this.internalGet(e);
    }
  }, {
    key: "set",
    value: function(e, n) {
      var i = this;
      if (!this.has(e)) {
        if (this.size() + 1 > r.MAX_CACHE_SIZE + r.MAX_CACHE_OFFSET) {
          var a = this.keys.reduce(function(c, l) {
            var f = L(c, 2), v = f[1];
            return i.internalGet(l)[1] < v ? [l, i.internalGet(l)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), o = L(a, 1), s = o[0];
          this.delete(s);
        }
        this.keys.push(e);
      }
      var u = this.cache;
      e.forEach(function(c, l) {
        if (l === e.length - 1)
          u.set(c, {
            value: [n, i.cacheCallTimes++]
          });
        else {
          var f = u.get(c);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : u.set(c, {
            map: /* @__PURE__ */ new Map()
          }), u = u.get(c).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(e, n) {
      var i = e.get(n[0]);
      if (n.length === 1) {
        var a;
        return i.map ? e.set(n[0], {
          map: i.map
        }) : e.delete(n[0]), (a = i.value) === null || a === void 0 ? void 0 : a[0];
      }
      var o = this.deleteByPath(i.map, n.slice(1));
      return (!i.map || i.map.size === 0) && !i.value && e.delete(n[0]), o;
    }
  }, {
    key: "delete",
    value: function(e) {
      if (this.has(e))
        return this.keys = this.keys.filter(function(n) {
          return !qc(n, e);
        }), this.deleteByPath(this.cache, e);
    }
  }]), r;
}();
x(Ra, "MAX_CACHE_SIZE", 20);
x(Ra, "MAX_CACHE_OFFSET", 5);
var to = 0, Rs = /* @__PURE__ */ function() {
  function r(t) {
    Ne(this, r), x(this, "derivatives", void 0), x(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = to, t.length === 0 && mr(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), to += 1;
  }
  return Ve(r, [{
    key: "getDerivativeToken",
    value: function(e) {
      return this.derivatives.reduce(function(n, i) {
        return i(e, n);
      }, void 0);
    }
  }]), r;
}(), Ei = new Ra();
function Uc(r) {
  var t = Array.isArray(r) ? r : [r];
  return Ei.has(t) || Ei.set(t, new Rs(t)), Ei.get(t);
}
var Gc = /* @__PURE__ */ new WeakMap(), Ci = {};
function Xc(r, t) {
  for (var e = Gc, n = 0; n < t.length; n += 1) {
    var i = t[n];
    e.has(i) || e.set(i, /* @__PURE__ */ new WeakMap()), e = e.get(i);
  }
  return e.has(Ci) || e.set(Ci, r()), e.get(Ci);
}
var ro = /* @__PURE__ */ new WeakMap();
function Ir(r) {
  var t = ro.get(r) || "";
  return t || (Object.keys(r).forEach(function(e) {
    var n = r[e];
    t += e, n instanceof Rs ? t += n.id : n && X(n) === "object" ? t += Ir(n) : t += n;
  }), t = Wr(t), ro.set(r, t)), t;
}
function no(r, t) {
  return Wr("".concat(t, "_").concat(Ir(r)));
}
var Hi = Ue();
function Zt(r) {
  return typeof r == "number" ? "".concat(r, "px") : r;
}
function Hn(r, t, e) {
  var n, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return r;
  var o = O(O({}, i), {}, (n = {}, x(n, yr, t), x(n, vt, e), n)), s = Object.keys(o).map(function(u) {
    var c = o[u];
    return c ? "".concat(u, '="').concat(c, '"') : null;
  }).filter(function(u) {
    return u;
  }).join(" ");
  return "<style ".concat(s, ">").concat(r, "</style>");
}
var An = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(e ? "".concat(e, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Kc = function(t, e, n) {
  return Object.keys(t).length ? ".".concat(e).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(i) {
    var a = L(i, 2), o = a[0], s = a[1];
    return "".concat(o, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Ms = function(t, e, n) {
  var i = {}, a = {};
  return Object.entries(t).forEach(function(o) {
    var s, u, c = L(o, 2), l = c[0], f = c[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[l])
      a[l] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(n != null && (u = n.ignore) !== null && u !== void 0 && u[l])) {
      var v, m = An(l, n?.prefix);
      i[m] = typeof f == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[l]) ? "".concat(f, "px") : String(f), a[l] = "var(".concat(m, ")");
    }
  }), [a, Kc(i, e, {
    scope: n?.scope
  })];
}, io = process.env.NODE_ENV !== "test" && Ue() ? p.useLayoutEffect : p.useEffect, Le = function(t, e) {
  var n = p.useRef(!0);
  io(function() {
    return t(n.current);
  }, e), io(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, ao = function(t, e) {
  Le(function(n) {
    if (!n)
      return t();
  }, e);
}, Zc = O({}, p), oo = Zc.useInsertionEffect, Qc = function(t, e, n) {
  p.useMemo(t, n), Le(function() {
    return e(!0);
  }, n);
}, Yc = oo ? function(r, t, e) {
  return oo(function() {
    return r(), t();
  }, e);
} : Qc, Jc = O({}, p), el = Jc.useInsertionEffect, tl = function(t) {
  var e = [], n = !1;
  function i(a) {
    if (n) {
      process.env.NODE_ENV !== "production" && mr(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    e.push(a);
  }
  return p.useEffect(function() {
    return n = !1, function() {
      n = !0, e.length && e.forEach(function(a) {
        return a();
      });
    };
  }, t), i;
}, rl = function() {
  return function(t) {
    t();
  };
}, nl = typeof el < "u" ? tl : rl;
function il() {
  return !1;
}
var Wi = !1;
function al() {
  return Wi;
}
const ol = process.env.NODE_ENV === "production" ? il : al;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var En = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (En && typeof En.webpackHotUpdate == "function") {
    var sl = En.webpackHotUpdate;
    En.webpackHotUpdate = function() {
      return Wi = !0, setTimeout(function() {
        Wi = !1;
      }, 0), sl.apply(void 0, arguments);
    };
  }
}
function Ma(r, t, e, n, i) {
  var a = p.useContext(Yn), o = a.cache, s = [r].concat(H(t)), u = zi(s), c = nl([u]), l = ol(), f = function(h) {
    o.opUpdate(u, function(d) {
      var b = d || [void 0, void 0], y = L(b, 2), S = y[0], P = S === void 0 ? 0 : S, w = y[1], E = w;
      process.env.NODE_ENV !== "production" && w && l && (n?.(E, l), E = null);
      var C = E || e(), _ = [P, C];
      return h ? h(_) : _;
    });
  };
  p.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [u]
    /* eslint-enable */
  );
  var v = o.opGet(u);
  process.env.NODE_ENV !== "production" && !v && (f(), v = o.opGet(u));
  var m = v[1];
  return Yc(function() {
    i?.(m);
  }, function(g) {
    return f(function(h) {
      var d = L(h, 2), b = d[0], y = d[1];
      return g && b === 0 && i?.(m), [b + 1, y];
    }), function() {
      o.opUpdate(u, function(h) {
        var d = h || [], b = L(d, 2), y = b[0], S = y === void 0 ? 0 : y, P = b[1], w = S - 1;
        return w === 0 ? (c(function() {
          (g || !o.opGet(u)) && n?.(P, !1);
        }), null) : [S - 1, P];
      });
    };
  }, [u]), m;
}
var ul = {}, cl = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", qt = /* @__PURE__ */ new Map();
function ll(r) {
  qt.set(r, (qt.get(r) || 0) + 1);
}
function fl(r, t) {
  if (typeof document < "u") {
    var e = document.querySelectorAll("style[".concat(yr, '="').concat(r, '"]'));
    e.forEach(function(n) {
      if (n[Nt] === t) {
        var i;
        (i = n.parentNode) === null || i === void 0 || i.removeChild(n);
      }
    });
  }
}
var dl = 0;
function vl(r, t) {
  qt.set(r, (qt.get(r) || 0) - 1);
  var e = Array.from(qt.keys()), n = e.filter(function(i) {
    var a = qt.get(i) || 0;
    return a <= 0;
  });
  e.length - n.length > dl && n.forEach(function(i) {
    fl(i, t), qt.delete(i);
  });
}
var hl = function(t, e, n, i) {
  var a = n.getDerivativeToken(t), o = O(O({}, a), e);
  return i && (o = i(o)), o;
}, ks = "token";
function gl(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = jr(Yn), i = n.cache.instanceId, a = n.container, o = e.salt, s = o === void 0 ? "" : o, u = e.override, c = u === void 0 ? ul : u, l = e.formatToken, f = e.getComputedToken, v = e.cssVar, m = Xc(function() {
    return Object.assign.apply(Object, [{}].concat(H(t)));
  }, t), g = Ir(m), h = Ir(c), d = v ? Ir(v) : "", b = Ma(ks, [s, r.id, g, h, d], function() {
    var y, S = f ? f(m, c, r) : hl(m, c, r, l), P = O({}, S), w = "";
    if (v) {
      var E = Ms(S, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), C = L(E, 2);
      S = C[0], w = C[1];
    }
    var _ = no(S, s);
    S._tokenKey = _, P._tokenKey = no(P, s);
    var F = (y = v?.key) !== null && y !== void 0 ? y : _;
    S._themeKey = F, ll(F);
    var T = "".concat(cl, "-").concat(Wr(_));
    return S._hashId = T, [S, T, P, w, v?.key || ""];
  }, function(y) {
    vl(y[0]._themeKey, i);
  }, function(y) {
    var S = L(y, 4), P = S[0], w = S[3];
    if (v && w) {
      var E = Gt(w, Wr("css-variables-".concat(P._themeKey)), {
        mark: vt,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      E[Nt] = i, E.setAttribute(yr, P._themeKey);
    }
  });
  return b;
}
var ml = function(t, e, n) {
  var i = L(t, 5), a = i[2], o = i[3], s = i[4], u = n || {}, c = u.plain;
  if (!o)
    return null;
  var l = a._tokenKey, f = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, m = Hn(o, s, l, v, c);
  return [f, l, m];
}, pl = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, As = "comm", Ns = "rule", Vs = "decl", yl = "@import", bl = "@namespace", wl = "@keyframes", Sl = "@layer", $s = Math.abs, ka = String.fromCharCode;
function Is(r) {
  return r.trim();
}
function Nn(r, t, e) {
  return r.replace(t, e);
}
function El(r, t, e) {
  return r.indexOf(t, e);
}
function hr(r, t) {
  return r.charCodeAt(t) | 0;
}
function br(r, t, e) {
  return r.slice(t, e);
}
function pt(r) {
  return r.length;
}
function Cl(r) {
  return r.length;
}
function Cn(r, t) {
  return t.push(r), r;
}
var Jn = 1, wr = 1, Ls = 0, nt = 0, Se = 0, Er = "";
function Aa(r, t, e, n, i, a, o, s) {
  return { value: r, root: t, parent: e, type: n, props: i, children: a, line: Jn, column: wr, length: o, return: "", siblings: s };
}
function xl() {
  return Se;
}
function Pl() {
  return Se = nt > 0 ? hr(Er, --nt) : 0, wr--, Se === 10 && (wr = 1, Jn--), Se;
}
function ht() {
  return Se = nt < Ls ? hr(Er, nt++) : 0, wr++, Se === 10 && (wr = 1, Jn++), Se;
}
function Vt() {
  return hr(Er, nt);
}
function Vn() {
  return nt;
}
function ei(r, t) {
  return br(Er, r, t);
}
function qr(r) {
  switch (r) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function _l(r) {
  return Jn = wr = 1, Ls = pt(Er = r), nt = 0, [];
}
function Ol(r) {
  return Er = "", r;
}
function xi(r) {
  return Is(ei(nt - 1, Bi(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function Fl(r) {
  for (; (Se = Vt()) && Se < 33; )
    ht();
  return qr(r) > 2 || qr(Se) > 3 ? "" : " ";
}
function Tl(r, t) {
  for (; --t && ht() && !(Se < 48 || Se > 102 || Se > 57 && Se < 65 || Se > 70 && Se < 97); )
    ;
  return ei(r, Vn() + (t < 6 && Vt() == 32 && ht() == 32));
}
function Bi(r) {
  for (; ht(); )
    switch (Se) {
      // ] ) " '
      case r:
        return nt;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && Bi(Se);
        break;
      // (
      case 40:
        r === 41 && Bi(r);
        break;
      // \
      case 92:
        ht();
        break;
    }
  return nt;
}
function Rl(r, t) {
  for (; ht() && r + Se !== 57; )
    if (r + Se === 84 && Vt() === 47)
      break;
  return "/*" + ei(t, nt - 1) + "*" + ka(r === 47 ? r : ht());
}
function Ml(r) {
  for (; !qr(Vt()); )
    ht();
  return ei(r, nt);
}
function kl(r) {
  return Ol($n("", null, null, null, [""], r = _l(r), 0, [0], r));
}
function $n(r, t, e, n, i, a, o, s, u) {
  for (var c = 0, l = 0, f = o, v = 0, m = 0, g = 0, h = 1, d = 1, b = 1, y = 0, S = "", P = i, w = a, E = n, C = S; d; )
    switch (g = y, y = ht()) {
      // (
      case 40:
        if (g != 108 && hr(C, f - 1) == 58) {
          El(C += Nn(xi(y), "&", "&\f"), "&\f", $s(c ? s[c - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += xi(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += Fl(g);
        break;
      // \
      case 92:
        C += Tl(Vn() - 1, 7);
        continue;
      // /
      case 47:
        switch (Vt()) {
          case 42:
          case 47:
            Cn(Al(Rl(ht(), Vn()), t, e, u), u), (qr(g || 1) == 5 || qr(Vt() || 1) == 5) && pt(C) && br(C, -1, void 0) !== " " && (C += " ");
            break;
          default:
            C += "/";
        }
        break;
      // {
      case 123 * h:
        s[c++] = pt(C) * b;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            d = 0;
          // ;
          case 59 + l:
            b == -1 && (C = Nn(C, /\f/g, "")), m > 0 && (pt(C) - f || h === 0 && g === 47) && Cn(m > 32 ? uo(C + ";", n, e, f - 1, u) : uo(Nn(C, " ", "") + ";", n, e, f - 2, u), u);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (Cn(E = so(C, t, e, c, l, i, s, S, P = [], w = [], f, a), a), y === 123)
              if (l === 0)
                $n(C, t, E, E, P, a, f, s, w);
              else {
                switch (v) {
                  // c(ontainer)
                  case 99:
                    if (hr(C, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (hr(C, 2) === 97) break;
                  default:
                    l = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                l ? $n(r, E, E, n && Cn(so(r, E, E, 0, 0, i, s, S, i, P = [], f, w), w), i, w, f, s, n ? P : w) : $n(C, E, E, E, [""], w, 0, s, w);
              }
        }
        c = l = m = 0, h = b = 1, S = C = "", f = o;
        break;
      // :
      case 58:
        f = 1 + pt(C), m = g;
      default:
        if (h < 1) {
          if (y == 123)
            --h;
          else if (y == 125 && h++ == 0 && Pl() == 125)
            continue;
        }
        switch (C += ka(y), y * h) {
          // &
          case 38:
            b = l > 0 ? 1 : (C += "\f", -1);
            break;
          // ,
          case 44:
            s[c++] = (pt(C) - 1) * b, b = 1;
            break;
          // @
          case 64:
            Vt() === 45 && (C += xi(ht())), v = Vt(), l = f = pt(S = C += Ml(Vn())), y++;
            break;
          // -
          case 45:
            g === 45 && pt(C) == 2 && (h = 0);
        }
    }
  return a;
}
function so(r, t, e, n, i, a, o, s, u, c, l, f) {
  for (var v = i - 1, m = i === 0 ? a : [""], g = Cl(m), h = 0, d = 0, b = 0; h < n; ++h)
    for (var y = 0, S = br(r, v + 1, v = $s(d = o[h])), P = r; y < g; ++y)
      (P = Is(d > 0 ? m[y] + " " + S : Nn(S, /&\f/g, m[y]))) && (u[b++] = P);
  return Aa(r, t, e, i === 0 ? Ns : s, u, c, l, f);
}
function Al(r, t, e, n) {
  return Aa(r, t, e, As, ka(xl()), br(r, 2, -2), 0, n);
}
function uo(r, t, e, n, i) {
  return Aa(r, t, e, Vs, br(r, 0, n), br(r, n + 1, -1), n, i);
}
function qi(r, t) {
  for (var e = "", n = 0; n < r.length; n++)
    e += t(r[n], n, r, t) || "";
  return e;
}
function Nl(r, t, e, n) {
  switch (r.type) {
    case Sl:
      if (r.children.length) break;
    case yl:
    case bl:
    case Vs:
      return r.return = r.return || r.value;
    case As:
      return "";
    case wl:
      return r.return = r.value + "{" + qi(r.children, n) + "}";
    case Ns:
      if (!pt(r.value = r.props.join(","))) return "";
  }
  return pt(e = qi(r.children, n)) ? r.return = r.value + "{" + e + "}" : "";
}
function js(r, t) {
  var e = t.path, n = t.parentSelectors;
  he(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(r).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var Vl = function(t, e, n) {
  if (t === "content") {
    var i = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || a.indexOf(e) === -1 && !i.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && js("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), n);
  }
}, $l = function(t, e, n) {
  t === "animation" && n.hashId && e !== "none" && js("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, co = "data-ant-cssinjs-cache-path", Ds = "_FILE_STYLE__", Xt, zs = !0;
function Il() {
  if (!Xt && (Xt = {}, Ue())) {
    var r = document.createElement("div");
    r.className = co, r.style.position = "fixed", r.style.visibility = "hidden", r.style.top = "-9999px", document.body.appendChild(r);
    var t = getComputedStyle(r).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(i) {
      var a = i.split(":"), o = L(a, 2), s = o[0], u = o[1];
      Xt[s] = u;
    });
    var e = document.querySelector("style[".concat(co, "]"));
    if (e) {
      var n;
      zs = !1, (n = e.parentNode) === null || n === void 0 || n.removeChild(e);
    }
    document.body.removeChild(r);
  }
}
function Ll(r) {
  return Il(), !!Xt[r];
}
function jl(r) {
  var t = Xt[r], e = null;
  if (t && Ue())
    if (zs)
      e = Ds;
    else {
      var n = document.querySelector("style[".concat(vt, '="').concat(Xt[r], '"]'));
      n ? e = n.innerHTML : delete Xt[r];
    }
  return [e, t];
}
var Hs = "_skip_check_", Ws = "_multi_value_";
function In(r) {
  var t = qi(kl(r), Nl);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Dl(r) {
  return X(r) === "object" && r && (Hs in r || Ws in r);
}
function lo(r, t, e) {
  if (!t)
    return r;
  var n = ".".concat(t), i = e === "low" ? ":where(".concat(n, ")") : n, a = r.split(",").map(function(o) {
    var s, u = o.trim().split(/\s+/), c = u[0] || "", l = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(l).concat(i).concat(c.slice(l.length)), [c].concat(H(u.slice(1))).join(" ");
  });
  return a.join(",");
}
var zl = function r(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, i = n.root, a = n.injectHash, o = n.parentSelectors, s = e.hashId, u = e.layer, c = e.path, l = e.hashPriority, f = e.transformers, v = f === void 0 ? [] : f, m = e.linters, g = m === void 0 ? [] : m, h = "", d = {};
  function b(P) {
    var w = P.getName(s);
    if (!d[w]) {
      var E = r(P.style, e, {
        root: !1,
        parentSelectors: o
      }), C = L(E, 1), _ = C[0];
      d[w] = "@keyframes ".concat(P.getName(s)).concat(_);
    }
  }
  function y(P) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return P.forEach(function(E) {
      Array.isArray(E) ? y(E, w) : E && w.push(E);
    }), w;
  }
  var S = y(Array.isArray(t) ? t : [t]);
  return S.forEach(function(P) {
    var w = typeof P == "string" && !i ? {} : P;
    if (typeof w == "string")
      h += "".concat(w, `
`);
    else if (w._keyframe)
      b(w);
    else {
      var E = v.reduce(function(C, _) {
        var F;
        return (_ == null || (F = _.visit) === null || F === void 0 ? void 0 : F.call(_, C)) || C;
      }, w);
      Object.keys(E).forEach(function(C) {
        var _ = E[C];
        if (X(_) === "object" && _ && (C !== "animationName" || !_._keyframe) && !Dl(_)) {
          var F = !1, T = C.trim(), M = !1;
          (i || a) && s ? T.startsWith("@") ? F = !0 : T === "&" ? T = lo("", s, l) : T = lo(C, s, l) : i && !s && (T === "&" || T === "") && (T = "", M = !0);
          var k = r(_, e, {
            root: M,
            injectHash: F,
            parentSelectors: [].concat(H(o), [T])
          }), A = L(k, 2), R = A[0], V = A[1];
          d = O(O({}, d), V), h += "".concat(T).concat(R);
        } else {
          let j = function(B, U) {
            process.env.NODE_ENV !== "production" && (X(_) !== "object" || !(_ != null && _[Hs])) && [Vl, $l].concat(H(g)).forEach(function(G) {
              return G(B, U, {
                path: c,
                hashId: s,
                parentSelectors: o
              });
            });
            var q = B.replace(/[A-Z]/g, function(G) {
              return "-".concat(G.toLowerCase());
            }), z = U;
            !pl[B] && typeof z == "number" && z !== 0 && (z = "".concat(z, "px")), B === "animationName" && U !== null && U !== void 0 && U._keyframe && (b(U), z = U.getName(s)), h += "".concat(q, ":").concat(z, ";");
          };
          var N, I = (N = _?.value) !== null && N !== void 0 ? N : _;
          X(_) === "object" && _ !== null && _ !== void 0 && _[Ws] && Array.isArray(I) ? I.forEach(function(B) {
            j(C, B);
          }) : j(C, I);
        }
      });
    }
  }), i ? u && (h && (h = "@layer ".concat(u.name, " {").concat(h, "}")), u.dependencies && (d["@layer ".concat(u.name)] = u.dependencies.map(function(P) {
    return "@layer ".concat(P, ", ").concat(u.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, d];
};
function Bs(r, t) {
  return Wr("".concat(r.join("%")).concat(t));
}
function Hl() {
  return null;
}
var qs = "style";
function fo(r, t) {
  var e = r.token, n = r.path, i = r.hashId, a = r.layer, o = r.nonce, s = r.clientOnly, u = r.order, c = u === void 0 ? 0 : u, l = p.useContext(Yn), f = l.autoClear, v = l.mock, m = l.defaultCache, g = l.hashPriority, h = l.container, d = l.ssrInline, b = l.transformers, y = l.linters, S = l.cache, P = l.layer, w = e._tokenKey, E = [w];
  P && E.push("layer"), E.push.apply(E, H(n));
  var C = Hi;
  process.env.NODE_ENV !== "production" && v !== void 0 && (C = v === "client");
  var _ = Ma(
    qs,
    E,
    // Create cache if needed
    function() {
      var A = E.join("|");
      if (Ll(A)) {
        var R = jl(A), V = L(R, 2), N = V[0], I = V[1];
        if (N)
          return [N, w, I, {}, s, c];
      }
      var j = t(), B = zl(j, {
        hashId: i,
        hashPriority: g,
        layer: P ? a : void 0,
        path: n.join("-"),
        transformers: b,
        linters: y
      }), U = L(B, 2), q = U[0], z = U[1], G = In(q), K = Bs(E, G);
      return [G, w, K, z, s, c];
    },
    // Remove cache if no need
    function(A, R) {
      var V = L(A, 3), N = V[2];
      (R || f) && Hi && Br(N, {
        mark: vt
      });
    },
    // Effect: Inject style here
    function(A) {
      var R = L(A, 4), V = R[0];
      R[1];
      var N = R[2], I = R[3];
      if (C && V !== Ds) {
        var j = {
          mark: vt,
          prepend: P ? !1 : "queue",
          attachTo: h,
          priority: c
        }, B = typeof o == "function" ? o() : o;
        B && (j.csp = {
          nonce: B
        });
        var U = [], q = [];
        Object.keys(I).forEach(function(G) {
          G.startsWith("@layer") ? U.push(G) : q.push(G);
        }), U.forEach(function(G) {
          Gt(In(I[G]), "_layer-".concat(G), O(O({}, j), {}, {
            prepend: !0
          }));
        });
        var z = Gt(V, N, j);
        z[Nt] = S.instanceId, z.setAttribute(yr, w), process.env.NODE_ENV !== "production" && z.setAttribute(Wc, E.join("|")), q.forEach(function(G) {
          Gt(In(I[G]), "_effect-".concat(G), j);
        });
      }
    }
  ), F = L(_, 3), T = F[0], M = F[1], k = F[2];
  return function(A) {
    var R;
    if (!d || C || !m)
      R = /* @__PURE__ */ p.createElement(Hl, null);
    else {
      var V;
      R = /* @__PURE__ */ p.createElement("style", bt({}, (V = {}, x(V, yr, M), x(V, vt, k), V), {
        dangerouslySetInnerHTML: {
          __html: T
        }
      }));
    }
    return /* @__PURE__ */ p.createElement(p.Fragment, null, R, A);
  };
}
var Wl = function(t, e, n) {
  var i = L(t, 6), a = i[0], o = i[1], s = i[2], u = i[3], c = i[4], l = i[5], f = n || {}, v = f.plain;
  if (c)
    return null;
  var m = a, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(l)
  };
  return m = Hn(a, o, s, g, v), u && Object.keys(u).forEach(function(h) {
    if (!e[h]) {
      e[h] = !0;
      var d = In(u[h]), b = Hn(d, o, "_effect-".concat(h), g, v);
      h.startsWith("@layer") ? m = b + m : m += b;
    }
  }), [l, s, m];
}, Us = "cssVar", Bl = function(t, e) {
  var n = t.key, i = t.prefix, a = t.unitless, o = t.ignore, s = t.token, u = t.scope, c = u === void 0 ? "" : u, l = jr(Yn), f = l.cache.instanceId, v = l.container, m = s._tokenKey, g = [].concat(H(t.path), [n, c, m]), h = Ma(Us, g, function() {
    var d = e(), b = Ms(d, n, {
      prefix: i,
      unitless: a,
      ignore: o,
      scope: c
    }), y = L(b, 2), S = y[0], P = y[1], w = Bs(g, P);
    return [S, P, w, n];
  }, function(d) {
    var b = L(d, 3), y = b[2];
    Hi && Br(y, {
      mark: vt
    });
  }, function(d) {
    var b = L(d, 3), y = b[1], S = b[2];
    if (y) {
      var P = Gt(y, S, {
        mark: vt,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      P[Nt] = f, P.setAttribute(yr, n);
    }
  });
  return h;
}, ql = function(t, e, n) {
  var i = L(t, 4), a = i[1], o = i[2], s = i[3], u = n || {}, c = u.plain;
  if (!a)
    return null;
  var l = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(l)
  }, v = Hn(a, s, o, f, c);
  return [l, o, v];
}, Mr;
Mr = {}, x(Mr, qs, Wl), x(Mr, ks, ml), x(Mr, Us, ql);
var at = /* @__PURE__ */ function() {
  function r(t, e) {
    Ne(this, r), x(this, "name", void 0), x(this, "style", void 0), x(this, "_keyframe", !0), this.name = t, this.style = e;
  }
  return Ve(r, [{
    key: "getName",
    value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return e ? "".concat(e, "-").concat(this.name) : this.name;
    }
  }]), r;
}();
function ar(r) {
  return r.notSplit = !0, r;
}
ar(["borderTop", "borderBottom"]), ar(["borderTop"]), ar(["borderBottom"]), ar(["borderLeft", "borderRight"]), ar(["borderLeft"]), ar(["borderRight"]);
function Ul(r) {
  return Ps(r) || Ss(r) || Fa(r) || _s();
}
function yt(r, t) {
  for (var e = r, n = 0; n < t.length; n += 1) {
    if (e == null)
      return;
    e = e[t[n]];
  }
  return e;
}
function Gs(r, t, e, n) {
  if (!t.length)
    return e;
  var i = Ul(t), a = i[0], o = i.slice(1), s;
  return !r && typeof a == "number" ? s = [] : Array.isArray(r) ? s = H(r) : s = O({}, r), n && e === void 0 && o.length === 1 ? delete s[a][o[0]] : s[a] = Gs(s[a], o, e, n), s;
}
function ft(r, t, e) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && e === void 0 && !yt(r, t.slice(0, -1)) ? r : Gs(r, t, e, n);
}
function Gl(r) {
  return X(r) === "object" && r !== null && Object.getPrototypeOf(r) === Object.prototype;
}
function vo(r) {
  return Array.isArray(r) ? [] : {};
}
var Xl = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Vr() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  var n = vo(t[0]);
  return t.forEach(function(i) {
    function a(o, s) {
      var u = new Set(s), c = yt(i, o), l = Array.isArray(c);
      if (l || Gl(c)) {
        if (!u.has(c)) {
          u.add(c);
          var f = yt(n, o);
          l ? n = ft(n, o, []) : (!f || X(f) !== "object") && (n = ft(n, o, vo(c))), Xl(c).forEach(function(v) {
            a([].concat(H(o), [v]), u);
          });
        }
      } else
        n = ft(n, o, c);
    }
    a([]);
  }), n;
}
function Xs() {
}
let Ct = null;
function Kl() {
  Ct = null, us();
}
let Ks = Xs;
process.env.NODE_ENV !== "production" && (Ks = (r, t, e) => {
  he(r, `[antd: ${t}] ${e}`), process.env.NODE_ENV === "test" && Kl();
});
const Zl = Ks, Ql = /* @__PURE__ */ p.createContext({}), Zs = process.env.NODE_ENV !== "production" ? (r) => {
  const {
    strict: t
  } = p.useContext(Ql), e = (n, i, a) => {
    if (!n)
      if (t === !1 && i === "deprecated") {
        const o = Ct;
        Ct || (Ct = {}), Ct[r] = Ct[r] || [], Ct[r].includes(a || "") || Ct[r].push(a || ""), o || console.warn("[antd] There exists deprecated usage in your code:", Ct);
      } else
        process.env.NODE_ENV !== "production" && Zl(n, r, a);
  };
  return e.deprecated = (n, i, a, o) => {
    e(n, "deprecated", `\`${i}\` is deprecated. Please use \`${a}\` instead.${o ? ` ${o}` : ""}`);
  }, e;
} : () => {
  const r = () => {
  };
  return r.deprecated = Xs, r;
}, Qs = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Wn = Object.assign(Object.assign({}, Qs), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), _e = Math.round;
function Pi(r, t) {
  const e = r.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = e.map((i) => parseFloat(i));
  for (let i = 0; i < 3; i += 1)
    n[i] = t(n[i] || 0, e[i] || "", i);
  return e[3] ? n[3] = e[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const ho = (r, t, e) => e === 0 ? r : r / 100;
function kr(r, t) {
  const e = t || 255;
  return r > e ? e : r < 0 ? 0 : r;
}
class Oe {
  constructor(t) {
    x(this, "isValid", !0), x(this, "r", 0), x(this, "g", 0), x(this, "b", 0), x(this, "a", 1), x(this, "_h", void 0), x(this, "_s", void 0), x(this, "_l", void 0), x(this, "_v", void 0), x(this, "_max", void 0), x(this, "_min", void 0), x(this, "_brightness", void 0);
    function e(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t) if (typeof t == "string") {
      let i = function(a) {
        return n.startsWith(a);
      };
      const n = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : i("rgb") ? this.fromRgbString(n) : i("hsl") ? this.fromHslString(n) : (i("hsv") || i("hsb")) && this.fromHsvString(n);
    } else if (t instanceof Oe)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (e("rgb"))
      this.r = kr(t.r), this.g = kr(t.g), this.b = kr(t.b), this.a = typeof t.a == "number" ? kr(t.a, 1) : 1;
    else if (e("hsl"))
      this.fromHsl(t);
    else if (e("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const e = this.toHsv();
    return e.h = t, this._c(e);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(a) {
      const o = a / 255;
      return o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4);
    }
    const e = t(this.r), n = t(this.g), i = t(this.b);
    return 0.2126 * e + 0.7152 * n + 0.0722 * i;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = _e(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const e = this.getHue(), n = this.getSaturation();
    let i = this.getLightness() - t / 100;
    return i < 0 && (i = 0), this._c({
      h: e,
      s: n,
      l: i,
      a: this.a
    });
  }
  lighten(t = 10) {
    const e = this.getHue(), n = this.getSaturation();
    let i = this.getLightness() + t / 100;
    return i > 1 && (i = 1), this._c({
      h: e,
      s: n,
      l: i,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, e = 50) {
    const n = this._c(t), i = e / 100, a = (s) => (n[s] - this[s]) * i + this[s], o = {
      r: _e(a("r")),
      g: _e(a("g")),
      b: _e(a("b")),
      a: _e(a("a") * 100) / 100
    };
    return this._c(o);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const e = this._c(t), n = this.a + e.a * (1 - this.a), i = (a) => _e((this[a] * this.a + e[a] * e.a * (1 - this.a)) / n);
    return this._c({
      r: i("r"),
      g: i("g"),
      b: i("b"),
      a: n
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const e = (this.r || 0).toString(16);
    t += e.length === 2 ? e : "0" + e;
    const n = (this.g || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const i = (this.b || 0).toString(16);
    if (t += i.length === 2 ? i : "0" + i, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const a = _e(this.a * 255).toString(16);
      t += a.length === 2 ? a : "0" + a;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), e = _e(this.getSaturation() * 100), n = _e(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${e}%,${n}%,${this.a})` : `hsl(${t},${e}%,${n}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, e, n) {
    const i = this.clone();
    return i[t] = kr(e, n), i;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const e = t.replace("#", "");
    function n(i, a) {
      return parseInt(e[i] + e[a || i], 16);
    }
    e.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = e[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = e[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: e,
    l: n,
    a: i
  }) {
    if (this._h = t % 360, this._s = e, this._l = n, this.a = typeof i == "number" ? i : 1, e <= 0) {
      const v = _e(n * 255);
      this.r = v, this.g = v, this.b = v;
    }
    let a = 0, o = 0, s = 0;
    const u = t / 60, c = (1 - Math.abs(2 * n - 1)) * e, l = c * (1 - Math.abs(u % 2 - 1));
    u >= 0 && u < 1 ? (a = c, o = l) : u >= 1 && u < 2 ? (a = l, o = c) : u >= 2 && u < 3 ? (o = c, s = l) : u >= 3 && u < 4 ? (o = l, s = c) : u >= 4 && u < 5 ? (a = l, s = c) : u >= 5 && u < 6 && (a = c, s = l);
    const f = n - c / 2;
    this.r = _e((a + f) * 255), this.g = _e((o + f) * 255), this.b = _e((s + f) * 255);
  }
  fromHsv({
    h: t,
    s: e,
    v: n,
    a: i
  }) {
    this._h = t % 360, this._s = e, this._v = n, this.a = typeof i == "number" ? i : 1;
    const a = _e(n * 255);
    if (this.r = a, this.g = a, this.b = a, e <= 0)
      return;
    const o = t / 60, s = Math.floor(o), u = o - s, c = _e(n * (1 - e) * 255), l = _e(n * (1 - e * u) * 255), f = _e(n * (1 - e * (1 - u)) * 255);
    switch (s) {
      case 0:
        this.g = f, this.b = c;
        break;
      case 1:
        this.r = l, this.b = c;
        break;
      case 2:
        this.r = c, this.b = f;
        break;
      case 3:
        this.r = c, this.g = l;
        break;
      case 4:
        this.r = f, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = l;
        break;
    }
  }
  fromHsvString(t) {
    const e = Pi(t, ho);
    this.fromHsv({
      h: e[0],
      s: e[1],
      v: e[2],
      a: e[3]
    });
  }
  fromHslString(t) {
    const e = Pi(t, ho);
    this.fromHsl({
      h: e[0],
      s: e[1],
      l: e[2],
      a: e[3]
    });
  }
  fromRgbString(t) {
    const e = Pi(t, (n, i) => (
      // Convert percentage to number. e.g. 50% -> 128
      i.includes("%") ? _e(n / 100 * 255) : n
    ));
    this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
  }
}
var xn = 2, go = 0.16, Yl = 0.05, Jl = 0.05, ef = 0.15, Ys = 5, Js = 4, tf = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function mo(r, t, e) {
  var n;
  return Math.round(r.h) >= 60 && Math.round(r.h) <= 240 ? n = e ? Math.round(r.h) - xn * t : Math.round(r.h) + xn * t : n = e ? Math.round(r.h) + xn * t : Math.round(r.h) - xn * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function po(r, t, e) {
  if (r.h === 0 && r.s === 0)
    return r.s;
  var n;
  return e ? n = r.s - go * t : t === Js ? n = r.s + go : n = r.s + Yl * t, n > 1 && (n = 1), e && t === Ys && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function yo(r, t, e) {
  var n;
  return e ? n = r.v + Jl * t : n = r.v - ef * t, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function eu(r) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], n = new Oe(r), i = n.toHsv(), a = Ys; a > 0; a -= 1) {
    var o = new Oe({
      h: mo(i, a, !0),
      s: po(i, a, !0),
      v: yo(i, a, !0)
    });
    e.push(o);
  }
  e.push(n);
  for (var s = 1; s <= Js; s += 1) {
    var u = new Oe({
      h: mo(i, s),
      s: po(i, s),
      v: yo(i, s)
    });
    e.push(u);
  }
  return t.theme === "dark" ? tf.map(function(c) {
    var l = c.index, f = c.amount;
    return new Oe(t.backgroundColor || "#141414").mix(e[l], f).toHexString();
  }) : e.map(function(c) {
    return c.toHexString();
  });
}
var _i = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Ui = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Ui.primary = Ui[5];
var Gi = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Gi.primary = Gi[5];
var Xi = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Xi.primary = Xi[5];
var Ki = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Ki.primary = Ki[5];
var Zi = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Zi.primary = Zi[5];
var Qi = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Qi.primary = Qi[5];
var Yi = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Yi.primary = Yi[5];
var Ji = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Ji.primary = Ji[5];
var ea = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
ea.primary = ea[5];
var ta = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ta.primary = ta[5];
var ra = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
ra.primary = ra[5];
var na = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
na.primary = na[5];
var ia = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
ia.primary = ia[5];
var Oi = {
  red: Ui,
  volcano: Gi,
  orange: Xi,
  gold: Ki,
  yellow: Zi,
  lime: Qi,
  green: Yi,
  cyan: Ji,
  blue: ea,
  geekblue: ta,
  purple: ra,
  magenta: na,
  grey: ia
};
function rf(r, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: e
}) {
  const {
    colorSuccess: n,
    colorWarning: i,
    colorError: a,
    colorInfo: o,
    colorPrimary: s,
    colorBgBase: u,
    colorTextBase: c
  } = r, l = t(s), f = t(n), v = t(i), m = t(a), g = t(o), h = e(u, c), d = r.colorLink || r.colorInfo, b = t(d), y = new Oe(m[1]).mix(new Oe(m[3]), 50).toHexString();
  return Object.assign(Object.assign({}, h), {
    colorPrimaryBg: l[1],
    colorPrimaryBgHover: l[2],
    colorPrimaryBorder: l[3],
    colorPrimaryBorderHover: l[4],
    colorPrimaryHover: l[5],
    colorPrimary: l[6],
    colorPrimaryActive: l[7],
    colorPrimaryTextHover: l[8],
    colorPrimaryText: l[9],
    colorPrimaryTextActive: l[10],
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
    colorErrorBg: m[1],
    colorErrorBgHover: m[2],
    colorErrorBgFilledHover: y,
    colorErrorBgActive: m[3],
    colorErrorBorder: m[3],
    colorErrorBorderHover: m[4],
    colorErrorHover: m[5],
    colorError: m[6],
    colorErrorActive: m[7],
    colorErrorTextHover: m[8],
    colorErrorText: m[9],
    colorErrorTextActive: m[10],
    colorWarningBg: v[1],
    colorWarningBgHover: v[2],
    colorWarningBorder: v[3],
    colorWarningBorderHover: v[4],
    colorWarningHover: v[4],
    colorWarning: v[6],
    colorWarningActive: v[7],
    colorWarningTextHover: v[8],
    colorWarningText: v[9],
    colorWarningTextActive: v[10],
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new Oe("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const nf = (r) => {
  let t = r, e = r, n = r, i = r;
  return r < 6 && r >= 5 ? t = r + 1 : r < 16 && r >= 6 ? t = r + 2 : r >= 16 && (t = 16), r < 7 && r >= 5 ? e = 4 : r < 8 && r >= 7 ? e = 5 : r < 14 && r >= 8 ? e = 6 : r < 16 && r >= 14 ? e = 7 : r >= 16 && (e = 8), r < 6 && r >= 2 ? n = 1 : r >= 6 && (n = 2), r > 4 && r < 8 ? i = 4 : r >= 8 && (i = 6), {
    borderRadius: r,
    borderRadiusXS: n,
    borderRadiusSM: e,
    borderRadiusLG: t,
    borderRadiusOuter: i
  };
};
function af(r) {
  const {
    motionUnit: t,
    motionBase: e,
    borderRadius: n,
    lineWidth: i
  } = r;
  return Object.assign({
    // motion
    motionDurationFast: `${(e + t).toFixed(1)}s`,
    motionDurationMid: `${(e + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(e + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: i + 1
  }, nf(n));
}
const of = (r) => {
  const {
    controlHeight: t
  } = r;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function sf(r) {
  return (r + 8) / r;
}
function uf(r) {
  const t = Array.from({
    length: 10
  }).map((e, n) => {
    const i = n - 1, a = r * Math.pow(Math.E, i / 5), o = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(o / 2) * 2;
  });
  return t[1] = r, t.map((e) => ({
    size: e,
    lineHeight: sf(e)
  }));
}
const cf = (r) => {
  const t = uf(r), e = t.map((l) => l.size), n = t.map((l) => l.lineHeight), i = e[1], a = e[0], o = e[2], s = n[1], u = n[0], c = n[2];
  return {
    fontSizeSM: a,
    fontSize: i,
    fontSizeLG: o,
    fontSizeXL: e[3],
    fontSizeHeading1: e[6],
    fontSizeHeading2: e[5],
    fontSizeHeading3: e[4],
    fontSizeHeading4: e[3],
    fontSizeHeading5: e[2],
    lineHeight: s,
    lineHeightLG: c,
    lineHeightSM: u,
    fontHeight: Math.round(s * i),
    fontHeightLG: Math.round(c * o),
    fontHeightSM: Math.round(u * a),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function lf(r) {
  const {
    sizeUnit: t,
    sizeStep: e
  } = r;
  return {
    sizeXXL: t * (e + 8),
    // 48
    sizeXL: t * (e + 4),
    // 32
    sizeLG: t * (e + 2),
    // 24
    sizeMD: t * (e + 1),
    // 20
    sizeMS: t * e,
    // 16
    size: t * e,
    // 16
    sizeSM: t * (e - 1),
    // 12
    sizeXS: t * (e - 2),
    // 8
    sizeXXS: t * (e - 3)
    // 4
  };
}
const Ye = (r, t) => new Oe(r).setA(t).toRgbString(), Ar = (r, t) => new Oe(r).darken(t).toHexString(), ff = (r) => {
  const t = eu(r);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, df = (r, t) => {
  const e = r || "#fff", n = t || "#000";
  return {
    colorBgBase: e,
    colorTextBase: n,
    colorText: Ye(n, 0.88),
    colorTextSecondary: Ye(n, 0.65),
    colorTextTertiary: Ye(n, 0.45),
    colorTextQuaternary: Ye(n, 0.25),
    colorFill: Ye(n, 0.15),
    colorFillSecondary: Ye(n, 0.06),
    colorFillTertiary: Ye(n, 0.04),
    colorFillQuaternary: Ye(n, 0.02),
    colorBgSolid: Ye(n, 1),
    colorBgSolidHover: Ye(n, 0.75),
    colorBgSolidActive: Ye(n, 0.95),
    colorBgLayout: Ar(e, 4),
    colorBgContainer: Ar(e, 0),
    colorBgElevated: Ar(e, 0),
    colorBgSpotlight: Ye(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Ar(e, 15),
    colorBorderSecondary: Ar(e, 6)
  };
};
function vf(r) {
  _i.pink = _i.magenta, Oi.pink = Oi.magenta;
  const t = Object.keys(Qs).map((e) => {
    const n = r[e] === _i[e] ? Oi[e] : eu(r[e]);
    return Array.from({
      length: 10
    }, () => 1).reduce((i, a, o) => (i[`${e}-${o + 1}`] = n[o], i[`${e}${o + 1}`] = n[o], i), {});
  }).reduce((e, n) => (e = Object.assign(Object.assign({}, e), n), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), t), rf(r, {
    generateColorPalettes: ff,
    generateNeutralColorPalettes: df
  })), cf(r.fontSize)), lf(r)), of(r)), af(r));
}
const hf = Uc(vf), gf = {
  token: Wn,
  override: {
    override: Wn
  },
  hashed: !0
}, mf = /* @__PURE__ */ Ae.createContext(gf), bo = "ant", tu = "anticon", pf = (r, t) => t || (r ? `${bo}-${r}` : bo), Ur = /* @__PURE__ */ p.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: pf,
  iconPrefixCls: tu
}), {
  Consumer: Ph
} = Ur, wo = {};
function yf(r) {
  const t = p.useContext(Ur), {
    getPrefixCls: e,
    direction: n,
    getPopupContainer: i
  } = t, a = t[r];
  return Object.assign(Object.assign({
    classNames: wo,
    styles: wo
  }, a), {
    getPrefixCls: e,
    direction: n,
    getPopupContainer: i
  });
}
var ru = /* @__PURE__ */ Ve(function r() {
  Ne(this, r);
}), nu = "CALC_UNIT", bf = new RegExp(nu, "g");
function Fi(r) {
  return typeof r == "number" ? "".concat(r).concat(nu) : r;
}
var wf = /* @__PURE__ */ function(r) {
  Qt(e, r);
  var t = Yt(e);
  function e(n, i) {
    var a;
    Ne(this, e), a = t.call(this), x(Z(a), "result", ""), x(Z(a), "unitlessCssVar", void 0), x(Z(a), "lowPriority", void 0);
    var o = X(n);
    return a.unitlessCssVar = i, n instanceof e ? a.result = "(".concat(n.result, ")") : o === "number" ? a.result = Fi(n) : o === "string" && (a.result = n), a;
  }
  return Ve(e, [{
    key: "add",
    value: function(i) {
      return i instanceof e ? this.result = "".concat(this.result, " + ").concat(i.getResult()) : (typeof i == "number" || typeof i == "string") && (this.result = "".concat(this.result, " + ").concat(Fi(i))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(i) {
      return i instanceof e ? this.result = "".concat(this.result, " - ").concat(i.getResult()) : (typeof i == "number" || typeof i == "string") && (this.result = "".concat(this.result, " - ").concat(Fi(i))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(i) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), i instanceof e ? this.result = "".concat(this.result, " * ").concat(i.getResult(!0)) : (typeof i == "number" || typeof i == "string") && (this.result = "".concat(this.result, " * ").concat(i)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(i) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), i instanceof e ? this.result = "".concat(this.result, " / ").concat(i.getResult(!0)) : (typeof i == "number" || typeof i == "string") && (this.result = "".concat(this.result, " / ").concat(i)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(i) {
      return this.lowPriority || i ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(i) {
      var a = this, o = i || {}, s = o.unit, u = !0;
      return typeof s == "boolean" ? u = s : Array.from(this.unitlessCssVar).some(function(c) {
        return a.result.includes(c);
      }) && (u = !1), this.result = this.result.replace(bf, u ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(ru), Sf = /* @__PURE__ */ function(r) {
  Qt(e, r);
  var t = Yt(e);
  function e(n) {
    var i;
    return Ne(this, e), i = t.call(this), x(Z(i), "result", 0), n instanceof e ? i.result = n.result : typeof n == "number" && (i.result = n), i;
  }
  return Ve(e, [{
    key: "add",
    value: function(i) {
      return i instanceof e ? this.result += i.result : typeof i == "number" && (this.result += i), this;
    }
  }, {
    key: "sub",
    value: function(i) {
      return i instanceof e ? this.result -= i.result : typeof i == "number" && (this.result -= i), this;
    }
  }, {
    key: "mul",
    value: function(i) {
      return i instanceof e ? this.result *= i.result : typeof i == "number" && (this.result *= i), this;
    }
  }, {
    key: "div",
    value: function(i) {
      return i instanceof e ? this.result /= i.result : typeof i == "number" && (this.result /= i), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), e;
}(ru), Ef = function(t, e) {
  var n = t === "css" ? wf : Sf;
  return function(i) {
    return new n(i, e);
  };
}, So = function(t, e) {
  return "".concat([e, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function tt(r) {
  var t = p.useRef();
  t.current = r;
  var e = p.useCallback(function() {
    for (var n, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return e;
}
function Gr(r) {
  var t = p.useRef(!1), e = p.useState(r), n = L(e, 2), i = n[0], a = n[1];
  p.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function o(s, u) {
    u && t.current || a(s);
  }
  return [i, o];
}
function Ti(r) {
  return r !== void 0;
}
function Cf(r, t) {
  var e = t || {}, n = e.defaultValue, i = e.value, a = e.onChange, o = e.postState, s = Gr(function() {
    return Ti(i) ? i : Ti(n) ? typeof n == "function" ? n() : n : r;
  }), u = L(s, 2), c = u[0], l = u[1], f = i !== void 0 ? i : c, v = o ? o(f) : f, m = tt(a), g = Gr([f]), h = L(g, 2), d = h[0], b = h[1];
  ao(function() {
    var S = d[0];
    c !== S && m(c, S);
  }, [d]), ao(function() {
    Ti(i) || l(i);
  }, [i]);
  var y = tt(function(S, P) {
    l(S, P), b([f], P);
  });
  return [v, y];
}
function Eo(r, t, e, n) {
  var i = O({}, t[r]);
  if (n != null && n.deprecatedTokens) {
    var a = n.deprecatedTokens;
    a.forEach(function(s) {
      var u = L(s, 2), c = u[0], l = u[1];
      if (process.env.NODE_ENV !== "production" && he(!(i != null && i[c]), "Component Token `".concat(String(c), "` of ").concat(String(r), " is deprecated. Please use `").concat(String(l), "` instead.")), i != null && i[c] || i != null && i[l]) {
        var f;
        (f = i[l]) !== null && f !== void 0 || (i[l] = i?.[c]);
      }
    });
  }
  var o = O(O({}, e), i);
  return Object.keys(o).forEach(function(s) {
    o[s] === t[s] && delete o[s];
  }), o;
}
var iu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", aa = !0;
function ti() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  if (!iu)
    return Object.assign.apply(Object, [{}].concat(t));
  aa = !1;
  var n = {};
  return t.forEach(function(i) {
    if (X(i) === "object") {
      var a = Object.keys(i);
      a.forEach(function(o) {
        Object.defineProperty(n, o, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return i[o];
          }
        });
      });
    }
  }), aa = !0, n;
}
var Co = {};
function xf() {
}
var Pf = function(t) {
  var e, n = t, i = xf;
  return iu && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), n = new Proxy(t, {
    get: function(o, s) {
      if (aa) {
        var u;
        (u = e) === null || u === void 0 || u.add(s);
      }
      return o[s];
    }
  }), i = function(o, s) {
    var u;
    Co[o] = {
      global: Array.from(e),
      component: O(O({}, (u = Co[o]) === null || u === void 0 ? void 0 : u.component), s)
    };
  }), {
    token: n,
    keys: e,
    flush: i
  };
};
function xo(r, t, e) {
  if (typeof e == "function") {
    var n;
    return e(ti(t, (n = t[r]) !== null && n !== void 0 ? n : {}));
  }
  return e ?? {};
}
function _f(r) {
  return r === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
        n[i] = arguments[i];
      return "max(".concat(n.map(function(a) {
        return Zt(a);
      }).join(","), ")");
    },
    min: function() {
      for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
        n[i] = arguments[i];
      return "min(".concat(n.map(function(a) {
        return Zt(a);
      }).join(","), ")");
    }
  };
}
var Of = 1e3 * 60 * 10, Ff = /* @__PURE__ */ function() {
  function r() {
    Ne(this, r), x(this, "map", /* @__PURE__ */ new Map()), x(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), x(this, "nextID", 0), x(this, "lastAccessBeat", /* @__PURE__ */ new Map()), x(this, "accessBeat", 0);
  }
  return Ve(r, [{
    key: "set",
    value: function(e, n) {
      this.clear();
      var i = this.getCompositeKey(e);
      this.map.set(i, n), this.lastAccessBeat.set(i, Date.now());
    }
  }, {
    key: "get",
    value: function(e) {
      var n = this.getCompositeKey(e), i = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, i;
    }
  }, {
    key: "getCompositeKey",
    value: function(e) {
      var n = this, i = e.map(function(a) {
        return a && X(a) === "object" ? "obj_".concat(n.getObjectID(a)) : "".concat(X(a), "_").concat(a);
      });
      return i.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(e) {
      if (this.objectIDMap.has(e))
        return this.objectIDMap.get(e);
      var n = this.nextID;
      return this.objectIDMap.set(e, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      var e = this;
      if (this.accessBeat > 1e4) {
        var n = Date.now();
        this.lastAccessBeat.forEach(function(i, a) {
          n - i > Of && (e.map.delete(a), e.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), r;
}(), Po = new Ff();
function Tf(r, t) {
  return Ae.useMemo(function() {
    var e = Po.get(t);
    if (e)
      return e;
    var n = r();
    return Po.set(t, n), n;
  }, t);
}
var Rf = function() {
  return {};
};
function Mf(r) {
  var t = r.useCSP, e = t === void 0 ? Rf : t, n = r.useToken, i = r.usePrefix, a = r.getResetStyles, o = r.getCommonStyle, s = r.getCompUnitless;
  function u(v, m, g, h) {
    var d = Array.isArray(v) ? v[0] : v;
    function b(_) {
      return "".concat(String(d)).concat(_.slice(0, 1).toUpperCase()).concat(_.slice(1));
    }
    var y = h?.unitless || {}, S = typeof s == "function" ? s(v) : {}, P = O(O({}, S), {}, x({}, b("zIndexPopup"), !0));
    Object.keys(y).forEach(function(_) {
      P[b(_)] = y[_];
    });
    var w = O(O({}, h), {}, {
      unitless: P,
      prefixToken: b
    }), E = l(v, m, g, w), C = c(d, g, w);
    return function(_) {
      var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _, T = E(_, F), M = L(T, 2), k = M[1], A = C(F), R = L(A, 2), V = R[0], N = R[1];
      return [V, k, N];
    };
  }
  function c(v, m, g) {
    var h = g.unitless, d = g.injectStyle, b = d === void 0 ? !0 : d, y = g.prefixToken, S = g.ignore, P = function(C) {
      var _ = C.rootCls, F = C.cssVar, T = F === void 0 ? {} : F, M = n(), k = M.realToken;
      return Bl({
        path: [v],
        prefix: T.prefix,
        key: T.key,
        unitless: h,
        ignore: S,
        token: k,
        scope: _
      }, function() {
        var A = xo(v, k, m), R = Eo(v, k, A, {
          deprecatedTokens: g?.deprecatedTokens
        });
        return Object.keys(A).forEach(function(V) {
          R[y(V)] = R[V], delete R[V];
        }), R;
      }), null;
    }, w = function(C) {
      var _ = n(), F = _.cssVar;
      return [function(T) {
        return b && F ? /* @__PURE__ */ Ae.createElement(Ae.Fragment, null, /* @__PURE__ */ Ae.createElement(P, {
          rootCls: C,
          cssVar: F,
          component: v
        }), T) : T;
      }, F?.key];
    };
    return w;
  }
  function l(v, m, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = Array.isArray(v) ? v : [v, v], b = L(d, 1), y = b[0], S = d.join("-"), P = r.layer || {
      name: "antd"
    };
    return function(w) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w, C = n(), _ = C.theme, F = C.realToken, T = C.hashId, M = C.token, k = C.cssVar, A = i(), R = A.rootPrefixCls, V = A.iconPrefixCls, N = e(), I = k ? "css" : "js", j = Tf(function() {
        var K = /* @__PURE__ */ new Set();
        return k && Object.keys(h.unitless || {}).forEach(function(Y) {
          K.add(An(Y, k.prefix)), K.add(An(Y, So(y, k.prefix)));
        }), Ef(I, K);
      }, [I, y, k?.prefix]), B = _f(I), U = B.max, q = B.min, z = {
        theme: _,
        token: M,
        hashId: T,
        nonce: function() {
          return N.nonce;
        },
        clientOnly: h.clientOnly,
        layer: P,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof a == "function" && fo(O(O({}, z), {}, {
        clientOnly: !1,
        path: ["Shared", R]
      }), function() {
        return a(M, {
          prefix: {
            rootPrefixCls: R,
            iconPrefixCls: V
          },
          csp: N
        });
      });
      var G = fo(O(O({}, z), {}, {
        path: [S, w, V]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var K = Pf(M), Y = K.token, ie = K.flush, ae = xo(y, F, g), Pe = ".".concat(w), ue = Eo(y, F, ae, {
          deprecatedTokens: h.deprecatedTokens
        });
        k && ae && X(ae) === "object" && Object.keys(ae).forEach(function(Ee) {
          ae[Ee] = "var(".concat(An(Ee, So(y, k.prefix)), ")");
        });
        var Te = ti(Y, {
          componentCls: Pe,
          prefixCls: w,
          iconCls: ".".concat(V),
          antCls: ".".concat(R),
          calc: j,
          // @ts-ignore
          max: U,
          // @ts-ignore
          min: q
        }, k ? ae : ue), Re = m(Te, {
          hashId: T,
          prefixCls: w,
          rootPrefixCls: R,
          iconPrefixCls: V
        });
        ie(y, ue);
        var ge = typeof o == "function" ? o(Te, w, E, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : ge, Re];
      });
      return [G, T];
    };
  }
  function f(v, m, g) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = l(v, m, g, O({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), b = function(S) {
      var P = S.prefixCls, w = S.rootCls, E = w === void 0 ? P : w;
      return d(P, E), null;
    };
    return process.env.NODE_ENV !== "production" && (b.displayName = "SubStyle_".concat(String(Array.isArray(v) ? v.join(".") : v))), b;
  }
  return {
    genStyleHooks: u,
    genSubStyleComponent: f,
    genComponentStyleHook: l
  };
}
const Bn = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], kf = "5.26.4";
function Ri(r) {
  return r >= 0 && r <= 255;
}
function Pn(r, t) {
  const {
    r: e,
    g: n,
    b: i,
    a
  } = new Oe(r).toRgb();
  if (a < 1)
    return r;
  const {
    r: o,
    g: s,
    b: u
  } = new Oe(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const l = Math.round((e - o * (1 - c)) / c), f = Math.round((n - s * (1 - c)) / c), v = Math.round((i - u * (1 - c)) / c);
    if (Ri(l) && Ri(f) && Ri(v))
      return new Oe({
        r: l,
        g: f,
        b: v,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new Oe({
    r: e,
    g: n,
    b: i,
    a: 1
  }).toRgbString();
}
var Af = function(r, t) {
  var e = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
    t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
  return e;
};
function au(r) {
  const {
    override: t
  } = r, e = Af(r, ["override"]), n = Object.assign({}, t);
  Object.keys(Wn).forEach((v) => {
    delete n[v];
  });
  const i = Object.assign(Object.assign({}, e), n), a = 480, o = 576, s = 768, u = 992, c = 1200, l = 1600;
  if (i.motion === !1) {
    const v = "0s";
    i.motionDurationFast = v, i.motionDurationMid = v, i.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, i), {
    // ============== Background ============== //
    colorFillContent: i.colorFillSecondary,
    colorFillContentHover: i.colorFill,
    colorFillAlter: i.colorFillQuaternary,
    colorBgContainerDisabled: i.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: i.colorBgContainer,
    colorSplit: Pn(i.colorBorderSecondary, i.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: i.colorTextQuaternary,
    colorTextDisabled: i.colorTextQuaternary,
    colorTextHeading: i.colorText,
    colorTextLabel: i.colorTextSecondary,
    colorTextDescription: i.colorTextTertiary,
    colorTextLightSolid: i.colorWhite,
    colorHighlight: i.colorError,
    colorBgTextHover: i.colorFillSecondary,
    colorBgTextActive: i.colorFill,
    colorIcon: i.colorTextTertiary,
    colorIconHover: i.colorText,
    colorErrorOutline: Pn(i.colorErrorBg, i.colorBgContainer),
    colorWarningOutline: Pn(i.colorWarningBg, i.colorBgContainer),
    // Font
    fontSizeIcon: i.fontSizeSM,
    // Line
    lineWidthFocus: i.lineWidth * 3,
    // Control
    lineWidth: i.lineWidth,
    controlOutlineWidth: i.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: i.controlHeight / 2,
    controlItemBgHover: i.colorFillTertiary,
    controlItemBgActive: i.colorPrimaryBg,
    controlItemBgActiveHover: i.colorPrimaryBgHover,
    controlItemBgActiveDisabled: i.colorFill,
    controlTmpOutline: i.colorFillQuaternary,
    controlOutline: Pn(i.colorPrimaryBg, i.colorBgContainer),
    lineType: i.lineType,
    borderRadius: i.borderRadius,
    borderRadiusXS: i.borderRadiusXS,
    borderRadiusSM: i.borderRadiusSM,
    borderRadiusLG: i.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: i.sizeXXS,
    paddingXS: i.sizeXS,
    paddingSM: i.sizeSM,
    padding: i.size,
    paddingMD: i.sizeMD,
    paddingLG: i.sizeLG,
    paddingXL: i.sizeXL,
    paddingContentHorizontalLG: i.sizeLG,
    paddingContentVerticalLG: i.sizeMS,
    paddingContentHorizontal: i.sizeMS,
    paddingContentVertical: i.sizeSM,
    paddingContentHorizontalSM: i.size,
    paddingContentVerticalSM: i.sizeXS,
    marginXXS: i.sizeXXS,
    marginXS: i.sizeXS,
    marginSM: i.sizeSM,
    margin: i.size,
    marginMD: i.sizeMD,
    marginLG: i.sizeLG,
    marginXL: i.sizeXL,
    marginXXL: i.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: a,
    screenXSMin: a,
    screenXSMax: o - 1,
    screenSM: o,
    screenSMMin: o,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: u - 1,
    screenLG: u,
    screenLGMin: u,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: l - 1,
    screenXXL: l,
    screenXXLMin: l,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Oe("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Oe("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Oe("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var _o = function(r, t) {
  var e = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
    t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
  return e;
};
const ou = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, Nf = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, Vf = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, su = (r, t, e) => {
  const n = e.getDerivativeToken(r), {
    override: i
  } = t, a = _o(t, ["override"]);
  let o = Object.assign(Object.assign({}, n), {
    override: i
  });
  return o = au(o), a && Object.entries(a).forEach(([s, u]) => {
    const {
      theme: c
    } = u, l = _o(u, ["theme"]);
    let f = l;
    c && (f = su(Object.assign(Object.assign({}, o), l), {
      override: l
    }, c)), o[s] = f;
  }), o;
};
function Na() {
  const {
    token: r,
    hashed: t,
    theme: e,
    override: n,
    cssVar: i
  } = Ae.useContext(mf), a = `${kf}-${t || ""}`, o = e || hf, [s, u, c] = gl(o, [Wn, r], {
    salt: a,
    override: n,
    getComputedToken: su,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: au,
    cssVar: i && {
      prefix: i.prefix,
      key: i.key,
      unitless: ou,
      ignore: Nf,
      preserve: Vf
    }
  });
  return [o, c, t ? u : "", s, i];
}
const $f = (r, t = !1) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: r.colorText,
  fontSize: r.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: r.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: t ? "inherit" : r.fontFamily
}), If = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), Lf = (r) => ({
  a: {
    color: r.colorLink,
    textDecoration: r.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${r.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: r.colorLinkHover
    },
    "&:active": {
      color: r.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: r.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: r.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: r.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), jf = (r, t, e, n) => {
  const i = `[class^="${t}"], [class*=" ${t}"]`, a = e ? `.${e}` : i, o = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return n !== !1 && (s = {
    fontFamily: r.fontFamily,
    fontSize: r.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, s), o), {
      [i]: o
    })
  };
}, Df = (r) => ({
  [`.${r}`]: Object.assign(Object.assign({}, If()), {
    [`.${r} .${r}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: zf
} = Mf({
  usePrefix: () => {
    const {
      getPrefixCls: r,
      iconPrefixCls: t
    } = jr(Ur);
    return {
      rootPrefixCls: r(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [r, t, e, n, i] = Na();
    return {
      theme: r,
      realToken: t,
      hashId: e,
      token: n,
      cssVar: i
    };
  },
  useCSP: () => {
    const {
      csp: r
    } = jr(Ur);
    return r ?? {};
  },
  getResetStyles: (r, t) => {
    var e;
    const n = Lf(r);
    return [n, {
      "&": n
    }, Df((e = t?.prefix.iconPrefixCls) !== null && e !== void 0 ? e : tu)];
  },
  getCommonStyle: jf,
  getCompUnitless: () => ou
});
function Hf(r, t) {
  return Bn.reduce((e, n) => {
    const i = r[`${n}1`], a = r[`${n}3`], o = r[`${n}6`], s = r[`${n}7`];
    return Object.assign(Object.assign({}, e), t(n, {
      lightColor: i,
      lightBorderColor: a,
      darkColor: o,
      textColor: s
    }));
  }, {});
}
var Wf = /* @__PURE__ */ p.createContext({}), Bf = /* @__PURE__ */ function(r) {
  Qt(e, r);
  var t = Yt(e);
  function e() {
    return Ne(this, e), t.apply(this, arguments);
  }
  return Ve(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(p.Component);
function qf(r) {
  var t = p.useReducer(function(s) {
    return s + 1;
  }, 0), e = L(t, 2), n = e[1], i = p.useRef(r), a = tt(function() {
    return i.current;
  }), o = tt(function(s) {
    i.current = typeof s == "function" ? s(i.current) : s, n();
  });
  return [a, o];
}
var At = "none", _n = "appear", On = "enter", Fn = "leave", Oo = "none", dt = "prepare", fr = "start", dr = "active", Va = "end", uu = "prepared";
function Fo(r, t) {
  var e = {};
  return e[r.toLowerCase()] = t.toLowerCase(), e["Webkit".concat(r)] = "webkit".concat(t), e["Moz".concat(r)] = "moz".concat(t), e["ms".concat(r)] = "MS".concat(t), e["O".concat(r)] = "o".concat(t.toLowerCase()), e;
}
function Uf(r, t) {
  var e = {
    animationend: Fo("Animation", "AnimationEnd"),
    transitionend: Fo("Transition", "TransitionEnd")
  };
  return r && ("AnimationEvent" in t || delete e.animationend.animation, "TransitionEvent" in t || delete e.transitionend.transition), e;
}
var Gf = Uf(Ue(), typeof window < "u" ? window : {}), cu = {};
if (Ue()) {
  var Xf = document.createElement("div");
  cu = Xf.style;
}
var Tn = {};
function lu(r) {
  if (Tn[r])
    return Tn[r];
  var t = Gf[r];
  if (t)
    for (var e = Object.keys(t), n = e.length, i = 0; i < n; i += 1) {
      var a = e[i];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in cu)
        return Tn[r] = t[a], Tn[r];
    }
  return "";
}
var fu = lu("animationend"), du = lu("transitionend"), vu = !!(fu && du), To = fu || "animationend", Ro = du || "transitionend";
function Mo(r, t) {
  if (!r) return null;
  if (X(r) === "object") {
    var e = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return r[e];
  }
  return "".concat(r, "-").concat(t);
}
const Kf = function(r) {
  var t = rt();
  function e(i) {
    i && (i.removeEventListener(Ro, r), i.removeEventListener(To, r));
  }
  function n(i) {
    t.current && t.current !== i && e(t.current), i && i !== t.current && (i.addEventListener(Ro, r), i.addEventListener(To, r), t.current = i);
  }
  return p.useEffect(function() {
    return function() {
      e(t.current);
    };
  }, []), [n, e];
};
var hu = Ue() ? Du : vr;
const Zf = function() {
  var r = p.useRef(null);
  function t() {
    zn.cancel(r.current);
  }
  function e(n) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = zn(function() {
      i <= 1 ? n({
        isCanceled: function() {
          return a !== r.current;
        }
      }) : e(n, i - 1);
    });
    r.current = a;
  }
  return p.useEffect(function() {
    return function() {
      t();
    };
  }, []), [e, t];
};
var Qf = [dt, fr, dr, Va], Yf = [dt, uu], gu = !1, Jf = !0;
function mu(r) {
  return r === dr || r === Va;
}
const ed = function(r, t, e) {
  var n = Gr(Oo), i = L(n, 2), a = i[0], o = i[1], s = Zf(), u = L(s, 2), c = u[0], l = u[1];
  function f() {
    o(dt, !0);
  }
  var v = t ? Yf : Qf;
  return hu(function() {
    if (a !== Oo && a !== Va) {
      var m = v.indexOf(a), g = v[m + 1], h = e(a);
      h === gu ? o(g, !0) : g && c(function(d) {
        function b() {
          d.isCanceled() || o(g, !0);
        }
        h === !0 ? b() : Promise.resolve(h).then(b);
      });
    }
  }, [r, a]), p.useEffect(function() {
    return function() {
      l();
    };
  }, []), [f, a];
};
function td(r, t, e, n) {
  var i = n.motionEnter, a = i === void 0 ? !0 : i, o = n.motionAppear, s = o === void 0 ? !0 : o, u = n.motionLeave, c = u === void 0 ? !0 : u, l = n.motionDeadline, f = n.motionLeaveImmediately, v = n.onAppearPrepare, m = n.onEnterPrepare, g = n.onLeavePrepare, h = n.onAppearStart, d = n.onEnterStart, b = n.onLeaveStart, y = n.onAppearActive, S = n.onEnterActive, P = n.onLeaveActive, w = n.onAppearEnd, E = n.onEnterEnd, C = n.onLeaveEnd, _ = n.onVisibleChanged, F = Gr(), T = L(F, 2), M = T[0], k = T[1], A = qf(At), R = L(A, 2), V = R[0], N = R[1], I = Gr(null), j = L(I, 2), B = j[0], U = j[1], q = V(), z = rt(!1), G = rt(null);
  function K() {
    return e();
  }
  var Y = rt(!1);
  function ie() {
    N(At), U(null, !0);
  }
  var ae = tt(function(re) {
    var oe = V();
    if (oe !== At) {
      var Me = K();
      if (!(re && !re.deadline && re.target !== Me)) {
        var J = Y.current, Ge;
        oe === _n && J ? Ge = w?.(Me, re) : oe === On && J ? Ge = E?.(Me, re) : oe === Fn && J && (Ge = C?.(Me, re)), J && Ge !== !1 && ie();
      }
    }
  }), Pe = Kf(ae), ue = L(Pe, 1), Te = ue[0], Re = function(oe) {
    switch (oe) {
      case _n:
        return x(x(x({}, dt, v), fr, h), dr, y);
      case On:
        return x(x(x({}, dt, m), fr, d), dr, S);
      case Fn:
        return x(x(x({}, dt, g), fr, b), dr, P);
      default:
        return {};
    }
  }, ge = p.useMemo(function() {
    return Re(q);
  }, [q]), Ee = ed(q, !r, function(re) {
    if (re === dt) {
      var oe = ge[dt];
      return oe ? oe(K()) : gu;
    }
    if (ce in ge) {
      var Me;
      U(((Me = ge[ce]) === null || Me === void 0 ? void 0 : Me.call(ge, K(), null)) || null);
    }
    return ce === dr && q !== At && (Te(K()), l > 0 && (clearTimeout(G.current), G.current = setTimeout(function() {
      ae({
        deadline: !0
      });
    }, l))), ce === uu && ie(), Jf;
  }), $ = L(Ee, 2), me = $[0], ce = $[1], Fe = mu(ce);
  Y.current = Fe;
  var $e = rt(null);
  hu(function() {
    if (!(z.current && $e.current === t)) {
      k(t);
      var re = z.current;
      z.current = !0;
      var oe;
      !re && t && s && (oe = _n), re && t && a && (oe = On), (re && !t && c || !re && f && !t && c) && (oe = Fn);
      var Me = Re(oe);
      oe && (r || Me[dt]) ? (N(oe), me()) : N(At), $e.current = t;
    }
  }, [t]), vr(function() {
    // Cancel appear
    (q === _n && !s || // Cancel enter
    q === On && !a || // Cancel leave
    q === Fn && !c) && N(At);
  }, [s, a, c]), vr(function() {
    return function() {
      z.current = !1, clearTimeout(G.current);
    };
  }, []);
  var pe = p.useRef(!1);
  vr(function() {
    M && (pe.current = !0), M !== void 0 && q === At && ((pe.current || M) && _?.(M), pe.current = !0);
  }, [M, q]);
  var He = B;
  return ge[dt] && ce === fr && (He = O({
    transition: "none"
  }, He)), [q, ce, He, M ?? t];
}
function rd(r) {
  var t = r;
  X(r) === "object" && (t = r.transitionSupport);
  function e(i, a) {
    return !!(i.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ p.forwardRef(function(i, a) {
    var o = i.visible, s = o === void 0 ? !0 : o, u = i.removeOnLeave, c = u === void 0 ? !0 : u, l = i.forceRender, f = i.children, v = i.motionName, m = i.leavedClassName, g = i.eventProps, h = p.useContext(Wf), d = h.motion, b = e(i, d), y = rt(), S = rt();
    function P() {
      try {
        return y.current instanceof HTMLElement ? y.current : kn(S.current);
      } catch {
        return null;
      }
    }
    var w = td(b, s, P, i), E = L(w, 4), C = E[0], _ = E[1], F = E[2], T = E[3], M = p.useRef(T);
    T && (M.current = !0);
    var k = p.useCallback(function(j) {
      y.current = j, xa(a, j);
    }, [a]), A, R = O(O({}, g), {}, {
      visible: s
    });
    if (!f)
      A = null;
    else if (C === At)
      T ? A = f(O({}, R), k) : !c && M.current && m ? A = f(O(O({}, R), {}, {
        className: m
      }), k) : l || !c && !m ? A = f(O(O({}, R), {}, {
        style: {
          display: "none"
        }
      }), k) : A = null;
    else {
      var V;
      _ === dt ? V = "prepare" : mu(_) ? V = "active" : _ === fr && (V = "start");
      var N = Mo(v, "".concat(C, "-").concat(V));
      A = f(O(O({}, R), {}, {
        className: je(Mo(v, C), x(x({}, N, N && V), v, typeof v == "string")),
        style: F
      }), k);
    }
    if (/* @__PURE__ */ p.isValidElement(A) && Gn(A)) {
      var I = _a(A);
      I || (A = /* @__PURE__ */ p.cloneElement(A, {
        ref: k
      }));
    }
    return /* @__PURE__ */ p.createElement(Bf, {
      ref: S
    }, A);
  });
  return n.displayName = "CSSMotion", n;
}
const $a = rd(vu);
var oa = "add", sa = "keep", ua = "remove", Mi = "removed";
function nd(r) {
  var t;
  return r && X(r) === "object" && "key" in r ? t = r : t = {
    key: r
  }, O(O({}, t), {}, {
    key: String(t.key)
  });
}
function ca() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return r.map(nd);
}
function id() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], n = 0, i = t.length, a = ca(r), o = ca(t);
  a.forEach(function(c) {
    for (var l = !1, f = n; f < i; f += 1) {
      var v = o[f];
      if (v.key === c.key) {
        n < f && (e = e.concat(o.slice(n, f).map(function(m) {
          return O(O({}, m), {}, {
            status: oa
          });
        })), n = f), e.push(O(O({}, v), {}, {
          status: sa
        })), n += 1, l = !0;
        break;
      }
    }
    l || e.push(O(O({}, c), {}, {
      status: ua
    }));
  }), n < i && (e = e.concat(o.slice(n).map(function(c) {
    return O(O({}, c), {}, {
      status: oa
    });
  })));
  var s = {};
  e.forEach(function(c) {
    var l = c.key;
    s[l] = (s[l] || 0) + 1;
  });
  var u = Object.keys(s).filter(function(c) {
    return s[c] > 1;
  });
  return u.forEach(function(c) {
    e = e.filter(function(l) {
      var f = l.key, v = l.status;
      return f !== c || v !== ua;
    }), e.forEach(function(l) {
      l.key === c && (l.status = sa);
    });
  }), e;
}
var ad = ["component", "children", "onVisibleChanged", "onAllRemoved"], od = ["status"], sd = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function ud(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $a, e = /* @__PURE__ */ function(n) {
    Qt(a, n);
    var i = Yt(a);
    function a() {
      var o;
      Ne(this, a);
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      return o = i.call.apply(i, [this].concat(u)), x(Z(o), "state", {
        keyEntities: []
      }), x(Z(o), "removeKey", function(l) {
        o.setState(function(f) {
          var v = f.keyEntities.map(function(m) {
            return m.key !== l ? m : O(O({}, m), {}, {
              status: Mi
            });
          });
          return {
            keyEntities: v
          };
        }, function() {
          var f = o.state.keyEntities, v = f.filter(function(m) {
            var g = m.status;
            return g !== Mi;
          }).length;
          v === 0 && o.props.onAllRemoved && o.props.onAllRemoved();
        });
      }), o;
    }
    return Ve(a, [{
      key: "render",
      value: function() {
        var s = this, u = this.state.keyEntities, c = this.props, l = c.component, f = c.children, v = c.onVisibleChanged;
        c.onAllRemoved;
        var m = Kt(c, ad), g = l || p.Fragment, h = {};
        return sd.forEach(function(d) {
          h[d] = m[d], delete m[d];
        }), delete m.keys, /* @__PURE__ */ p.createElement(g, m, u.map(function(d, b) {
          var y = d.status, S = Kt(d, od), P = y === oa || y === sa;
          return /* @__PURE__ */ p.createElement(t, bt({}, h, {
            key: S.key,
            visible: P,
            eventProps: S,
            onVisibleChanged: function(E) {
              v?.(E, {
                key: S.key
              }), E || s.removeKey(S.key);
            }
          }), function(w, E) {
            return f(O(O({}, w), {}, {
              index: b
            }), E);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, u) {
        var c = s.keys, l = u.keyEntities, f = ca(c), v = id(l, f);
        return {
          keyEntities: v.filter(function(m) {
            var g = l.find(function(h) {
              var d = h.key;
              return m.key === d;
            });
            return !(g && g.status === Mi && m.status === ua);
          })
        };
      }
    }]), a;
  }(p.Component);
  return x(e, "defaultProps", {
    component: "div"
  }), e;
}
ud(vu);
function pu(r) {
  var t;
  return r == null || (t = r.getRootNode) === null || t === void 0 ? void 0 : t.call(r);
}
function cd(r) {
  return pu(r) instanceof ShadowRoot;
}
function la(r) {
  return cd(r) ? pu(r) : null;
}
function ld(r) {
  return r && /* @__PURE__ */ Ae.isValidElement(r) && r.type === Ae.Fragment;
}
const fd = (r, t, e) => /* @__PURE__ */ Ae.isValidElement(r) ? /* @__PURE__ */ Ae.cloneElement(r, typeof e == "function" ? e(r.props || {}) : e) : t;
function dd(r, t) {
  return fd(r, r, t);
}
const Ia = /* @__PURE__ */ Ae.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ia.displayName = "zIndexContext");
const xt = 100, vd = 10, hd = xt * vd, gd = hd + xt, yu = {
  Modal: xt,
  Drawer: xt,
  Popover: xt,
  Popconfirm: xt,
  Tooltip: xt,
  Tour: xt,
  FloatButton: xt
}, md = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function pd(r) {
  return r in yu;
}
const yd = (r, t) => {
  const [, e] = Na(), n = Ae.useContext(Ia), i = pd(r);
  let a;
  if (t !== void 0)
    a = [t, t];
  else {
    let o = n ?? 0;
    i ? o += // Use preset token zIndex by default but not stack when has parent container
    (n ? 0 : e.zIndexPopupBase) + // Container offset
    yu[r] : o += md[r], a = [n === void 0 ? t : o, o];
  }
  if (process.env.NODE_ENV !== "production") {
    const o = Zs(r), s = e.zIndexPopupBase + gd, u = a[0] || 0;
    process.env.NODE_ENV !== "production" && o(t !== void 0 || u <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return a;
};
function bu(r, t) {
  this.v = r, this.k = t;
}
function ke(r, t, e, n) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch {
    i = 0;
  }
  ke = function(o, s, u, c) {
    if (s) i ? i(o, s, {
      value: u,
      enumerable: !c,
      configurable: !c,
      writable: !c
    }) : o[s] = u;
    else {
      var l = function(v, m) {
        ke(o, v, function(g) {
          return this._invoke(v, m, g);
        });
      };
      l("next", 0), l("throw", 1), l("return", 2);
    }
  }, ke(r, t, e, n);
}
function La() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var r, t, e = typeof Symbol == "function" ? Symbol : {}, n = e.iterator || "@@iterator", i = e.toStringTag || "@@toStringTag";
  function a(m, g, h, d) {
    var b = g && g.prototype instanceof s ? g : s, y = Object.create(b.prototype);
    return ke(y, "_invoke", function(S, P, w) {
      var E, C, _, F = 0, T = w || [], M = !1, k = {
        p: 0,
        n: 0,
        v: r,
        a: A,
        f: A.bind(r, 4),
        d: function(V, N) {
          return E = V, C = 0, _ = r, k.n = N, o;
        }
      };
      function A(R, V) {
        for (C = R, _ = V, t = 0; !M && F && !N && t < T.length; t++) {
          var N, I = T[t], j = k.p, B = I[2];
          R > 3 ? (N = B === V) && (_ = I[(C = I[4]) ? 5 : (C = 3, 3)], I[4] = I[5] = r) : I[0] <= j && ((N = R < 2 && j < I[1]) ? (C = 0, k.v = V, k.n = I[1]) : j < B && (N = R < 3 || I[0] > V || V > B) && (I[4] = R, I[5] = V, k.n = B, C = 0));
        }
        if (N || R > 1) return o;
        throw M = !0, V;
      }
      return function(R, V, N) {
        if (F > 1) throw TypeError("Generator is already running");
        for (M && V === 1 && A(V, N), C = V, _ = N; (t = C < 2 ? r : _) || !M; ) {
          E || (C ? C < 3 ? (C > 1 && (k.n = -1), A(C, _)) : k.n = _ : k.v = _);
          try {
            if (F = 2, E) {
              if (C || (R = "next"), t = E[R]) {
                if (!(t = t.call(E, _))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                _ = t.value, C < 2 && (C = 0);
              } else C === 1 && (t = E.return) && t.call(E), C < 2 && (_ = TypeError("The iterator does not provide a '" + R + "' method"), C = 1);
              E = r;
            } else if ((t = (M = k.n < 0) ? _ : S.call(P, k)) !== o) break;
          } catch (I) {
            E = r, C = 1, _ = I;
          } finally {
            F = 1;
          }
        }
        return {
          value: t,
          done: M
        };
      };
    }(m, h, d), !0), y;
  }
  var o = {};
  function s() {
  }
  function u() {
  }
  function c() {
  }
  t = Object.getPrototypeOf;
  var l = [][n] ? t(t([][n]())) : (ke(t = {}, n, function() {
    return this;
  }), t), f = c.prototype = s.prototype = Object.create(l);
  function v(m) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(m, c) : (m.__proto__ = c, ke(m, i, "GeneratorFunction")), m.prototype = Object.create(f), m;
  }
  return u.prototype = c, ke(f, "constructor", c), ke(c, "constructor", u), u.displayName = "GeneratorFunction", ke(c, i, "GeneratorFunction"), ke(f), ke(f, i, "Generator"), ke(f, n, function() {
    return this;
  }), ke(f, "toString", function() {
    return "[object Generator]";
  }), (La = function() {
    return {
      w: a,
      m: v
    };
  })();
}
function qn(r, t) {
  function e(i, a, o, s) {
    try {
      var u = r[i](a), c = u.value;
      return c instanceof bu ? t.resolve(c.v).then(function(l) {
        e("next", l, o, s);
      }, function(l) {
        e("throw", l, o, s);
      }) : t.resolve(c).then(function(l) {
        u.value = l, o(u);
      }, function(l) {
        return e("throw", l, o, s);
      });
    } catch (l) {
      s(l);
    }
  }
  var n;
  this.next || (ke(qn.prototype), ke(qn.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), ke(this, "_invoke", function(i, a, o) {
    function s() {
      return new t(function(u, c) {
        e(i, o, u, c);
      });
    }
    return n = n ? n.then(s, s) : s();
  }, !0);
}
function wu(r, t, e, n, i) {
  return new qn(La().w(r, t, e, n), i || Promise);
}
function bd(r, t, e, n, i) {
  var a = wu(r, t, e, n, i);
  return a.next().then(function(o) {
    return o.done ? o.value : a.next();
  });
}
function wd(r) {
  var t = Object(r), e = [];
  for (var n in t) e.unshift(n);
  return function i() {
    for (; e.length; ) if ((n = e.pop()) in t) return i.value = n, i.done = !1, i;
    return i.done = !0, i;
  };
}
function ko(r) {
  if (r != null) {
    var t = r[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], e = 0;
    if (t) return t.call(r);
    if (typeof r.next == "function") return r;
    if (!isNaN(r.length)) return {
      next: function() {
        return r && e >= r.length && (r = void 0), {
          value: r && r[e++],
          done: !r
        };
      }
    };
  }
  throw new TypeError(X(r) + " is not iterable");
}
function it() {
  var r = La(), t = r.m(it), e = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function n(o) {
    var s = typeof o == "function" && o.constructor;
    return !!s && (s === e || (s.displayName || s.name) === "GeneratorFunction");
  }
  var i = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function a(o) {
    var s, u;
    return function(c) {
      s || (s = {
        stop: function() {
          return u(c.a, 2);
        },
        catch: function() {
          return c.v;
        },
        abrupt: function(f, v) {
          return u(c.a, i[f], v);
        },
        delegateYield: function(f, v, m) {
          return s.resultName = v, u(c.d, ko(f), m);
        },
        finish: function(f) {
          return u(c.f, f);
        }
      }, u = function(f, v, m) {
        c.p = s.prev, c.n = s.next;
        try {
          return f(v, m);
        } finally {
          s.next = c.n;
        }
      }), s.resultName && (s[s.resultName] = c.v, s.resultName = void 0), s.sent = c.v, s.next = c.n;
      try {
        return o.call(this, s);
      } finally {
        c.p = s.prev, c.n = s.next;
      }
    };
  }
  return (it = function() {
    return {
      wrap: function(u, c, l, f) {
        return r.w(a(u), c, l, f && f.reverse());
      },
      isGeneratorFunction: n,
      mark: r.m,
      awrap: function(u, c) {
        return new bu(u, c);
      },
      AsyncIterator: qn,
      async: function(u, c, l, f, v) {
        return (n(c) ? wu : bd)(a(u), c, l, f, v);
      },
      keys: wd,
      values: ko
    };
  })();
}
function Ao(r, t, e, n, i, a, o) {
  try {
    var s = r[a](o), u = s.value;
  } catch (c) {
    return void e(c);
  }
  s.done ? t(u) : Promise.resolve(u).then(n, i);
}
function Kr(r) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(n, i) {
      var a = r.apply(t, e);
      function o(u) {
        Ao(a, n, i, o, s, "next", u);
      }
      function s(u) {
        Ao(a, n, i, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
const Sd = (r, t, e) => e !== void 0 ? e : `${r}-${t}`, Ed = function(r) {
  if (!r)
    return !1;
  if (r instanceof Element) {
    if (r.offsetParent)
      return !0;
    if (r.getBBox) {
      var t = r.getBBox(), e = t.width, n = t.height;
      if (e || n)
        return !0;
    }
    if (r.getBoundingClientRect) {
      var i = r.getBoundingClientRect(), a = i.width, o = i.height;
      if (a || o)
        return !0;
    }
  }
  return !1;
}, Cd = /* @__PURE__ */ p.createContext(null), xd = (r) => {
  const {
    children: t
  } = r;
  return /* @__PURE__ */ p.createElement(Cd.Provider, {
    value: null
  }, t);
}, Pd = (r) => ({
  animationDuration: r,
  animationFillMode: "both"
}), _d = (r) => ({
  animationDuration: r,
  animationFillMode: "both"
}), Od = (r, t, e, n, i = !1) => {
  const a = i ? "&" : "";
  return {
    [`
      ${a}${r}-enter,
      ${a}${r}-appear
    `]: Object.assign(Object.assign({}, Pd(n)), {
      animationPlayState: "paused"
    }),
    [`${a}${r}-leave`]: Object.assign(Object.assign({}, _d(n)), {
      animationPlayState: "paused"
    }),
    [`
      ${a}${r}-enter${r}-enter-active,
      ${a}${r}-appear${r}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${a}${r}-leave${r}-leave-active`]: {
      animationName: e,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, Fd = new at("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Td = new at("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), No = new at("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Vo = new at("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), Rd = new at("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Md = new at("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), kd = new at("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Ad = new at("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Nd = new at("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Vd = new at("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), $d = new at("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), Id = new at("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Ld = {
  zoom: {
    inKeyframes: Fd,
    outKeyframes: Td
  },
  "zoom-big": {
    inKeyframes: No,
    outKeyframes: Vo
  },
  "zoom-big-fast": {
    inKeyframes: No,
    outKeyframes: Vo
  },
  "zoom-left": {
    inKeyframes: kd,
    outKeyframes: Ad
  },
  "zoom-right": {
    inKeyframes: Nd,
    outKeyframes: Vd
  },
  "zoom-up": {
    inKeyframes: Rd,
    outKeyframes: Md
  },
  "zoom-down": {
    inKeyframes: $d,
    outKeyframes: Id
  }
}, jd = (r, t) => {
  const {
    antCls: e
  } = r, n = `${e}-${t}`, {
    inKeyframes: i,
    outKeyframes: a
  } = Ld[t];
  return [Od(n, i, a, r.motionDurationFast), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: r.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: r.motionEaseInOutCirc
    }
  }];
};
var Su = /* @__PURE__ */ p.createContext(null), $o = [];
function Dd(r, t) {
  var e = p.useState(function() {
    if (!Ue())
      return null;
    var g = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && g.setAttribute("data-debug", t), g;
  }), n = L(e, 1), i = n[0], a = p.useRef(!1), o = p.useContext(Su), s = p.useState($o), u = L(s, 2), c = u[0], l = u[1], f = o || (a.current ? void 0 : function(g) {
    l(function(h) {
      var d = [g].concat(H(h));
      return d;
    });
  });
  function v() {
    i.parentElement || document.body.appendChild(i), a.current = !0;
  }
  function m() {
    var g;
    (g = i.parentElement) === null || g === void 0 || g.removeChild(i), a.current = !1;
  }
  return Le(function() {
    return r ? o ? o(v) : v() : m(), m;
  }, [r]), Le(function() {
    c.length && (c.forEach(function(g) {
      return g();
    }), l($o));
  }, [c]), [i, f];
}
function zd(r) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), e = document.createElement("div");
  e.id = t;
  var n = e.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var i, a;
  if (r) {
    var o = getComputedStyle(r);
    n.scrollbarColor = o.scrollbarColor, n.scrollbarWidth = o.scrollbarWidth;
    var s = getComputedStyle(r, "::-webkit-scrollbar"), u = parseInt(s.width, 10), c = parseInt(s.height, 10);
    try {
      var l = u ? "width: ".concat(s.width, ";") : "", f = c ? "height: ".concat(s.height, ";") : "";
      Gt(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(l, `
`).concat(f, `
}`), t);
    } catch (g) {
      console.error(g), i = u, a = c;
    }
  }
  document.body.appendChild(e);
  var v = r && i && !isNaN(i) ? i : e.offsetWidth - e.clientWidth, m = r && a && !isNaN(a) ? a : e.offsetHeight - e.clientHeight;
  return document.body.removeChild(e), Br(t), {
    width: v,
    height: m
  };
}
function Hd(r) {
  return typeof document > "u" || !r || !(r instanceof Element) ? {
    width: 0,
    height: 0
  } : zd(r);
}
function Wd() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Bd = "rc-util-locker-".concat(Date.now()), Io = 0;
function qd(r) {
  var t = !!r, e = p.useState(function() {
    return Io += 1, "".concat(Bd, "_").concat(Io);
  }), n = L(e, 1), i = n[0];
  Le(function() {
    if (t) {
      var a = Hd(document.body).width, o = Wd();
      Gt(`
html body {
  overflow-y: hidden;
  `.concat(o ? "width: calc(100% - ".concat(a, "px);") : "", `
}`), i);
    } else
      Br(i);
    return function() {
      Br(i);
    };
  }, [t, i]);
}
var Ud = !1;
function Gd(r) {
  return Ud;
}
var Lo = function(t) {
  return t === !1 ? !1 : !Ue() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, ja = /* @__PURE__ */ p.forwardRef(function(r, t) {
  var e = r.open, n = r.autoLock, i = r.getContainer, a = r.debug, o = r.autoDestroy, s = o === void 0 ? !0 : o, u = r.children, c = p.useState(e), l = L(c, 2), f = l[0], v = l[1], m = f || e;
  process.env.NODE_ENV !== "production" && he(Ue() || !e, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), p.useEffect(function() {
    (s || e) && v(e);
  }, [e, s]);
  var g = p.useState(function() {
    return Lo(i);
  }), h = L(g, 2), d = h[0], b = h[1];
  p.useEffect(function() {
    var k = Lo(i);
    b(k ?? null);
  });
  var y = Dd(m && !d, a), S = L(y, 2), P = S[0], w = S[1], E = d ?? P;
  qd(n && e && Ue() && (E === P || E === document.body));
  var C = null;
  if (u && Gn(u) && t) {
    var _ = u;
    C = _.ref;
  }
  var F = Pa(C, t);
  if (!m || !Ue() || d === void 0)
    return null;
  var T = E === !1 || Gd(), M = u;
  return t && (M = /* @__PURE__ */ p.cloneElement(u, {
    ref: F
  })), /* @__PURE__ */ p.createElement(Su.Provider, {
    value: w
  }, T ? M : /* @__PURE__ */ Bu(M, E));
});
process.env.NODE_ENV !== "production" && (ja.displayName = "Portal");
function Xd() {
  var r = O({}, p);
  return r.useId;
}
var jo = 0, Do = Xd();
const Eu = Do ? (
  // Use React `useId`
  function(t) {
    var e = Do();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : e);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var e = p.useState("ssr-id"), n = L(e, 2), i = n[0], a = n[1];
    return p.useEffect(function() {
      var o = jo;
      jo += 1, a("rc_unique_".concat(o));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : i);
  }
);
var Ut = "RC_FORM_INTERNAL_HOOKS", ne = function() {
  he(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Sr = /* @__PURE__ */ p.createContext({
  getFieldValue: ne,
  getFieldsValue: ne,
  getFieldError: ne,
  getFieldWarning: ne,
  getFieldsError: ne,
  isFieldsTouched: ne,
  isFieldTouched: ne,
  isFieldValidating: ne,
  isFieldsValidating: ne,
  resetFields: ne,
  setFields: ne,
  setFieldValue: ne,
  setFieldsValue: ne,
  validateFields: ne,
  submit: ne,
  getInternalHooks: function() {
    return ne(), {
      dispatch: ne,
      initEntityValue: ne,
      registerField: ne,
      useSubscribe: ne,
      setInitialValues: ne,
      destroyForm: ne,
      setCallbacks: ne,
      registerWatch: ne,
      getFields: ne,
      setValidateMessages: ne,
      setPreserve: ne,
      getInitialValue: ne
    };
  }
}), Un = /* @__PURE__ */ p.createContext(null);
function fa(r) {
  return r == null ? [] : Array.isArray(r) ? r : [r];
}
function Kd(r) {
  return r && !!r._init;
}
function da() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var va = da();
function Zd(r) {
  try {
    return Function.toString.call(r).indexOf("[native code]") !== -1;
  } catch {
    return typeof r == "function";
  }
}
function Qd(r, t, e) {
  if (Oa()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var i = new (r.bind.apply(r, n))();
  return e && zr(i, e.prototype), i;
}
function ha(r) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ha = function(n) {
    if (n === null || !Zd(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, i);
    }
    function i() {
      return Qd(n, arguments, Hr(this).constructor);
    }
    return i.prototype = Object.create(n.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), zr(i, n);
  }, ha(r);
}
var Yd = /%[sdj%]/g, Cu = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Cu = function(t, e) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && e.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, e);
});
function ga(r) {
  if (!r || !r.length) return null;
  var t = {};
  return r.forEach(function(e) {
    var n = e.field;
    t[n] = t[n] || [], t[n].push(e);
  }), t;
}
function qe(r) {
  for (var t = arguments.length, e = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    e[n - 1] = arguments[n];
  var i = 0, a = e.length;
  if (typeof r == "function")
    return r.apply(null, e);
  if (typeof r == "string") {
    var o = r.replace(Yd, function(s) {
      if (s === "%%")
        return "%";
      if (i >= a)
        return s;
      switch (s) {
        case "%s":
          return String(e[i++]);
        case "%d":
          return Number(e[i++]);
        case "%j":
          try {
            return JSON.stringify(e[i++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return o;
  }
  return r;
}
function Jd(r) {
  return r === "string" || r === "url" || r === "hex" || r === "email" || r === "date" || r === "pattern";
}
function xe(r, t) {
  return !!(r == null || t === "array" && Array.isArray(r) && !r.length || Jd(t) && typeof r == "string" && !r);
}
function ev(r, t, e) {
  var n = [], i = 0, a = r.length;
  function o(s) {
    n.push.apply(n, H(s || [])), i++, i === a && e(n);
  }
  r.forEach(function(s) {
    t(s, o);
  });
}
function zo(r, t, e) {
  var n = 0, i = r.length;
  function a(o) {
    if (o && o.length) {
      e(o);
      return;
    }
    var s = n;
    n = n + 1, s < i ? t(r[s], a) : e([]);
  }
  a([]);
}
function tv(r) {
  var t = [];
  return Object.keys(r).forEach(function(e) {
    t.push.apply(t, H(r[e] || []));
  }), t;
}
var Ho = /* @__PURE__ */ function(r) {
  Qt(e, r);
  var t = Yt(e);
  function e(n, i) {
    var a;
    return Ne(this, e), a = t.call(this, "Async Validation Error"), x(Z(a), "errors", void 0), x(Z(a), "fields", void 0), a.errors = n, a.fields = i, a;
  }
  return Ve(e);
}(/* @__PURE__ */ ha(Error));
function rv(r, t, e, n, i) {
  if (t.first) {
    var a = new Promise(function(v, m) {
      var g = function(b) {
        return n(b), b.length ? m(new Ho(b, ga(b))) : v(i);
      }, h = tv(r);
      zo(h, e, g);
    });
    return a.catch(function(v) {
      return v;
    }), a;
  }
  var o = t.firstFields === !0 ? Object.keys(r) : t.firstFields || [], s = Object.keys(r), u = s.length, c = 0, l = [], f = new Promise(function(v, m) {
    var g = function(d) {
      if (l.push.apply(l, d), c++, c === u)
        return n(l), l.length ? m(new Ho(l, ga(l))) : v(i);
    };
    s.length || (n(l), v(i)), s.forEach(function(h) {
      var d = r[h];
      o.indexOf(h) !== -1 ? zo(d, e, g) : ev(d, e, g);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function nv(r) {
  return !!(r && r.message !== void 0);
}
function iv(r, t) {
  for (var e = r, n = 0; n < t.length; n++) {
    if (e == null)
      return e;
    e = e[t[n]];
  }
  return e;
}
function Wo(r, t) {
  return function(e) {
    var n;
    return r.fullFields ? n = iv(t, r.fullFields) : n = t[e.field || r.fullField], nv(e) ? (e.field = e.field || r.fullField, e.fieldValue = n, e) : {
      message: typeof e == "function" ? e() : e,
      fieldValue: n,
      field: e.field || r.fullField
    };
  };
}
function Bo(r, t) {
  if (t) {
    for (var e in t)
      if (t.hasOwnProperty(e)) {
        var n = t[e];
        X(n) === "object" && X(r[e]) === "object" ? r[e] = O(O({}, r[e]), n) : r[e] = n;
      }
  }
  return r;
}
var or = "enum", av = function(t, e, n, i, a) {
  t[or] = Array.isArray(t[or]) ? t[or] : [], t[or].indexOf(e) === -1 && i.push(qe(a.messages[or], t.fullField, t[or].join(", ")));
}, ov = function(t, e, n, i, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(e) || i.push(qe(a.messages.pattern.mismatch, t.fullField, e, t.pattern));
    else if (typeof t.pattern == "string") {
      var o = new RegExp(t.pattern);
      o.test(e) || i.push(qe(a.messages.pattern.mismatch, t.fullField, e, t.pattern));
    }
  }
}, sv = function(t, e, n, i, a) {
  var o = typeof t.len == "number", s = typeof t.min == "number", u = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = e, f = null, v = typeof e == "number", m = typeof e == "string", g = Array.isArray(e);
  if (v ? f = "number" : m ? f = "string" : g && (f = "array"), !f)
    return !1;
  g && (l = e.length), m && (l = e.replace(c, "_").length), o ? l !== t.len && i.push(qe(a.messages[f].len, t.fullField, t.len)) : s && !u && l < t.min ? i.push(qe(a.messages[f].min, t.fullField, t.min)) : u && !s && l > t.max ? i.push(qe(a.messages[f].max, t.fullField, t.max)) : s && u && (l < t.min || l > t.max) && i.push(qe(a.messages[f].range, t.fullField, t.min, t.max));
}, xu = function(t, e, n, i, a, o) {
  t.required && (!n.hasOwnProperty(t.field) || xe(e, o || t.type)) && i.push(qe(a.messages.required, t.fullField));
}, Rn;
const uv = function() {
  if (Rn)
    return Rn;
  var r = "[a-fA-F\\d:]", t = function(E) {
    return E && E.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(r, ")|(?<=").concat(r, ")(?=\\s|$))") : "";
  }, e = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", i = [
    "(?:".concat(n, ":){7}(?:").concat(n, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(n, ":){6}(?:").concat(e, "|:").concat(n, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(n, ":){5}(?::").concat(e, "|(?::").concat(n, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(n, ":){4}(?:(?::").concat(n, "){0,1}:").concat(e, "|(?::").concat(n, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(n, ":){3}(?:(?::").concat(n, "){0,2}:").concat(e, "|(?::").concat(n, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(n, ":){2}(?:(?::").concat(n, "){0,3}:").concat(e, "|(?::").concat(n, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(n, ":){1}(?:(?::").concat(n, "){0,4}:").concat(e, "|(?::").concat(n, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(n, "){0,5}:").concat(e, "|(?::").concat(n, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], a = "(?:%[0-9a-zA-Z]{1,})?", o = "(?:".concat(i.join("|"), ")").concat(a), s = new RegExp("(?:^".concat(e, "$)|(?:^").concat(o, "$)")), u = new RegExp("^".concat(e, "$")), c = new RegExp("^".concat(o, "$")), l = function(E) {
    return E && E.exact ? s : new RegExp("(?:".concat(t(E)).concat(e).concat(t(E), ")|(?:").concat(t(E)).concat(o).concat(t(E), ")"), "g");
  };
  l.v4 = function(w) {
    return w && w.exact ? u : new RegExp("".concat(t(w)).concat(e).concat(t(w)), "g");
  }, l.v6 = function(w) {
    return w && w.exact ? c : new RegExp("".concat(t(w)).concat(o).concat(t(w)), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", m = l.v4().source, g = l.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", d = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", b = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", S = '(?:[/?#][^\\s"]*)?', P = "(?:".concat(f, "|www\\.)").concat(v, "(?:localhost|").concat(m, "|").concat(g, "|").concat(h).concat(d).concat(b, ")").concat(y).concat(S);
  return Rn = new RegExp("(?:^".concat(P, "$)"), "i"), Rn;
};
var qo = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, $r = {
  integer: function(t) {
    return $r.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return $r.number(t) && !$r.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return X(t) === "object" && !$r.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(qo.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(uv());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(qo.hex);
  }
}, cv = function(t, e, n, i, a) {
  if (t.required && e === void 0) {
    xu(t, e, n, i, a);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  o.indexOf(s) > -1 ? $r[s](e) || i.push(qe(a.messages.types[s], t.fullField, t.type)) : s && X(e) !== t.type && i.push(qe(a.messages.types[s], t.fullField, t.type));
}, lv = function(t, e, n, i, a) {
  (/^\s+$/.test(e) || e === "") && i.push(qe(a.messages.whitespace, t.fullField));
};
const Q = {
  required: xu,
  whitespace: lv,
  type: cv,
  range: sv,
  enum: av,
  pattern: ov
};
var fv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (xe(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a);
  }
  n(o);
}, dv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (e == null && !t.required)
      return n();
    Q.required(t, e, i, o, a, "array"), e != null && (Q.type(t, e, i, o, a), Q.range(t, e, i, o, a));
  }
  n(o);
}, vv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (xe(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && Q.type(t, e, i, o, a);
  }
  n(o);
}, hv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (xe(e, "date") && !t.required)
      return n();
    if (Q.required(t, e, i, o, a), !xe(e, "date")) {
      var u;
      e instanceof Date ? u = e : u = new Date(e), Q.type(t, u, i, o, a), u && Q.range(t, u.getTime(), i, o, a);
    }
  }
  n(o);
}, gv = "enum", mv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (xe(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && Q[gv](t, e, i, o, a);
  }
  n(o);
}, pv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (xe(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && (Q.type(t, e, i, o, a), Q.range(t, e, i, o, a));
  }
  n(o);
}, yv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (xe(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && (Q.type(t, e, i, o, a), Q.range(t, e, i, o, a));
  }
  n(o);
}, bv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (xe(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && Q.type(t, e, i, o, a);
  }
  n(o);
}, wv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (e === "" && (e = void 0), xe(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && (Q.type(t, e, i, o, a), Q.range(t, e, i, o, a));
  }
  n(o);
}, Sv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (xe(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && Q.type(t, e, i, o, a);
  }
  n(o);
}, Ev = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (xe(e, "string") && !t.required)
      return n();
    Q.required(t, e, i, o, a), xe(e, "string") || Q.pattern(t, e, i, o, a);
  }
  n(o);
}, Cv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (xe(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), xe(e) || Q.type(t, e, i, o, a);
  }
  n(o);
}, xv = function(t, e, n, i, a) {
  var o = [], s = Array.isArray(e) ? "array" : X(e);
  Q.required(t, e, i, o, a, s), n(o);
}, Pv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (xe(e, "string") && !t.required)
      return n();
    Q.required(t, e, i, o, a, "string"), xe(e, "string") || (Q.type(t, e, i, o, a), Q.range(t, e, i, o, a), Q.pattern(t, e, i, o, a), t.whitespace === !0 && Q.whitespace(t, e, i, o, a));
  }
  n(o);
}, ki = function(t, e, n, i, a) {
  var o = t.type, s = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (xe(e, o) && !t.required)
      return n();
    Q.required(t, e, i, s, a, o), xe(e, o) || Q.type(t, e, i, s, a);
  }
  n(s);
};
const Lr = {
  string: Pv,
  method: bv,
  number: wv,
  boolean: vv,
  regexp: Cv,
  integer: yv,
  float: pv,
  array: dv,
  object: Sv,
  enum: mv,
  pattern: Ev,
  date: hv,
  url: ki,
  hex: ki,
  email: ki,
  required: xv,
  any: fv
};
var Zr = /* @__PURE__ */ function() {
  function r(t) {
    Ne(this, r), x(this, "rules", null), x(this, "_messages", va), this.define(t);
  }
  return Ve(r, [{
    key: "define",
    value: function(e) {
      var n = this;
      if (!e)
        throw new Error("Cannot configure a schema with no rules");
      if (X(e) !== "object" || Array.isArray(e))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(e).forEach(function(i) {
        var a = e[i];
        n.rules[i] = Array.isArray(a) ? a : [a];
      });
    }
  }, {
    key: "messages",
    value: function(e) {
      return e && (this._messages = Bo(da(), e)), this._messages;
    }
  }, {
    key: "validate",
    value: function(e) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, o = e, s = i, u = a;
      if (typeof s == "function" && (u = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return u && u(null, o), Promise.resolve(o);
      function c(g) {
        var h = [], d = {};
        function b(S) {
          if (Array.isArray(S)) {
            var P;
            h = (P = h).concat.apply(P, H(S));
          } else
            h.push(S);
        }
        for (var y = 0; y < g.length; y++)
          b(g[y]);
        h.length ? (d = ga(h), u(h, d)) : u(null, o);
      }
      if (s.messages) {
        var l = this.messages();
        l === va && (l = da()), Bo(l, s.messages), s.messages = l;
      } else
        s.messages = this.messages();
      var f = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(g) {
        var h = n.rules[g], d = o[g];
        h.forEach(function(b) {
          var y = b;
          typeof y.transform == "function" && (o === e && (o = O({}, o)), d = o[g] = y.transform(d), d != null && (y.type = y.type || (Array.isArray(d) ? "array" : X(d)))), typeof y == "function" ? y = {
            validator: y
          } : y = O({}, y), y.validator = n.getValidationMethod(y), y.validator && (y.field = g, y.fullField = y.fullField || g, y.type = n.getType(y), f[g] = f[g] || [], f[g].push({
            rule: y,
            value: d,
            source: o,
            field: g
          }));
        });
      });
      var m = {};
      return rv(f, s, function(g, h) {
        var d = g.rule, b = (d.type === "object" || d.type === "array") && (X(d.fields) === "object" || X(d.defaultField) === "object");
        b = b && (d.required || !d.required && g.value), d.field = g.field;
        function y(C, _) {
          return O(O({}, _), {}, {
            fullField: "".concat(d.fullField, ".").concat(C),
            fullFields: d.fullFields ? [].concat(H(d.fullFields), [C]) : [C]
          });
        }
        function S() {
          var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], _ = Array.isArray(C) ? C : [C];
          !s.suppressWarning && _.length && r.warning("async-validator:", _), _.length && d.message !== void 0 && (_ = [].concat(d.message));
          var F = _.map(Wo(d, o));
          if (s.first && F.length)
            return m[d.field] = 1, h(F);
          if (!b)
            h(F);
          else {
            if (d.required && !g.value)
              return d.message !== void 0 ? F = [].concat(d.message).map(Wo(d, o)) : s.error && (F = [s.error(d, qe(s.messages.required, d.field))]), h(F);
            var T = {};
            d.defaultField && Object.keys(g.value).map(function(A) {
              T[A] = d.defaultField;
            }), T = O(O({}, T), g.rule.fields);
            var M = {};
            Object.keys(T).forEach(function(A) {
              var R = T[A], V = Array.isArray(R) ? R : [R];
              M[A] = V.map(y.bind(null, A));
            });
            var k = new r(M);
            k.messages(s.messages), g.rule.options && (g.rule.options.messages = s.messages, g.rule.options.error = s.error), k.validate(g.value, g.rule.options || s, function(A) {
              var R = [];
              F && F.length && R.push.apply(R, H(F)), A && A.length && R.push.apply(R, H(A)), h(R.length ? R : null);
            });
          }
        }
        var P;
        if (d.asyncValidator)
          P = d.asyncValidator(d, g.value, S, g.source, s);
        else if (d.validator) {
          try {
            P = d.validator(d, g.value, S, g.source, s);
          } catch (C) {
            var w, E;
            (w = (E = console).error) === null || w === void 0 || w.call(E, C), s.suppressValidatorError || setTimeout(function() {
              throw C;
            }, 0), S(C.message);
          }
          P === !0 ? S() : P === !1 ? S(typeof d.message == "function" ? d.message(d.fullField || d.field) : d.message || "".concat(d.fullField || d.field, " fails")) : P instanceof Array ? S(P) : P instanceof Error && S(P.message);
        }
        P && P.then && P.then(function() {
          return S();
        }, function(C) {
          return S(C);
        });
      }, function(g) {
        c(g);
      }, o);
    }
  }, {
    key: "getType",
    value: function(e) {
      if (e.type === void 0 && e.pattern instanceof RegExp && (e.type = "pattern"), typeof e.validator != "function" && e.type && !Lr.hasOwnProperty(e.type))
        throw new Error(qe("Unknown rule type %s", e.type));
      return e.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(e) {
      if (typeof e.validator == "function")
        return e.validator;
      var n = Object.keys(e), i = n.indexOf("message");
      return i !== -1 && n.splice(i, 1), n.length === 1 && n[0] === "required" ? Lr.required : Lr[this.getType(e)] || void 0;
    }
  }]), r;
}();
x(Zr, "register", function(t, e) {
  if (typeof e != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Lr[t] = e;
});
x(Zr, "warning", Cu);
x(Zr, "messages", va);
x(Zr, "validators", Lr);
var Be = "'${name}' is not a valid ${type}", Pu = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: Be,
    method: Be,
    array: Be,
    object: Be,
    number: Be,
    date: Be,
    boolean: Be,
    integer: Be,
    float: Be,
    regexp: Be,
    email: Be,
    url: Be,
    hex: Be
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, Uo = Zr;
function _v(r, t) {
  return r.replace(/\\?\$\{\w+\}/g, function(e) {
    if (e.startsWith("\\"))
      return e.slice(1);
    var n = e.slice(2, -1);
    return t[n];
  });
}
var Go = "CODE_LOGIC_ERROR";
function ma(r, t, e, n, i) {
  return pa.apply(this, arguments);
}
function pa() {
  return pa = Kr(/* @__PURE__ */ it().mark(function r(t, e, n, i, a) {
    var o, s, u, c, l, f, v, m, g;
    return it().wrap(function(d) {
      for (; ; ) switch (d.prev = d.next) {
        case 0:
          return o = O({}, n), delete o.ruleIndex, Uo.warning = function() {
          }, o.validator && (s = o.validator, o.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (b) {
              return console.error(b), Promise.reject(Go);
            }
          }), u = null, o && o.type === "array" && o.defaultField && (u = o.defaultField, delete o.defaultField), c = new Uo(x({}, t, [o])), l = Vr(Pu, i.validateMessages), c.messages(l), f = [], d.prev = 10, d.next = 13, Promise.resolve(c.validate(x({}, t, e), O({}, i)));
        case 13:
          d.next = 18;
          break;
        case 15:
          d.prev = 15, d.t0 = d.catch(10), d.t0.errors && (f = d.t0.errors.map(function(b, y) {
            var S = b.message, P = S === Go ? l.default : S;
            return /* @__PURE__ */ p.isValidElement(P) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ p.cloneElement(P, {
                key: "error_".concat(y)
              })
            ) : P;
          }));
        case 18:
          if (!(!f.length && u)) {
            d.next = 23;
            break;
          }
          return d.next = 21, Promise.all(e.map(function(b, y) {
            return ma("".concat(t, ".").concat(y), b, u, i, a);
          }));
        case 21:
          return v = d.sent, d.abrupt("return", v.reduce(function(b, y) {
            return [].concat(H(b), H(y));
          }, []));
        case 23:
          return m = O(O({}, n), {}, {
            name: t,
            enum: (n.enum || []).join(", ")
          }, a), g = f.map(function(b) {
            return typeof b == "string" ? _v(b, m) : b;
          }), d.abrupt("return", g);
        case 26:
        case "end":
          return d.stop();
      }
    }, r, null, [[10, 15]]);
  })), pa.apply(this, arguments);
}
function Ov(r, t, e, n, i, a) {
  var o = r.join("."), s = e.map(function(l, f) {
    var v = l.validator, m = O(O({}, l), {}, {
      ruleIndex: f
    });
    return v && (m.validator = function(g, h, d) {
      var b = !1, y = function() {
        for (var w = arguments.length, E = new Array(w), C = 0; C < w; C++)
          E[C] = arguments[C];
        Promise.resolve().then(function() {
          he(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || d.apply(void 0, E);
        });
      }, S = v(g, h, y);
      b = S && typeof S.then == "function" && typeof S.catch == "function", he(b, "`callback` is deprecated. Please return a promise instead."), b && S.then(function() {
        d();
      }).catch(function(P) {
        d(P || " ");
      });
    }), m;
  }).sort(function(l, f) {
    var v = l.warningOnly, m = l.ruleIndex, g = f.warningOnly, h = f.ruleIndex;
    return !!v == !!g ? m - h : v ? 1 : -1;
  }), u;
  if (i === !0)
    u = new Promise(/* @__PURE__ */ function() {
      var l = Kr(/* @__PURE__ */ it().mark(function f(v, m) {
        var g, h, d;
        return it().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              g = 0;
            case 1:
              if (!(g < s.length)) {
                y.next = 12;
                break;
              }
              return h = s[g], y.next = 5, ma(o, t, h, n, a);
            case 5:
              if (d = y.sent, !d.length) {
                y.next = 9;
                break;
              }
              return m([{
                errors: d,
                rule: h
              }]), y.abrupt("return");
            case 9:
              g += 1, y.next = 1;
              break;
            case 12:
              v([]);
            case 13:
            case "end":
              return y.stop();
          }
        }, f);
      }));
      return function(f, v) {
        return l.apply(this, arguments);
      };
    }());
  else {
    var c = s.map(function(l) {
      return ma(o, t, l, n, a).then(function(f) {
        return {
          errors: f,
          rule: l
        };
      });
    });
    u = (i ? Tv(c) : Fv(c)).then(function(l) {
      return Promise.reject(l);
    });
  }
  return u.catch(function(l) {
    return l;
  }), u;
}
function Fv(r) {
  return ya.apply(this, arguments);
}
function ya() {
  return ya = Kr(/* @__PURE__ */ it().mark(function r(t) {
    return it().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.all(t).then(function(i) {
            var a, o = (a = []).concat.apply(a, H(i));
            return o;
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, r);
  })), ya.apply(this, arguments);
}
function Tv(r) {
  return ba.apply(this, arguments);
}
function ba() {
  return ba = Kr(/* @__PURE__ */ it().mark(function r(t) {
    var e;
    return it().wrap(function(i) {
      for (; ; ) switch (i.prev = i.next) {
        case 0:
          return e = 0, i.abrupt("return", new Promise(function(a) {
            t.forEach(function(o) {
              o.then(function(s) {
                s.errors.length && a([s]), e += 1, e === t.length && a([]);
              });
            });
          }));
        case 2:
        case "end":
          return i.stop();
      }
    }, r);
  })), ba.apply(this, arguments);
}
function we(r) {
  return fa(r);
}
function Xo(r, t) {
  var e = {};
  return t.forEach(function(n) {
    var i = yt(r, n);
    e = ft(e, n, i);
  }), e;
}
function gr(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return r && r.some(function(n) {
    return _u(t, n, e);
  });
}
function _u(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !r || !t || !e && r.length !== t.length ? !1 : t.every(function(n, i) {
    return r[i] === n;
  });
}
function Rv(r, t) {
  if (r === t)
    return !0;
  if (!r && t || r && !t || !r || !t || X(r) !== "object" || X(t) !== "object")
    return !1;
  var e = Object.keys(r), n = Object.keys(t), i = new Set([].concat(e, n));
  return H(i).every(function(a) {
    var o = r[a], s = t[a];
    return typeof o == "function" && typeof s == "function" ? !0 : o === s;
  });
}
function Mv(r) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && X(t.target) === "object" && r in t.target ? t.target[r] : t;
}
function Ko(r, t, e) {
  var n = r.length;
  if (t < 0 || t >= n || e < 0 || e >= n)
    return r;
  var i = r[t], a = t - e;
  return a > 0 ? [].concat(H(r.slice(0, e)), [i], H(r.slice(e, t)), H(r.slice(t + 1, n))) : a < 0 ? [].concat(H(r.slice(0, t)), H(r.slice(t + 1, e + 1)), [i], H(r.slice(e + 1, n))) : r;
}
var kv = ["name"], Je = [];
function Ai(r, t, e, n, i, a) {
  return typeof r == "function" ? r(t, e, "source" in a ? {
    source: a.source
  } : {}) : n !== i;
}
var Da = /* @__PURE__ */ function(r) {
  Qt(e, r);
  var t = Yt(e);
  function e(n) {
    var i;
    if (Ne(this, e), i = t.call(this, n), x(Z(i), "state", {
      resetCount: 0
    }), x(Z(i), "cancelRegisterFunc", null), x(Z(i), "mounted", !1), x(Z(i), "touched", !1), x(Z(i), "dirty", !1), x(Z(i), "validatePromise", void 0), x(Z(i), "prevValidating", void 0), x(Z(i), "errors", Je), x(Z(i), "warnings", Je), x(Z(i), "cancelRegister", function() {
      var u = i.props, c = u.preserve, l = u.isListField, f = u.name;
      i.cancelRegisterFunc && i.cancelRegisterFunc(l, c, we(f)), i.cancelRegisterFunc = null;
    }), x(Z(i), "getNamePath", function() {
      var u = i.props, c = u.name, l = u.fieldContext, f = l.prefixName, v = f === void 0 ? [] : f;
      return c !== void 0 ? [].concat(H(v), H(c)) : [];
    }), x(Z(i), "getRules", function() {
      var u = i.props, c = u.rules, l = c === void 0 ? [] : c, f = u.fieldContext;
      return l.map(function(v) {
        return typeof v == "function" ? v(f) : v;
      });
    }), x(Z(i), "refresh", function() {
      i.mounted && i.setState(function(u) {
        var c = u.resetCount;
        return {
          resetCount: c + 1
        };
      });
    }), x(Z(i), "metaCache", null), x(Z(i), "triggerMetaEvent", function(u) {
      var c = i.props.onMetaChange;
      if (c) {
        var l = O(O({}, i.getMeta()), {}, {
          destroy: u
        });
        eo(i.metaCache, l) || c(l), i.metaCache = l;
      } else
        i.metaCache = null;
    }), x(Z(i), "onStoreChange", function(u, c, l) {
      var f = i.props, v = f.shouldUpdate, m = f.dependencies, g = m === void 0 ? [] : m, h = f.onReset, d = l.store, b = i.getNamePath(), y = i.getValue(u), S = i.getValue(d), P = c && gr(c, b);
      switch (l.type === "valueUpdate" && l.source === "external" && !eo(y, S) && (i.touched = !0, i.dirty = !0, i.validatePromise = null, i.errors = Je, i.warnings = Je, i.triggerMetaEvent()), l.type) {
        case "reset":
          if (!c || P) {
            i.touched = !1, i.dirty = !1, i.validatePromise = void 0, i.errors = Je, i.warnings = Je, i.triggerMetaEvent(), h?.(), i.refresh();
            return;
          }
          break;
        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case "remove": {
          if (v && Ai(v, u, d, y, S, l)) {
            i.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var w = l.data;
          if (P) {
            "touched" in w && (i.touched = w.touched), "validating" in w && !("originRCField" in w) && (i.validatePromise = w.validating ? Promise.resolve([]) : null), "errors" in w && (i.errors = w.errors || Je), "warnings" in w && (i.warnings = w.warnings || Je), i.dirty = !0, i.triggerMetaEvent(), i.reRender();
            return;
          } else if ("value" in w && gr(c, b, !0)) {
            i.reRender();
            return;
          }
          if (v && !b.length && Ai(v, u, d, y, S, l)) {
            i.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var E = g.map(we);
          if (E.some(function(C) {
            return gr(l.relatedFields, C);
          })) {
            i.reRender();
            return;
          }
          break;
        }
        default:
          if (P || (!g.length || b.length || v) && Ai(v, u, d, y, S, l)) {
            i.reRender();
            return;
          }
          break;
      }
      v === !0 && i.reRender();
    }), x(Z(i), "validateRules", function(u) {
      var c = i.getNamePath(), l = i.getValue(), f = u || {}, v = f.triggerName, m = f.validateOnly, g = m === void 0 ? !1 : m, h = Promise.resolve().then(/* @__PURE__ */ Kr(/* @__PURE__ */ it().mark(function d() {
        var b, y, S, P, w, E, C;
        return it().wrap(function(F) {
          for (; ; ) switch (F.prev = F.next) {
            case 0:
              if (i.mounted) {
                F.next = 2;
                break;
              }
              return F.abrupt("return", []);
            case 2:
              if (b = i.props, y = b.validateFirst, S = y === void 0 ? !1 : y, P = b.messageVariables, w = b.validateDebounce, E = i.getRules(), v && (E = E.filter(function(T) {
                return T;
              }).filter(function(T) {
                var M = T.validateTrigger;
                if (!M)
                  return !0;
                var k = fa(M);
                return k.includes(v);
              })), !(w && v)) {
                F.next = 10;
                break;
              }
              return F.next = 8, new Promise(function(T) {
                setTimeout(T, w);
              });
            case 8:
              if (i.validatePromise === h) {
                F.next = 10;
                break;
              }
              return F.abrupt("return", []);
            case 10:
              return C = Ov(c, l, E, u, S, P), C.catch(function(T) {
                return T;
              }).then(function() {
                var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Je;
                if (i.validatePromise === h) {
                  var M;
                  i.validatePromise = null;
                  var k = [], A = [];
                  (M = T.forEach) === null || M === void 0 || M.call(T, function(R) {
                    var V = R.rule.warningOnly, N = R.errors, I = N === void 0 ? Je : N;
                    V ? A.push.apply(A, H(I)) : k.push.apply(k, H(I));
                  }), i.errors = k, i.warnings = A, i.triggerMetaEvent(), i.reRender();
                }
              }), F.abrupt("return", C);
            case 13:
            case "end":
              return F.stop();
          }
        }, d);
      })));
      return g || (i.validatePromise = h, i.dirty = !0, i.errors = Je, i.warnings = Je, i.triggerMetaEvent(), i.reRender()), h;
    }), x(Z(i), "isFieldValidating", function() {
      return !!i.validatePromise;
    }), x(Z(i), "isFieldTouched", function() {
      return i.touched;
    }), x(Z(i), "isFieldDirty", function() {
      if (i.dirty || i.props.initialValue !== void 0)
        return !0;
      var u = i.props.fieldContext, c = u.getInternalHooks(Ut), l = c.getInitialValue;
      return l(i.getNamePath()) !== void 0;
    }), x(Z(i), "getErrors", function() {
      return i.errors;
    }), x(Z(i), "getWarnings", function() {
      return i.warnings;
    }), x(Z(i), "isListField", function() {
      return i.props.isListField;
    }), x(Z(i), "isList", function() {
      return i.props.isList;
    }), x(Z(i), "isPreserve", function() {
      return i.props.preserve;
    }), x(Z(i), "getMeta", function() {
      i.prevValidating = i.isFieldValidating();
      var u = {
        touched: i.isFieldTouched(),
        validating: i.prevValidating,
        errors: i.errors,
        warnings: i.warnings,
        name: i.getNamePath(),
        validated: i.validatePromise === null
      };
      return u;
    }), x(Z(i), "getOnlyChild", function(u) {
      if (typeof u == "function") {
        var c = i.getMeta();
        return O(O({}, i.getOnlyChild(u(i.getControlled(), c, i.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var l = Ln(u);
      return l.length !== 1 || !/* @__PURE__ */ p.isValidElement(l[0]) ? {
        child: l,
        isFunction: !1
      } : {
        child: l[0],
        isFunction: !1
      };
    }), x(Z(i), "getValue", function(u) {
      var c = i.props.fieldContext.getFieldsValue, l = i.getNamePath();
      return yt(u || c(!0), l);
    }), x(Z(i), "getControlled", function() {
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = i.props, l = c.name, f = c.trigger, v = c.validateTrigger, m = c.getValueFromEvent, g = c.normalize, h = c.valuePropName, d = c.getValueProps, b = c.fieldContext, y = v !== void 0 ? v : b.validateTrigger, S = i.getNamePath(), P = b.getInternalHooks, w = b.getFieldsValue, E = P(Ut), C = E.dispatch, _ = i.getValue(), F = d || function(R) {
        return x({}, h, R);
      }, T = u[f], M = l !== void 0 ? F(_) : {};
      process.env.NODE_ENV !== "production" && M && Object.keys(M).forEach(function(R) {
        he(typeof M[R] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(R, ")"));
      });
      var k = O(O({}, u), M);
      k[f] = function() {
        i.touched = !0, i.dirty = !0, i.triggerMetaEvent();
        for (var R, V = arguments.length, N = new Array(V), I = 0; I < V; I++)
          N[I] = arguments[I];
        m ? R = m.apply(void 0, N) : R = Mv.apply(void 0, [h].concat(N)), g && (R = g(R, _, w(!0))), R !== _ && C({
          type: "updateValue",
          namePath: S,
          value: R
        }), T && T.apply(void 0, N);
      };
      var A = fa(y || []);
      return A.forEach(function(R) {
        var V = k[R];
        k[R] = function() {
          V && V.apply(void 0, arguments);
          var N = i.props.rules;
          N && N.length && C({
            type: "validateField",
            namePath: S,
            triggerName: R
          });
        };
      }), k;
    }), n.fieldContext) {
      var a = n.fieldContext.getInternalHooks, o = a(Ut), s = o.initEntityValue;
      s(Z(i));
    }
    return i;
  }
  return Ve(e, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.shouldUpdate, o = i.fieldContext;
      if (this.mounted = !0, o) {
        var s = o.getInternalHooks, u = s(Ut), c = u.registerField;
        this.cancelRegisterFunc = c(this);
      }
      a === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var i = this.state.resetCount, a = this.props.children, o = this.getOnlyChild(a), s = o.child, u = o.isFunction, c;
      return u ? c = s : /* @__PURE__ */ p.isValidElement(s) ? c = /* @__PURE__ */ p.cloneElement(s, this.getControlled(s.props)) : (he(!s, "`children` of Field is not validate ReactElement."), c = s), /* @__PURE__ */ p.createElement(p.Fragment, {
        key: i
      }, c);
    }
  }]), e;
}(p.Component);
x(Da, "contextType", Sr);
x(Da, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Ou(r) {
  var t, e = r.name, n = Kt(r, kv), i = p.useContext(Sr), a = p.useContext(Un), o = e !== void 0 ? we(e) : void 0, s = (t = n.isListField) !== null && t !== void 0 ? t : !!a, u = "keep";
  return s || (u = "_".concat((o || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && s && o.length <= 1 && he(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ p.createElement(Da, bt({
    key: u,
    name: o,
    isListField: s
  }, n, {
    fieldContext: i
  }));
}
function Av(r) {
  var t = r.name, e = r.initialValue, n = r.children, i = r.rules, a = r.validateTrigger, o = r.isListField, s = p.useContext(Sr), u = p.useContext(Un), c = p.useRef({
    keys: [],
    id: 0
  }), l = c.current, f = p.useMemo(function() {
    var h = we(s.prefixName) || [];
    return [].concat(H(h), H(we(t)));
  }, [s.prefixName, t]), v = p.useMemo(function() {
    return O(O({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), m = p.useMemo(function() {
    return {
      getKey: function(d) {
        var b = f.length, y = d[b];
        return [l.keys[y], d.slice(b + 1)];
      }
    };
  }, [f]);
  if (typeof n != "function")
    return he(!1, "Form.List only accepts function as children."), null;
  var g = function(d, b, y) {
    var S = y.source;
    return S === "internal" ? !1 : d !== b;
  };
  return /* @__PURE__ */ p.createElement(Un.Provider, {
    value: m
  }, /* @__PURE__ */ p.createElement(Sr.Provider, {
    value: v
  }, /* @__PURE__ */ p.createElement(Ou, {
    name: [],
    shouldUpdate: g,
    rules: i,
    validateTrigger: a,
    initialValue: e,
    isList: !0,
    isListField: o ?? !!u
  }, function(h, d) {
    var b = h.value, y = b === void 0 ? [] : b, S = h.onChange, P = s.getFieldValue, w = function() {
      var F = P(f || []);
      return F || [];
    }, E = {
      add: function(F, T) {
        var M = w();
        T >= 0 && T <= M.length ? (l.keys = [].concat(H(l.keys.slice(0, T)), [l.id], H(l.keys.slice(T))), S([].concat(H(M.slice(0, T)), [F], H(M.slice(T))))) : (process.env.NODE_ENV !== "production" && (T < 0 || T > M.length) && he(!1, "The second parameter of the add function should be a valid positive number."), l.keys = [].concat(H(l.keys), [l.id]), S([].concat(H(M), [F]))), l.id += 1;
      },
      remove: function(F) {
        var T = w(), M = new Set(Array.isArray(F) ? F : [F]);
        M.size <= 0 || (l.keys = l.keys.filter(function(k, A) {
          return !M.has(A);
        }), S(T.filter(function(k, A) {
          return !M.has(A);
        })));
      },
      move: function(F, T) {
        if (F !== T) {
          var M = w();
          F < 0 || F >= M.length || T < 0 || T >= M.length || (l.keys = Ko(l.keys, F, T), S(Ko(M, F, T)));
        }
      }
    }, C = y || [];
    return Array.isArray(C) || (C = [], process.env.NODE_ENV !== "production" && he(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), n(C.map(function(_, F) {
      var T = l.keys[F];
      return T === void 0 && (l.keys[F] = l.id, T = l.keys[F], l.id += 1), {
        name: F,
        key: T,
        isListField: !0
      };
    }), E, d);
  })));
}
function Nv(r) {
  var t = !1, e = r.length, n = [];
  return r.length ? new Promise(function(i, a) {
    r.forEach(function(o, s) {
      o.catch(function(u) {
        return t = !0, u;
      }).then(function(u) {
        e -= 1, n[s] = u, !(e > 0) && (t && a(n), i(n));
      });
    });
  }) : Promise.resolve([]);
}
var Fu = "__@field_split__";
function Ni(r) {
  return r.map(function(t) {
    return "".concat(X(t), ":").concat(t);
  }).join(Fu);
}
var sr = /* @__PURE__ */ function() {
  function r() {
    Ne(this, r), x(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Ve(r, [{
    key: "set",
    value: function(e, n) {
      this.kvs.set(Ni(e), n);
    }
  }, {
    key: "get",
    value: function(e) {
      return this.kvs.get(Ni(e));
    }
  }, {
    key: "update",
    value: function(e, n) {
      var i = this.get(e), a = n(i);
      a ? this.set(e, a) : this.delete(e);
    }
  }, {
    key: "delete",
    value: function(e) {
      this.kvs.delete(Ni(e));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(e) {
      return H(this.kvs.entries()).map(function(n) {
        var i = L(n, 2), a = i[0], o = i[1], s = a.split(Fu);
        return e({
          key: s.map(function(u) {
            var c = u.match(/^([^:]*):(.*)$/), l = L(c, 3), f = l[1], v = l[2];
            return f === "number" ? Number(v) : v;
          }),
          value: o
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var e = {};
      return this.map(function(n) {
        var i = n.key, a = n.value;
        return e[i.join(".")] = a, null;
      }), e;
    }
  }]), r;
}(), Vv = ["name"], $v = /* @__PURE__ */ Ve(function r(t) {
  var e = this;
  Ne(this, r), x(this, "formHooked", !1), x(this, "forceRootUpdate", void 0), x(this, "subscribable", !0), x(this, "store", {}), x(this, "fieldEntities", []), x(this, "initialValues", {}), x(this, "callbacks", {}), x(this, "validateMessages", null), x(this, "preserve", null), x(this, "lastValidatePromise", null), x(this, "getForm", function() {
    return {
      getFieldValue: e.getFieldValue,
      getFieldsValue: e.getFieldsValue,
      getFieldError: e.getFieldError,
      getFieldWarning: e.getFieldWarning,
      getFieldsError: e.getFieldsError,
      isFieldsTouched: e.isFieldsTouched,
      isFieldTouched: e.isFieldTouched,
      isFieldValidating: e.isFieldValidating,
      isFieldsValidating: e.isFieldsValidating,
      resetFields: e.resetFields,
      setFields: e.setFields,
      setFieldValue: e.setFieldValue,
      setFieldsValue: e.setFieldsValue,
      validateFields: e.validateFields,
      submit: e.submit,
      _init: !0,
      getInternalHooks: e.getInternalHooks
    };
  }), x(this, "getInternalHooks", function(n) {
    return n === Ut ? (e.formHooked = !0, {
      dispatch: e.dispatch,
      initEntityValue: e.initEntityValue,
      registerField: e.registerField,
      useSubscribe: e.useSubscribe,
      setInitialValues: e.setInitialValues,
      destroyForm: e.destroyForm,
      setCallbacks: e.setCallbacks,
      setValidateMessages: e.setValidateMessages,
      getFields: e.getFields,
      setPreserve: e.setPreserve,
      getInitialValue: e.getInitialValue,
      registerWatch: e.registerWatch
    }) : (he(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), x(this, "useSubscribe", function(n) {
    e.subscribable = n;
  }), x(this, "prevWithoutPreserves", null), x(this, "setInitialValues", function(n, i) {
    if (e.initialValues = n || {}, i) {
      var a, o = Vr(n, e.store);
      (a = e.prevWithoutPreserves) === null || a === void 0 || a.map(function(s) {
        var u = s.key;
        o = ft(o, u, yt(n, u));
      }), e.prevWithoutPreserves = null, e.updateStore(o);
    }
  }), x(this, "destroyForm", function(n) {
    if (n)
      e.updateStore({});
    else {
      var i = new sr();
      e.getFieldEntities(!0).forEach(function(a) {
        e.isMergedPreserve(a.isPreserve()) || i.set(a.getNamePath(), !0);
      }), e.prevWithoutPreserves = i;
    }
  }), x(this, "getInitialValue", function(n) {
    var i = yt(e.initialValues, n);
    return n.length ? Vr(i) : i;
  }), x(this, "setCallbacks", function(n) {
    e.callbacks = n;
  }), x(this, "setValidateMessages", function(n) {
    e.validateMessages = n;
  }), x(this, "setPreserve", function(n) {
    e.preserve = n;
  }), x(this, "watchList", []), x(this, "registerWatch", function(n) {
    return e.watchList.push(n), function() {
      e.watchList = e.watchList.filter(function(i) {
        return i !== n;
      });
    };
  }), x(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (e.watchList.length) {
      var i = e.getFieldsValue(), a = e.getFieldsValue(!0);
      e.watchList.forEach(function(o) {
        o(i, a, n);
      });
    }
  }), x(this, "timeoutId", null), x(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !e.timeoutId && typeof window < "u" && (e.timeoutId = setTimeout(function() {
      e.timeoutId = null, e.formHooked || he(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), x(this, "updateStore", function(n) {
    e.store = n;
  }), x(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? e.fieldEntities.filter(function(i) {
      return i.getNamePath().length;
    }) : e.fieldEntities;
  }), x(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = new sr();
    return e.getFieldEntities(n).forEach(function(a) {
      var o = a.getNamePath();
      i.set(o, a);
    }), i;
  }), x(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return e.getFieldEntities(!0);
    var i = e.getFieldsMap(!0);
    return n.map(function(a) {
      var o = we(a);
      return i.get(o) || {
        INVALIDATE_NAME_PATH: we(a)
      };
    });
  }), x(this, "getFieldsValue", function(n, i) {
    e.warningUnhooked();
    var a, o, s;
    if (n === !0 || Array.isArray(n) ? (a = n, o = i) : n && X(n) === "object" && (s = n.strict, o = n.filter), a === !0 && !o)
      return e.store;
    var u = e.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), c = [];
    return u.forEach(function(l) {
      var f, v, m = "INVALIDATE_NAME_PATH" in l ? l.INVALIDATE_NAME_PATH : l.getNamePath();
      if (s) {
        var g, h;
        if ((g = (h = l).isList) !== null && g !== void 0 && g.call(h))
          return;
      } else if (!a && (f = (v = l).isListField) !== null && f !== void 0 && f.call(v))
        return;
      if (!o)
        c.push(m);
      else {
        var d = "getMeta" in l ? l.getMeta() : null;
        o(d) && c.push(m);
      }
    }), Xo(e.store, c.map(we));
  }), x(this, "getFieldValue", function(n) {
    e.warningUnhooked();
    var i = we(n);
    return yt(e.store, i);
  }), x(this, "getFieldsError", function(n) {
    e.warningUnhooked();
    var i = e.getFieldEntitiesForNamePathList(n);
    return i.map(function(a, o) {
      return a && !("INVALIDATE_NAME_PATH" in a) ? {
        name: a.getNamePath(),
        errors: a.getErrors(),
        warnings: a.getWarnings()
      } : {
        name: we(n[o]),
        errors: [],
        warnings: []
      };
    });
  }), x(this, "getFieldError", function(n) {
    e.warningUnhooked();
    var i = we(n), a = e.getFieldsError([i])[0];
    return a.errors;
  }), x(this, "getFieldWarning", function(n) {
    e.warningUnhooked();
    var i = we(n), a = e.getFieldsError([i])[0];
    return a.warnings;
  }), x(this, "isFieldsTouched", function() {
    e.warningUnhooked();
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i[0], s = i[1], u, c = !1;
    i.length === 0 ? u = null : i.length === 1 ? Array.isArray(o) ? (u = o.map(we), c = !1) : (u = null, c = o) : (u = o.map(we), c = s);
    var l = e.getFieldEntities(!0), f = function(d) {
      return d.isFieldTouched();
    };
    if (!u)
      return c ? l.every(function(h) {
        return f(h) || h.isList();
      }) : l.some(f);
    var v = new sr();
    u.forEach(function(h) {
      v.set(h, []);
    }), l.forEach(function(h) {
      var d = h.getNamePath();
      u.forEach(function(b) {
        b.every(function(y, S) {
          return d[S] === y;
        }) && v.update(b, function(y) {
          return [].concat(H(y), [h]);
        });
      });
    });
    var m = function(d) {
      return d.some(f);
    }, g = v.map(function(h) {
      var d = h.value;
      return d;
    });
    return c ? g.every(m) : g.some(m);
  }), x(this, "isFieldTouched", function(n) {
    return e.warningUnhooked(), e.isFieldsTouched([n]);
  }), x(this, "isFieldsValidating", function(n) {
    e.warningUnhooked();
    var i = e.getFieldEntities();
    if (!n)
      return i.some(function(o) {
        return o.isFieldValidating();
      });
    var a = n.map(we);
    return i.some(function(o) {
      var s = o.getNamePath();
      return gr(a, s) && o.isFieldValidating();
    });
  }), x(this, "isFieldValidating", function(n) {
    return e.warningUnhooked(), e.isFieldsValidating([n]);
  }), x(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = new sr(), a = e.getFieldEntities(!0);
    a.forEach(function(u) {
      var c = u.props.initialValue, l = u.getNamePath();
      if (c !== void 0) {
        var f = i.get(l) || /* @__PURE__ */ new Set();
        f.add({
          entity: u,
          value: c
        }), i.set(l, f);
      }
    });
    var o = function(c) {
      c.forEach(function(l) {
        var f = l.props.initialValue;
        if (f !== void 0) {
          var v = l.getNamePath(), m = e.getInitialValue(v);
          if (m !== void 0)
            he(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var g = i.get(v);
            if (g && g.size > 1)
              he(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (g) {
              var h = e.getFieldValue(v), d = l.isListField();
              !d && (!n.skipExist || h === void 0) && e.updateStore(ft(e.store, v, H(g)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(u) {
      var c = i.get(u);
      if (c) {
        var l;
        (l = s).push.apply(l, H(H(c).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = a, o(s);
  }), x(this, "resetFields", function(n) {
    e.warningUnhooked();
    var i = e.store;
    if (!n) {
      e.updateStore(Vr(e.initialValues)), e.resetWithFieldInitialValue(), e.notifyObservers(i, null, {
        type: "reset"
      }), e.notifyWatch();
      return;
    }
    var a = n.map(we);
    a.forEach(function(o) {
      var s = e.getInitialValue(o);
      e.updateStore(ft(e.store, o, s));
    }), e.resetWithFieldInitialValue({
      namePathList: a
    }), e.notifyObservers(i, a, {
      type: "reset"
    }), e.notifyWatch(a);
  }), x(this, "setFields", function(n) {
    e.warningUnhooked();
    var i = e.store, a = [];
    n.forEach(function(o) {
      var s = o.name, u = Kt(o, Vv), c = we(s);
      a.push(c), "value" in u && e.updateStore(ft(e.store, c, u.value)), e.notifyObservers(i, [c], {
        type: "setField",
        data: o
      });
    }), e.notifyWatch(a);
  }), x(this, "getFields", function() {
    var n = e.getFieldEntities(!0), i = n.map(function(a) {
      var o = a.getNamePath(), s = a.getMeta(), u = O(O({}, s), {}, {
        name: o,
        value: e.getFieldValue(o)
      });
      return Object.defineProperty(u, "originRCField", {
        value: !0
      }), u;
    });
    return i;
  }), x(this, "initEntityValue", function(n) {
    var i = n.props.initialValue;
    if (i !== void 0) {
      var a = n.getNamePath(), o = yt(e.store, a);
      o === void 0 && e.updateStore(ft(e.store, a, i));
    }
  }), x(this, "isMergedPreserve", function(n) {
    var i = n !== void 0 ? n : e.preserve;
    return i ?? !0;
  }), x(this, "registerField", function(n) {
    e.fieldEntities.push(n);
    var i = n.getNamePath();
    if (e.notifyWatch([i]), n.props.initialValue !== void 0) {
      var a = e.store;
      e.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), e.notifyObservers(a, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(o, s) {
      var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (e.fieldEntities = e.fieldEntities.filter(function(f) {
        return f !== n;
      }), !e.isMergedPreserve(s) && (!o || u.length > 1)) {
        var c = o ? void 0 : e.getInitialValue(i);
        if (i.length && e.getFieldValue(i) !== c && e.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !_u(f.getNamePath(), i)
          );
        })) {
          var l = e.store;
          e.updateStore(ft(l, i, c, !0)), e.notifyObservers(l, [i], {
            type: "remove"
          }), e.triggerDependenciesUpdate(l, i);
        }
      }
      e.notifyWatch([i]);
    };
  }), x(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var i = n.namePath, a = n.value;
        e.updateValue(i, a);
        break;
      }
      case "validateField": {
        var o = n.namePath, s = n.triggerName;
        e.validateFields([o], {
          triggerName: s
        });
        break;
      }
    }
  }), x(this, "notifyObservers", function(n, i, a) {
    if (e.subscribable) {
      var o = O(O({}, a), {}, {
        store: e.getFieldsValue(!0)
      });
      e.getFieldEntities().forEach(function(s) {
        var u = s.onStoreChange;
        u(n, i, o);
      });
    } else
      e.forceRootUpdate();
  }), x(this, "triggerDependenciesUpdate", function(n, i) {
    var a = e.getDependencyChildrenFields(i);
    return a.length && e.validateFields(a), e.notifyObservers(n, a, {
      type: "dependenciesUpdate",
      relatedFields: [i].concat(H(a))
    }), a;
  }), x(this, "updateValue", function(n, i) {
    var a = we(n), o = e.store;
    e.updateStore(ft(e.store, a, i)), e.notifyObservers(o, [a], {
      type: "valueUpdate",
      source: "internal"
    }), e.notifyWatch([a]);
    var s = e.triggerDependenciesUpdate(o, a), u = e.callbacks.onValuesChange;
    if (u) {
      var c = Xo(e.store, [a]);
      u(c, e.getFieldsValue());
    }
    e.triggerOnFieldsChange([a].concat(H(s)));
  }), x(this, "setFieldsValue", function(n) {
    e.warningUnhooked();
    var i = e.store;
    if (n) {
      var a = Vr(e.store, n);
      e.updateStore(a);
    }
    e.notifyObservers(i, null, {
      type: "valueUpdate",
      source: "external"
    }), e.notifyWatch();
  }), x(this, "setFieldValue", function(n, i) {
    e.setFields([{
      name: n,
      value: i,
      errors: [],
      warnings: []
    }]);
  }), x(this, "getDependencyChildrenFields", function(n) {
    var i = /* @__PURE__ */ new Set(), a = [], o = new sr();
    e.getFieldEntities().forEach(function(u) {
      var c = u.props.dependencies;
      (c || []).forEach(function(l) {
        var f = we(l);
        o.update(f, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(u), v;
        });
      });
    });
    var s = function u(c) {
      var l = o.get(c) || /* @__PURE__ */ new Set();
      l.forEach(function(f) {
        if (!i.has(f)) {
          i.add(f);
          var v = f.getNamePath();
          f.isFieldDirty() && v.length && (a.push(v), u(v));
        }
      });
    };
    return s(n), a;
  }), x(this, "triggerOnFieldsChange", function(n, i) {
    var a = e.callbacks.onFieldsChange;
    if (a) {
      var o = e.getFields();
      if (i) {
        var s = new sr();
        i.forEach(function(c) {
          var l = c.name, f = c.errors;
          s.set(l, f);
        }), o.forEach(function(c) {
          c.errors = s.get(c.name) || c.errors;
        });
      }
      var u = o.filter(function(c) {
        var l = c.name;
        return gr(n, l);
      });
      u.length && a(u, o);
    }
  }), x(this, "validateFields", function(n, i) {
    e.warningUnhooked();
    var a, o;
    Array.isArray(n) || typeof n == "string" || typeof i == "string" ? (a = n, o = i) : o = n;
    var s = !!a, u = s ? a.map(we) : [], c = [], l = String(Date.now()), f = /* @__PURE__ */ new Set(), v = o || {}, m = v.recursive, g = v.dirty;
    e.getFieldEntities(!0).forEach(function(y) {
      if (s || u.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length) && !(g && !y.isFieldDirty())) {
        var S = y.getNamePath();
        if (f.add(S.join(l)), !s || gr(u, S, m)) {
          var P = y.validateRules(O({
            validateMessages: O(O({}, Pu), e.validateMessages)
          }, o));
          c.push(P.then(function() {
            return {
              name: S,
              errors: [],
              warnings: []
            };
          }).catch(function(w) {
            var E, C = [], _ = [];
            return (E = w.forEach) === null || E === void 0 || E.call(w, function(F) {
              var T = F.rule.warningOnly, M = F.errors;
              T ? _.push.apply(_, H(M)) : C.push.apply(C, H(M));
            }), C.length ? Promise.reject({
              name: S,
              errors: C,
              warnings: _
            }) : {
              name: S,
              errors: C,
              warnings: _
            };
          }));
        }
      }
    });
    var h = Nv(c);
    e.lastValidatePromise = h, h.catch(function(y) {
      return y;
    }).then(function(y) {
      var S = y.map(function(P) {
        var w = P.name;
        return w;
      });
      e.notifyObservers(e.store, S, {
        type: "validateFinish"
      }), e.triggerOnFieldsChange(S, y);
    });
    var d = h.then(function() {
      return e.lastValidatePromise === h ? Promise.resolve(e.getFieldsValue(u)) : Promise.reject([]);
    }).catch(function(y) {
      var S = y.filter(function(P) {
        return P && P.errors.length;
      });
      return Promise.reject({
        values: e.getFieldsValue(u),
        errorFields: S,
        outOfDate: e.lastValidatePromise !== h
      });
    });
    d.catch(function(y) {
      return y;
    });
    var b = u.filter(function(y) {
      return f.has(y.join(l));
    });
    return e.triggerOnFieldsChange(b), d;
  }), x(this, "submit", function() {
    e.warningUnhooked(), e.validateFields().then(function(n) {
      var i = e.callbacks.onFinish;
      if (i)
        try {
          i(n);
        } catch (a) {
          console.error(a);
        }
    }).catch(function(n) {
      var i = e.callbacks.onFinishFailed;
      i && i(n);
    });
  }), this.forceRootUpdate = t;
});
function Tu(r) {
  var t = p.useRef(), e = p.useState({}), n = L(e, 2), i = n[1];
  if (!t.current)
    if (r)
      t.current = r;
    else {
      var a = function() {
        i({});
      }, o = new $v(a);
      t.current = o.getForm();
    }
  return [t.current];
}
var wa = /* @__PURE__ */ p.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Iv = function(t) {
  var e = t.validateMessages, n = t.onFormChange, i = t.onFormFinish, a = t.children, o = p.useContext(wa), s = p.useRef({});
  return /* @__PURE__ */ p.createElement(wa.Provider, {
    value: O(O({}, o), {}, {
      validateMessages: O(O({}, o.validateMessages), e),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(c, l) {
        n && n(c, {
          changedFields: l,
          forms: s.current
        }), o.triggerFormChange(c, l);
      },
      triggerFormFinish: function(c, l) {
        i && i(c, {
          values: l,
          forms: s.current
        }), o.triggerFormFinish(c, l);
      },
      registerForm: function(c, l) {
        c && (s.current = O(O({}, s.current), {}, x({}, c, l))), o.registerForm(c, l);
      },
      unregisterForm: function(c) {
        var l = O({}, s.current);
        delete l[c], s.current = l, o.unregisterForm(c);
      }
    })
  }, a);
}, Lv = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], jv = function(t, e) {
  var n = t.name, i = t.initialValues, a = t.fields, o = t.form, s = t.preserve, u = t.children, c = t.component, l = c === void 0 ? "form" : c, f = t.validateMessages, v = t.validateTrigger, m = v === void 0 ? "onChange" : v, g = t.onValuesChange, h = t.onFieldsChange, d = t.onFinish, b = t.onFinishFailed, y = t.clearOnDestroy, S = Kt(t, Lv), P = p.useRef(null), w = p.useContext(wa), E = Tu(o), C = L(E, 1), _ = C[0], F = _.getInternalHooks(Ut), T = F.useSubscribe, M = F.setInitialValues, k = F.setCallbacks, A = F.setValidateMessages, R = F.setPreserve, V = F.destroyForm;
  p.useImperativeHandle(e, function() {
    return O(O({}, _), {}, {
      nativeElement: P.current
    });
  }), p.useEffect(function() {
    return w.registerForm(n, _), function() {
      w.unregisterForm(n);
    };
  }, [w, _, n]), A(O(O({}, w.validateMessages), f)), k({
    onValuesChange: g,
    onFieldsChange: function(K) {
      if (w.triggerFormChange(n, K), h) {
        for (var Y = arguments.length, ie = new Array(Y > 1 ? Y - 1 : 0), ae = 1; ae < Y; ae++)
          ie[ae - 1] = arguments[ae];
        h.apply(void 0, [K].concat(ie));
      }
    },
    onFinish: function(K) {
      w.triggerFormFinish(n, K), d && d(K);
    },
    onFinishFailed: b
  }), R(s);
  var N = p.useRef(null);
  M(i, !N.current), N.current || (N.current = !0), p.useEffect(
    function() {
      return function() {
        return V(y);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var I, j = typeof u == "function";
  if (j) {
    var B = _.getFieldsValue(!0);
    I = u(B, _);
  } else
    I = u;
  T(!j);
  var U = p.useRef();
  p.useEffect(function() {
    Rv(U.current || [], a || []) || _.setFields(a || []), U.current = a;
  }, [a, _]);
  var q = p.useMemo(function() {
    return O(O({}, _), {}, {
      validateTrigger: m
    });
  }, [_, m]), z = /* @__PURE__ */ p.createElement(Un.Provider, {
    value: null
  }, /* @__PURE__ */ p.createElement(Sr.Provider, {
    value: q
  }, I));
  return l === !1 ? z : /* @__PURE__ */ p.createElement(l, bt({}, S, {
    ref: P,
    onSubmit: function(K) {
      K.preventDefault(), K.stopPropagation(), _.submit();
    },
    onReset: function(K) {
      var Y;
      K.preventDefault(), _.resetFields(), (Y = S.onReset) === null || Y === void 0 || Y.call(S, K);
    }
  }), z);
};
function Zo(r) {
  try {
    return JSON.stringify(r);
  } catch {
    return Math.random();
  }
}
var Dv = process.env.NODE_ENV !== "production" ? function(r) {
  var t = r.join("__RC_FIELD_FORM_SPLIT__"), e = rt(t);
  he(e.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function zv() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  var n = t[0], i = t[1], a = i === void 0 ? {} : i, o = Kd(a) ? {
    form: a
  } : a, s = o.form, u = as(), c = L(u, 2), l = c[0], f = c[1], v = os(function() {
    return Zo(l);
  }, [l]), m = rt(v);
  m.current = v;
  var g = jr(Sr), h = s || g, d = h && h._init;
  process.env.NODE_ENV !== "production" && he(t.length === 2 ? s ? d : !0 : d, "useWatch requires a form instance since it can not auto detect from context.");
  var b = we(n), y = rt(b);
  return y.current = b, Dv(b), vr(
    function() {
      if (d) {
        var S = h.getFieldsValue, P = h.getInternalHooks, w = P(Ut), E = w.registerWatch, C = function(M, k) {
          var A = o.preserve ? k : M;
          return typeof n == "function" ? n(A) : yt(A, y.current);
        }, _ = E(function(T, M) {
          var k = C(T, M), A = Zo(k);
          m.current !== A && (m.current = A, f(k));
        }), F = C(S(), S(!0));
        return l !== F && f(F), _;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d]
  ), l;
}
var Hv = /* @__PURE__ */ p.forwardRef(jv), Qr = Hv;
Qr.FormProvider = Iv;
Qr.Field = Ou;
Qr.List = Av;
Qr.useForm = Tu;
Qr.useWatch = zv;
const Sa = /* @__PURE__ */ p.createContext({});
process.env.NODE_ENV !== "production" && (Sa.displayName = "FormItemInputContext");
const Wv = ({
  children: r,
  status: t,
  override: e
}) => {
  const n = p.useContext(Sa), i = p.useMemo(() => {
    const a = Object.assign({}, n);
    return e && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, e, n]);
  return /* @__PURE__ */ p.createElement(Sa.Provider, {
    value: i
  }, r);
}, Bv = (r) => {
  const {
    space: t,
    form: e,
    children: n
  } = r;
  if (n == null)
    return null;
  let i = n;
  return e && (i = /* @__PURE__ */ Ae.createElement(Wv, {
    override: !0,
    status: !0
  }, i)), t && (i = /* @__PURE__ */ Ae.createElement(xd, null, i)), i;
}, qv = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var r = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(r) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(r?.substr(0, 4));
};
function Uv(r) {
  var t = r.prefixCls, e = r.align, n = r.arrow, i = r.arrowPos, a = n || {}, o = a.className, s = a.content, u = i.x, c = u === void 0 ? 0 : u, l = i.y, f = l === void 0 ? 0 : l, v = p.useRef();
  if (!e || !e.points)
    return null;
  var m = {
    position: "absolute"
  };
  if (e.autoArrow !== !1) {
    var g = e.points[0], h = e.points[1], d = g[0], b = g[1], y = h[0], S = h[1];
    d === y || !["t", "b"].includes(d) ? m.top = f : d === "t" ? m.top = 0 : m.bottom = 0, b === S || !["l", "r"].includes(b) ? m.left = c : b === "l" ? m.left = 0 : m.right = 0;
  }
  return /* @__PURE__ */ p.createElement("div", {
    ref: v,
    className: je("".concat(t, "-arrow"), o),
    style: m
  }, s);
}
function Gv(r) {
  var t = r.prefixCls, e = r.open, n = r.zIndex, i = r.mask, a = r.motion;
  return i ? /* @__PURE__ */ p.createElement($a, bt({}, a, {
    motionAppear: !0,
    visible: e,
    removeOnLeave: !0
  }), function(o) {
    var s = o.className;
    return /* @__PURE__ */ p.createElement("div", {
      style: {
        zIndex: n
      },
      className: je("".concat(t, "-mask"), s)
    });
  }) : null;
}
var Ru = /* @__PURE__ */ p.memo(function(r) {
  var t = r.children;
  return t;
}, function(r, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (Ru.displayName = "PopupContent");
var Mu = /* @__PURE__ */ p.forwardRef(function(r, t) {
  var e = r.popup, n = r.className, i = r.prefixCls, a = r.style, o = r.target, s = r.onVisibleChanged, u = r.open, c = r.keepDom, l = r.fresh, f = r.onClick, v = r.mask, m = r.arrow, g = r.arrowPos, h = r.align, d = r.motion, b = r.maskMotion, y = r.forceRender, S = r.getPopupContainer, P = r.autoDestroy, w = r.portal, E = r.zIndex, C = r.onMouseEnter, _ = r.onMouseLeave, F = r.onPointerEnter, T = r.onPointerDownCapture, M = r.ready, k = r.offsetX, A = r.offsetY, R = r.offsetR, V = r.offsetB, N = r.onAlign, I = r.onPrepare, j = r.stretch, B = r.targetWidth, U = r.targetHeight, q = typeof e == "function" ? e() : e, z = u || c, G = S?.length > 0, K = p.useState(!S || !G), Y = L(K, 2), ie = Y[0], ae = Y[1];
  if (Le(function() {
    !ie && G && o && ae(!0);
  }, [ie, G, o]), !ie)
    return null;
  var Pe = "auto", ue = {
    left: "-1000vw",
    top: "-1000vh",
    right: Pe,
    bottom: Pe
  };
  if (M || !u) {
    var Te, Re = h.points, ge = h.dynamicInset || ((Te = h._experimental) === null || Te === void 0 ? void 0 : Te.dynamicInset), Ee = ge && Re[0][1] === "r", $ = ge && Re[0][0] === "b";
    Ee ? (ue.right = R, ue.left = Pe) : (ue.left = k, ue.right = Pe), $ ? (ue.bottom = V, ue.top = Pe) : (ue.top = A, ue.bottom = Pe);
  }
  var me = {};
  return j && (j.includes("height") && U ? me.height = U : j.includes("minHeight") && U && (me.minHeight = U), j.includes("width") && B ? me.width = B : j.includes("minWidth") && B && (me.minWidth = B)), u || (me.pointerEvents = "none"), /* @__PURE__ */ p.createElement(w, {
    open: y || z,
    getContainer: S && function() {
      return S(o);
    },
    autoDestroy: P
  }, /* @__PURE__ */ p.createElement(Gv, {
    prefixCls: i,
    open: u,
    zIndex: E,
    mask: v,
    motion: b
  }), /* @__PURE__ */ p.createElement(Kn, {
    onResize: N,
    disabled: !u
  }, function(ce) {
    return /* @__PURE__ */ p.createElement($a, bt({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: y,
      leavedClassName: "".concat(i, "-hidden")
    }, d, {
      onAppearPrepare: I,
      onEnterPrepare: I,
      visible: u,
      onVisibleChanged: function($e) {
        var pe;
        d == null || (pe = d.onVisibleChanged) === null || pe === void 0 || pe.call(d, $e), s($e);
      }
    }), function(Fe, $e) {
      var pe = Fe.className, He = Fe.style, re = je(i, pe, n);
      return /* @__PURE__ */ p.createElement("div", {
        ref: fs(ce, t, $e),
        className: re,
        style: O(O(O(O({
          "--arrow-x": "".concat(g.x || 0, "px"),
          "--arrow-y": "".concat(g.y || 0, "px")
        }, ue), me), He), {}, {
          boxSizing: "border-box",
          zIndex: E
        }, a),
        onMouseEnter: C,
        onMouseLeave: _,
        onPointerEnter: F,
        onClick: f,
        onPointerDownCapture: T
      }, m && /* @__PURE__ */ p.createElement(Uv, {
        prefixCls: i,
        arrow: m,
        arrowPos: g,
        align: h
      }), /* @__PURE__ */ p.createElement(Ru, {
        cache: !u && !l
      }, q));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Mu.displayName = "Popup");
var ku = /* @__PURE__ */ p.forwardRef(function(r, t) {
  var e = r.children, n = r.getTriggerDOMNode, i = Gn(e), a = p.useCallback(function(s) {
    xa(t, n ? n(s) : s);
  }, [n]), o = Pa(a, _a(e));
  return i ? /* @__PURE__ */ p.cloneElement(e, {
    ref: o
  }) : e;
});
process.env.NODE_ENV !== "production" && (ku.displayName = "TriggerWrapper");
var Qo = /* @__PURE__ */ p.createContext(null);
function Yo(r) {
  return r ? Array.isArray(r) ? r : [r] : [];
}
function Xv(r, t, e, n) {
  return p.useMemo(function() {
    var i = Yo(e ?? t), a = Yo(n ?? t), o = new Set(i), s = new Set(a);
    return r && (o.has("hover") && (o.delete("hover"), o.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [o, s];
  }, [r, t, e, n]);
}
function Kv() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = arguments.length > 2 ? arguments[2] : void 0;
  return e ? r[0] === t[0] : r[0] === t[0] && r[1] === t[1];
}
function Zv(r, t, e, n) {
  for (var i = e.points, a = Object.keys(r), o = 0; o < a.length; o += 1) {
    var s, u = a[o];
    if (Kv((s = r[u]) === null || s === void 0 ? void 0 : s.points, i, n))
      return "".concat(t, "-placement-").concat(u);
  }
  return "";
}
function Jo(r, t, e, n) {
  return t || (e ? {
    motionName: "".concat(r, "-").concat(e)
  } : n ? {
    motionName: n
  } : null);
}
function Yr(r) {
  return r.ownerDocument.defaultView;
}
function Ea(r) {
  for (var t = [], e = r?.parentElement, n = ["hidden", "scroll", "clip", "auto"]; e; ) {
    var i = Yr(e).getComputedStyle(e), a = i.overflowX, o = i.overflowY, s = i.overflow;
    [a, o, s].some(function(u) {
      return n.includes(u);
    }) && t.push(e), e = e.parentElement;
  }
  return t;
}
function Xr(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(r) ? t : r;
}
function Nr(r) {
  return Xr(parseFloat(r), 0);
}
function es(r, t) {
  var e = O({}, r);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var i = Yr(n).getComputedStyle(n), a = i.overflow, o = i.overflowClipMargin, s = i.borderTopWidth, u = i.borderBottomWidth, c = i.borderLeftWidth, l = i.borderRightWidth, f = n.getBoundingClientRect(), v = n.offsetHeight, m = n.clientHeight, g = n.offsetWidth, h = n.clientWidth, d = Nr(s), b = Nr(u), y = Nr(c), S = Nr(l), P = Xr(Math.round(f.width / g * 1e3) / 1e3), w = Xr(Math.round(f.height / v * 1e3) / 1e3), E = (g - h - y - S) * P, C = (v - m - d - b) * w, _ = d * w, F = b * w, T = y * P, M = S * P, k = 0, A = 0;
      if (a === "clip") {
        var R = Nr(o);
        k = R * P, A = R * w;
      }
      var V = f.x + T - k, N = f.y + _ - A, I = V + f.width + 2 * k - T - M - E, j = N + f.height + 2 * A - _ - F - C;
      e.left = Math.max(e.left, V), e.top = Math.max(e.top, N), e.right = Math.min(e.right, I), e.bottom = Math.min(e.bottom, j);
    }
  }), e;
}
function ts(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = "".concat(t), n = e.match(/^(.*)\%$/);
  return n ? r * (parseFloat(n[1]) / 100) : parseFloat(e);
}
function rs(r, t) {
  var e = t || [], n = L(e, 2), i = n[0], a = n[1];
  return [ts(r.width, i), ts(r.height, a)];
}
function ns() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [r[0], r[1]];
}
function ur(r, t) {
  var e = t[0], n = t[1], i, a;
  return e === "t" ? a = r.y : e === "b" ? a = r.y + r.height : a = r.y + r.height / 2, n === "l" ? i = r.x : n === "r" ? i = r.x + r.width : i = r.x + r.width / 2, {
    x: i,
    y: a
  };
}
function kt(r, t) {
  var e = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return r.map(function(n, i) {
    return i === t ? e[n] || "c" : n;
  }).join("");
}
function Qv(r, t, e, n, i, a, o) {
  var s = p.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: i[n] || {}
  }), u = L(s, 2), c = u[0], l = u[1], f = p.useRef(0), v = p.useMemo(function() {
    return t ? Ea(t) : [];
  }, [t]), m = p.useRef({}), g = function() {
    m.current = {};
  };
  r || g();
  var h = tt(function() {
    if (t && e && r) {
      let Qe = function(Rr, Et) {
        var Bt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ge, mn = z.x + Rr, pn = z.y + Et, pi = mn + $, yi = pn + Ee, D = Math.max(mn, Bt.left), W = Math.max(pn, Bt.top), fe = Math.min(pi, Bt.right), be = Math.min(yi, Bt.bottom);
        return Math.max(0, (fe - D) * (be - W));
      }, ir = function() {
        Ot = z.y + ve, Ft = Ot + Ee, Lt = z.x + se, St = Lt + $;
      };
      var y, S, P, w, E = t, C = E.ownerDocument, _ = Yr(E), F = _.getComputedStyle(E), T = F.position, M = E.style.left, k = E.style.top, A = E.style.right, R = E.style.bottom, V = E.style.overflow, N = O(O({}, i[n]), a), I = C.createElement("div");
      (y = E.parentElement) === null || y === void 0 || y.appendChild(I), I.style.left = "".concat(E.offsetLeft, "px"), I.style.top = "".concat(E.offsetTop, "px"), I.style.position = T, I.style.height = "".concat(E.offsetHeight, "px"), I.style.width = "".concat(E.offsetWidth, "px"), E.style.left = "0", E.style.top = "0", E.style.right = "auto", E.style.bottom = "auto", E.style.overflow = "hidden";
      var j;
      if (Array.isArray(e))
        j = {
          x: e[0],
          y: e[1],
          width: 0,
          height: 0
        };
      else {
        var B, U, q = e.getBoundingClientRect();
        q.x = (B = q.x) !== null && B !== void 0 ? B : q.left, q.y = (U = q.y) !== null && U !== void 0 ? U : q.top, j = {
          x: q.x,
          y: q.y,
          width: q.width,
          height: q.height
        };
      }
      var z = E.getBoundingClientRect(), G = _.getComputedStyle(E), K = G.height, Y = G.width;
      z.x = (S = z.x) !== null && S !== void 0 ? S : z.left, z.y = (P = z.y) !== null && P !== void 0 ? P : z.top;
      var ie = C.documentElement, ae = ie.clientWidth, Pe = ie.clientHeight, ue = ie.scrollWidth, Te = ie.scrollHeight, Re = ie.scrollTop, ge = ie.scrollLeft, Ee = z.height, $ = z.width, me = j.height, ce = j.width, Fe = {
        left: 0,
        top: 0,
        right: ae,
        bottom: Pe
      }, $e = {
        left: -ge,
        top: -Re,
        right: ue - ge,
        bottom: Te - Re
      }, pe = N.htmlRegion, He = "visible", re = "visibleFirst";
      pe !== "scroll" && pe !== re && (pe = He);
      var oe = pe === re, Me = es($e, v), J = es(Fe, v), Ge = pe === He ? J : Me, Ce = oe ? J : Ge;
      E.style.left = "auto", E.style.top = "auto", E.style.right = "0", E.style.bottom = "0";
      var Jt = E.getBoundingClientRect();
      E.style.left = M, E.style.top = k, E.style.right = A, E.style.bottom = R, E.style.overflow = V, (w = E.parentElement) === null || w === void 0 || w.removeChild(I);
      var ot = Xr(Math.round($ / parseFloat(Y) * 1e3) / 1e3), gt = Xr(Math.round(Ee / parseFloat(K) * 1e3) / 1e3);
      if (ot === 0 || gt === 0 || Dr(e) && !Ed(e))
        return;
      var Cr = N.offset, de = N.targetOffset, le = rs(z, Cr), st = L(le, 2), Xe = st[0], ut = st[1], er = rs(j, de), We = L(er, 2), _t = We[0], ri = We[1];
      j.x -= _t, j.y -= ri;
      var ni = N.points || [], Jr = L(ni, 2), ii = Jr[0], en = Jr[1], wt = ns(en), De = ns(ii), Ie = ur(j, wt), tn = ur(z, De), Ke = O({}, N), se = Ie.x - tn.x + Xe, ve = Ie.y - tn.y + ut, ct = Qe(se, ve), $t = Qe(se, ve, J), Ze = ur(j, ["t", "l"]), rn = ur(z, ["t", "l"]), xr = ur(j, ["b", "r"]), tr = ur(z, ["b", "r"]), It = N.overflow || {}, ai = It.adjustX, nn = It.adjustY, rr = It.shiftX, Pr = It.shiftY, an = function(Et) {
        return typeof Et == "boolean" ? Et : Et >= 0;
      }, Ot, Ft, Lt, St;
      ir();
      var on = an(nn), ze = De[0] === wt[0];
      if (on && De[0] === "t" && (Ft > Ce.bottom || m.current.bt)) {
        var jt = ve;
        ze ? jt -= Ee - me : jt = Ze.y - tr.y - ut;
        var sn = Qe(se, jt), oi = Qe(se, jt, J);
        // Of course use larger one
        sn > ct || sn === ct && (!oe || // Choose recommend one
        oi >= $t) ? (m.current.bt = !0, ve = jt, ut = -ut, Ke.points = [kt(De, 0), kt(wt, 0)]) : m.current.bt = !1;
      }
      if (on && De[0] === "b" && (Ot < Ce.top || m.current.tb)) {
        var Dt = ve;
        ze ? Dt += Ee - me : Dt = xr.y - rn.y - ut;
        var un = Qe(se, Dt), si = Qe(se, Dt, J);
        // Of course use larger one
        un > ct || un === ct && (!oe || // Choose recommend one
        si >= $t) ? (m.current.tb = !0, ve = Dt, ut = -ut, Ke.points = [kt(De, 0), kt(wt, 0)]) : m.current.tb = !1;
      }
      var cn = an(ai), ln = De[1] === wt[1];
      if (cn && De[1] === "l" && (St > Ce.right || m.current.rl)) {
        var zt = se;
        ln ? zt -= $ - ce : zt = Ze.x - tr.x - Xe;
        var Ht = Qe(zt, ve), _r = Qe(zt, ve, J);
        // Of course use larger one
        Ht > ct || Ht === ct && (!oe || // Choose recommend one
        _r >= $t) ? (m.current.rl = !0, se = zt, Xe = -Xe, Ke.points = [kt(De, 1), kt(wt, 1)]) : m.current.rl = !1;
      }
      if (cn && De[1] === "r" && (Lt < Ce.left || m.current.lr)) {
        var Wt = se;
        ln ? Wt += $ - ce : Wt = xr.x - rn.x - Xe;
        var Or = Qe(Wt, ve), nr = Qe(Wt, ve, J);
        // Of course use larger one
        Or > ct || Or === ct && (!oe || // Choose recommend one
        nr >= $t) ? (m.current.lr = !0, se = Wt, Xe = -Xe, Ke.points = [kt(De, 1), kt(wt, 1)]) : m.current.lr = !1;
      }
      ir();
      var lt = rr === !0 ? 0 : rr;
      typeof lt == "number" && (Lt < J.left && (se -= Lt - J.left - Xe, j.x + ce < J.left + lt && (se += j.x - J.left + ce - lt)), St > J.right && (se -= St - J.right - Xe, j.x > J.right - lt && (se += j.x - J.right + lt)));
      var Tt = Pr === !0 ? 0 : Pr;
      typeof Tt == "number" && (Ot < J.top && (ve -= Ot - J.top - ut, j.y + me < J.top + Tt && (ve += j.y - J.top + me - Tt)), Ft > J.bottom && (ve -= Ft - J.bottom - ut, j.y > J.bottom - Tt && (ve += j.y - J.bottom + Tt)));
      var Rt = z.x + se, Mt = Rt + $, Fr = z.y + ve, ui = Fr + Ee, fn = j.x, dn = fn + ce, vn = j.y, ci = vn + me, li = Math.max(Rt, fn), hn = Math.min(Mt, dn), fi = (li + hn) / 2, di = fi - Rt, gn = Math.max(Fr, vn), vi = Math.min(ui, ci), hi = (gn + vi) / 2, gi = hi - Fr;
      o?.(t, Ke);
      var mt = Jt.right - z.x - (se + z.width), Tr = Jt.bottom - z.y - (ve + z.height);
      ot === 1 && (se = Math.round(se), mt = Math.round(mt)), gt === 1 && (ve = Math.round(ve), Tr = Math.round(Tr));
      var mi = {
        ready: !0,
        offsetX: se / ot,
        offsetY: ve / gt,
        offsetR: mt / ot,
        offsetB: Tr / gt,
        arrowX: di / ot,
        arrowY: gi / gt,
        scaleX: ot,
        scaleY: gt,
        align: Ke
      };
      l(mi);
    }
  }), d = function() {
    f.current += 1;
    var S = f.current;
    Promise.resolve().then(function() {
      f.current === S && h();
    });
  }, b = function() {
    l(function(S) {
      return O(O({}, S), {}, {
        ready: !1
      });
    });
  };
  return Le(b, [n]), Le(function() {
    r || b();
  }, [r]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, d];
}
function Yv(r, t, e, n, i) {
  Le(function() {
    if (r && t && e) {
      let f = function() {
        n(), i();
      };
      var a = t, o = e, s = Ea(a), u = Ea(o), c = Yr(o), l = new Set([c].concat(H(s), H(u)));
      return l.forEach(function(v) {
        v.addEventListener("scroll", f, {
          passive: !0
        });
      }), c.addEventListener("resize", f, {
        passive: !0
      }), n(), function() {
        l.forEach(function(v) {
          v.removeEventListener("scroll", f), c.removeEventListener("resize", f);
        });
      };
    }
  }, [r, t, e]);
}
function Jv(r, t, e, n, i, a, o, s) {
  var u = p.useRef(r);
  u.current = r;
  var c = p.useRef(!1);
  p.useEffect(function() {
    if (t && n && (!i || a)) {
      var f = function() {
        c.current = !1;
      }, v = function(P) {
        var w;
        u.current && !o(((w = P.composedPath) === null || w === void 0 || (w = w.call(P)) === null || w === void 0 ? void 0 : w[0]) || P.target) && !c.current && s(!1);
      }, m = Yr(n);
      m.addEventListener("pointerdown", f, !0), m.addEventListener("mousedown", v, !0), m.addEventListener("contextmenu", v, !0);
      var g = la(e);
      if (g && (g.addEventListener("mousedown", v, !0), g.addEventListener("contextmenu", v, !0)), process.env.NODE_ENV !== "production") {
        var h, d, b = e == null || (h = e.getRootNode) === null || h === void 0 ? void 0 : h.call(e), y = (d = n.getRootNode) === null || d === void 0 ? void 0 : d.call(n);
        mr(b === y, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        m.removeEventListener("pointerdown", f, !0), m.removeEventListener("mousedown", v, !0), m.removeEventListener("contextmenu", v, !0), g && (g.removeEventListener("mousedown", v, !0), g.removeEventListener("contextmenu", v, !0));
      };
    }
  }, [t, e, n, i, a]);
  function l() {
    c.current = !0;
  }
  return l;
}
var eh = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function th() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ja, t = /* @__PURE__ */ p.forwardRef(function(e, n) {
    var i = e.prefixCls, a = i === void 0 ? "rc-trigger-popup" : i, o = e.children, s = e.action, u = s === void 0 ? "hover" : s, c = e.showAction, l = e.hideAction, f = e.popupVisible, v = e.defaultPopupVisible, m = e.onPopupVisibleChange, g = e.afterPopupVisibleChange, h = e.mouseEnterDelay, d = e.mouseLeaveDelay, b = d === void 0 ? 0.1 : d, y = e.focusDelay, S = e.blurDelay, P = e.mask, w = e.maskClosable, E = w === void 0 ? !0 : w, C = e.getPopupContainer, _ = e.forceRender, F = e.autoDestroy, T = e.destroyPopupOnHide, M = e.popup, k = e.popupClassName, A = e.popupStyle, R = e.popupPlacement, V = e.builtinPlacements, N = V === void 0 ? {} : V, I = e.popupAlign, j = e.zIndex, B = e.stretch, U = e.getPopupClassNameFromAlign, q = e.fresh, z = e.alignPoint, G = e.onPopupClick, K = e.onPopupAlign, Y = e.arrow, ie = e.popupMotion, ae = e.maskMotion, Pe = e.popupTransitionName, ue = e.popupAnimation, Te = e.maskTransitionName, Re = e.maskAnimation, ge = e.className, Ee = e.getTriggerDOMNode, $ = Kt(e, eh), me = F || T || !1, ce = p.useState(!1), Fe = L(ce, 2), $e = Fe[0], pe = Fe[1];
    Le(function() {
      pe(qv());
    }, []);
    var He = p.useRef({}), re = p.useContext(Qo), oe = p.useMemo(function() {
      return {
        registerSubPopup: function(W, fe) {
          He.current[W] = fe, re?.registerSubPopup(W, fe);
        }
      };
    }, [re]), Me = Eu(), J = p.useState(null), Ge = L(J, 2), Ce = Ge[0], Jt = Ge[1], ot = p.useRef(null), gt = tt(function(D) {
      ot.current = D, Dr(D) && Ce !== D && Jt(D), re?.registerSubPopup(Me, D);
    }), Cr = p.useState(null), de = L(Cr, 2), le = de[0], st = de[1], Xe = p.useRef(null), ut = tt(function(D) {
      Dr(D) && le !== D && (st(D), Xe.current = D);
    }), er = p.Children.only(o), We = er?.props || {}, _t = {}, ri = tt(function(D) {
      var W, fe, be = le;
      return be?.contains(D) || ((W = la(be)) === null || W === void 0 ? void 0 : W.host) === D || D === be || Ce?.contains(D) || ((fe = la(Ce)) === null || fe === void 0 ? void 0 : fe.host) === D || D === Ce || Object.values(He.current).some(function(ye) {
        return ye?.contains(D) || D === ye;
      });
    }), ni = Jo(a, ie, ue, Pe), Jr = Jo(a, ae, Re, Te), ii = p.useState(v || !1), en = L(ii, 2), wt = en[0], De = en[1], Ie = f ?? wt, tn = tt(function(D) {
      f === void 0 && De(D);
    });
    Le(function() {
      De(f || !1);
    }, [f]);
    var Ke = p.useRef(Ie);
    Ke.current = Ie;
    var se = p.useRef([]);
    se.current = [];
    var ve = tt(function(D) {
      var W;
      tn(D), ((W = se.current[se.current.length - 1]) !== null && W !== void 0 ? W : Ie) !== D && (se.current.push(D), m?.(D));
    }), ct = p.useRef(), $t = function() {
      clearTimeout(ct.current);
    }, Ze = function(W) {
      var fe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      $t(), fe === 0 ? ve(W) : ct.current = setTimeout(function() {
        ve(W);
      }, fe * 1e3);
    };
    p.useEffect(function() {
      return $t;
    }, []);
    var rn = p.useState(!1), xr = L(rn, 2), tr = xr[0], It = xr[1];
    Le(function(D) {
      (!D || Ie) && It(!0);
    }, [Ie]);
    var ai = p.useState(null), nn = L(ai, 2), rr = nn[0], Pr = nn[1], an = p.useState(null), Ot = L(an, 2), Ft = Ot[0], Lt = Ot[1], St = function(W) {
      Lt([W.clientX, W.clientY]);
    }, on = Qv(Ie, Ce, z && Ft !== null ? Ft : le, R, N, I, K), ze = L(on, 11), jt = ze[0], sn = ze[1], oi = ze[2], Dt = ze[3], un = ze[4], si = ze[5], cn = ze[6], ln = ze[7], zt = ze[8], Ht = ze[9], _r = ze[10], Wt = Xv($e, u, c, l), Or = L(Wt, 2), nr = Or[0], lt = Or[1], Tt = nr.has("click"), Rt = lt.has("click") || lt.has("contextMenu"), Mt = tt(function() {
      tr || _r();
    }), Fr = function() {
      Ke.current && z && Rt && Ze(!1);
    };
    Yv(Ie, le, Ce, Mt, Fr), Le(function() {
      Mt();
    }, [Ft, R]), Le(function() {
      Ie && !(N != null && N[R]) && Mt();
    }, [JSON.stringify(I)]);
    var ui = p.useMemo(function() {
      var D = Zv(N, a, Ht, z);
      return je(D, U?.(Ht));
    }, [Ht, U, N, a, z]);
    p.useImperativeHandle(n, function() {
      return {
        nativeElement: Xe.current,
        popupElement: ot.current,
        forceAlign: Mt
      };
    });
    var fn = p.useState(0), dn = L(fn, 2), vn = dn[0], ci = dn[1], li = p.useState(0), hn = L(li, 2), fi = hn[0], di = hn[1], gn = function() {
      if (B && le) {
        var W = le.getBoundingClientRect();
        ci(W.width), di(W.height);
      }
    }, vi = function() {
      gn(), Mt();
    }, hi = function(W) {
      It(!1), _r(), g?.(W);
    }, gi = function() {
      return new Promise(function(W) {
        gn(), Pr(function() {
          return W;
        });
      });
    };
    Le(function() {
      rr && (_r(), rr(), Pr(null));
    }, [rr]);
    function mt(D, W, fe, be) {
      _t[D] = function(ye) {
        var yn;
        be?.(ye), Ze(W, fe);
        for (var bi = arguments.length, Ha = new Array(bi > 1 ? bi - 1 : 0), bn = 1; bn < bi; bn++)
          Ha[bn - 1] = arguments[bn];
        (yn = We[D]) === null || yn === void 0 || yn.call.apply(yn, [We, ye].concat(Ha));
      };
    }
    (Tt || Rt) && (_t.onClick = function(D) {
      var W;
      Ke.current && Rt ? Ze(!1) : !Ke.current && Tt && (St(D), Ze(!0));
      for (var fe = arguments.length, be = new Array(fe > 1 ? fe - 1 : 0), ye = 1; ye < fe; ye++)
        be[ye - 1] = arguments[ye];
      (W = We.onClick) === null || W === void 0 || W.call.apply(W, [We, D].concat(be));
    });
    var Tr = Jv(Ie, Rt, le, Ce, P, E, ri, Ze), mi = nr.has("hover"), Qe = lt.has("hover"), ir, Rr;
    mi && (mt("onMouseEnter", !0, h, function(D) {
      St(D);
    }), mt("onPointerEnter", !0, h, function(D) {
      St(D);
    }), ir = function(W) {
      (Ie || tr) && Ce !== null && Ce !== void 0 && Ce.contains(W.target) && Ze(!0, h);
    }, z && (_t.onMouseMove = function(D) {
      var W;
      (W = We.onMouseMove) === null || W === void 0 || W.call(We, D);
    })), Qe && (mt("onMouseLeave", !1, b), mt("onPointerLeave", !1, b), Rr = function() {
      Ze(!1, b);
    }), nr.has("focus") && mt("onFocus", !0, y), lt.has("focus") && mt("onBlur", !1, S), nr.has("contextMenu") && (_t.onContextMenu = function(D) {
      var W;
      Ke.current && lt.has("contextMenu") ? Ze(!1) : (St(D), Ze(!0)), D.preventDefault();
      for (var fe = arguments.length, be = new Array(fe > 1 ? fe - 1 : 0), ye = 1; ye < fe; ye++)
        be[ye - 1] = arguments[ye];
      (W = We.onContextMenu) === null || W === void 0 || W.call.apply(W, [We, D].concat(be));
    }), ge && (_t.className = je(We.className, ge));
    var Et = O(O({}, We), _t), Bt = {}, mn = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    mn.forEach(function(D) {
      $[D] && (Bt[D] = function() {
        for (var W, fe = arguments.length, be = new Array(fe), ye = 0; ye < fe; ye++)
          be[ye] = arguments[ye];
        (W = Et[D]) === null || W === void 0 || W.call.apply(W, [Et].concat(be)), $[D].apply($, be);
      });
    });
    var pn = /* @__PURE__ */ p.cloneElement(er, O(O({}, Et), Bt)), pi = {
      x: si,
      y: cn
    }, yi = Y ? O({}, Y !== !0 ? Y : {}) : null;
    return /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(Kn, {
      disabled: !Ie,
      ref: ut,
      onResize: vi
    }, /* @__PURE__ */ p.createElement(ku, {
      getTriggerDOMNode: Ee
    }, pn)), /* @__PURE__ */ p.createElement(Qo.Provider, {
      value: oe
    }, /* @__PURE__ */ p.createElement(Mu, {
      portal: r,
      ref: gt,
      prefixCls: a,
      popup: M,
      className: je(k, ui),
      style: A,
      target: le,
      onMouseEnter: ir,
      onMouseLeave: Rr,
      onPointerEnter: ir,
      zIndex: j,
      open: Ie,
      keepDom: tr,
      fresh: q,
      onClick: G,
      onPointerDownCapture: Tr,
      mask: P,
      motion: ni,
      maskMotion: Jr,
      onVisibleChanged: hi,
      onPrepare: gi,
      forceRender: _,
      autoDestroy: me,
      getPopupContainer: C,
      align: Ht,
      arrow: yi,
      arrowPos: pi,
      ready: jt,
      offsetX: sn,
      offsetY: oi,
      offsetR: Dt,
      offsetB: un,
      onAlign: Mt,
      stretch: B,
      targetWidth: vn / ln,
      targetHeight: fi / zt
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const rh = th(ja);
function Au(r) {
  var t = r.children, e = r.prefixCls, n = r.id, i = r.overlayInnerStyle, a = r.bodyClassName, o = r.className, s = r.style;
  return /* @__PURE__ */ p.createElement("div", {
    className: je("".concat(e, "-content"), o),
    style: s
  }, /* @__PURE__ */ p.createElement("div", {
    className: je("".concat(e, "-inner"), a),
    id: n,
    role: "tooltip",
    style: i
  }, typeof t == "function" ? t() : t));
}
var cr = {
  shiftX: 64,
  adjustY: 1
}, lr = {
  adjustX: 1,
  shiftY: !0
}, et = [0, 0], nh = {
  left: {
    points: ["cr", "cl"],
    overflow: lr,
    offset: [-4, 0],
    targetOffset: et
  },
  right: {
    points: ["cl", "cr"],
    overflow: lr,
    offset: [4, 0],
    targetOffset: et
  },
  top: {
    points: ["bc", "tc"],
    overflow: cr,
    offset: [0, -4],
    targetOffset: et
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: cr,
    offset: [0, 4],
    targetOffset: et
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: cr,
    offset: [0, -4],
    targetOffset: et
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: lr,
    offset: [-4, 0],
    targetOffset: et
  },
  topRight: {
    points: ["br", "tr"],
    overflow: cr,
    offset: [0, -4],
    targetOffset: et
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: lr,
    offset: [4, 0],
    targetOffset: et
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: cr,
    offset: [0, 4],
    targetOffset: et
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: lr,
    offset: [4, 0],
    targetOffset: et
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: cr,
    offset: [0, 4],
    targetOffset: et
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: lr,
    offset: [-4, 0],
    targetOffset: et
  }
}, ih = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], ah = function(t, e) {
  var n = t.overlayClassName, i = t.trigger, a = i === void 0 ? ["hover"] : i, o = t.mouseEnterDelay, s = o === void 0 ? 0 : o, u = t.mouseLeaveDelay, c = u === void 0 ? 0.1 : u, l = t.overlayStyle, f = t.prefixCls, v = f === void 0 ? "rc-tooltip" : f, m = t.children, g = t.onVisibleChange, h = t.afterVisibleChange, d = t.transitionName, b = t.animation, y = t.motion, S = t.placement, P = S === void 0 ? "right" : S, w = t.align, E = w === void 0 ? {} : w, C = t.destroyTooltipOnHide, _ = C === void 0 ? !1 : C, F = t.defaultVisible, T = t.getTooltipContainer, M = t.overlayInnerStyle;
  t.arrowContent;
  var k = t.overlay, A = t.id, R = t.showArrow, V = R === void 0 ? !0 : R, N = t.classNames, I = t.styles, j = Kt(t, ih), B = Eu(A), U = rt(null);
  Hu(e, function() {
    return U.current;
  });
  var q = O({}, j);
  "visible" in t && (q.popupVisible = t.visible);
  var z = function() {
    return /* @__PURE__ */ p.createElement(Au, {
      key: "content",
      prefixCls: v,
      id: B,
      bodyClassName: N?.body,
      overlayInnerStyle: O(O({}, M), I?.body)
    }, k);
  }, G = function() {
    var Y = p.Children.only(m), ie = Y?.props || {}, ae = O(O({}, ie), {}, {
      "aria-describedby": k ? B : null
    });
    return /* @__PURE__ */ p.cloneElement(m, ae);
  };
  return /* @__PURE__ */ p.createElement(rh, bt({
    popupClassName: je(n, N?.root),
    prefixCls: v,
    popup: z,
    action: a,
    builtinPlacements: nh,
    popupPlacement: P,
    ref: U,
    popupAlign: E,
    getPopupContainer: T,
    onPopupVisibleChange: g,
    afterPopupVisibleChange: h,
    popupTransitionName: d,
    popupAnimation: b,
    popupMotion: y,
    defaultPopupVisible: F,
    autoDestroy: _,
    mouseLeaveDelay: c,
    popupStyle: O(O({}, l), I?.root),
    mouseEnterDelay: s,
    arrow: V
  }, q), G());
};
const oh = /* @__PURE__ */ zu(ah);
function sh(r) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: e,
    borderRadiusOuter: n
  } = r, i = t / 2, a = 0, o = i, s = n * 1 / Math.sqrt(2), u = i - n * (1 - 1 / Math.sqrt(2)), c = i - e * (1 / Math.sqrt(2)), l = n * (Math.sqrt(2) - 1) + e * (1 / Math.sqrt(2)), f = 2 * i - c, v = l, m = 2 * i - s, g = u, h = 2 * i - a, d = o, b = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2), y = n * (Math.sqrt(2) - 1), S = `polygon(${y}px 100%, 50% ${y}px, ${2 * i - y}px 100%, ${y}px 100%)`, P = `path('M ${a} ${o} A ${n} ${n} 0 0 0 ${s} ${u} L ${c} ${l} A ${e} ${e} 0 0 1 ${f} ${v} L ${m} ${g} A ${n} ${n} 0 0 0 ${h} ${d} Z')`;
  return {
    arrowShadowWidth: b,
    arrowPath: P,
    arrowPolygon: S
  };
}
const uh = (r, t, e) => {
  const {
    sizePopupArrow: n,
    arrowPolygon: i,
    arrowPath: a,
    arrowShadowWidth: o,
    borderRadiusXS: s,
    calc: u
  } = r;
  return {
    pointerEvents: "none",
    width: n,
    height: n,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: n,
      height: u(n).div(2).equal(),
      background: t,
      clipPath: {
        _multi_value_: !0,
        value: [i, a]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: o,
      height: o,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${Zt(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: e,
      zIndex: 0,
      background: "transparent"
    }
  };
}, Nu = 8;
function Vu(r) {
  const {
    contentRadius: t,
    limitVerticalRadius: e
  } = r, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: e ? Nu : n
  };
}
function Mn(r, t) {
  return r ? t : {};
}
function ch(r, t, e) {
  const {
    componentCls: n,
    boxShadowPopoverArrow: i,
    arrowOffsetVertical: a,
    arrowOffsetHorizontal: o
  } = r, {
    arrowDistance: s = 0,
    arrowPlacement: u = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = {};
  return {
    [n]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${n}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, uh(r, t, i)), {
        "&:before": {
          background: t
        }
      })]
    }, Mn(!!u.top, {
      [[`&-placement-top > ${n}-arrow`, `&-placement-topLeft > ${n}-arrow`, `&-placement-topRight > ${n}-arrow`].join(",")]: {
        bottom: s,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        "--arrow-offset-horizontal": o,
        [`> ${n}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: o
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${Zt(o)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: o
          }
        }
      }
    })), Mn(!!u.bottom, {
      [[`&-placement-bottom > ${n}-arrow`, `&-placement-bottomLeft > ${n}-arrow`, `&-placement-bottomRight > ${n}-arrow`].join(",")]: {
        top: s,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${n}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      "&-placement-bottomLeft": {
        "--arrow-offset-horizontal": o,
        [`> ${n}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: o
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${Zt(o)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: o
          }
        }
      }
    })), Mn(!!u.left, {
      [[`&-placement-left > ${n}-arrow`, `&-placement-leftTop > ${n}-arrow`, `&-placement-leftBottom > ${n}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${n}-arrow`]: {
        top: a
      },
      [`&-placement-leftBottom > ${n}-arrow`]: {
        bottom: a
      }
    })), Mn(!!u.right, {
      [[`&-placement-right > ${n}-arrow`, `&-placement-rightTop > ${n}-arrow`, `&-placement-rightBottom > ${n}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: s
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${n}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${n}-arrow`]: {
        top: a
      },
      [`&-placement-rightBottom > ${n}-arrow`]: {
        bottom: a
      }
    }))
  };
}
function lh(r, t, e, n) {
  if (n === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const i = n && typeof n == "object" ? n : {}, a = {};
  switch (r) {
    case "top":
    case "bottom":
      a.shiftX = t.arrowOffsetHorizontal * 2 + e, a.shiftY = !0, a.adjustY = !0;
      break;
    case "left":
    case "right":
      a.shiftY = t.arrowOffsetVertical * 2 + e, a.shiftX = !0, a.adjustX = !0;
      break;
  }
  const o = Object.assign(Object.assign({}, a), i);
  return o.shiftX || (o.adjustX = !0), o.shiftY || (o.adjustY = !0), o;
}
const is = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, fh = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, dh = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function vh(r) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: e,
    arrowPointAtCenter: n,
    offset: i,
    borderRadius: a
  } = r, o = t / 2, s = {};
  return Object.keys(is).forEach((u) => {
    const c = n && fh[u] || is[u], l = Object.assign(Object.assign({}, c), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (s[u] = l, dh.has(u) && (l.autoArrow = !1), u) {
      case "top":
      case "topLeft":
      case "topRight":
        l.offset[1] = -o - i;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        l.offset[1] = o + i;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        l.offset[0] = -o - i;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        l.offset[0] = o + i;
        break;
    }
    const f = Vu({
      contentRadius: a,
      limitVerticalRadius: !0
    });
    if (n)
      switch (u) {
        case "topLeft":
        case "bottomLeft":
          l.offset[0] = -f.arrowOffsetHorizontal - o;
          break;
        case "topRight":
        case "bottomRight":
          l.offset[0] = f.arrowOffsetHorizontal + o;
          break;
        case "leftTop":
        case "rightTop":
          l.offset[1] = -f.arrowOffsetHorizontal * 2 + o;
          break;
        case "leftBottom":
        case "rightBottom":
          l.offset[1] = f.arrowOffsetHorizontal * 2 - o;
          break;
      }
    l.overflow = lh(u, f, t, e), l.htmlRegion = "visibleFirst";
  }), s;
}
const hh = (r) => {
  const {
    calc: t,
    componentCls: e,
    // ant-tooltip
    tooltipMaxWidth: n,
    tooltipColor: i,
    tooltipBg: a,
    tooltipBorderRadius: o,
    zIndexPopup: s,
    controlHeight: u,
    boxShadowSecondary: c,
    paddingSM: l,
    paddingXS: f,
    arrowOffsetHorizontal: v,
    sizePopupArrow: m
  } = r, g = t(o).add(m).add(v).equal(), h = t(o).mul(2).add(m).equal();
  return [
    {
      [e]: Object.assign(Object.assign(Object.assign(Object.assign({}, $f(r)), {
        position: "absolute",
        zIndex: s,
        display: "block",
        width: "max-content",
        maxWidth: n,
        visibility: "visible",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": a,
        // Wrapper for the tooltip content
        [`${e}-inner`]: {
          minWidth: h,
          minHeight: u,
          padding: `${Zt(r.calc(l).div(2).equal())} ${Zt(f)}`,
          color: i,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: a,
          borderRadius: o,
          boxShadow: c,
          boxSizing: "border-box"
        },
        // Align placement should have another min width
        [["&-placement-topLeft", "&-placement-topRight", "&-placement-bottomLeft", "&-placement-bottomRight"].join(",")]: {
          minWidth: g
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${e}-inner`]: {
            borderRadius: r.min(o, Nu)
          }
        },
        [`${e}-content`]: {
          position: "relative"
        }
      }), Hf(r, (d, {
        darkColor: b
      }) => ({
        [`&${e}-${d}`]: {
          [`${e}-inner`]: {
            backgroundColor: b
          },
          [`${e}-arrow`]: {
            "--antd-arrow-background-color": b
          }
        }
      }))), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    ch(r, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${e}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: r.sizePopupArrow
      }
    }
  ];
}, gh = (r) => Object.assign(Object.assign({
  zIndexPopup: r.zIndexPopupBase + 70
}, Vu({
  contentRadius: r.borderRadius,
  limitVerticalRadius: !0
})), sh(ti(r, {
  borderRadiusOuter: Math.min(r.borderRadiusOuter, 4)
}))), $u = (r, t = !0) => zf("Tooltip", (n) => {
  const {
    borderRadius: i,
    colorTextLightSolid: a,
    colorBgSpotlight: o
  } = n, s = ti(n, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: a,
    tooltipBorderRadius: i,
    tooltipBg: o
  });
  return [hh(s), jd(n, "zoom-big-fast")];
}, gh, {
  resetStyle: !1,
  // Popover use Tooltip as internal component. We do not need to handle this.
  injectStyle: t
})(r), mh = Bn.map((r) => `${r}-inverse`);
function ph(r, t = !0) {
  return t ? [].concat(H(mh), H(Bn)).includes(r) : Bn.includes(r);
}
function Iu(r, t) {
  const e = ph(t), n = je({
    [`${r}-${t}`]: t && e
  }), i = {}, a = {};
  return t && !e && (i.background = t, a["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: i,
    arrowStyle: a
  };
}
const yh = (r) => {
  const {
    prefixCls: t,
    className: e,
    placement: n = "top",
    title: i,
    color: a,
    overlayInnerStyle: o
  } = r, {
    getPrefixCls: s
  } = p.useContext(Ur), u = s("tooltip", t), [c, l, f] = $u(u), v = Iu(u, a), m = v.arrowStyle, g = Object.assign(Object.assign({}, o), v.overlayStyle), h = je(l, f, u, `${u}-pure`, `${u}-placement-${n}`, e, v.className);
  return c(/* @__PURE__ */ p.createElement("div", {
    className: h,
    style: m
  }, /* @__PURE__ */ p.createElement("div", {
    className: `${u}-arrow`
  }), /* @__PURE__ */ p.createElement(Au, Object.assign({}, r, {
    className: l,
    prefixCls: u,
    overlayInnerStyle: g
  }), i)));
};
var bh = function(r, t) {
  var e = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
    t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
  return e;
};
const wh = /* @__PURE__ */ p.forwardRef((r, t) => {
  var e, n;
  const {
    prefixCls: i,
    openClassName: a,
    getTooltipContainer: o,
    color: s,
    overlayInnerStyle: u,
    children: c,
    afterOpenChange: l,
    afterVisibleChange: f,
    destroyTooltipOnHide: v,
    destroyOnHidden: m,
    arrow: g = !0,
    title: h,
    overlay: d,
    builtinPlacements: b,
    arrowPointAtCenter: y = !1,
    autoAdjustOverflow: S = !0,
    motion: P,
    getPopupContainer: w,
    placement: E = "top",
    mouseEnterDelay: C = 0.1,
    mouseLeaveDelay: _ = 0.1,
    overlayStyle: F,
    rootClassName: T,
    overlayClassName: M,
    styles: k,
    classNames: A
  } = r, R = bh(r, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "destroyOnHidden", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), V = !!g, [, N] = Na(), {
    getPopupContainer: I,
    getPrefixCls: j,
    direction: B,
    className: U,
    style: q,
    classNames: z,
    styles: G
  } = yf("tooltip"), K = Zs("Tooltip"), Y = p.useRef(null), ie = () => {
    var de;
    (de = Y.current) === null || de === void 0 || de.forceAlign();
  };
  p.useImperativeHandle(t, () => {
    var de, le;
    return {
      forceAlign: ie,
      forcePopupAlign: () => {
        K.deprecated(!1, "forcePopupAlign", "forceAlign"), ie();
      },
      nativeElement: (de = Y.current) === null || de === void 0 ? void 0 : de.nativeElement,
      popupElement: (le = Y.current) === null || le === void 0 ? void 0 : le.popupElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["destroyTooltipOnHide", "destroyOnHidden"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"], ["overlayStyle", "styles={{ root: {} }}"], ["overlayInnerStyle", "styles={{ body: {} }}"], ["overlayClassName", 'classNames={{ root: "" }}']].forEach(([de, le]) => {
    K.deprecated(!(de in r), de, le);
  }), process.env.NODE_ENV !== "production" && K(!v || typeof v == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && K(!g || typeof g == "boolean" || !("arrowPointAtCenter" in g), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [ae, Pe] = Cf(!1, {
    value: (e = r.open) !== null && e !== void 0 ? e : r.visible,
    defaultValue: (n = r.defaultOpen) !== null && n !== void 0 ? n : r.defaultVisible
  }), ue = !h && !d && h !== 0, Te = (de) => {
    var le, st;
    Pe(ue ? !1 : de), ue || ((le = r.onOpenChange) === null || le === void 0 || le.call(r, de), (st = r.onVisibleChange) === null || st === void 0 || st.call(r, de));
  }, Re = p.useMemo(() => {
    var de, le;
    let st = y;
    return typeof g == "object" && (st = (le = (de = g.pointAtCenter) !== null && de !== void 0 ? de : g.arrowPointAtCenter) !== null && le !== void 0 ? le : y), b || vh({
      arrowPointAtCenter: st,
      autoAdjustOverflow: S,
      arrowWidth: V ? N.sizePopupArrow : 0,
      borderRadius: N.borderRadius,
      offset: N.marginXXS
    });
  }, [y, g, b, N]), ge = p.useMemo(() => h === 0 ? h : d || h || "", [d, h]), Ee = /* @__PURE__ */ p.createElement(Bv, {
    space: !0
  }, typeof ge == "function" ? ge() : ge), $ = j("tooltip", i), me = j(), ce = r["data-popover-inject"];
  let Fe = ae;
  !("open" in r) && !("visible" in r) && ue && (Fe = !1);
  const $e = /* @__PURE__ */ p.isValidElement(c) && !ld(c) ? c : /* @__PURE__ */ p.createElement("span", null, c), pe = $e.props, He = !pe.className || typeof pe.className == "string" ? je(pe.className, a || `${$}-open`) : pe.className, [re, oe, Me] = $u($, !ce), J = Iu($, s), Ge = J.arrowStyle, Ce = je(M, {
    [`${$}-rtl`]: B === "rtl"
  }, J.className, T, oe, Me, U, z.root, A?.root), Jt = je(z.body, A?.body), [ot, gt] = yd("Tooltip", R.zIndex), Cr = /* @__PURE__ */ p.createElement(oh, Object.assign({}, R, {
    zIndex: ot,
    showArrow: V,
    placement: E,
    mouseEnterDelay: C,
    mouseLeaveDelay: _,
    prefixCls: $,
    classNames: {
      root: Ce,
      body: Jt
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ge), G.root), q), F), k?.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, G.body), u), k?.body), J.overlayStyle)
    },
    getTooltipContainer: w || o || I,
    ref: Y,
    builtinPlacements: Re,
    overlay: Ee,
    visible: Fe,
    onVisibleChange: Te,
    afterVisibleChange: l ?? f,
    arrowContent: /* @__PURE__ */ p.createElement("span", {
      className: `${$}-arrow-content`
    }),
    motion: {
      motionName: Sd(me, "zoom-big-fast", r.transitionName),
      motionDeadline: 1e3
    },
    // TODO: In the future, destroyTooltipOnHide in rc-tooltip needs to be upgrade to destroyOnHidden
    destroyTooltipOnHide: m ?? !!v
  }), Fe ? dd($e, {
    className: He
  }) : $e);
  return re(/* @__PURE__ */ p.createElement(Ia.Provider, {
    value: gt
  }, Cr));
}), za = wh;
process.env.NODE_ENV !== "production" && (za.displayName = "Tooltip");
za._InternalPanelDoNotUseOrYouWillBeFired = yh;
function Vi(r) {
  return console.log("is not dist"), r == null;
}
function Sh(r) {
  console.log(Vi(23232), Vi(null), "isUndef");
  const { content: t } = r, [e, n] = as(!1), i = rt(null), a = os(() => Vi(t) ? "------" : t, [t]);
  return vr(() => {
    if (!i?.current) return;
    let o = window.getComputedStyle(i.current).fontSize, s = window.getComputedStyle(i.current).width.replace("px", ""), u = document.createElement("p");
    u.style.fontSize = o, u.style.whiteSpace = "nowrap", u.style.position = "fixed", u.style.top = "-100px", u.style.opacity = "0", u.innerHTML = t, document.body.appendChild(u);
    const c = document.createRange();
    c.setStart(u, 0), c.setEnd(u, u.childNodes.length);
    let l = c.getBoundingClientRect().width;
    document.body.removeChild(u), u = null, console.log(s, "width"), console.log(l, "textWidth"), s && l && parseInt(s) < l ? (console.log(111), n(!0)) : n(!1);
  }, [t]), /* @__PURE__ */ wn.jsx("div", { className: "mt-ui-ellipsis", ref: i, children: e ? /* @__PURE__ */ wn.jsx(za, { title: a, placement: "topLeft", children: /* @__PURE__ */ wn.jsx("span", { className: "mt-ui-ellipsis", children: a }) }) : /* @__PURE__ */ wn.jsx("span", { className: "screen-min", children: a }) });
}
const _h = Wu(Sh);
export {
  _h as default
};
