import * as p from "react";
import ke, { isValidElement as Bu, version as qu, useContext as Hr, useRef as rt, useLayoutEffect as Uu, useEffect as vr, useState as fs, useMemo as ds, forwardRef as Gu, useImperativeHandle as Xu, memo as Ku } from "react";
import Ua, { createPortal as Yu } from "react-dom";
function Zu(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Cn = { exports: {} }, kr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ga;
function Qu() {
  if (Ga) return kr;
  Ga = 1;
  var r = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(n, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: r,
      type: n,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return kr.Fragment = t, kr.jsx = e, kr.jsxs = e, kr;
}
var Ar = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa;
function Ju() {
  return Xa || (Xa = 1, process.env.NODE_ENV !== "production" && function() {
    function r(O) {
      if (O == null) return null;
      if (typeof O == "function")
        return O.$$typeof === F ? null : O.displayName || O.name || null;
      if (typeof O == "string") return O;
      switch (O) {
        case h:
          return "Fragment";
        case b:
          return "Profiler";
        case d:
          return "StrictMode";
        case w:
          return "Suspense";
        case E:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof O == "object")
        switch (typeof O.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), O.$$typeof) {
          case m:
            return "Portal";
          case S:
            return (O.displayName || "Context") + ".Provider";
          case y:
            return (O._context.displayName || "Context") + ".Consumer";
          case P:
            var I = O.render;
            return O = O.displayName, O || (O = I.displayName || I.name || "", O = O !== "" ? "ForwardRef(" + O + ")" : "ForwardRef"), O;
          case C:
            return I = O.displayName || null, I !== null ? I : r(O.type) || "Memo";
          case _:
            I = O._payload, O = O._init;
            try {
              return r(O(I));
            } catch {
            }
        }
      return null;
    }
    function t(O) {
      return "" + O;
    }
    function e(O) {
      try {
        t(O);
        var I = !1;
      } catch {
        I = !0;
      }
      if (I) {
        I = console;
        var V = I.error, B = typeof Symbol == "function" && Symbol.toStringTag && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return V.call(
          I,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), t(O);
      }
    }
    function n(O) {
      if (O === h) return "<>";
      if (typeof O == "object" && O !== null && O.$$typeof === _)
        return "<...>";
      try {
        var I = r(O);
        return I ? "<" + I + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var O = A.A;
      return O === null ? null : O.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(O) {
      if (M.call(O, "key")) {
        var I = Object.getOwnPropertyDescriptor(O, "key").get;
        if (I && I.isReactWarning) return !1;
      }
      return O.key !== void 0;
    }
    function s(O, I) {
      function V() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          I
        ));
      }
      V.isReactWarning = !0, Object.defineProperty(O, "key", {
        get: V,
        configurable: !0
      });
    }
    function u() {
      var O = r(this.type);
      return $[O] || ($[O] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), O = this.props.ref, O !== void 0 ? O : null;
    }
    function c(O, I, V, B, U, K, te, ne) {
      return V = K.ref, O = {
        $$typeof: g,
        type: O,
        key: I,
        props: K,
        _owner: U
      }, (V !== void 0 ? V : null) !== null ? Object.defineProperty(O, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(O, "ref", { enumerable: !1, value: null }), O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(O, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(O, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: te
      }), Object.defineProperty(O, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    }
    function l(O, I, V, B, U, K, te, ne) {
      var J = I.children;
      if (J !== void 0)
        if (B)
          if (N(J)) {
            for (B = 0; B < J.length; B++)
              f(J[B]);
            Object.freeze && Object.freeze(J);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(J);
      if (M.call(I, "key")) {
        J = r(O);
        var re = Object.keys(I).filter(function(Oe) {
          return Oe !== "key";
        });
        B = 0 < re.length ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}", X[J + B] || (re = 0 < re.length ? "{" + re.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          J,
          re,
          J
        ), X[J + B] = !0);
      }
      if (J = null, V !== void 0 && (e(V), J = "" + V), o(I) && (e(I.key), J = "" + I.key), "key" in I) {
        V = {};
        for (var Ee in I)
          Ee !== "key" && (V[Ee] = I[Ee]);
      } else V = I;
      return J && s(
        V,
        typeof O == "function" ? O.displayName || O.name || "Unknown" : O
      ), c(
        O,
        J,
        K,
        U,
        i(),
        V,
        te,
        ne
      );
    }
    function f(O) {
      typeof O == "object" && O !== null && O.$$typeof === g && O._store && (O._store.validated = 1);
    }
    var v = ke, g = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), S = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), F = Symbol.for("react.client.reference"), A = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, N = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(O) {
        return O();
      }
    };
    var j, $ = {}, L = v["react-stack-bottom-frame"].bind(
      v,
      a
    )(), H = k(n(a)), X = {};
    Ar.Fragment = h, Ar.jsx = function(O, I, V, B, U) {
      var K = 1e4 > A.recentlyCreatedOwnerStacks++;
      return l(
        O,
        I,
        V,
        !1,
        B,
        U,
        K ? Error("react-stack-top-frame") : L,
        K ? k(n(O)) : H
      );
    }, Ar.jsxs = function(O, I, V, B, U) {
      var K = 1e4 > A.recentlyCreatedOwnerStacks++;
      return l(
        O,
        I,
        V,
        !0,
        B,
        U,
        K ? Error("react-stack-top-frame") : L,
        K ? k(n(O)) : H
      );
    };
  }()), Ar;
}
var Ka;
function ec() {
  return Ka || (Ka = 1, process.env.NODE_ENV === "production" ? Cn.exports = Qu() : Cn.exports = Ju()), Cn.exports;
}
var Ir = ec();
const Mh = ({ children: r, ...t }) => /* @__PURE__ */ Ir.jsx("button", { className: "my-btn", ...t, children: r });
var Ci = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ya;
function tc() {
  return Ya || (Ya = 1, function(r) {
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
  }(Ci)), Ci.exports;
}
var rc = tc();
const Le = /* @__PURE__ */ Zu(rc);
function bt() {
  return bt = Object.assign ? Object.assign.bind() : function(r) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t];
      for (var n in e) ({}).hasOwnProperty.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }, bt.apply(null, arguments);
}
function Y(r) {
  "@babel/helpers - typeof";
  return Y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Y(r);
}
var nc = Symbol.for("react.element"), ic = Symbol.for("react.transitional.element"), ac = Symbol.for("react.fragment");
function vs(r) {
  return (
    // Base object type
    r && Y(r) === "object" && // React Element type
    (r.$$typeof === nc || r.$$typeof === ic) && // React Fragment type
    r.type === ac
  );
}
function zn(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [];
  return ke.Children.forEach(r, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? e = e.concat(zn(n)) : vs(n) && n.props ? e = e.concat(zn(n.props.children, t)) : e.push(n));
  }), e;
}
var Li = {}, _a = [], oc = function(t) {
  _a.push(t);
};
function gr(r, t) {
  if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
    var e = _a.reduce(function(n, i) {
      return i(n ?? "", "warning");
    }, t);
    e && console.error("Warning: ".concat(e));
  }
}
function sc(r, t) {
  if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
    var e = _a.reduce(function(n, i) {
      return i(n ?? "", "note");
    }, t);
    e && console.warn("Note: ".concat(e));
  }
}
function hs() {
  Li = {};
}
function ms(r, t, e) {
  !t && !Li[e] && (r(!1, e), Li[e] = !0);
}
function me(r, t) {
  ms(gr, r, t);
}
function uc(r, t) {
  ms(sc, r, t);
}
me.preMessage = oc;
me.resetWarned = hs;
me.noteOnce = uc;
function cc(r, t) {
  if (Y(r) != "object" || !r) return r;
  var e = r[Symbol.toPrimitive];
  if (e !== void 0) {
    var n = e.call(r, t);
    if (Y(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function gs(r) {
  var t = cc(r, "string");
  return Y(t) == "symbol" ? t : t + "";
}
function x(r, t, e) {
  return (t = gs(t)) in r ? Object.defineProperty(r, t, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = e, r;
}
function Za(r, t) {
  var e = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), e.push.apply(e, n);
  }
  return e;
}
function T(r) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Za(Object(e), !0).forEach(function(n) {
      x(r, n, e[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(e)) : Za(Object(e)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(e, n));
    });
  }
  return r;
}
function Wr(r) {
  return r instanceof HTMLElement || r instanceof SVGElement;
}
function lc(r) {
  return r && Y(r) === "object" && Wr(r.nativeElement) ? r.nativeElement : Wr(r) ? r : null;
}
function $n(r) {
  var t = lc(r);
  if (t)
    return t;
  if (r instanceof ke.Component) {
    var e;
    return (e = Ua.findDOMNode) === null || e === void 0 ? void 0 : e.call(Ua, r);
  }
  return null;
}
var xn = { exports: {} }, ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qa;
function fc() {
  if (Qa) return ie;
  Qa = 1;
  var r = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
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
  return ie.ContextConsumer = o, ie.ContextProvider = a, ie.Element = r, ie.ForwardRef = u, ie.Fragment = e, ie.Lazy = v, ie.Memo = f, ie.Portal = t, ie.Profiler = i, ie.StrictMode = n, ie.Suspense = c, ie.SuspenseList = l, ie.isAsyncMode = function() {
    return !1;
  }, ie.isConcurrentMode = function() {
    return !1;
  }, ie.isContextConsumer = function(d) {
    return h(d) === o;
  }, ie.isContextProvider = function(d) {
    return h(d) === a;
  }, ie.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === r;
  }, ie.isForwardRef = function(d) {
    return h(d) === u;
  }, ie.isFragment = function(d) {
    return h(d) === e;
  }, ie.isLazy = function(d) {
    return h(d) === v;
  }, ie.isMemo = function(d) {
    return h(d) === f;
  }, ie.isPortal = function(d) {
    return h(d) === t;
  }, ie.isProfiler = function(d) {
    return h(d) === i;
  }, ie.isStrictMode = function(d) {
    return h(d) === n;
  }, ie.isSuspense = function(d) {
    return h(d) === c;
  }, ie.isSuspenseList = function(d) {
    return h(d) === l;
  }, ie.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === e || d === i || d === n || d === c || d === l || d === g || typeof d == "object" && d !== null && (d.$$typeof === v || d.$$typeof === f || d.$$typeof === a || d.$$typeof === o || d.$$typeof === u || d.$$typeof === m || d.getModuleId !== void 0);
  }, ie.typeOf = h, ie;
}
var ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ja;
function dc() {
  return Ja || (Ja = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Symbol.for("react.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = !1, h = !1, d = !1, b = !1, y = !1, S;
    S = Symbol.for("react.module.reference");
    function P(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === e || D === i || y || D === n || D === c || D === l || b || D === g || m || h || d || typeof D == "object" && D !== null && (D.$$typeof === v || D.$$typeof === f || D.$$typeof === a || D.$$typeof === o || D.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === S || D.getModuleId !== void 0));
    }
    function w(D) {
      if (typeof D == "object" && D !== null) {
        var pe = D.$$typeof;
        switch (pe) {
          case r:
            var le = D.type;
            switch (le) {
              case e:
              case i:
              case n:
              case c:
              case l:
                return le;
              default:
                var Fe = le && le.$$typeof;
                switch (Fe) {
                  case s:
                  case o:
                  case u:
                  case v:
                  case f:
                  case a:
                    return Fe;
                  default:
                    return pe;
                }
            }
          case t:
            return pe;
        }
      }
    }
    var E = o, C = a, _ = r, R = u, F = e, A = v, M = f, N = t, k = i, j = n, $ = c, L = l, H = !1, X = !1;
    function O(D) {
      return H || (H = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I(D) {
      return X || (X = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function V(D) {
      return w(D) === o;
    }
    function B(D) {
      return w(D) === a;
    }
    function U(D) {
      return typeof D == "object" && D !== null && D.$$typeof === r;
    }
    function K(D) {
      return w(D) === u;
    }
    function te(D) {
      return w(D) === e;
    }
    function ne(D) {
      return w(D) === v;
    }
    function J(D) {
      return w(D) === f;
    }
    function re(D) {
      return w(D) === t;
    }
    function Ee(D) {
      return w(D) === i;
    }
    function Oe(D) {
      return w(D) === n;
    }
    function ge(D) {
      return w(D) === c;
    }
    function xe(D) {
      return w(D) === l;
    }
    ae.ContextConsumer = E, ae.ContextProvider = C, ae.Element = _, ae.ForwardRef = R, ae.Fragment = F, ae.Lazy = A, ae.Memo = M, ae.Portal = N, ae.Profiler = k, ae.StrictMode = j, ae.Suspense = $, ae.SuspenseList = L, ae.isAsyncMode = O, ae.isConcurrentMode = I, ae.isContextConsumer = V, ae.isContextProvider = B, ae.isElement = U, ae.isForwardRef = K, ae.isFragment = te, ae.isLazy = ne, ae.isMemo = J, ae.isPortal = re, ae.isProfiler = Ee, ae.isStrictMode = Oe, ae.isSuspense = ge, ae.isSuspenseList = xe, ae.isValidElementType = P, ae.typeOf = w;
  }()), ae;
}
var eo;
function vc() {
  return eo || (eo = 1, process.env.NODE_ENV === "production" ? xn.exports = fc() : xn.exports = dc()), xn.exports;
}
var xi = vc();
function hc(r, t, e) {
  var n = p.useRef({});
  return (!("value" in n.current) || e(n.current.condition, t)) && (n.current.value = r(), n.current.condition = t), n.current.value;
}
var mc = Number(qu.split(".")[0]), Oa = function(t, e) {
  typeof t == "function" ? t(e) : Y(t) === "object" && t && "current" in t && (t.current = e);
}, ps = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  var i = e.filter(Boolean);
  return i.length <= 1 ? i[0] : function(a) {
    e.forEach(function(o) {
      Oa(o, a);
    });
  };
}, Ta = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  return hc(function() {
    return ps.apply(void 0, e);
  }, e, function(i, a) {
    return i.length !== a.length || i.every(function(o, s) {
      return o !== a[s];
    });
  });
}, Yn = function(t) {
  var e, n;
  if (!t)
    return !1;
  if (ys(t) && mc >= 19)
    return !0;
  var i = xi.isMemo(t) ? t.type.type : t.type;
  return !(typeof i == "function" && !((e = i.prototype) !== null && e !== void 0 && e.render) && i.$$typeof !== xi.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== xi.ForwardRef);
};
function ys(r) {
  return /* @__PURE__ */ Bu(r) && !vs(r);
}
var Ra = function(t) {
  if (t && ys(t)) {
    var e = t;
    return e.props.propertyIsEnumerable("ref") ? e.props.ref : e.ref;
  }
  return null;
}, Di = /* @__PURE__ */ p.createContext(null);
function gc(r) {
  var t = r.children, e = r.onBatchResize, n = p.useRef(0), i = p.useRef([]), a = p.useContext(Di), o = p.useCallback(function(s, u, c) {
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
  return /* @__PURE__ */ p.createElement(Di.Provider, {
    value: o
  }, t);
}
var bs = function() {
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
}(), zi = typeof window < "u" && typeof document < "u" && window.document === document, Hn = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), pc = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Hn) : function(r) {
    return setTimeout(function() {
      return r(Date.now());
    }, 1e3 / 60);
  };
}(), yc = 2;
function bc(r, t) {
  var e = !1, n = !1, i = 0;
  function a() {
    e && (e = !1, r()), n && s();
  }
  function o() {
    pc(a);
  }
  function s() {
    var u = Date.now();
    if (e) {
      if (u - i < yc)
        return;
      n = !0;
    } else
      e = !0, n = !1, setTimeout(o, t);
    i = u;
  }
  return s;
}
var wc = 20, Sc = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Ec = typeof MutationObserver < "u", Cc = (
  /** @class */
  function() {
    function r() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = bc(this.refresh.bind(this), wc);
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
      !zi || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Ec ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, r.prototype.disconnect_ = function() {
      !zi || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, r.prototype.onTransitionEnd_ = function(t) {
      var e = t.propertyName, n = e === void 0 ? "" : e, i = Sc.some(function(a) {
        return !!~n.indexOf(a);
      });
      i && this.refresh();
    }, r.getInstance = function() {
      return this.instance_ || (this.instance_ = new r()), this.instance_;
    }, r.instance_ = null, r;
  }()
), ws = function(r, t) {
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
  return t || Hn;
}, Ss = Zn(0, 0, 0, 0);
function Wn(r) {
  return parseFloat(r) || 0;
}
function to(r) {
  for (var t = [], e = 1; e < arguments.length; e++)
    t[e - 1] = arguments[e];
  return t.reduce(function(n, i) {
    var a = r["border-" + i + "-width"];
    return n + Wn(a);
  }, 0);
}
function xc(r) {
  for (var t = ["top", "right", "bottom", "left"], e = {}, n = 0, i = t; n < i.length; n++) {
    var a = i[n], o = r["padding-" + a];
    e[a] = Wn(o);
  }
  return e;
}
function Pc(r) {
  var t = r.getBBox();
  return Zn(0, 0, t.width, t.height);
}
function _c(r) {
  var t = r.clientWidth, e = r.clientHeight;
  if (!t && !e)
    return Ss;
  var n = pr(r).getComputedStyle(r), i = xc(n), a = i.left + i.right, o = i.top + i.bottom, s = Wn(n.width), u = Wn(n.height);
  if (n.boxSizing === "border-box" && (Math.round(s + a) !== t && (s -= to(n, "left", "right") + a), Math.round(u + o) !== e && (u -= to(n, "top", "bottom") + o)), !Tc(r)) {
    var c = Math.round(s + a) - t, l = Math.round(u + o) - e;
    Math.abs(c) !== 1 && (s -= c), Math.abs(l) !== 1 && (u -= l);
  }
  return Zn(i.left, i.top, s, u);
}
var Oc = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(r) {
    return r instanceof pr(r).SVGGraphicsElement;
  } : function(r) {
    return r instanceof pr(r).SVGElement && typeof r.getBBox == "function";
  };
}();
function Tc(r) {
  return r === pr(r).document.documentElement;
}
function Rc(r) {
  return zi ? Oc(r) ? Pc(r) : _c(r) : Ss;
}
function Fc(r) {
  var t = r.x, e = r.y, n = r.width, i = r.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(a.prototype);
  return ws(o, {
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
function Zn(r, t, e, n) {
  return { x: r, y: t, width: e, height: n };
}
var kc = (
  /** @class */
  function() {
    function r(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Zn(0, 0, 0, 0), this.target = t;
    }
    return r.prototype.isActive = function() {
      var t = Rc(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, r.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, r;
  }()
), Ac = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(t, e) {
      var n = Fc(e);
      ws(this, { target: t, contentRect: n });
    }
    return r;
  }()
), Mc = (
  /** @class */
  function() {
    function r(t, e, n) {
      if (this.activeObservations_ = [], this.observations_ = new bs(), typeof t != "function")
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
        e.has(t) || (e.set(t, new kc(t)), this.controller_.addObserver(this), this.controller_.refresh());
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
          return new Ac(n.target, n.broadcastRect());
        });
        this.callback_.call(t, e, t), this.clearActive();
      }
    }, r.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, r.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, r;
  }()
), Es = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new bs(), Cs = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(t) {
      if (!(this instanceof r))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var e = Cc.getInstance(), n = new Mc(t, e, this);
      Es.set(this, n);
    }
    return r;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(r) {
  Cs.prototype[r] = function() {
    var t;
    return (t = Es.get(this))[r].apply(t, arguments);
  };
});
var Nc = function() {
  return typeof Hn.ResizeObserver < "u" ? Hn.ResizeObserver : Cs;
}(), Pt = /* @__PURE__ */ new Map();
function xs(r) {
  r.forEach(function(t) {
    var e, n = t.target;
    (e = Pt.get(n)) === null || e === void 0 || e.forEach(function(i) {
      return i(n);
    });
  });
}
var Ps = new Nc(xs);
process.env.NODE_ENV;
process.env.NODE_ENV;
function $c(r, t) {
  Pt.has(r) || (Pt.set(r, /* @__PURE__ */ new Set()), Ps.observe(r)), Pt.get(r).add(t);
}
function Vc(r, t) {
  Pt.has(r) && (Pt.get(r).delete(t), Pt.get(r).size || (Ps.unobserve(r), Pt.delete(r)));
}
function Ne(r, t) {
  if (!(r instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function ro(r, t) {
  for (var e = 0; e < t.length; e++) {
    var n = t[e];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, gs(n.key), n);
  }
}
function $e(r, t, e) {
  return t && ro(r.prototype, t), e && ro(r, e), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Br(r, t) {
  return Br = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
    return e.__proto__ = n, e;
  }, Br(r, t);
}
function Zt(r, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(r, "prototype", {
    writable: !1
  }), t && Br(r, t);
}
function qr(r) {
  return qr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, qr(r);
}
function Fa() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Fa = function() {
    return !!r;
  })();
}
function Z(r) {
  if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ic(r, t) {
  if (t && (Y(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Z(r);
}
function Qt(r) {
  var t = Fa();
  return function() {
    var e, n = qr(r);
    if (t) {
      var i = qr(this).constructor;
      e = Reflect.construct(n, arguments, i);
    } else e = n.apply(this, arguments);
    return Ic(this, e);
  };
}
var jc = /* @__PURE__ */ function(r) {
  Zt(e, r);
  var t = Qt(e);
  function e() {
    return Ne(this, e), t.apply(this, arguments);
  }
  return $e(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(p.Component);
function Lc(r, t) {
  var e = r.children, n = r.disabled, i = p.useRef(null), a = p.useRef(null), o = p.useContext(Di), s = typeof e == "function", u = s ? e(i) : e, c = p.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), l = !s && /* @__PURE__ */ p.isValidElement(u) && Yn(u), f = l ? Ra(u) : null, v = Ta(f, i), g = function() {
    var b;
    return $n(i.current) || // Support `nativeElement` format
    (i.current && Y(i.current) === "object" ? $n((b = i.current) === null || b === void 0 ? void 0 : b.nativeElement) : null) || $n(a.current);
  };
  p.useImperativeHandle(t, function() {
    return g();
  });
  var m = p.useRef(r);
  m.current = r;
  var h = p.useCallback(function(d) {
    var b = m.current, y = b.onResize, S = b.data, P = d.getBoundingClientRect(), w = P.width, E = P.height, C = d.offsetWidth, _ = d.offsetHeight, R = Math.floor(w), F = Math.floor(E);
    if (c.current.width !== R || c.current.height !== F || c.current.offsetWidth !== C || c.current.offsetHeight !== _) {
      var A = {
        width: R,
        height: F,
        offsetWidth: C,
        offsetHeight: _
      };
      c.current = A;
      var M = C === Math.round(w) ? w : C, N = _ === Math.round(E) ? E : _, k = T(T({}, A), {}, {
        offsetWidth: M,
        offsetHeight: N
      });
      o?.(k, d, S), y && Promise.resolve().then(function() {
        y(k, d);
      });
    }
  }, []);
  return p.useEffect(function() {
    var d = g();
    return d && !n && $c(d, h), function() {
      return Vc(d, h);
    };
  }, [i.current, n]), /* @__PURE__ */ p.createElement(jc, {
    ref: a
  }, l ? /* @__PURE__ */ p.cloneElement(u, {
    ref: v
  }) : u);
}
var _s = /* @__PURE__ */ p.forwardRef(Lc);
process.env.NODE_ENV !== "production" && (_s.displayName = "SingleObserver");
var Dc = "rc-observer-key";
function zc(r, t) {
  var e = r.children, n = typeof e == "function" ? [e] : zn(e);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? gr(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && gr(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(i, a) {
    var o = i?.key || "".concat(Dc, "-").concat(a);
    return /* @__PURE__ */ p.createElement(_s, bt({}, r, {
      key: o,
      ref: a === 0 ? t : void 0
    }), i);
  });
}
var Qn = /* @__PURE__ */ p.forwardRef(zc);
process.env.NODE_ENV !== "production" && (Qn.displayName = "ResizeObserver");
Qn.Collection = gc;
function Hi(r, t) {
  (t == null || t > r.length) && (t = r.length);
  for (var e = 0, n = Array(t); e < t; e++) n[e] = r[e];
  return n;
}
function Hc(r) {
  if (Array.isArray(r)) return Hi(r);
}
function Os(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function ka(r, t) {
  if (r) {
    if (typeof r == "string") return Hi(r, t);
    var e = {}.toString.call(r).slice(8, -1);
    return e === "Object" && r.constructor && (e = r.constructor.name), e === "Map" || e === "Set" ? Array.from(r) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Hi(r, t) : void 0;
  }
}
function Wc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q(r) {
  return Hc(r) || Os(r) || ka(r) || Wc();
}
var Ts = function(t) {
  return +setTimeout(t, 16);
}, Rs = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Ts = function(t) {
  return window.requestAnimationFrame(t);
}, Rs = function(t) {
  return window.cancelAnimationFrame(t);
});
var no = 0, Jn = /* @__PURE__ */ new Map();
function Fs(r) {
  Jn.delete(r);
}
var Bn = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  no += 1;
  var n = no;
  function i(a) {
    if (a === 0)
      Fs(n), t();
    else {
      var o = Ts(function() {
        i(a - 1);
      });
      Jn.set(n, o);
    }
  }
  return i(e), n;
};
Bn.cancel = function(r) {
  var t = Jn.get(r);
  return Fs(r), Rs(t);
};
process.env.NODE_ENV !== "production" && (Bn.ids = function() {
  return Jn;
});
function ks(r) {
  if (Array.isArray(r)) return r;
}
function Bc(r, t) {
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
function As() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z(r, t) {
  return ks(r) || Bc(r, t) || ka(r, t) || As();
}
function Ur(r) {
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
function qc(r, t) {
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
var io = "data-rc-order", ao = "data-rc-priority", Uc = "rc-util-key", Wi = /* @__PURE__ */ new Map();
function Ms() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = r.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Uc;
}
function ei(r) {
  if (r.attachTo)
    return r.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Gc(r) {
  return r === "queue" ? "prependQueue" : r ? "prepend" : "append";
}
function Aa(r) {
  return Array.from((Wi.get(r) || r).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Ns(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ue())
    return null;
  var e = t.csp, n = t.prepend, i = t.priority, a = i === void 0 ? 0 : i, o = Gc(n), s = o === "prependQueue", u = document.createElement("style");
  u.setAttribute(io, o), s && a && u.setAttribute(ao, "".concat(a)), e != null && e.nonce && (u.nonce = e?.nonce), u.innerHTML = r;
  var c = ei(t), l = c.firstChild;
  if (n) {
    if (s) {
      var f = (t.styles || Aa(c)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(io)))
          return !1;
        var g = Number(v.getAttribute(ao) || 0);
        return a >= g;
      });
      if (f.length)
        return c.insertBefore(u, f[f.length - 1].nextSibling), u;
    }
    c.insertBefore(u, l);
  } else
    c.appendChild(u);
  return u;
}
function $s(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = ei(t);
  return (t.styles || Aa(e)).find(function(n) {
    return n.getAttribute(Ms(t)) === r;
  });
}
function Gr(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = $s(r, t);
  if (e) {
    var n = ei(t);
    n.removeChild(e);
  }
}
function Xc(r, t) {
  var e = Wi.get(r);
  if (!e || !qc(document, e)) {
    var n = Ns("", t), i = n.parentNode;
    Wi.set(r, i), r.removeChild(n);
  }
}
function Gt(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = ei(e), i = Aa(n), a = T(T({}, e), {}, {
    styles: i
  });
  Xc(n, a);
  var o = $s(t, a);
  if (o) {
    var s, u;
    if ((s = a.csp) !== null && s !== void 0 && s.nonce && o.nonce !== ((u = a.csp) === null || u === void 0 ? void 0 : u.nonce)) {
      var c;
      o.nonce = (c = a.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return o.innerHTML !== r && (o.innerHTML = r), o;
  }
  var l = Ns(r, a);
  return l.setAttribute(Ms(a), t), l;
}
function Kc(r, t) {
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
  var e, n, i = Kc(r, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(r);
    for (n = 0; n < a.length; n++) e = a[n], t.indexOf(e) === -1 && {}.propertyIsEnumerable.call(r, e) && (i[e] = r[e]);
  }
  return i;
}
function oo(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function i(a, o) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, u = n.has(a);
    if (me(!u, "Warning: There may be circular references"), u)
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
    if (a && o && Y(a) === "object" && Y(o) === "object") {
      var f = Object.keys(a);
      return f.length !== Object.keys(o).length ? !1 : f.every(function(v) {
        return i(a[v], o[v], c);
      });
    }
    return !1;
  }
  return i(r, t);
}
var Yc = "%";
function Bi(r) {
  return r.join(Yc);
}
var Zc = /* @__PURE__ */ function() {
  function r(t) {
    Ne(this, r), x(this, "instanceId", void 0), x(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return $e(r, [{
    key: "get",
    value: function(e) {
      return this.opGet(Bi(e));
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
      return this.opUpdate(Bi(e), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(e, n) {
      var i = this.cache.get(e), a = n(i);
      a === null ? this.cache.delete(e) : this.cache.set(e, a);
    }
  }]), r;
}(), yr = "data-token-hash", vt = "data-css-hash", Qc = "data-cache-path", Nt = "__cssinjs_instance__";
function Jc() {
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
  return new Zc(r);
}
var ti = /* @__PURE__ */ p.createContext({
  hashPriority: "low",
  cache: Jc(),
  defaultCache: !0
});
function el(r, t) {
  if (r.length !== t.length)
    return !1;
  for (var e = 0; e < r.length; e++)
    if (r[e] !== t[e])
      return !1;
  return !0;
}
var Ma = /* @__PURE__ */ function() {
  function r() {
    Ne(this, r), x(this, "cache", void 0), x(this, "keys", void 0), x(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return $e(r, [{
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
            var f = z(c, 2), v = f[1];
            return i.internalGet(l)[1] < v ? [l, i.internalGet(l)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), o = z(a, 1), s = o[0];
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
          return !el(n, e);
        }), this.deleteByPath(this.cache, e);
    }
  }]), r;
}();
x(Ma, "MAX_CACHE_SIZE", 20);
x(Ma, "MAX_CACHE_OFFSET", 5);
var so = 0, Vs = /* @__PURE__ */ function() {
  function r(t) {
    Ne(this, r), x(this, "derivatives", void 0), x(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = so, t.length === 0 && gr(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), so += 1;
  }
  return $e(r, [{
    key: "getDerivativeToken",
    value: function(e) {
      return this.derivatives.reduce(function(n, i) {
        return i(e, n);
      }, void 0);
    }
  }]), r;
}(), Pi = new Ma();
function tl(r) {
  var t = Array.isArray(r) ? r : [r];
  return Pi.has(t) || Pi.set(t, new Vs(t)), Pi.get(t);
}
var rl = /* @__PURE__ */ new WeakMap(), _i = {};
function nl(r, t) {
  for (var e = rl, n = 0; n < t.length; n += 1) {
    var i = t[n];
    e.has(i) || e.set(i, /* @__PURE__ */ new WeakMap()), e = e.get(i);
  }
  return e.has(_i) || e.set(_i, r()), e.get(_i);
}
var uo = /* @__PURE__ */ new WeakMap();
function Dr(r) {
  var t = uo.get(r) || "";
  return t || (Object.keys(r).forEach(function(e) {
    var n = r[e];
    t += e, n instanceof Vs ? t += n.id : n && Y(n) === "object" ? t += Dr(n) : t += n;
  }), t = Ur(t), uo.set(r, t)), t;
}
function co(r, t) {
  return Ur("".concat(t, "_").concat(Dr(r)));
}
var qi = Ue();
function Yt(r) {
  return typeof r == "number" ? "".concat(r, "px") : r;
}
function qn(r, t, e) {
  var n, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (a)
    return r;
  var o = T(T({}, i), {}, (n = {}, x(n, yr, t), x(n, vt, e), n)), s = Object.keys(o).map(function(u) {
    var c = o[u];
    return c ? "".concat(u, '="').concat(c, '"') : null;
  }).filter(function(u) {
    return u;
  }).join(" ");
  return "<style ".concat(s, ">").concat(r, "</style>");
}
var Vn = function(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(e ? "".concat(e, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, il = function(t, e, n) {
  return Object.keys(t).length ? ".".concat(e).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(i) {
    var a = z(i, 2), o = a[0], s = a[1];
    return "".concat(o, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Is = function(t, e, n) {
  var i = {}, a = {};
  return Object.entries(t).forEach(function(o) {
    var s, u, c = z(o, 2), l = c[0], f = c[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[l])
      a[l] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(n != null && (u = n.ignore) !== null && u !== void 0 && u[l])) {
      var v, g = Vn(l, n?.prefix);
      i[g] = typeof f == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[l]) ? "".concat(f, "px") : String(f), a[l] = "var(".concat(g, ")");
    }
  }), [a, il(i, e, {
    scope: n?.scope
  })];
}, lo = process.env.NODE_ENV !== "test" && Ue() ? p.useLayoutEffect : p.useEffect, je = function(t, e) {
  var n = p.useRef(!0);
  lo(function() {
    return t(n.current);
  }, e), lo(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, fo = function(t, e) {
  je(function(n) {
    if (!n)
      return t();
  }, e);
}, al = T({}, p), vo = al.useInsertionEffect, ol = function(t, e, n) {
  p.useMemo(t, n), je(function() {
    return e(!0);
  }, n);
}, sl = vo ? function(r, t, e) {
  return vo(function() {
    return r(), t();
  }, e);
} : ol, ul = T({}, p), cl = ul.useInsertionEffect, ll = function(t) {
  var e = [], n = !1;
  function i(a) {
    if (n) {
      process.env.NODE_ENV !== "production" && gr(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, fl = function() {
  return function(t) {
    t();
  };
}, dl = typeof cl < "u" ? ll : fl;
function vl() {
  return !1;
}
var Ui = !1;
function hl() {
  return Ui;
}
const ml = process.env.NODE_ENV === "production" ? vl : hl;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Pn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Pn && typeof Pn.webpackHotUpdate == "function") {
    var gl = Pn.webpackHotUpdate;
    Pn.webpackHotUpdate = function() {
      return Ui = !0, setTimeout(function() {
        Ui = !1;
      }, 0), gl.apply(void 0, arguments);
    };
  }
}
function Na(r, t, e, n, i) {
  var a = p.useContext(ti), o = a.cache, s = [r].concat(q(t)), u = Bi(s), c = dl([u]), l = ml(), f = function(h) {
    o.opUpdate(u, function(d) {
      var b = d || [void 0, void 0], y = z(b, 2), S = y[0], P = S === void 0 ? 0 : S, w = y[1], E = w;
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
  var g = v[1];
  return sl(function() {
    i?.(g);
  }, function(m) {
    return f(function(h) {
      var d = z(h, 2), b = d[0], y = d[1];
      return m && b === 0 && i?.(g), [b + 1, y];
    }), function() {
      o.opUpdate(u, function(h) {
        var d = h || [], b = z(d, 2), y = b[0], S = y === void 0 ? 0 : y, P = b[1], w = S - 1;
        return w === 0 ? (c(function() {
          (m || !o.opGet(u)) && n?.(P, !1);
        }), null) : [S - 1, P];
      });
    };
  }, [u]), g;
}
var pl = {}, yl = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", qt = /* @__PURE__ */ new Map();
function bl(r) {
  qt.set(r, (qt.get(r) || 0) + 1);
}
function wl(r, t) {
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
var Sl = 0;
function El(r, t) {
  qt.set(r, (qt.get(r) || 0) - 1);
  var e = Array.from(qt.keys()), n = e.filter(function(i) {
    var a = qt.get(i) || 0;
    return a <= 0;
  });
  e.length - n.length > Sl && n.forEach(function(i) {
    wl(i, t), qt.delete(i);
  });
}
var Cl = function(t, e, n, i) {
  var a = n.getDerivativeToken(t), o = T(T({}, a), e);
  return i && (o = i(o)), o;
}, js = "token";
function xl(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Hr(ti), i = n.cache.instanceId, a = n.container, o = e.salt, s = o === void 0 ? "" : o, u = e.override, c = u === void 0 ? pl : u, l = e.formatToken, f = e.getComputedToken, v = e.cssVar, g = nl(function() {
    return Object.assign.apply(Object, [{}].concat(q(t)));
  }, t), m = Dr(g), h = Dr(c), d = v ? Dr(v) : "", b = Na(js, [s, r.id, m, h, d], function() {
    var y, S = f ? f(g, c, r) : Cl(g, c, r, l), P = T({}, S), w = "";
    if (v) {
      var E = Is(S, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), C = z(E, 2);
      S = C[0], w = C[1];
    }
    var _ = co(S, s);
    S._tokenKey = _, P._tokenKey = co(P, s);
    var R = (y = v?.key) !== null && y !== void 0 ? y : _;
    S._themeKey = R, bl(R);
    var F = "".concat(yl, "-").concat(Ur(_));
    return S._hashId = F, [S, F, P, w, v?.key || ""];
  }, function(y) {
    El(y[0]._themeKey, i);
  }, function(y) {
    var S = z(y, 4), P = S[0], w = S[3];
    if (v && w) {
      var E = Gt(w, Ur("css-variables-".concat(P._themeKey)), {
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
var Pl = function(t, e, n) {
  var i = z(t, 5), a = i[2], o = i[3], s = i[4], u = n || {}, c = u.plain;
  if (!o)
    return null;
  var l = a._tokenKey, f = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, g = qn(o, s, l, v, c);
  return [f, l, g];
}, _l = {
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
}, Ls = "comm", Ds = "rule", zs = "decl", Ol = "@import", Tl = "@namespace", Rl = "@keyframes", Fl = "@layer", Hs = Math.abs, $a = String.fromCharCode;
function Ws(r) {
  return r.trim();
}
function In(r, t, e) {
  return r.replace(t, e);
}
function kl(r, t, e) {
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
function Al(r) {
  return r.length;
}
function _n(r, t) {
  return t.push(r), r;
}
var ri = 1, wr = 1, Bs = 0, nt = 0, Ce = 0, Er = "";
function Va(r, t, e, n, i, a, o, s) {
  return { value: r, root: t, parent: e, type: n, props: i, children: a, line: ri, column: wr, length: o, return: "", siblings: s };
}
function Ml() {
  return Ce;
}
function Nl() {
  return Ce = nt > 0 ? hr(Er, --nt) : 0, wr--, Ce === 10 && (wr = 1, ri--), Ce;
}
function ht() {
  return Ce = nt < Bs ? hr(Er, nt++) : 0, wr++, Ce === 10 && (wr = 1, ri++), Ce;
}
function $t() {
  return hr(Er, nt);
}
function jn() {
  return nt;
}
function ni(r, t) {
  return br(Er, r, t);
}
function Xr(r) {
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
function $l(r) {
  return ri = wr = 1, Bs = pt(Er = r), nt = 0, [];
}
function Vl(r) {
  return Er = "", r;
}
function Oi(r) {
  return Ws(ni(nt - 1, Gi(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function Il(r) {
  for (; (Ce = $t()) && Ce < 33; )
    ht();
  return Xr(r) > 2 || Xr(Ce) > 3 ? "" : " ";
}
function jl(r, t) {
  for (; --t && ht() && !(Ce < 48 || Ce > 102 || Ce > 57 && Ce < 65 || Ce > 70 && Ce < 97); )
    ;
  return ni(r, jn() + (t < 6 && $t() == 32 && ht() == 32));
}
function Gi(r) {
  for (; ht(); )
    switch (Ce) {
      // ] ) " '
      case r:
        return nt;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && Gi(Ce);
        break;
      // (
      case 40:
        r === 41 && Gi(r);
        break;
      // \
      case 92:
        ht();
        break;
    }
  return nt;
}
function Ll(r, t) {
  for (; ht() && r + Ce !== 57; )
    if (r + Ce === 84 && $t() === 47)
      break;
  return "/*" + ni(t, nt - 1) + "*" + $a(r === 47 ? r : ht());
}
function Dl(r) {
  for (; !Xr($t()); )
    ht();
  return ni(r, nt);
}
function zl(r) {
  return Vl(Ln("", null, null, null, [""], r = $l(r), 0, [0], r));
}
function Ln(r, t, e, n, i, a, o, s, u) {
  for (var c = 0, l = 0, f = o, v = 0, g = 0, m = 0, h = 1, d = 1, b = 1, y = 0, S = "", P = i, w = a, E = n, C = S; d; )
    switch (m = y, y = ht()) {
      // (
      case 40:
        if (m != 108 && hr(C, f - 1) == 58) {
          kl(C += In(Oi(y), "&", "&\f"), "&\f", Hs(c ? s[c - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        C += Oi(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        C += Il(m);
        break;
      // \
      case 92:
        C += jl(jn() - 1, 7);
        continue;
      // /
      case 47:
        switch ($t()) {
          case 42:
          case 47:
            _n(Hl(Ll(ht(), jn()), t, e, u), u), (Xr(m || 1) == 5 || Xr($t() || 1) == 5) && pt(C) && br(C, -1, void 0) !== " " && (C += " ");
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
            b == -1 && (C = In(C, /\f/g, "")), g > 0 && (pt(C) - f || h === 0 && m === 47) && _n(g > 32 ? mo(C + ";", n, e, f - 1, u) : mo(In(C, " ", "") + ";", n, e, f - 2, u), u);
            break;
          // @ ;
          case 59:
            C += ";";
          // { rule/at-rule
          default:
            if (_n(E = ho(C, t, e, c, l, i, s, S, P = [], w = [], f, a), a), y === 123)
              if (l === 0)
                Ln(C, t, E, E, P, a, f, s, w);
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
                l ? Ln(r, E, E, n && _n(ho(r, E, E, 0, 0, i, s, S, i, P = [], f, w), w), i, w, f, s, n ? P : w) : Ln(C, E, E, E, [""], w, 0, s, w);
              }
        }
        c = l = g = 0, h = b = 1, S = C = "", f = o;
        break;
      // :
      case 58:
        f = 1 + pt(C), g = m;
      default:
        if (h < 1) {
          if (y == 123)
            --h;
          else if (y == 125 && h++ == 0 && Nl() == 125)
            continue;
        }
        switch (C += $a(y), y * h) {
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
            $t() === 45 && (C += Oi(ht())), v = $t(), l = f = pt(S = C += Dl(jn())), y++;
            break;
          // -
          case 45:
            m === 45 && pt(C) == 2 && (h = 0);
        }
    }
  return a;
}
function ho(r, t, e, n, i, a, o, s, u, c, l, f) {
  for (var v = i - 1, g = i === 0 ? a : [""], m = Al(g), h = 0, d = 0, b = 0; h < n; ++h)
    for (var y = 0, S = br(r, v + 1, v = Hs(d = o[h])), P = r; y < m; ++y)
      (P = Ws(d > 0 ? g[y] + " " + S : In(S, /&\f/g, g[y]))) && (u[b++] = P);
  return Va(r, t, e, i === 0 ? Ds : s, u, c, l, f);
}
function Hl(r, t, e, n) {
  return Va(r, t, e, Ls, $a(Ml()), br(r, 2, -2), 0, n);
}
function mo(r, t, e, n, i) {
  return Va(r, t, e, zs, br(r, 0, n), br(r, n + 1, -1), n, i);
}
function Xi(r, t) {
  for (var e = "", n = 0; n < r.length; n++)
    e += t(r[n], n, r, t) || "";
  return e;
}
function Wl(r, t, e, n) {
  switch (r.type) {
    case Fl:
      if (r.children.length) break;
    case Ol:
    case Tl:
    case zs:
      return r.return = r.return || r.value;
    case Ls:
      return "";
    case Rl:
      return r.return = r.value + "{" + Xi(r.children, n) + "}";
    case Ds:
      if (!pt(r.value = r.props.join(","))) return "";
  }
  return pt(e = Xi(r.children, n)) ? r.return = r.value + "{" + e + "}" : "";
}
function qs(r, t) {
  var e = t.path, n = t.parentSelectors;
  me(!1, "[Ant Design CSS-in-JS] ".concat(e ? "Error in ".concat(e, ": ") : "").concat(r).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var Bl = function(t, e, n) {
  if (t === "content") {
    var i = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof e != "string" || a.indexOf(e) === -1 && !i.test(e) && (e.charAt(0) !== e.charAt(e.length - 1) || e.charAt(0) !== '"' && e.charAt(0) !== "'")) && qs("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(e, "\"'`."), n);
  }
}, ql = function(t, e, n) {
  t === "animation" && n.hashId && e !== "none" && qs("You seem to be using hashed animation '".concat(e, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, go = "data-ant-cssinjs-cache-path", Us = "_FILE_STYLE__", Xt, Gs = !0;
function Ul() {
  if (!Xt && (Xt = {}, Ue())) {
    var r = document.createElement("div");
    r.className = go, r.style.position = "fixed", r.style.visibility = "hidden", r.style.top = "-9999px", document.body.appendChild(r);
    var t = getComputedStyle(r).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(i) {
      var a = i.split(":"), o = z(a, 2), s = o[0], u = o[1];
      Xt[s] = u;
    });
    var e = document.querySelector("style[".concat(go, "]"));
    if (e) {
      var n;
      Gs = !1, (n = e.parentNode) === null || n === void 0 || n.removeChild(e);
    }
    document.body.removeChild(r);
  }
}
function Gl(r) {
  return Ul(), !!Xt[r];
}
function Xl(r) {
  var t = Xt[r], e = null;
  if (t && Ue())
    if (Gs)
      e = Us;
    else {
      var n = document.querySelector("style[".concat(vt, '="').concat(Xt[r], '"]'));
      n ? e = n.innerHTML : delete Xt[r];
    }
  return [e, t];
}
var Xs = "_skip_check_", Ks = "_multi_value_";
function Dn(r) {
  var t = Xi(zl(r), Wl);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Kl(r) {
  return Y(r) === "object" && r && (Xs in r || Ks in r);
}
function po(r, t, e) {
  if (!t)
    return r;
  var n = ".".concat(t), i = e === "low" ? ":where(".concat(n, ")") : n, a = r.split(",").map(function(o) {
    var s, u = o.trim().split(/\s+/), c = u[0] || "", l = ((s = c.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return c = "".concat(l).concat(i).concat(c.slice(l.length)), [c].concat(q(u.slice(1))).join(" ");
  });
  return a.join(",");
}
var Yl = function r(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, i = n.root, a = n.injectHash, o = n.parentSelectors, s = e.hashId, u = e.layer, c = e.path, l = e.hashPriority, f = e.transformers, v = f === void 0 ? [] : f, g = e.linters, m = g === void 0 ? [] : g, h = "", d = {};
  function b(P) {
    var w = P.getName(s);
    if (!d[w]) {
      var E = r(P.style, e, {
        root: !1,
        parentSelectors: o
      }), C = z(E, 1), _ = C[0];
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
        var R;
        return (_ == null || (R = _.visit) === null || R === void 0 ? void 0 : R.call(_, C)) || C;
      }, w);
      Object.keys(E).forEach(function(C) {
        var _ = E[C];
        if (Y(_) === "object" && _ && (C !== "animationName" || !_._keyframe) && !Kl(_)) {
          var R = !1, F = C.trim(), A = !1;
          (i || a) && s ? F.startsWith("@") ? R = !0 : F === "&" ? F = po("", s, l) : F = po(C, s, l) : i && !s && (F === "&" || F === "") && (F = "", A = !0);
          var M = r(_, e, {
            root: A,
            injectHash: R,
            parentSelectors: [].concat(q(o), [F])
          }), N = z(M, 2), k = N[0], j = N[1];
          d = T(T({}, d), j), h += "".concat(F).concat(k);
        } else {
          let H = function(X, O) {
            process.env.NODE_ENV !== "production" && (Y(_) !== "object" || !(_ != null && _[Xs])) && [Bl, ql].concat(q(m)).forEach(function(B) {
              return B(X, O, {
                path: c,
                hashId: s,
                parentSelectors: o
              });
            });
            var I = X.replace(/[A-Z]/g, function(B) {
              return "-".concat(B.toLowerCase());
            }), V = O;
            !_l[X] && typeof V == "number" && V !== 0 && (V = "".concat(V, "px")), X === "animationName" && O !== null && O !== void 0 && O._keyframe && (b(O), V = O.getName(s)), h += "".concat(I, ":").concat(V, ";");
          };
          var $, L = ($ = _?.value) !== null && $ !== void 0 ? $ : _;
          Y(_) === "object" && _ !== null && _ !== void 0 && _[Ks] && Array.isArray(L) ? L.forEach(function(X) {
            H(C, X);
          }) : H(C, L);
        }
      });
    }
  }), i ? u && (h && (h = "@layer ".concat(u.name, " {").concat(h, "}")), u.dependencies && (d["@layer ".concat(u.name)] = u.dependencies.map(function(P) {
    return "@layer ".concat(P, ", ").concat(u.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, d];
};
function Ys(r, t) {
  return Ur("".concat(r.join("%")).concat(t));
}
function Zl() {
  return null;
}
var Zs = "style";
function yo(r, t) {
  var e = r.token, n = r.path, i = r.hashId, a = r.layer, o = r.nonce, s = r.clientOnly, u = r.order, c = u === void 0 ? 0 : u, l = p.useContext(ti), f = l.autoClear, v = l.mock, g = l.defaultCache, m = l.hashPriority, h = l.container, d = l.ssrInline, b = l.transformers, y = l.linters, S = l.cache, P = l.layer, w = e._tokenKey, E = [w];
  P && E.push("layer"), E.push.apply(E, q(n));
  var C = qi;
  process.env.NODE_ENV !== "production" && v !== void 0 && (C = v === "client");
  var _ = Na(
    Zs,
    E,
    // Create cache if needed
    function() {
      var N = E.join("|");
      if (Gl(N)) {
        var k = Xl(N), j = z(k, 2), $ = j[0], L = j[1];
        if ($)
          return [$, w, L, {}, s, c];
      }
      var H = t(), X = Yl(H, {
        hashId: i,
        hashPriority: m,
        layer: P ? a : void 0,
        path: n.join("-"),
        transformers: b,
        linters: y
      }), O = z(X, 2), I = O[0], V = O[1], B = Dn(I), U = Ys(E, B);
      return [B, w, U, V, s, c];
    },
    // Remove cache if no need
    function(N, k) {
      var j = z(N, 3), $ = j[2];
      (k || f) && qi && Gr($, {
        mark: vt
      });
    },
    // Effect: Inject style here
    function(N) {
      var k = z(N, 4), j = k[0];
      k[1];
      var $ = k[2], L = k[3];
      if (C && j !== Us) {
        var H = {
          mark: vt,
          prepend: P ? !1 : "queue",
          attachTo: h,
          priority: c
        }, X = typeof o == "function" ? o() : o;
        X && (H.csp = {
          nonce: X
        });
        var O = [], I = [];
        Object.keys(L).forEach(function(B) {
          B.startsWith("@layer") ? O.push(B) : I.push(B);
        }), O.forEach(function(B) {
          Gt(Dn(L[B]), "_layer-".concat(B), T(T({}, H), {}, {
            prepend: !0
          }));
        });
        var V = Gt(j, $, H);
        V[Nt] = S.instanceId, V.setAttribute(yr, w), process.env.NODE_ENV !== "production" && V.setAttribute(Qc, E.join("|")), I.forEach(function(B) {
          Gt(Dn(L[B]), "_effect-".concat(B), H);
        });
      }
    }
  ), R = z(_, 3), F = R[0], A = R[1], M = R[2];
  return function(N) {
    var k;
    if (!d || C || !g)
      k = /* @__PURE__ */ p.createElement(Zl, null);
    else {
      var j;
      k = /* @__PURE__ */ p.createElement("style", bt({}, (j = {}, x(j, yr, A), x(j, vt, M), j), {
        dangerouslySetInnerHTML: {
          __html: F
        }
      }));
    }
    return /* @__PURE__ */ p.createElement(p.Fragment, null, k, N);
  };
}
var Ql = function(t, e, n) {
  var i = z(t, 6), a = i[0], o = i[1], s = i[2], u = i[3], c = i[4], l = i[5], f = n || {}, v = f.plain;
  if (c)
    return null;
  var g = a, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(l)
  };
  return g = qn(a, o, s, m, v), u && Object.keys(u).forEach(function(h) {
    if (!e[h]) {
      e[h] = !0;
      var d = Dn(u[h]), b = qn(d, o, "_effect-".concat(h), m, v);
      h.startsWith("@layer") ? g = b + g : g += b;
    }
  }), [l, s, g];
}, Qs = "cssVar", Jl = function(t, e) {
  var n = t.key, i = t.prefix, a = t.unitless, o = t.ignore, s = t.token, u = t.scope, c = u === void 0 ? "" : u, l = Hr(ti), f = l.cache.instanceId, v = l.container, g = s._tokenKey, m = [].concat(q(t.path), [n, c, g]), h = Na(Qs, m, function() {
    var d = e(), b = Is(d, n, {
      prefix: i,
      unitless: a,
      ignore: o,
      scope: c
    }), y = z(b, 2), S = y[0], P = y[1], w = Ys(m, P);
    return [S, P, w, n];
  }, function(d) {
    var b = z(d, 3), y = b[2];
    qi && Gr(y, {
      mark: vt
    });
  }, function(d) {
    var b = z(d, 3), y = b[1], S = b[2];
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
}, ef = function(t, e, n) {
  var i = z(t, 4), a = i[1], o = i[2], s = i[3], u = n || {}, c = u.plain;
  if (!a)
    return null;
  var l = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(l)
  }, v = qn(a, s, o, f, c);
  return [l, o, v];
}, Mr;
Mr = {}, x(Mr, Zs, Ql), x(Mr, js, Pl), x(Mr, Qs, ef);
var at = /* @__PURE__ */ function() {
  function r(t, e) {
    Ne(this, r), x(this, "name", void 0), x(this, "style", void 0), x(this, "_keyframe", !0), this.name = t, this.style = e;
  }
  return $e(r, [{
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
function tf(r) {
  return ks(r) || Os(r) || ka(r) || As();
}
function yt(r, t) {
  for (var e = r, n = 0; n < t.length; n += 1) {
    if (e == null)
      return;
    e = e[t[n]];
  }
  return e;
}
function Js(r, t, e, n) {
  if (!t.length)
    return e;
  var i = tf(t), a = i[0], o = i.slice(1), s;
  return !r && typeof a == "number" ? s = [] : Array.isArray(r) ? s = q(r) : s = T({}, r), n && e === void 0 && o.length === 1 ? delete s[a][o[0]] : s[a] = Js(s[a], o, e, n), s;
}
function ft(r, t, e) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && e === void 0 && !yt(r, t.slice(0, -1)) ? r : Js(r, t, e, n);
}
function rf(r) {
  return Y(r) === "object" && r !== null && Object.getPrototypeOf(r) === Object.prototype;
}
function bo(r) {
  return Array.isArray(r) ? [] : {};
}
var nf = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function jr() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  var n = bo(t[0]);
  return t.forEach(function(i) {
    function a(o, s) {
      var u = new Set(s), c = yt(i, o), l = Array.isArray(c);
      if (l || rf(c)) {
        if (!u.has(c)) {
          u.add(c);
          var f = yt(n, o);
          l ? n = ft(n, o, []) : (!f || Y(f) !== "object") && (n = ft(n, o, bo(c))), nf(c).forEach(function(v) {
            a([].concat(q(o), [v]), u);
          });
        }
      } else
        n = ft(n, o, c);
    }
    a([]);
  }), n;
}
function eu() {
}
let Ct = null;
function af() {
  Ct = null, hs();
}
let tu = eu;
process.env.NODE_ENV !== "production" && (tu = (r, t, e) => {
  me(r, `[antd: ${t}] ${e}`), process.env.NODE_ENV === "test" && af();
});
const of = tu, sf = /* @__PURE__ */ p.createContext({}), ru = process.env.NODE_ENV !== "production" ? (r) => {
  const {
    strict: t
  } = p.useContext(sf), e = (n, i, a) => {
    if (!n)
      if (t === !1 && i === "deprecated") {
        const o = Ct;
        Ct || (Ct = {}), Ct[r] = Ct[r] || [], Ct[r].includes(a || "") || Ct[r].push(a || ""), o || console.warn("[antd] There exists deprecated usage in your code:", Ct);
      } else
        process.env.NODE_ENV !== "production" && of(n, r, a);
  };
  return e.deprecated = (n, i, a, o) => {
    e(n, "deprecated", `\`${i}\` is deprecated. Please use \`${a}\` instead.${o ? ` ${o}` : ""}`);
  }, e;
} : () => {
  const r = () => {
  };
  return r.deprecated = eu, r;
}, nu = {
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
}, Un = Object.assign(Object.assign({}, nu), {
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
}), Te = Math.round;
function Ti(r, t) {
  const e = r.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = e.map((i) => parseFloat(i));
  for (let i = 0; i < 3; i += 1)
    n[i] = t(n[i] || 0, e[i] || "", i);
  return e[3] ? n[3] = e[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const wo = (r, t, e) => e === 0 ? r : r / 100;
function Nr(r, t) {
  const e = t || 255;
  return r > e ? e : r < 0 ? 0 : r;
}
class Re {
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
    } else if (t instanceof Re)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (e("rgb"))
      this.r = Nr(t.r), this.g = Nr(t.g), this.b = Nr(t.b), this.a = typeof t.a == "number" ? Nr(t.a, 1) : 1;
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
      t === 0 ? this._h = 0 : this._h = Te(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
      r: Te(a("r")),
      g: Te(a("g")),
      b: Te(a("b")),
      a: Te(a("a") * 100) / 100
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
    const e = this._c(t), n = this.a + e.a * (1 - this.a), i = (a) => Te((this[a] * this.a + e[a] * e.a * (1 - this.a)) / n);
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
      const a = Te(this.a * 255).toString(16);
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
    const t = this.getHue(), e = Te(this.getSaturation() * 100), n = Te(this.getLightness() * 100);
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
    return i[t] = Nr(e, n), i;
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
      const v = Te(n * 255);
      this.r = v, this.g = v, this.b = v;
    }
    let a = 0, o = 0, s = 0;
    const u = t / 60, c = (1 - Math.abs(2 * n - 1)) * e, l = c * (1 - Math.abs(u % 2 - 1));
    u >= 0 && u < 1 ? (a = c, o = l) : u >= 1 && u < 2 ? (a = l, o = c) : u >= 2 && u < 3 ? (o = c, s = l) : u >= 3 && u < 4 ? (o = l, s = c) : u >= 4 && u < 5 ? (a = l, s = c) : u >= 5 && u < 6 && (a = c, s = l);
    const f = n - c / 2;
    this.r = Te((a + f) * 255), this.g = Te((o + f) * 255), this.b = Te((s + f) * 255);
  }
  fromHsv({
    h: t,
    s: e,
    v: n,
    a: i
  }) {
    this._h = t % 360, this._s = e, this._v = n, this.a = typeof i == "number" ? i : 1;
    const a = Te(n * 255);
    if (this.r = a, this.g = a, this.b = a, e <= 0)
      return;
    const o = t / 60, s = Math.floor(o), u = o - s, c = Te(n * (1 - e) * 255), l = Te(n * (1 - e * u) * 255), f = Te(n * (1 - e * (1 - u)) * 255);
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
    const e = Ti(t, wo);
    this.fromHsv({
      h: e[0],
      s: e[1],
      v: e[2],
      a: e[3]
    });
  }
  fromHslString(t) {
    const e = Ti(t, wo);
    this.fromHsl({
      h: e[0],
      s: e[1],
      l: e[2],
      a: e[3]
    });
  }
  fromRgbString(t) {
    const e = Ti(t, (n, i) => (
      // Convert percentage to number. e.g. 50% -> 128
      i.includes("%") ? Te(n / 100 * 255) : n
    ));
    this.r = e[0], this.g = e[1], this.b = e[2], this.a = e[3];
  }
}
var On = 2, So = 0.16, uf = 0.05, cf = 0.05, lf = 0.15, iu = 5, au = 4, ff = [{
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
function Eo(r, t, e) {
  var n;
  return Math.round(r.h) >= 60 && Math.round(r.h) <= 240 ? n = e ? Math.round(r.h) - On * t : Math.round(r.h) + On * t : n = e ? Math.round(r.h) + On * t : Math.round(r.h) - On * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Co(r, t, e) {
  if (r.h === 0 && r.s === 0)
    return r.s;
  var n;
  return e ? n = r.s - So * t : t === au ? n = r.s + So : n = r.s + uf * t, n > 1 && (n = 1), e && t === iu && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function xo(r, t, e) {
  var n;
  return e ? n = r.v + cf * t : n = r.v - lf * t, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function ou(r) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, e = [], n = new Re(r), i = n.toHsv(), a = iu; a > 0; a -= 1) {
    var o = new Re({
      h: Eo(i, a, !0),
      s: Co(i, a, !0),
      v: xo(i, a, !0)
    });
    e.push(o);
  }
  e.push(n);
  for (var s = 1; s <= au; s += 1) {
    var u = new Re({
      h: Eo(i, s),
      s: Co(i, s),
      v: xo(i, s)
    });
    e.push(u);
  }
  return t.theme === "dark" ? ff.map(function(c) {
    var l = c.index, f = c.amount;
    return new Re(t.backgroundColor || "#141414").mix(e[l], f).toHexString();
  }) : e.map(function(c) {
    return c.toHexString();
  });
}
var Ri = {
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
}, Ki = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Ki.primary = Ki[5];
var Yi = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Yi.primary = Yi[5];
var Zi = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Zi.primary = Zi[5];
var Qi = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Qi.primary = Qi[5];
var Ji = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Ji.primary = Ji[5];
var ea = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
ea.primary = ea[5];
var ta = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
ta.primary = ta[5];
var ra = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
ra.primary = ra[5];
var na = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
na.primary = na[5];
var ia = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
ia.primary = ia[5];
var aa = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
aa.primary = aa[5];
var oa = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
oa.primary = oa[5];
var sa = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
sa.primary = sa[5];
var Fi = {
  red: Ki,
  volcano: Yi,
  orange: Zi,
  gold: Qi,
  yellow: Ji,
  lime: ea,
  green: ta,
  cyan: ra,
  blue: na,
  geekblue: ia,
  purple: aa,
  magenta: oa,
  grey: sa
};
function df(r, {
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
  } = r, l = t(s), f = t(n), v = t(i), g = t(a), m = t(o), h = e(u, c), d = r.colorLink || r.colorInfo, b = t(d), y = new Re(g[1]).mix(new Re(g[3]), 50).toHexString();
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
    colorErrorBg: g[1],
    colorErrorBgHover: g[2],
    colorErrorBgFilledHover: y,
    colorErrorBgActive: g[3],
    colorErrorBorder: g[3],
    colorErrorBorderHover: g[4],
    colorErrorHover: g[5],
    colorError: g[6],
    colorErrorActive: g[7],
    colorErrorTextHover: g[8],
    colorErrorText: g[9],
    colorErrorTextActive: g[10],
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
    colorInfoBg: m[1],
    colorInfoBgHover: m[2],
    colorInfoBorder: m[3],
    colorInfoBorderHover: m[4],
    colorInfoHover: m[4],
    colorInfo: m[6],
    colorInfoActive: m[7],
    colorInfoTextHover: m[8],
    colorInfoText: m[9],
    colorInfoTextActive: m[10],
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new Re("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const vf = (r) => {
  let t = r, e = r, n = r, i = r;
  return r < 6 && r >= 5 ? t = r + 1 : r < 16 && r >= 6 ? t = r + 2 : r >= 16 && (t = 16), r < 7 && r >= 5 ? e = 4 : r < 8 && r >= 7 ? e = 5 : r < 14 && r >= 8 ? e = 6 : r < 16 && r >= 14 ? e = 7 : r >= 16 && (e = 8), r < 6 && r >= 2 ? n = 1 : r >= 6 && (n = 2), r > 4 && r < 8 ? i = 4 : r >= 8 && (i = 6), {
    borderRadius: r,
    borderRadiusXS: n,
    borderRadiusSM: e,
    borderRadiusLG: t,
    borderRadiusOuter: i
  };
};
function hf(r) {
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
  }, vf(n));
}
const mf = (r) => {
  const {
    controlHeight: t
  } = r;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function gf(r) {
  return (r + 8) / r;
}
function pf(r) {
  const t = Array.from({
    length: 10
  }).map((e, n) => {
    const i = n - 1, a = r * Math.pow(Math.E, i / 5), o = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(o / 2) * 2;
  });
  return t[1] = r, t.map((e) => ({
    size: e,
    lineHeight: gf(e)
  }));
}
const yf = (r) => {
  const t = pf(r), e = t.map((l) => l.size), n = t.map((l) => l.lineHeight), i = e[1], a = e[0], o = e[2], s = n[1], u = n[0], c = n[2];
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
function bf(r) {
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
const Qe = (r, t) => new Re(r).setA(t).toRgbString(), $r = (r, t) => new Re(r).darken(t).toHexString(), wf = (r) => {
  const t = ou(r);
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
}, Sf = (r, t) => {
  const e = r || "#fff", n = t || "#000";
  return {
    colorBgBase: e,
    colorTextBase: n,
    colorText: Qe(n, 0.88),
    colorTextSecondary: Qe(n, 0.65),
    colorTextTertiary: Qe(n, 0.45),
    colorTextQuaternary: Qe(n, 0.25),
    colorFill: Qe(n, 0.15),
    colorFillSecondary: Qe(n, 0.06),
    colorFillTertiary: Qe(n, 0.04),
    colorFillQuaternary: Qe(n, 0.02),
    colorBgSolid: Qe(n, 1),
    colorBgSolidHover: Qe(n, 0.75),
    colorBgSolidActive: Qe(n, 0.95),
    colorBgLayout: $r(e, 4),
    colorBgContainer: $r(e, 0),
    colorBgElevated: $r(e, 0),
    colorBgSpotlight: Qe(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: $r(e, 15),
    colorBorderSecondary: $r(e, 6)
  };
};
function Ef(r) {
  Ri.pink = Ri.magenta, Fi.pink = Fi.magenta;
  const t = Object.keys(nu).map((e) => {
    const n = r[e] === Ri[e] ? Fi[e] : ou(r[e]);
    return Array.from({
      length: 10
    }, () => 1).reduce((i, a, o) => (i[`${e}-${o + 1}`] = n[o], i[`${e}${o + 1}`] = n[o], i), {});
  }).reduce((e, n) => (e = Object.assign(Object.assign({}, e), n), e), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), t), df(r, {
    generateColorPalettes: wf,
    generateNeutralColorPalettes: Sf
  })), yf(r.fontSize)), bf(r)), mf(r)), hf(r));
}
const Cf = tl(Ef), xf = {
  token: Un,
  override: {
    override: Un
  },
  hashed: !0
}, Pf = /* @__PURE__ */ ke.createContext(xf), Po = "ant", su = "anticon", _f = (r, t) => t || (r ? `${Po}-${r}` : Po), Kr = /* @__PURE__ */ p.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: _f,
  iconPrefixCls: su
}), {
  Consumer: Nh
} = Kr, _o = {};
function Of(r) {
  const t = p.useContext(Kr), {
    getPrefixCls: e,
    direction: n,
    getPopupContainer: i
  } = t, a = t[r];
  return Object.assign(Object.assign({
    classNames: _o,
    styles: _o
  }, a), {
    getPrefixCls: e,
    direction: n,
    getPopupContainer: i
  });
}
var uu = /* @__PURE__ */ $e(function r() {
  Ne(this, r);
}), cu = "CALC_UNIT", Tf = new RegExp(cu, "g");
function ki(r) {
  return typeof r == "number" ? "".concat(r).concat(cu) : r;
}
var Rf = /* @__PURE__ */ function(r) {
  Zt(e, r);
  var t = Qt(e);
  function e(n, i) {
    var a;
    Ne(this, e), a = t.call(this), x(Z(a), "result", ""), x(Z(a), "unitlessCssVar", void 0), x(Z(a), "lowPriority", void 0);
    var o = Y(n);
    return a.unitlessCssVar = i, n instanceof e ? a.result = "(".concat(n.result, ")") : o === "number" ? a.result = ki(n) : o === "string" && (a.result = n), a;
  }
  return $e(e, [{
    key: "add",
    value: function(i) {
      return i instanceof e ? this.result = "".concat(this.result, " + ").concat(i.getResult()) : (typeof i == "number" || typeof i == "string") && (this.result = "".concat(this.result, " + ").concat(ki(i))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(i) {
      return i instanceof e ? this.result = "".concat(this.result, " - ").concat(i.getResult()) : (typeof i == "number" || typeof i == "string") && (this.result = "".concat(this.result, " - ").concat(ki(i))), this.lowPriority = !0, this;
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
      }) && (u = !1), this.result = this.result.replace(Tf, u ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), e;
}(uu), Ff = /* @__PURE__ */ function(r) {
  Zt(e, r);
  var t = Qt(e);
  function e(n) {
    var i;
    return Ne(this, e), i = t.call(this), x(Z(i), "result", 0), n instanceof e ? i.result = n.result : typeof n == "number" && (i.result = n), i;
  }
  return $e(e, [{
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
}(uu), kf = function(t, e) {
  var n = t === "css" ? Rf : Ff;
  return function(i) {
    return new n(i, e);
  };
}, Oo = function(t, e) {
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
function Yr(r) {
  var t = p.useRef(!1), e = p.useState(r), n = z(e, 2), i = n[0], a = n[1];
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
function Ai(r) {
  return r !== void 0;
}
function Af(r, t) {
  var e = t || {}, n = e.defaultValue, i = e.value, a = e.onChange, o = e.postState, s = Yr(function() {
    return Ai(i) ? i : Ai(n) ? typeof n == "function" ? n() : n : r;
  }), u = z(s, 2), c = u[0], l = u[1], f = i !== void 0 ? i : c, v = o ? o(f) : f, g = tt(a), m = Yr([f]), h = z(m, 2), d = h[0], b = h[1];
  fo(function() {
    var S = d[0];
    c !== S && g(c, S);
  }, [d]), fo(function() {
    Ai(i) || l(i);
  }, [i]);
  var y = tt(function(S, P) {
    l(S, P), b([f], P);
  });
  return [v, y];
}
function To(r, t, e, n) {
  var i = T({}, t[r]);
  if (n != null && n.deprecatedTokens) {
    var a = n.deprecatedTokens;
    a.forEach(function(s) {
      var u = z(s, 2), c = u[0], l = u[1];
      if (process.env.NODE_ENV !== "production" && me(!(i != null && i[c]), "Component Token `".concat(String(c), "` of ").concat(String(r), " is deprecated. Please use `").concat(String(l), "` instead.")), i != null && i[c] || i != null && i[l]) {
        var f;
        (f = i[l]) !== null && f !== void 0 || (i[l] = i?.[c]);
      }
    });
  }
  var o = T(T({}, e), i);
  return Object.keys(o).forEach(function(s) {
    o[s] === t[s] && delete o[s];
  }), o;
}
var lu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", ua = !0;
function ii() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  if (!lu)
    return Object.assign.apply(Object, [{}].concat(t));
  ua = !1;
  var n = {};
  return t.forEach(function(i) {
    if (Y(i) === "object") {
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
  }), ua = !0, n;
}
var Ro = {};
function Mf() {
}
var Nf = function(t) {
  var e, n = t, i = Mf;
  return lu && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), n = new Proxy(t, {
    get: function(o, s) {
      if (ua) {
        var u;
        (u = e) === null || u === void 0 || u.add(s);
      }
      return o[s];
    }
  }), i = function(o, s) {
    var u;
    Ro[o] = {
      global: Array.from(e),
      component: T(T({}, (u = Ro[o]) === null || u === void 0 ? void 0 : u.component), s)
    };
  }), {
    token: n,
    keys: e,
    flush: i
  };
};
function Fo(r, t, e) {
  if (typeof e == "function") {
    var n;
    return e(ii(t, (n = t[r]) !== null && n !== void 0 ? n : {}));
  }
  return e ?? {};
}
function $f(r) {
  return r === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
        n[i] = arguments[i];
      return "max(".concat(n.map(function(a) {
        return Yt(a);
      }).join(","), ")");
    },
    min: function() {
      for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
        n[i] = arguments[i];
      return "min(".concat(n.map(function(a) {
        return Yt(a);
      }).join(","), ")");
    }
  };
}
var Vf = 1e3 * 60 * 10, If = /* @__PURE__ */ function() {
  function r() {
    Ne(this, r), x(this, "map", /* @__PURE__ */ new Map()), x(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), x(this, "nextID", 0), x(this, "lastAccessBeat", /* @__PURE__ */ new Map()), x(this, "accessBeat", 0);
  }
  return $e(r, [{
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
        return a && Y(a) === "object" ? "obj_".concat(n.getObjectID(a)) : "".concat(Y(a), "_").concat(a);
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
          n - i > Vf && (e.map.delete(a), e.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), r;
}(), ko = new If();
function jf(r, t) {
  return ke.useMemo(function() {
    var e = ko.get(t);
    if (e)
      return e;
    var n = r();
    return ko.set(t, n), n;
  }, t);
}
var Lf = function() {
  return {};
};
function Df(r) {
  var t = r.useCSP, e = t === void 0 ? Lf : t, n = r.useToken, i = r.usePrefix, a = r.getResetStyles, o = r.getCommonStyle, s = r.getCompUnitless;
  function u(v, g, m, h) {
    var d = Array.isArray(v) ? v[0] : v;
    function b(_) {
      return "".concat(String(d)).concat(_.slice(0, 1).toUpperCase()).concat(_.slice(1));
    }
    var y = h?.unitless || {}, S = typeof s == "function" ? s(v) : {}, P = T(T({}, S), {}, x({}, b("zIndexPopup"), !0));
    Object.keys(y).forEach(function(_) {
      P[b(_)] = y[_];
    });
    var w = T(T({}, h), {}, {
      unitless: P,
      prefixToken: b
    }), E = l(v, g, m, w), C = c(d, m, w);
    return function(_) {
      var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _, F = E(_, R), A = z(F, 2), M = A[1], N = C(R), k = z(N, 2), j = k[0], $ = k[1];
      return [j, M, $];
    };
  }
  function c(v, g, m) {
    var h = m.unitless, d = m.injectStyle, b = d === void 0 ? !0 : d, y = m.prefixToken, S = m.ignore, P = function(C) {
      var _ = C.rootCls, R = C.cssVar, F = R === void 0 ? {} : R, A = n(), M = A.realToken;
      return Jl({
        path: [v],
        prefix: F.prefix,
        key: F.key,
        unitless: h,
        ignore: S,
        token: M,
        scope: _
      }, function() {
        var N = Fo(v, M, g), k = To(v, M, N, {
          deprecatedTokens: m?.deprecatedTokens
        });
        return Object.keys(N).forEach(function(j) {
          k[y(j)] = k[j], delete k[j];
        }), k;
      }), null;
    }, w = function(C) {
      var _ = n(), R = _.cssVar;
      return [function(F) {
        return b && R ? /* @__PURE__ */ ke.createElement(ke.Fragment, null, /* @__PURE__ */ ke.createElement(P, {
          rootCls: C,
          cssVar: R,
          component: v
        }), F) : F;
      }, R?.key];
    };
    return w;
  }
  function l(v, g, m) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = Array.isArray(v) ? v : [v, v], b = z(d, 1), y = b[0], S = d.join("-"), P = r.layer || {
      name: "antd"
    };
    return function(w) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w, C = n(), _ = C.theme, R = C.realToken, F = C.hashId, A = C.token, M = C.cssVar, N = i(), k = N.rootPrefixCls, j = N.iconPrefixCls, $ = e(), L = M ? "css" : "js", H = jf(function() {
        var U = /* @__PURE__ */ new Set();
        return M && Object.keys(h.unitless || {}).forEach(function(K) {
          U.add(Vn(K, M.prefix)), U.add(Vn(K, Oo(y, M.prefix)));
        }), kf(L, U);
      }, [L, y, M?.prefix]), X = $f(L), O = X.max, I = X.min, V = {
        theme: _,
        token: A,
        hashId: F,
        nonce: function() {
          return $.nonce;
        },
        clientOnly: h.clientOnly,
        layer: P,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof a == "function" && yo(T(T({}, V), {}, {
        clientOnly: !1,
        path: ["Shared", k]
      }), function() {
        return a(A, {
          prefix: {
            rootPrefixCls: k,
            iconPrefixCls: j
          },
          csp: $
        });
      });
      var B = yo(T(T({}, V), {}, {
        path: [S, w, j]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var U = Nf(A), K = U.token, te = U.flush, ne = Fo(y, R, m), J = ".".concat(w), re = To(y, R, ne, {
          deprecatedTokens: h.deprecatedTokens
        });
        M && ne && Y(ne) === "object" && Object.keys(ne).forEach(function(xe) {
          ne[xe] = "var(".concat(Vn(xe, Oo(y, M.prefix)), ")");
        });
        var Ee = ii(K, {
          componentCls: J,
          prefixCls: w,
          iconCls: ".".concat(j),
          antCls: ".".concat(k),
          calc: H,
          // @ts-ignore
          max: O,
          // @ts-ignore
          min: I
        }, M ? ne : re), Oe = g(Ee, {
          hashId: F,
          prefixCls: w,
          rootPrefixCls: k,
          iconPrefixCls: j
        });
        te(y, re);
        var ge = typeof o == "function" ? o(Ee, w, E, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : ge, Oe];
      });
      return [B, F];
    };
  }
  function f(v, g, m) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = l(v, g, m, T({
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
const Gn = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], zf = "5.26.4";
function Mi(r) {
  return r >= 0 && r <= 255;
}
function Tn(r, t) {
  const {
    r: e,
    g: n,
    b: i,
    a
  } = new Re(r).toRgb();
  if (a < 1)
    return r;
  const {
    r: o,
    g: s,
    b: u
  } = new Re(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const l = Math.round((e - o * (1 - c)) / c), f = Math.round((n - s * (1 - c)) / c), v = Math.round((i - u * (1 - c)) / c);
    if (Mi(l) && Mi(f) && Mi(v))
      return new Re({
        r: l,
        g: f,
        b: v,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new Re({
    r: e,
    g: n,
    b: i,
    a: 1
  }).toRgbString();
}
var Hf = function(r, t) {
  var e = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
    t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
  return e;
};
function fu(r) {
  const {
    override: t
  } = r, e = Hf(r, ["override"]), n = Object.assign({}, t);
  Object.keys(Un).forEach((v) => {
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
    colorSplit: Tn(i.colorBorderSecondary, i.colorBgContainer),
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
    colorErrorOutline: Tn(i.colorErrorBg, i.colorBgContainer),
    colorWarningOutline: Tn(i.colorWarningBg, i.colorBgContainer),
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
    controlOutline: Tn(i.colorPrimaryBg, i.colorBgContainer),
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
      0 1px 2px -2px ${new Re("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Re("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Re("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var Ao = function(r, t) {
  var e = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
    t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
  return e;
};
const du = {
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
}, Wf = {
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
}, Bf = {
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
}, vu = (r, t, e) => {
  const n = e.getDerivativeToken(r), {
    override: i
  } = t, a = Ao(t, ["override"]);
  let o = Object.assign(Object.assign({}, n), {
    override: i
  });
  return o = fu(o), a && Object.entries(a).forEach(([s, u]) => {
    const {
      theme: c
    } = u, l = Ao(u, ["theme"]);
    let f = l;
    c && (f = vu(Object.assign(Object.assign({}, o), l), {
      override: l
    }, c)), o[s] = f;
  }), o;
};
function Ia() {
  const {
    token: r,
    hashed: t,
    theme: e,
    override: n,
    cssVar: i
  } = ke.useContext(Pf), a = `${zf}-${t || ""}`, o = e || Cf, [s, u, c] = xl(o, [Un, r], {
    salt: a,
    override: n,
    getComputedToken: vu,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: fu,
    cssVar: i && {
      prefix: i.prefix,
      key: i.key,
      unitless: du,
      ignore: Wf,
      preserve: Bf
    }
  });
  return [o, c, t ? u : "", s, i];
}
const qf = (r, t = !1) => ({
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
}), Uf = () => ({
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
}), Gf = (r) => ({
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
}), Xf = (r, t, e, n) => {
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
}, Kf = (r) => ({
  [`.${r}`]: Object.assign(Object.assign({}, Uf()), {
    [`.${r} .${r}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Yf
} = Df({
  usePrefix: () => {
    const {
      getPrefixCls: r,
      iconPrefixCls: t
    } = Hr(Kr);
    return {
      rootPrefixCls: r(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [r, t, e, n, i] = Ia();
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
    } = Hr(Kr);
    return r ?? {};
  },
  getResetStyles: (r, t) => {
    var e;
    const n = Gf(r);
    return [n, {
      "&": n
    }, Kf((e = t?.prefix.iconPrefixCls) !== null && e !== void 0 ? e : su)];
  },
  getCommonStyle: Xf,
  getCompUnitless: () => du
});
function Zf(r, t) {
  return Gn.reduce((e, n) => {
    const i = r[`${n}1`], a = r[`${n}3`], o = r[`${n}6`], s = r[`${n}7`];
    return Object.assign(Object.assign({}, e), t(n, {
      lightColor: i,
      lightBorderColor: a,
      darkColor: o,
      textColor: s
    }));
  }, {});
}
var Qf = /* @__PURE__ */ p.createContext({}), Jf = /* @__PURE__ */ function(r) {
  Zt(e, r);
  var t = Qt(e);
  function e() {
    return Ne(this, e), t.apply(this, arguments);
  }
  return $e(e, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), e;
}(p.Component);
function ed(r) {
  var t = p.useReducer(function(s) {
    return s + 1;
  }, 0), e = z(t, 2), n = e[1], i = p.useRef(r), a = tt(function() {
    return i.current;
  }), o = tt(function(s) {
    i.current = typeof s == "function" ? s(i.current) : s, n();
  });
  return [a, o];
}
var Mt = "none", Rn = "appear", Fn = "enter", kn = "leave", Mo = "none", dt = "prepare", fr = "start", dr = "active", ja = "end", hu = "prepared";
function No(r, t) {
  var e = {};
  return e[r.toLowerCase()] = t.toLowerCase(), e["Webkit".concat(r)] = "webkit".concat(t), e["Moz".concat(r)] = "moz".concat(t), e["ms".concat(r)] = "MS".concat(t), e["O".concat(r)] = "o".concat(t.toLowerCase()), e;
}
function td(r, t) {
  var e = {
    animationend: No("Animation", "AnimationEnd"),
    transitionend: No("Transition", "TransitionEnd")
  };
  return r && ("AnimationEvent" in t || delete e.animationend.animation, "TransitionEvent" in t || delete e.transitionend.transition), e;
}
var rd = td(Ue(), typeof window < "u" ? window : {}), mu = {};
if (Ue()) {
  var nd = document.createElement("div");
  mu = nd.style;
}
var An = {};
function gu(r) {
  if (An[r])
    return An[r];
  var t = rd[r];
  if (t)
    for (var e = Object.keys(t), n = e.length, i = 0; i < n; i += 1) {
      var a = e[i];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in mu)
        return An[r] = t[a], An[r];
    }
  return "";
}
var pu = gu("animationend"), yu = gu("transitionend"), bu = !!(pu && yu), $o = pu || "animationend", Vo = yu || "transitionend";
function Io(r, t) {
  if (!r) return null;
  if (Y(r) === "object") {
    var e = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return r[e];
  }
  return "".concat(r, "-").concat(t);
}
const id = function(r) {
  var t = rt();
  function e(i) {
    i && (i.removeEventListener(Vo, r), i.removeEventListener($o, r));
  }
  function n(i) {
    t.current && t.current !== i && e(t.current), i && i !== t.current && (i.addEventListener(Vo, r), i.addEventListener($o, r), t.current = i);
  }
  return p.useEffect(function() {
    return function() {
      e(t.current);
    };
  }, []), [n, e];
};
var wu = Ue() ? Uu : vr;
const ad = function() {
  var r = p.useRef(null);
  function t() {
    Bn.cancel(r.current);
  }
  function e(n) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = Bn(function() {
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
var od = [dt, fr, dr, ja], sd = [dt, hu], Su = !1, ud = !0;
function Eu(r) {
  return r === dr || r === ja;
}
const cd = function(r, t, e) {
  var n = Yr(Mo), i = z(n, 2), a = i[0], o = i[1], s = ad(), u = z(s, 2), c = u[0], l = u[1];
  function f() {
    o(dt, !0);
  }
  var v = t ? sd : od;
  return wu(function() {
    if (a !== Mo && a !== ja) {
      var g = v.indexOf(a), m = v[g + 1], h = e(a);
      h === Su ? o(m, !0) : m && c(function(d) {
        function b() {
          d.isCanceled() || o(m, !0);
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
function ld(r, t, e, n) {
  var i = n.motionEnter, a = i === void 0 ? !0 : i, o = n.motionAppear, s = o === void 0 ? !0 : o, u = n.motionLeave, c = u === void 0 ? !0 : u, l = n.motionDeadline, f = n.motionLeaveImmediately, v = n.onAppearPrepare, g = n.onEnterPrepare, m = n.onLeavePrepare, h = n.onAppearStart, d = n.onEnterStart, b = n.onLeaveStart, y = n.onAppearActive, S = n.onEnterActive, P = n.onLeaveActive, w = n.onAppearEnd, E = n.onEnterEnd, C = n.onLeaveEnd, _ = n.onVisibleChanged, R = Yr(), F = z(R, 2), A = F[0], M = F[1], N = ed(Mt), k = z(N, 2), j = k[0], $ = k[1], L = Yr(null), H = z(L, 2), X = H[0], O = H[1], I = j(), V = rt(!1), B = rt(null);
  function U() {
    return e();
  }
  var K = rt(!1);
  function te() {
    $(Mt), O(null, !0);
  }
  var ne = tt(function(oe) {
    var ue = j();
    if (ue !== Mt) {
      var Ae = U();
      if (!(oe && !oe.deadline && oe.target !== Ae)) {
        var ee = K.current, Ge;
        ue === Rn && ee ? Ge = w?.(Ae, oe) : ue === Fn && ee ? Ge = E?.(Ae, oe) : ue === kn && ee && (Ge = C?.(Ae, oe)), ee && Ge !== !1 && te();
      }
    }
  }), J = id(ne), re = z(J, 1), Ee = re[0], Oe = function(ue) {
    switch (ue) {
      case Rn:
        return x(x(x({}, dt, v), fr, h), dr, y);
      case Fn:
        return x(x(x({}, dt, g), fr, d), dr, S);
      case kn:
        return x(x(x({}, dt, m), fr, b), dr, P);
      default:
        return {};
    }
  }, ge = p.useMemo(function() {
    return Oe(I);
  }, [I]), xe = cd(I, !r, function(oe) {
    if (oe === dt) {
      var ue = ge[dt];
      return ue ? ue(U()) : Su;
    }
    if (le in ge) {
      var Ae;
      O(((Ae = ge[le]) === null || Ae === void 0 ? void 0 : Ae.call(ge, U(), null)) || null);
    }
    return le === dr && I !== Mt && (Ee(U()), l > 0 && (clearTimeout(B.current), B.current = setTimeout(function() {
      ne({
        deadline: !0
      });
    }, l))), le === hu && te(), ud;
  }), D = z(xe, 2), pe = D[0], le = D[1], Fe = Eu(le);
  K.current = Fe;
  var Ve = rt(null);
  wu(function() {
    if (!(V.current && Ve.current === t)) {
      M(t);
      var oe = V.current;
      V.current = !0;
      var ue;
      !oe && t && s && (ue = Rn), oe && t && a && (ue = Fn), (oe && !t && c || !oe && f && !t && c) && (ue = kn);
      var Ae = Oe(ue);
      ue && (r || Ae[dt]) ? ($(ue), pe()) : $(Mt), Ve.current = t;
    }
  }, [t]), vr(function() {
    // Cancel appear
    (I === Rn && !s || // Cancel enter
    I === Fn && !a || // Cancel leave
    I === kn && !c) && $(Mt);
  }, [s, a, c]), vr(function() {
    return function() {
      V.current = !1, clearTimeout(B.current);
    };
  }, []);
  var ye = p.useRef(!1);
  vr(function() {
    A && (ye.current = !0), A !== void 0 && I === Mt && ((ye.current || A) && _?.(A), ye.current = !0);
  }, [A, I]);
  var He = X;
  return ge[dt] && le === fr && (He = T({
    transition: "none"
  }, He)), [I, le, He, A ?? t];
}
function fd(r) {
  var t = r;
  Y(r) === "object" && (t = r.transitionSupport);
  function e(i, a) {
    return !!(i.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ p.forwardRef(function(i, a) {
    var o = i.visible, s = o === void 0 ? !0 : o, u = i.removeOnLeave, c = u === void 0 ? !0 : u, l = i.forceRender, f = i.children, v = i.motionName, g = i.leavedClassName, m = i.eventProps, h = p.useContext(Qf), d = h.motion, b = e(i, d), y = rt(), S = rt();
    function P() {
      try {
        return y.current instanceof HTMLElement ? y.current : $n(S.current);
      } catch {
        return null;
      }
    }
    var w = ld(b, s, P, i), E = z(w, 4), C = E[0], _ = E[1], R = E[2], F = E[3], A = p.useRef(F);
    F && (A.current = !0);
    var M = p.useCallback(function(H) {
      y.current = H, Oa(a, H);
    }, [a]), N, k = T(T({}, m), {}, {
      visible: s
    });
    if (!f)
      N = null;
    else if (C === Mt)
      F ? N = f(T({}, k), M) : !c && A.current && g ? N = f(T(T({}, k), {}, {
        className: g
      }), M) : l || !c && !g ? N = f(T(T({}, k), {}, {
        style: {
          display: "none"
        }
      }), M) : N = null;
    else {
      var j;
      _ === dt ? j = "prepare" : Eu(_) ? j = "active" : _ === fr && (j = "start");
      var $ = Io(v, "".concat(C, "-").concat(j));
      N = f(T(T({}, k), {}, {
        className: Le(Io(v, C), x(x({}, $, $ && j), v, typeof v == "string")),
        style: R
      }), M);
    }
    if (/* @__PURE__ */ p.isValidElement(N) && Yn(N)) {
      var L = Ra(N);
      L || (N = /* @__PURE__ */ p.cloneElement(N, {
        ref: M
      }));
    }
    return /* @__PURE__ */ p.createElement(Jf, {
      ref: S
    }, N);
  });
  return n.displayName = "CSSMotion", n;
}
const La = fd(bu);
var ca = "add", la = "keep", fa = "remove", Ni = "removed";
function dd(r) {
  var t;
  return r && Y(r) === "object" && "key" in r ? t = r : t = {
    key: r
  }, T(T({}, t), {}, {
    key: String(t.key)
  });
}
function da() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return r.map(dd);
}
function vd() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = [], n = 0, i = t.length, a = da(r), o = da(t);
  a.forEach(function(c) {
    for (var l = !1, f = n; f < i; f += 1) {
      var v = o[f];
      if (v.key === c.key) {
        n < f && (e = e.concat(o.slice(n, f).map(function(g) {
          return T(T({}, g), {}, {
            status: ca
          });
        })), n = f), e.push(T(T({}, v), {}, {
          status: la
        })), n += 1, l = !0;
        break;
      }
    }
    l || e.push(T(T({}, c), {}, {
      status: fa
    }));
  }), n < i && (e = e.concat(o.slice(n).map(function(c) {
    return T(T({}, c), {}, {
      status: ca
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
      return f !== c || v !== fa;
    }), e.forEach(function(l) {
      l.key === c && (l.status = la);
    });
  }), e;
}
var hd = ["component", "children", "onVisibleChanged", "onAllRemoved"], md = ["status"], gd = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function pd(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : La, e = /* @__PURE__ */ function(n) {
    Zt(a, n);
    var i = Qt(a);
    function a() {
      var o;
      Ne(this, a);
      for (var s = arguments.length, u = new Array(s), c = 0; c < s; c++)
        u[c] = arguments[c];
      return o = i.call.apply(i, [this].concat(u)), x(Z(o), "state", {
        keyEntities: []
      }), x(Z(o), "removeKey", function(l) {
        o.setState(function(f) {
          var v = f.keyEntities.map(function(g) {
            return g.key !== l ? g : T(T({}, g), {}, {
              status: Ni
            });
          });
          return {
            keyEntities: v
          };
        }, function() {
          var f = o.state.keyEntities, v = f.filter(function(g) {
            var m = g.status;
            return m !== Ni;
          }).length;
          v === 0 && o.props.onAllRemoved && o.props.onAllRemoved();
        });
      }), o;
    }
    return $e(a, [{
      key: "render",
      value: function() {
        var s = this, u = this.state.keyEntities, c = this.props, l = c.component, f = c.children, v = c.onVisibleChanged;
        c.onAllRemoved;
        var g = Kt(c, hd), m = l || p.Fragment, h = {};
        return gd.forEach(function(d) {
          h[d] = g[d], delete g[d];
        }), delete g.keys, /* @__PURE__ */ p.createElement(m, g, u.map(function(d, b) {
          var y = d.status, S = Kt(d, md), P = y === ca || y === la;
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
            return f(T(T({}, w), {}, {
              index: b
            }), E);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, u) {
        var c = s.keys, l = u.keyEntities, f = da(c), v = vd(l, f);
        return {
          keyEntities: v.filter(function(g) {
            var m = l.find(function(h) {
              var d = h.key;
              return g.key === d;
            });
            return !(m && m.status === Ni && g.status === fa);
          })
        };
      }
    }]), a;
  }(p.Component);
  return x(e, "defaultProps", {
    component: "div"
  }), e;
}
pd(bu);
function Cu(r) {
  var t;
  return r == null || (t = r.getRootNode) === null || t === void 0 ? void 0 : t.call(r);
}
function yd(r) {
  return Cu(r) instanceof ShadowRoot;
}
function va(r) {
  return yd(r) ? Cu(r) : null;
}
function bd(r) {
  return r && /* @__PURE__ */ ke.isValidElement(r) && r.type === ke.Fragment;
}
const wd = (r, t, e) => /* @__PURE__ */ ke.isValidElement(r) ? /* @__PURE__ */ ke.cloneElement(r, typeof e == "function" ? e(r.props || {}) : e) : t;
function Sd(r, t) {
  return wd(r, r, t);
}
const Da = /* @__PURE__ */ ke.createContext(void 0);
process.env.NODE_ENV !== "production" && (Da.displayName = "zIndexContext");
const xt = 100, Ed = 10, Cd = xt * Ed, xd = Cd + xt, xu = {
  Modal: xt,
  Drawer: xt,
  Popover: xt,
  Popconfirm: xt,
  Tooltip: xt,
  Tour: xt,
  FloatButton: xt
}, Pd = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function _d(r) {
  return r in xu;
}
const Od = (r, t) => {
  const [, e] = Ia(), n = ke.useContext(Da), i = _d(r);
  let a;
  if (t !== void 0)
    a = [t, t];
  else {
    let o = n ?? 0;
    i ? o += // Use preset token zIndex by default but not stack when has parent container
    (n ? 0 : e.zIndexPopupBase) + // Container offset
    xu[r] : o += Pd[r], a = [n === void 0 ? t : o, o];
  }
  if (process.env.NODE_ENV !== "production") {
    const o = ru(r), s = e.zIndexPopupBase + xd, u = a[0] || 0;
    process.env.NODE_ENV !== "production" && o(t !== void 0 || u <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return a;
};
function Pu(r, t) {
  this.v = r, this.k = t;
}
function Me(r, t, e, n) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch {
    i = 0;
  }
  Me = function(o, s, u, c) {
    if (s) i ? i(o, s, {
      value: u,
      enumerable: !c,
      configurable: !c,
      writable: !c
    }) : o[s] = u;
    else {
      var l = function(v, g) {
        Me(o, v, function(m) {
          return this._invoke(v, g, m);
        });
      };
      l("next", 0), l("throw", 1), l("return", 2);
    }
  }, Me(r, t, e, n);
}
function za() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var r, t, e = typeof Symbol == "function" ? Symbol : {}, n = e.iterator || "@@iterator", i = e.toStringTag || "@@toStringTag";
  function a(g, m, h, d) {
    var b = m && m.prototype instanceof s ? m : s, y = Object.create(b.prototype);
    return Me(y, "_invoke", function(S, P, w) {
      var E, C, _, R = 0, F = w || [], A = !1, M = {
        p: 0,
        n: 0,
        v: r,
        a: N,
        f: N.bind(r, 4),
        d: function(j, $) {
          return E = j, C = 0, _ = r, M.n = $, o;
        }
      };
      function N(k, j) {
        for (C = k, _ = j, t = 0; !A && R && !$ && t < F.length; t++) {
          var $, L = F[t], H = M.p, X = L[2];
          k > 3 ? ($ = X === j) && (_ = L[(C = L[4]) ? 5 : (C = 3, 3)], L[4] = L[5] = r) : L[0] <= H && (($ = k < 2 && H < L[1]) ? (C = 0, M.v = j, M.n = L[1]) : H < X && ($ = k < 3 || L[0] > j || j > X) && (L[4] = k, L[5] = j, M.n = X, C = 0));
        }
        if ($ || k > 1) return o;
        throw A = !0, j;
      }
      return function(k, j, $) {
        if (R > 1) throw TypeError("Generator is already running");
        for (A && j === 1 && N(j, $), C = j, _ = $; (t = C < 2 ? r : _) || !A; ) {
          E || (C ? C < 3 ? (C > 1 && (M.n = -1), N(C, _)) : M.n = _ : M.v = _);
          try {
            if (R = 2, E) {
              if (C || (k = "next"), t = E[k]) {
                if (!(t = t.call(E, _))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                _ = t.value, C < 2 && (C = 0);
              } else C === 1 && (t = E.return) && t.call(E), C < 2 && (_ = TypeError("The iterator does not provide a '" + k + "' method"), C = 1);
              E = r;
            } else if ((t = (A = M.n < 0) ? _ : S.call(P, M)) !== o) break;
          } catch (L) {
            E = r, C = 1, _ = L;
          } finally {
            R = 1;
          }
        }
        return {
          value: t,
          done: A
        };
      };
    }(g, h, d), !0), y;
  }
  var o = {};
  function s() {
  }
  function u() {
  }
  function c() {
  }
  t = Object.getPrototypeOf;
  var l = [][n] ? t(t([][n]())) : (Me(t = {}, n, function() {
    return this;
  }), t), f = c.prototype = s.prototype = Object.create(l);
  function v(g) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(g, c) : (g.__proto__ = c, Me(g, i, "GeneratorFunction")), g.prototype = Object.create(f), g;
  }
  return u.prototype = c, Me(f, "constructor", c), Me(c, "constructor", u), u.displayName = "GeneratorFunction", Me(c, i, "GeneratorFunction"), Me(f), Me(f, i, "Generator"), Me(f, n, function() {
    return this;
  }), Me(f, "toString", function() {
    return "[object Generator]";
  }), (za = function() {
    return {
      w: a,
      m: v
    };
  })();
}
function Xn(r, t) {
  function e(i, a, o, s) {
    try {
      var u = r[i](a), c = u.value;
      return c instanceof Pu ? t.resolve(c.v).then(function(l) {
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
  this.next || (Me(Xn.prototype), Me(Xn.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), Me(this, "_invoke", function(i, a, o) {
    function s() {
      return new t(function(u, c) {
        e(i, o, u, c);
      });
    }
    return n = n ? n.then(s, s) : s();
  }, !0);
}
function _u(r, t, e, n, i) {
  return new Xn(za().w(r, t, e, n), i || Promise);
}
function Td(r, t, e, n, i) {
  var a = _u(r, t, e, n, i);
  return a.next().then(function(o) {
    return o.done ? o.value : a.next();
  });
}
function Rd(r) {
  var t = Object(r), e = [];
  for (var n in t) e.unshift(n);
  return function i() {
    for (; e.length; ) if ((n = e.pop()) in t) return i.value = n, i.done = !1, i;
    return i.done = !0, i;
  };
}
function jo(r) {
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
  throw new TypeError(Y(r) + " is not iterable");
}
function it() {
  var r = za(), t = r.m(it), e = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
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
        delegateYield: function(f, v, g) {
          return s.resultName = v, u(c.d, jo(f), g);
        },
        finish: function(f) {
          return u(c.f, f);
        }
      }, u = function(f, v, g) {
        c.p = s.prev, c.n = s.next;
        try {
          return f(v, g);
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
        return new Pu(u, c);
      },
      AsyncIterator: Xn,
      async: function(u, c, l, f, v) {
        return (n(c) ? _u : Td)(a(u), c, l, f, v);
      },
      keys: Rd,
      values: jo
    };
  })();
}
function Lo(r, t, e, n, i, a, o) {
  try {
    var s = r[a](o), u = s.value;
  } catch (c) {
    return void e(c);
  }
  s.done ? t(u) : Promise.resolve(u).then(n, i);
}
function Qr(r) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(n, i) {
      var a = r.apply(t, e);
      function o(u) {
        Lo(a, n, i, o, s, "next", u);
      }
      function s(u) {
        Lo(a, n, i, o, s, "throw", u);
      }
      o(void 0);
    });
  };
}
const Fd = (r, t, e) => e !== void 0 ? e : `${r}-${t}`, kd = function(r) {
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
}, Ad = /* @__PURE__ */ p.createContext(null), Md = (r) => {
  const {
    children: t
  } = r;
  return /* @__PURE__ */ p.createElement(Ad.Provider, {
    value: null
  }, t);
}, Nd = (r) => ({
  animationDuration: r,
  animationFillMode: "both"
}), $d = (r) => ({
  animationDuration: r,
  animationFillMode: "both"
}), Vd = (r, t, e, n, i = !1) => {
  const a = i ? "&" : "";
  return {
    [`
      ${a}${r}-enter,
      ${a}${r}-appear
    `]: Object.assign(Object.assign({}, Nd(n)), {
      animationPlayState: "paused"
    }),
    [`${a}${r}-leave`]: Object.assign(Object.assign({}, $d(n)), {
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
}, Id = new at("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), jd = new at("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Do = new at("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), zo = new at("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), Ld = new at("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Dd = new at("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), zd = new at("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Hd = new at("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Wd = new at("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), Bd = new at("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), qd = new at("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), Ud = new at("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Gd = {
  zoom: {
    inKeyframes: Id,
    outKeyframes: jd
  },
  "zoom-big": {
    inKeyframes: Do,
    outKeyframes: zo
  },
  "zoom-big-fast": {
    inKeyframes: Do,
    outKeyframes: zo
  },
  "zoom-left": {
    inKeyframes: zd,
    outKeyframes: Hd
  },
  "zoom-right": {
    inKeyframes: Wd,
    outKeyframes: Bd
  },
  "zoom-up": {
    inKeyframes: Ld,
    outKeyframes: Dd
  },
  "zoom-down": {
    inKeyframes: qd,
    outKeyframes: Ud
  }
}, Xd = (r, t) => {
  const {
    antCls: e
  } = r, n = `${e}-${t}`, {
    inKeyframes: i,
    outKeyframes: a
  } = Gd[t];
  return [Vd(n, i, a, r.motionDurationFast), {
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
var Ou = /* @__PURE__ */ p.createContext(null), Ho = [];
function Kd(r, t) {
  var e = p.useState(function() {
    if (!Ue())
      return null;
    var m = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && m.setAttribute("data-debug", t), m;
  }), n = z(e, 1), i = n[0], a = p.useRef(!1), o = p.useContext(Ou), s = p.useState(Ho), u = z(s, 2), c = u[0], l = u[1], f = o || (a.current ? void 0 : function(m) {
    l(function(h) {
      var d = [m].concat(q(h));
      return d;
    });
  });
  function v() {
    i.parentElement || document.body.appendChild(i), a.current = !0;
  }
  function g() {
    var m;
    (m = i.parentElement) === null || m === void 0 || m.removeChild(i), a.current = !1;
  }
  return je(function() {
    return r ? o ? o(v) : v() : g(), g;
  }, [r]), je(function() {
    c.length && (c.forEach(function(m) {
      return m();
    }), l(Ho));
  }, [c]), [i, f];
}
function Yd(r) {
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
    } catch (m) {
      console.error(m), i = u, a = c;
    }
  }
  document.body.appendChild(e);
  var v = r && i && !isNaN(i) ? i : e.offsetWidth - e.clientWidth, g = r && a && !isNaN(a) ? a : e.offsetHeight - e.clientHeight;
  return document.body.removeChild(e), Gr(t), {
    width: v,
    height: g
  };
}
function Zd(r) {
  return typeof document > "u" || !r || !(r instanceof Element) ? {
    width: 0,
    height: 0
  } : Yd(r);
}
function Qd() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Jd = "rc-util-locker-".concat(Date.now()), Wo = 0;
function ev(r) {
  var t = !!r, e = p.useState(function() {
    return Wo += 1, "".concat(Jd, "_").concat(Wo);
  }), n = z(e, 1), i = n[0];
  je(function() {
    if (t) {
      var a = Zd(document.body).width, o = Qd();
      Gt(`
html body {
  overflow-y: hidden;
  `.concat(o ? "width: calc(100% - ".concat(a, "px);") : "", `
}`), i);
    } else
      Gr(i);
    return function() {
      Gr(i);
    };
  }, [t, i]);
}
var tv = !1;
function rv(r) {
  return tv;
}
var Bo = function(t) {
  return t === !1 ? !1 : !Ue() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Ha = /* @__PURE__ */ p.forwardRef(function(r, t) {
  var e = r.open, n = r.autoLock, i = r.getContainer, a = r.debug, o = r.autoDestroy, s = o === void 0 ? !0 : o, u = r.children, c = p.useState(e), l = z(c, 2), f = l[0], v = l[1], g = f || e;
  process.env.NODE_ENV !== "production" && me(Ue() || !e, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), p.useEffect(function() {
    (s || e) && v(e);
  }, [e, s]);
  var m = p.useState(function() {
    return Bo(i);
  }), h = z(m, 2), d = h[0], b = h[1];
  p.useEffect(function() {
    var M = Bo(i);
    b(M ?? null);
  });
  var y = Kd(g && !d, a), S = z(y, 2), P = S[0], w = S[1], E = d ?? P;
  ev(n && e && Ue() && (E === P || E === document.body));
  var C = null;
  if (u && Yn(u) && t) {
    var _ = u;
    C = _.ref;
  }
  var R = Ta(C, t);
  if (!g || !Ue() || d === void 0)
    return null;
  var F = E === !1 || rv(), A = u;
  return t && (A = /* @__PURE__ */ p.cloneElement(u, {
    ref: R
  })), /* @__PURE__ */ p.createElement(Ou.Provider, {
    value: w
  }, F ? A : /* @__PURE__ */ Yu(A, E));
});
process.env.NODE_ENV !== "production" && (Ha.displayName = "Portal");
function nv() {
  var r = T({}, p);
  return r.useId;
}
var qo = 0, Uo = nv();
const Tu = Uo ? (
  // Use React `useId`
  function(t) {
    var e = Uo();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : e);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var e = p.useState("ssr-id"), n = z(e, 2), i = n[0], a = n[1];
    return p.useEffect(function() {
      var o = qo;
      qo += 1, a("rc_unique_".concat(o));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : i);
  }
);
var Ut = "RC_FORM_INTERNAL_HOOKS", se = function() {
  me(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Sr = /* @__PURE__ */ p.createContext({
  getFieldValue: se,
  getFieldsValue: se,
  getFieldError: se,
  getFieldWarning: se,
  getFieldsError: se,
  isFieldsTouched: se,
  isFieldTouched: se,
  isFieldValidating: se,
  isFieldsValidating: se,
  resetFields: se,
  setFields: se,
  setFieldValue: se,
  setFieldsValue: se,
  validateFields: se,
  submit: se,
  getInternalHooks: function() {
    return se(), {
      dispatch: se,
      initEntityValue: se,
      registerField: se,
      useSubscribe: se,
      setInitialValues: se,
      destroyForm: se,
      setCallbacks: se,
      registerWatch: se,
      getFields: se,
      setValidateMessages: se,
      setPreserve: se,
      getInitialValue: se
    };
  }
}), Kn = /* @__PURE__ */ p.createContext(null);
function ha(r) {
  return r == null ? [] : Array.isArray(r) ? r : [r];
}
function iv(r) {
  return r && !!r._init;
}
function ma() {
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
var ga = ma();
function av(r) {
  try {
    return Function.toString.call(r).indexOf("[native code]") !== -1;
  } catch {
    return typeof r == "function";
  }
}
function ov(r, t, e) {
  if (Fa()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var i = new (r.bind.apply(r, n))();
  return e && Br(i, e.prototype), i;
}
function pa(r) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return pa = function(n) {
    if (n === null || !av(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, i);
    }
    function i() {
      return ov(n, arguments, qr(this).constructor);
    }
    return i.prototype = Object.create(n.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Br(i, n);
  }, pa(r);
}
var sv = /%[sdj%]/g, Ru = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Ru = function(t, e) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && e.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, e);
});
function ya(r) {
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
    var o = r.replace(sv, function(s) {
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
function uv(r) {
  return r === "string" || r === "url" || r === "hex" || r === "email" || r === "date" || r === "pattern";
}
function _e(r, t) {
  return !!(r == null || t === "array" && Array.isArray(r) && !r.length || uv(t) && typeof r == "string" && !r);
}
function cv(r, t, e) {
  var n = [], i = 0, a = r.length;
  function o(s) {
    n.push.apply(n, q(s || [])), i++, i === a && e(n);
  }
  r.forEach(function(s) {
    t(s, o);
  });
}
function Go(r, t, e) {
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
function lv(r) {
  var t = [];
  return Object.keys(r).forEach(function(e) {
    t.push.apply(t, q(r[e] || []));
  }), t;
}
var Xo = /* @__PURE__ */ function(r) {
  Zt(e, r);
  var t = Qt(e);
  function e(n, i) {
    var a;
    return Ne(this, e), a = t.call(this, "Async Validation Error"), x(Z(a), "errors", void 0), x(Z(a), "fields", void 0), a.errors = n, a.fields = i, a;
  }
  return $e(e);
}(/* @__PURE__ */ pa(Error));
function fv(r, t, e, n, i) {
  if (t.first) {
    var a = new Promise(function(v, g) {
      var m = function(b) {
        return n(b), b.length ? g(new Xo(b, ya(b))) : v(i);
      }, h = lv(r);
      Go(h, e, m);
    });
    return a.catch(function(v) {
      return v;
    }), a;
  }
  var o = t.firstFields === !0 ? Object.keys(r) : t.firstFields || [], s = Object.keys(r), u = s.length, c = 0, l = [], f = new Promise(function(v, g) {
    var m = function(d) {
      if (l.push.apply(l, d), c++, c === u)
        return n(l), l.length ? g(new Xo(l, ya(l))) : v(i);
    };
    s.length || (n(l), v(i)), s.forEach(function(h) {
      var d = r[h];
      o.indexOf(h) !== -1 ? Go(d, e, m) : cv(d, e, m);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function dv(r) {
  return !!(r && r.message !== void 0);
}
function vv(r, t) {
  for (var e = r, n = 0; n < t.length; n++) {
    if (e == null)
      return e;
    e = e[t[n]];
  }
  return e;
}
function Ko(r, t) {
  return function(e) {
    var n;
    return r.fullFields ? n = vv(t, r.fullFields) : n = t[e.field || r.fullField], dv(e) ? (e.field = e.field || r.fullField, e.fieldValue = n, e) : {
      message: typeof e == "function" ? e() : e,
      fieldValue: n,
      field: e.field || r.fullField
    };
  };
}
function Yo(r, t) {
  if (t) {
    for (var e in t)
      if (t.hasOwnProperty(e)) {
        var n = t[e];
        Y(n) === "object" && Y(r[e]) === "object" ? r[e] = T(T({}, r[e]), n) : r[e] = n;
      }
  }
  return r;
}
var or = "enum", hv = function(t, e, n, i, a) {
  t[or] = Array.isArray(t[or]) ? t[or] : [], t[or].indexOf(e) === -1 && i.push(qe(a.messages[or], t.fullField, t[or].join(", ")));
}, mv = function(t, e, n, i, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(e) || i.push(qe(a.messages.pattern.mismatch, t.fullField, e, t.pattern));
    else if (typeof t.pattern == "string") {
      var o = new RegExp(t.pattern);
      o.test(e) || i.push(qe(a.messages.pattern.mismatch, t.fullField, e, t.pattern));
    }
  }
}, gv = function(t, e, n, i, a) {
  var o = typeof t.len == "number", s = typeof t.min == "number", u = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = e, f = null, v = typeof e == "number", g = typeof e == "string", m = Array.isArray(e);
  if (v ? f = "number" : g ? f = "string" : m && (f = "array"), !f)
    return !1;
  m && (l = e.length), g && (l = e.replace(c, "_").length), o ? l !== t.len && i.push(qe(a.messages[f].len, t.fullField, t.len)) : s && !u && l < t.min ? i.push(qe(a.messages[f].min, t.fullField, t.min)) : u && !s && l > t.max ? i.push(qe(a.messages[f].max, t.fullField, t.max)) : s && u && (l < t.min || l > t.max) && i.push(qe(a.messages[f].range, t.fullField, t.min, t.max));
}, Fu = function(t, e, n, i, a, o) {
  t.required && (!n.hasOwnProperty(t.field) || _e(e, o || t.type)) && i.push(qe(a.messages.required, t.fullField));
}, Mn;
const pv = function() {
  if (Mn)
    return Mn;
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
  var f = "(?:(?:[a-z]+:)?//)", v = "(?:\\S+(?::\\S*)?@)?", g = l.v4().source, m = l.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", d = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", b = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", S = '(?:[/?#][^\\s"]*)?', P = "(?:".concat(f, "|www\\.)").concat(v, "(?:localhost|").concat(g, "|").concat(m, "|").concat(h).concat(d).concat(b, ")").concat(y).concat(S);
  return Mn = new RegExp("(?:^".concat(P, "$)"), "i"), Mn;
};
var Zo = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Lr = {
  integer: function(t) {
    return Lr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Lr.number(t) && !Lr.integer(t);
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
    return Y(t) === "object" && !Lr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Zo.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(pv());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Zo.hex);
  }
}, yv = function(t, e, n, i, a) {
  if (t.required && e === void 0) {
    Fu(t, e, n, i, a);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  o.indexOf(s) > -1 ? Lr[s](e) || i.push(qe(a.messages.types[s], t.fullField, t.type)) : s && Y(e) !== t.type && i.push(qe(a.messages.types[s], t.fullField, t.type));
}, bv = function(t, e, n, i, a) {
  (/^\s+$/.test(e) || e === "") && i.push(qe(a.messages.whitespace, t.fullField));
};
const Q = {
  required: Fu,
  whitespace: bv,
  type: yv,
  range: gv,
  enum: hv,
  pattern: mv
};
var wv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a);
  }
  n(o);
}, Sv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (e == null && !t.required)
      return n();
    Q.required(t, e, i, o, a, "array"), e != null && (Q.type(t, e, i, o, a), Q.range(t, e, i, o, a));
  }
  n(o);
}, Ev = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && Q.type(t, e, i, o, a);
  }
  n(o);
}, Cv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(e, "date") && !t.required)
      return n();
    if (Q.required(t, e, i, o, a), !_e(e, "date")) {
      var u;
      e instanceof Date ? u = e : u = new Date(e), Q.type(t, u, i, o, a), u && Q.range(t, u.getTime(), i, o, a);
    }
  }
  n(o);
}, xv = "enum", Pv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && Q[xv](t, e, i, o, a);
  }
  n(o);
}, _v = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && (Q.type(t, e, i, o, a), Q.range(t, e, i, o, a));
  }
  n(o);
}, Ov = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && (Q.type(t, e, i, o, a), Q.range(t, e, i, o, a));
  }
  n(o);
}, Tv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && Q.type(t, e, i, o, a);
  }
  n(o);
}, Rv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (e === "" && (e = void 0), _e(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && (Q.type(t, e, i, o, a), Q.range(t, e, i, o, a));
  }
  n(o);
}, Fv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), e !== void 0 && Q.type(t, e, i, o, a);
  }
  n(o);
}, kv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(e, "string") && !t.required)
      return n();
    Q.required(t, e, i, o, a), _e(e, "string") || Q.pattern(t, e, i, o, a);
  }
  n(o);
}, Av = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(e) && !t.required)
      return n();
    Q.required(t, e, i, o, a), _e(e) || Q.type(t, e, i, o, a);
  }
  n(o);
}, Mv = function(t, e, n, i, a) {
  var o = [], s = Array.isArray(e) ? "array" : Y(e);
  Q.required(t, e, i, o, a, s), n(o);
}, Nv = function(t, e, n, i, a) {
  var o = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (_e(e, "string") && !t.required)
      return n();
    Q.required(t, e, i, o, a, "string"), _e(e, "string") || (Q.type(t, e, i, o, a), Q.range(t, e, i, o, a), Q.pattern(t, e, i, o, a), t.whitespace === !0 && Q.whitespace(t, e, i, o, a));
  }
  n(o);
}, $i = function(t, e, n, i, a) {
  var o = t.type, s = [], u = t.required || !t.required && i.hasOwnProperty(t.field);
  if (u) {
    if (_e(e, o) && !t.required)
      return n();
    Q.required(t, e, i, s, a, o), _e(e, o) || Q.type(t, e, i, s, a);
  }
  n(s);
};
const zr = {
  string: Nv,
  method: Tv,
  number: Rv,
  boolean: Ev,
  regexp: Av,
  integer: Ov,
  float: _v,
  array: Sv,
  object: Fv,
  enum: Pv,
  pattern: kv,
  date: Cv,
  url: $i,
  hex: $i,
  email: $i,
  required: Mv,
  any: wv
};
var Jr = /* @__PURE__ */ function() {
  function r(t) {
    Ne(this, r), x(this, "rules", null), x(this, "_messages", ga), this.define(t);
  }
  return $e(r, [{
    key: "define",
    value: function(e) {
      var n = this;
      if (!e)
        throw new Error("Cannot configure a schema with no rules");
      if (Y(e) !== "object" || Array.isArray(e))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(e).forEach(function(i) {
        var a = e[i];
        n.rules[i] = Array.isArray(a) ? a : [a];
      });
    }
  }, {
    key: "messages",
    value: function(e) {
      return e && (this._messages = Yo(ma(), e)), this._messages;
    }
  }, {
    key: "validate",
    value: function(e) {
      var n = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, o = e, s = i, u = a;
      if (typeof s == "function" && (u = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return u && u(null, o), Promise.resolve(o);
      function c(m) {
        var h = [], d = {};
        function b(S) {
          if (Array.isArray(S)) {
            var P;
            h = (P = h).concat.apply(P, q(S));
          } else
            h.push(S);
        }
        for (var y = 0; y < m.length; y++)
          b(m[y]);
        h.length ? (d = ya(h), u(h, d)) : u(null, o);
      }
      if (s.messages) {
        var l = this.messages();
        l === ga && (l = ma()), Yo(l, s.messages), s.messages = l;
      } else
        s.messages = this.messages();
      var f = {}, v = s.keys || Object.keys(this.rules);
      v.forEach(function(m) {
        var h = n.rules[m], d = o[m];
        h.forEach(function(b) {
          var y = b;
          typeof y.transform == "function" && (o === e && (o = T({}, o)), d = o[m] = y.transform(d), d != null && (y.type = y.type || (Array.isArray(d) ? "array" : Y(d)))), typeof y == "function" ? y = {
            validator: y
          } : y = T({}, y), y.validator = n.getValidationMethod(y), y.validator && (y.field = m, y.fullField = y.fullField || m, y.type = n.getType(y), f[m] = f[m] || [], f[m].push({
            rule: y,
            value: d,
            source: o,
            field: m
          }));
        });
      });
      var g = {};
      return fv(f, s, function(m, h) {
        var d = m.rule, b = (d.type === "object" || d.type === "array") && (Y(d.fields) === "object" || Y(d.defaultField) === "object");
        b = b && (d.required || !d.required && m.value), d.field = m.field;
        function y(C, _) {
          return T(T({}, _), {}, {
            fullField: "".concat(d.fullField, ".").concat(C),
            fullFields: d.fullFields ? [].concat(q(d.fullFields), [C]) : [C]
          });
        }
        function S() {
          var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], _ = Array.isArray(C) ? C : [C];
          !s.suppressWarning && _.length && r.warning("async-validator:", _), _.length && d.message !== void 0 && (_ = [].concat(d.message));
          var R = _.map(Ko(d, o));
          if (s.first && R.length)
            return g[d.field] = 1, h(R);
          if (!b)
            h(R);
          else {
            if (d.required && !m.value)
              return d.message !== void 0 ? R = [].concat(d.message).map(Ko(d, o)) : s.error && (R = [s.error(d, qe(s.messages.required, d.field))]), h(R);
            var F = {};
            d.defaultField && Object.keys(m.value).map(function(N) {
              F[N] = d.defaultField;
            }), F = T(T({}, F), m.rule.fields);
            var A = {};
            Object.keys(F).forEach(function(N) {
              var k = F[N], j = Array.isArray(k) ? k : [k];
              A[N] = j.map(y.bind(null, N));
            });
            var M = new r(A);
            M.messages(s.messages), m.rule.options && (m.rule.options.messages = s.messages, m.rule.options.error = s.error), M.validate(m.value, m.rule.options || s, function(N) {
              var k = [];
              R && R.length && k.push.apply(k, q(R)), N && N.length && k.push.apply(k, q(N)), h(k.length ? k : null);
            });
          }
        }
        var P;
        if (d.asyncValidator)
          P = d.asyncValidator(d, m.value, S, m.source, s);
        else if (d.validator) {
          try {
            P = d.validator(d, m.value, S, m.source, s);
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
      }, function(m) {
        c(m);
      }, o);
    }
  }, {
    key: "getType",
    value: function(e) {
      if (e.type === void 0 && e.pattern instanceof RegExp && (e.type = "pattern"), typeof e.validator != "function" && e.type && !zr.hasOwnProperty(e.type))
        throw new Error(qe("Unknown rule type %s", e.type));
      return e.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(e) {
      if (typeof e.validator == "function")
        return e.validator;
      var n = Object.keys(e), i = n.indexOf("message");
      return i !== -1 && n.splice(i, 1), n.length === 1 && n[0] === "required" ? zr.required : zr[this.getType(e)] || void 0;
    }
  }]), r;
}();
x(Jr, "register", function(t, e) {
  if (typeof e != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  zr[t] = e;
});
x(Jr, "warning", Ru);
x(Jr, "messages", ga);
x(Jr, "validators", zr);
var Be = "'${name}' is not a valid ${type}", ku = {
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
}, Qo = Jr;
function $v(r, t) {
  return r.replace(/\\?\$\{\w+\}/g, function(e) {
    if (e.startsWith("\\"))
      return e.slice(1);
    var n = e.slice(2, -1);
    return t[n];
  });
}
var Jo = "CODE_LOGIC_ERROR";
function ba(r, t, e, n, i) {
  return wa.apply(this, arguments);
}
function wa() {
  return wa = Qr(/* @__PURE__ */ it().mark(function r(t, e, n, i, a) {
    var o, s, u, c, l, f, v, g, m;
    return it().wrap(function(d) {
      for (; ; ) switch (d.prev = d.next) {
        case 0:
          return o = T({}, n), delete o.ruleIndex, Qo.warning = function() {
          }, o.validator && (s = o.validator, o.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (b) {
              return console.error(b), Promise.reject(Jo);
            }
          }), u = null, o && o.type === "array" && o.defaultField && (u = o.defaultField, delete o.defaultField), c = new Qo(x({}, t, [o])), l = jr(ku, i.validateMessages), c.messages(l), f = [], d.prev = 10, d.next = 13, Promise.resolve(c.validate(x({}, t, e), T({}, i)));
        case 13:
          d.next = 18;
          break;
        case 15:
          d.prev = 15, d.t0 = d.catch(10), d.t0.errors && (f = d.t0.errors.map(function(b, y) {
            var S = b.message, P = S === Jo ? l.default : S;
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
            return ba("".concat(t, ".").concat(y), b, u, i, a);
          }));
        case 21:
          return v = d.sent, d.abrupt("return", v.reduce(function(b, y) {
            return [].concat(q(b), q(y));
          }, []));
        case 23:
          return g = T(T({}, n), {}, {
            name: t,
            enum: (n.enum || []).join(", ")
          }, a), m = f.map(function(b) {
            return typeof b == "string" ? $v(b, g) : b;
          }), d.abrupt("return", m);
        case 26:
        case "end":
          return d.stop();
      }
    }, r, null, [[10, 15]]);
  })), wa.apply(this, arguments);
}
function Vv(r, t, e, n, i, a) {
  var o = r.join("."), s = e.map(function(l, f) {
    var v = l.validator, g = T(T({}, l), {}, {
      ruleIndex: f
    });
    return v && (g.validator = function(m, h, d) {
      var b = !1, y = function() {
        for (var w = arguments.length, E = new Array(w), C = 0; C < w; C++)
          E[C] = arguments[C];
        Promise.resolve().then(function() {
          me(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || d.apply(void 0, E);
        });
      }, S = v(m, h, y);
      b = S && typeof S.then == "function" && typeof S.catch == "function", me(b, "`callback` is deprecated. Please return a promise instead."), b && S.then(function() {
        d();
      }).catch(function(P) {
        d(P || " ");
      });
    }), g;
  }).sort(function(l, f) {
    var v = l.warningOnly, g = l.ruleIndex, m = f.warningOnly, h = f.ruleIndex;
    return !!v == !!m ? g - h : v ? 1 : -1;
  }), u;
  if (i === !0)
    u = new Promise(/* @__PURE__ */ function() {
      var l = Qr(/* @__PURE__ */ it().mark(function f(v, g) {
        var m, h, d;
        return it().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              m = 0;
            case 1:
              if (!(m < s.length)) {
                y.next = 12;
                break;
              }
              return h = s[m], y.next = 5, ba(o, t, h, n, a);
            case 5:
              if (d = y.sent, !d.length) {
                y.next = 9;
                break;
              }
              return g([{
                errors: d,
                rule: h
              }]), y.abrupt("return");
            case 9:
              m += 1, y.next = 1;
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
      return ba(o, t, l, n, a).then(function(f) {
        return {
          errors: f,
          rule: l
        };
      });
    });
    u = (i ? jv(c) : Iv(c)).then(function(l) {
      return Promise.reject(l);
    });
  }
  return u.catch(function(l) {
    return l;
  }), u;
}
function Iv(r) {
  return Sa.apply(this, arguments);
}
function Sa() {
  return Sa = Qr(/* @__PURE__ */ it().mark(function r(t) {
    return it().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.all(t).then(function(i) {
            var a, o = (a = []).concat.apply(a, q(i));
            return o;
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, r);
  })), Sa.apply(this, arguments);
}
function jv(r) {
  return Ea.apply(this, arguments);
}
function Ea() {
  return Ea = Qr(/* @__PURE__ */ it().mark(function r(t) {
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
  })), Ea.apply(this, arguments);
}
function Se(r) {
  return ha(r);
}
function es(r, t) {
  var e = {};
  return t.forEach(function(n) {
    var i = yt(r, n);
    e = ft(e, n, i);
  }), e;
}
function mr(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return r && r.some(function(n) {
    return Au(t, n, e);
  });
}
function Au(r, t) {
  var e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !r || !t || !e && r.length !== t.length ? !1 : t.every(function(n, i) {
    return r[i] === n;
  });
}
function Lv(r, t) {
  if (r === t)
    return !0;
  if (!r && t || r && !t || !r || !t || Y(r) !== "object" || Y(t) !== "object")
    return !1;
  var e = Object.keys(r), n = Object.keys(t), i = new Set([].concat(e, n));
  return q(i).every(function(a) {
    var o = r[a], s = t[a];
    return typeof o == "function" && typeof s == "function" ? !0 : o === s;
  });
}
function Dv(r) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Y(t.target) === "object" && r in t.target ? t.target[r] : t;
}
function ts(r, t, e) {
  var n = r.length;
  if (t < 0 || t >= n || e < 0 || e >= n)
    return r;
  var i = r[t], a = t - e;
  return a > 0 ? [].concat(q(r.slice(0, e)), [i], q(r.slice(e, t)), q(r.slice(t + 1, n))) : a < 0 ? [].concat(q(r.slice(0, t)), q(r.slice(t + 1, e + 1)), [i], q(r.slice(e + 1, n))) : r;
}
var zv = ["name"], Je = [];
function Vi(r, t, e, n, i, a) {
  return typeof r == "function" ? r(t, e, "source" in a ? {
    source: a.source
  } : {}) : n !== i;
}
var Wa = /* @__PURE__ */ function(r) {
  Zt(e, r);
  var t = Qt(e);
  function e(n) {
    var i;
    if (Ne(this, e), i = t.call(this, n), x(Z(i), "state", {
      resetCount: 0
    }), x(Z(i), "cancelRegisterFunc", null), x(Z(i), "mounted", !1), x(Z(i), "touched", !1), x(Z(i), "dirty", !1), x(Z(i), "validatePromise", void 0), x(Z(i), "prevValidating", void 0), x(Z(i), "errors", Je), x(Z(i), "warnings", Je), x(Z(i), "cancelRegister", function() {
      var u = i.props, c = u.preserve, l = u.isListField, f = u.name;
      i.cancelRegisterFunc && i.cancelRegisterFunc(l, c, Se(f)), i.cancelRegisterFunc = null;
    }), x(Z(i), "getNamePath", function() {
      var u = i.props, c = u.name, l = u.fieldContext, f = l.prefixName, v = f === void 0 ? [] : f;
      return c !== void 0 ? [].concat(q(v), q(c)) : [];
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
        var l = T(T({}, i.getMeta()), {}, {
          destroy: u
        });
        oo(i.metaCache, l) || c(l), i.metaCache = l;
      } else
        i.metaCache = null;
    }), x(Z(i), "onStoreChange", function(u, c, l) {
      var f = i.props, v = f.shouldUpdate, g = f.dependencies, m = g === void 0 ? [] : g, h = f.onReset, d = l.store, b = i.getNamePath(), y = i.getValue(u), S = i.getValue(d), P = c && mr(c, b);
      switch (l.type === "valueUpdate" && l.source === "external" && !oo(y, S) && (i.touched = !0, i.dirty = !0, i.validatePromise = null, i.errors = Je, i.warnings = Je, i.triggerMetaEvent()), l.type) {
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
          if (v && Vi(v, u, d, y, S, l)) {
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
          } else if ("value" in w && mr(c, b, !0)) {
            i.reRender();
            return;
          }
          if (v && !b.length && Vi(v, u, d, y, S, l)) {
            i.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var E = m.map(Se);
          if (E.some(function(C) {
            return mr(l.relatedFields, C);
          })) {
            i.reRender();
            return;
          }
          break;
        }
        default:
          if (P || (!m.length || b.length || v) && Vi(v, u, d, y, S, l)) {
            i.reRender();
            return;
          }
          break;
      }
      v === !0 && i.reRender();
    }), x(Z(i), "validateRules", function(u) {
      var c = i.getNamePath(), l = i.getValue(), f = u || {}, v = f.triggerName, g = f.validateOnly, m = g === void 0 ? !1 : g, h = Promise.resolve().then(/* @__PURE__ */ Qr(/* @__PURE__ */ it().mark(function d() {
        var b, y, S, P, w, E, C;
        return it().wrap(function(R) {
          for (; ; ) switch (R.prev = R.next) {
            case 0:
              if (i.mounted) {
                R.next = 2;
                break;
              }
              return R.abrupt("return", []);
            case 2:
              if (b = i.props, y = b.validateFirst, S = y === void 0 ? !1 : y, P = b.messageVariables, w = b.validateDebounce, E = i.getRules(), v && (E = E.filter(function(F) {
                return F;
              }).filter(function(F) {
                var A = F.validateTrigger;
                if (!A)
                  return !0;
                var M = ha(A);
                return M.includes(v);
              })), !(w && v)) {
                R.next = 10;
                break;
              }
              return R.next = 8, new Promise(function(F) {
                setTimeout(F, w);
              });
            case 8:
              if (i.validatePromise === h) {
                R.next = 10;
                break;
              }
              return R.abrupt("return", []);
            case 10:
              return C = Vv(c, l, E, u, S, P), C.catch(function(F) {
                return F;
              }).then(function() {
                var F = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Je;
                if (i.validatePromise === h) {
                  var A;
                  i.validatePromise = null;
                  var M = [], N = [];
                  (A = F.forEach) === null || A === void 0 || A.call(F, function(k) {
                    var j = k.rule.warningOnly, $ = k.errors, L = $ === void 0 ? Je : $;
                    j ? N.push.apply(N, q(L)) : M.push.apply(M, q(L));
                  }), i.errors = M, i.warnings = N, i.triggerMetaEvent(), i.reRender();
                }
              }), R.abrupt("return", C);
            case 13:
            case "end":
              return R.stop();
          }
        }, d);
      })));
      return m || (i.validatePromise = h, i.dirty = !0, i.errors = Je, i.warnings = Je, i.triggerMetaEvent(), i.reRender()), h;
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
        return T(T({}, i.getOnlyChild(u(i.getControlled(), c, i.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var l = zn(u);
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
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = i.props, l = c.name, f = c.trigger, v = c.validateTrigger, g = c.getValueFromEvent, m = c.normalize, h = c.valuePropName, d = c.getValueProps, b = c.fieldContext, y = v !== void 0 ? v : b.validateTrigger, S = i.getNamePath(), P = b.getInternalHooks, w = b.getFieldsValue, E = P(Ut), C = E.dispatch, _ = i.getValue(), R = d || function(k) {
        return x({}, h, k);
      }, F = u[f], A = l !== void 0 ? R(_) : {};
      process.env.NODE_ENV !== "production" && A && Object.keys(A).forEach(function(k) {
        me(typeof A[k] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(k, ")"));
      });
      var M = T(T({}, u), A);
      M[f] = function() {
        i.touched = !0, i.dirty = !0, i.triggerMetaEvent();
        for (var k, j = arguments.length, $ = new Array(j), L = 0; L < j; L++)
          $[L] = arguments[L];
        g ? k = g.apply(void 0, $) : k = Dv.apply(void 0, [h].concat($)), m && (k = m(k, _, w(!0))), k !== _ && C({
          type: "updateValue",
          namePath: S,
          value: k
        }), F && F.apply(void 0, $);
      };
      var N = ha(y || []);
      return N.forEach(function(k) {
        var j = M[k];
        M[k] = function() {
          j && j.apply(void 0, arguments);
          var $ = i.props.rules;
          $ && $.length && C({
            type: "validateField",
            namePath: S,
            triggerName: k
          });
        };
      }), M;
    }), n.fieldContext) {
      var a = n.fieldContext.getInternalHooks, o = a(Ut), s = o.initEntityValue;
      s(Z(i));
    }
    return i;
  }
  return $e(e, [{
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
      return u ? c = s : /* @__PURE__ */ p.isValidElement(s) ? c = /* @__PURE__ */ p.cloneElement(s, this.getControlled(s.props)) : (me(!s, "`children` of Field is not validate ReactElement."), c = s), /* @__PURE__ */ p.createElement(p.Fragment, {
        key: i
      }, c);
    }
  }]), e;
}(p.Component);
x(Wa, "contextType", Sr);
x(Wa, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Mu(r) {
  var t, e = r.name, n = Kt(r, zv), i = p.useContext(Sr), a = p.useContext(Kn), o = e !== void 0 ? Se(e) : void 0, s = (t = n.isListField) !== null && t !== void 0 ? t : !!a, u = "keep";
  return s || (u = "_".concat((o || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && s && o.length <= 1 && me(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ p.createElement(Wa, bt({
    key: u,
    name: o,
    isListField: s
  }, n, {
    fieldContext: i
  }));
}
function Hv(r) {
  var t = r.name, e = r.initialValue, n = r.children, i = r.rules, a = r.validateTrigger, o = r.isListField, s = p.useContext(Sr), u = p.useContext(Kn), c = p.useRef({
    keys: [],
    id: 0
  }), l = c.current, f = p.useMemo(function() {
    var h = Se(s.prefixName) || [];
    return [].concat(q(h), q(Se(t)));
  }, [s.prefixName, t]), v = p.useMemo(function() {
    return T(T({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), g = p.useMemo(function() {
    return {
      getKey: function(d) {
        var b = f.length, y = d[b];
        return [l.keys[y], d.slice(b + 1)];
      }
    };
  }, [f]);
  if (typeof n != "function")
    return me(!1, "Form.List only accepts function as children."), null;
  var m = function(d, b, y) {
    var S = y.source;
    return S === "internal" ? !1 : d !== b;
  };
  return /* @__PURE__ */ p.createElement(Kn.Provider, {
    value: g
  }, /* @__PURE__ */ p.createElement(Sr.Provider, {
    value: v
  }, /* @__PURE__ */ p.createElement(Mu, {
    name: [],
    shouldUpdate: m,
    rules: i,
    validateTrigger: a,
    initialValue: e,
    isList: !0,
    isListField: o ?? !!u
  }, function(h, d) {
    var b = h.value, y = b === void 0 ? [] : b, S = h.onChange, P = s.getFieldValue, w = function() {
      var R = P(f || []);
      return R || [];
    }, E = {
      add: function(R, F) {
        var A = w();
        F >= 0 && F <= A.length ? (l.keys = [].concat(q(l.keys.slice(0, F)), [l.id], q(l.keys.slice(F))), S([].concat(q(A.slice(0, F)), [R], q(A.slice(F))))) : (process.env.NODE_ENV !== "production" && (F < 0 || F > A.length) && me(!1, "The second parameter of the add function should be a valid positive number."), l.keys = [].concat(q(l.keys), [l.id]), S([].concat(q(A), [R]))), l.id += 1;
      },
      remove: function(R) {
        var F = w(), A = new Set(Array.isArray(R) ? R : [R]);
        A.size <= 0 || (l.keys = l.keys.filter(function(M, N) {
          return !A.has(N);
        }), S(F.filter(function(M, N) {
          return !A.has(N);
        })));
      },
      move: function(R, F) {
        if (R !== F) {
          var A = w();
          R < 0 || R >= A.length || F < 0 || F >= A.length || (l.keys = ts(l.keys, R, F), S(ts(A, R, F)));
        }
      }
    }, C = y || [];
    return Array.isArray(C) || (C = [], process.env.NODE_ENV !== "production" && me(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), n(C.map(function(_, R) {
      var F = l.keys[R];
      return F === void 0 && (l.keys[R] = l.id, F = l.keys[R], l.id += 1), {
        name: R,
        key: F,
        isListField: !0
      };
    }), E, d);
  })));
}
function Wv(r) {
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
var Nu = "__@field_split__";
function Ii(r) {
  return r.map(function(t) {
    return "".concat(Y(t), ":").concat(t);
  }).join(Nu);
}
var sr = /* @__PURE__ */ function() {
  function r() {
    Ne(this, r), x(this, "kvs", /* @__PURE__ */ new Map());
  }
  return $e(r, [{
    key: "set",
    value: function(e, n) {
      this.kvs.set(Ii(e), n);
    }
  }, {
    key: "get",
    value: function(e) {
      return this.kvs.get(Ii(e));
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
      this.kvs.delete(Ii(e));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(e) {
      return q(this.kvs.entries()).map(function(n) {
        var i = z(n, 2), a = i[0], o = i[1], s = a.split(Nu);
        return e({
          key: s.map(function(u) {
            var c = u.match(/^([^:]*):(.*)$/), l = z(c, 3), f = l[1], v = l[2];
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
}(), Bv = ["name"], qv = /* @__PURE__ */ $e(function r(t) {
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
    }) : (me(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), x(this, "useSubscribe", function(n) {
    e.subscribable = n;
  }), x(this, "prevWithoutPreserves", null), x(this, "setInitialValues", function(n, i) {
    if (e.initialValues = n || {}, i) {
      var a, o = jr(n, e.store);
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
    return n.length ? jr(i) : i;
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
      e.timeoutId = null, e.formHooked || me(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
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
      var o = Se(a);
      return i.get(o) || {
        INVALIDATE_NAME_PATH: Se(a)
      };
    });
  }), x(this, "getFieldsValue", function(n, i) {
    e.warningUnhooked();
    var a, o, s;
    if (n === !0 || Array.isArray(n) ? (a = n, o = i) : n && Y(n) === "object" && (s = n.strict, o = n.filter), a === !0 && !o)
      return e.store;
    var u = e.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), c = [];
    return u.forEach(function(l) {
      var f, v, g = "INVALIDATE_NAME_PATH" in l ? l.INVALIDATE_NAME_PATH : l.getNamePath();
      if (s) {
        var m, h;
        if ((m = (h = l).isList) !== null && m !== void 0 && m.call(h))
          return;
      } else if (!a && (f = (v = l).isListField) !== null && f !== void 0 && f.call(v))
        return;
      if (!o)
        c.push(g);
      else {
        var d = "getMeta" in l ? l.getMeta() : null;
        o(d) && c.push(g);
      }
    }), es(e.store, c.map(Se));
  }), x(this, "getFieldValue", function(n) {
    e.warningUnhooked();
    var i = Se(n);
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
        name: Se(n[o]),
        errors: [],
        warnings: []
      };
    });
  }), x(this, "getFieldError", function(n) {
    e.warningUnhooked();
    var i = Se(n), a = e.getFieldsError([i])[0];
    return a.errors;
  }), x(this, "getFieldWarning", function(n) {
    e.warningUnhooked();
    var i = Se(n), a = e.getFieldsError([i])[0];
    return a.warnings;
  }), x(this, "isFieldsTouched", function() {
    e.warningUnhooked();
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = i[0], s = i[1], u, c = !1;
    i.length === 0 ? u = null : i.length === 1 ? Array.isArray(o) ? (u = o.map(Se), c = !1) : (u = null, c = o) : (u = o.map(Se), c = s);
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
          return [].concat(q(y), [h]);
        });
      });
    });
    var g = function(d) {
      return d.some(f);
    }, m = v.map(function(h) {
      var d = h.value;
      return d;
    });
    return c ? m.every(g) : m.some(g);
  }), x(this, "isFieldTouched", function(n) {
    return e.warningUnhooked(), e.isFieldsTouched([n]);
  }), x(this, "isFieldsValidating", function(n) {
    e.warningUnhooked();
    var i = e.getFieldEntities();
    if (!n)
      return i.some(function(o) {
        return o.isFieldValidating();
      });
    var a = n.map(Se);
    return i.some(function(o) {
      var s = o.getNamePath();
      return mr(a, s) && o.isFieldValidating();
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
          var v = l.getNamePath(), g = e.getInitialValue(v);
          if (g !== void 0)
            me(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var m = i.get(v);
            if (m && m.size > 1)
              me(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (m) {
              var h = e.getFieldValue(v), d = l.isListField();
              !d && (!n.skipExist || h === void 0) && e.updateStore(ft(e.store, v, q(m)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(u) {
      var c = i.get(u);
      if (c) {
        var l;
        (l = s).push.apply(l, q(q(c).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = a, o(s);
  }), x(this, "resetFields", function(n) {
    e.warningUnhooked();
    var i = e.store;
    if (!n) {
      e.updateStore(jr(e.initialValues)), e.resetWithFieldInitialValue(), e.notifyObservers(i, null, {
        type: "reset"
      }), e.notifyWatch();
      return;
    }
    var a = n.map(Se);
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
      var s = o.name, u = Kt(o, Bv), c = Se(s);
      a.push(c), "value" in u && e.updateStore(ft(e.store, c, u.value)), e.notifyObservers(i, [c], {
        type: "setField",
        data: o
      });
    }), e.notifyWatch(a);
  }), x(this, "getFields", function() {
    var n = e.getFieldEntities(!0), i = n.map(function(a) {
      var o = a.getNamePath(), s = a.getMeta(), u = T(T({}, s), {}, {
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
            !Au(f.getNamePath(), i)
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
      var o = T(T({}, a), {}, {
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
      relatedFields: [i].concat(q(a))
    }), a;
  }), x(this, "updateValue", function(n, i) {
    var a = Se(n), o = e.store;
    e.updateStore(ft(e.store, a, i)), e.notifyObservers(o, [a], {
      type: "valueUpdate",
      source: "internal"
    }), e.notifyWatch([a]);
    var s = e.triggerDependenciesUpdate(o, a), u = e.callbacks.onValuesChange;
    if (u) {
      var c = es(e.store, [a]);
      u(c, e.getFieldsValue());
    }
    e.triggerOnFieldsChange([a].concat(q(s)));
  }), x(this, "setFieldsValue", function(n) {
    e.warningUnhooked();
    var i = e.store;
    if (n) {
      var a = jr(e.store, n);
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
        var f = Se(l);
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
        return mr(n, l);
      });
      u.length && a(u, o);
    }
  }), x(this, "validateFields", function(n, i) {
    e.warningUnhooked();
    var a, o;
    Array.isArray(n) || typeof n == "string" || typeof i == "string" ? (a = n, o = i) : o = n;
    var s = !!a, u = s ? a.map(Se) : [], c = [], l = String(Date.now()), f = /* @__PURE__ */ new Set(), v = o || {}, g = v.recursive, m = v.dirty;
    e.getFieldEntities(!0).forEach(function(y) {
      if (s || u.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length) && !(m && !y.isFieldDirty())) {
        var S = y.getNamePath();
        if (f.add(S.join(l)), !s || mr(u, S, g)) {
          var P = y.validateRules(T({
            validateMessages: T(T({}, ku), e.validateMessages)
          }, o));
          c.push(P.then(function() {
            return {
              name: S,
              errors: [],
              warnings: []
            };
          }).catch(function(w) {
            var E, C = [], _ = [];
            return (E = w.forEach) === null || E === void 0 || E.call(w, function(R) {
              var F = R.rule.warningOnly, A = R.errors;
              F ? _.push.apply(_, q(A)) : C.push.apply(C, q(A));
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
    var h = Wv(c);
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
function $u(r) {
  var t = p.useRef(), e = p.useState({}), n = z(e, 2), i = n[1];
  if (!t.current)
    if (r)
      t.current = r;
    else {
      var a = function() {
        i({});
      }, o = new qv(a);
      t.current = o.getForm();
    }
  return [t.current];
}
var Ca = /* @__PURE__ */ p.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Uv = function(t) {
  var e = t.validateMessages, n = t.onFormChange, i = t.onFormFinish, a = t.children, o = p.useContext(Ca), s = p.useRef({});
  return /* @__PURE__ */ p.createElement(Ca.Provider, {
    value: T(T({}, o), {}, {
      validateMessages: T(T({}, o.validateMessages), e),
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
        c && (s.current = T(T({}, s.current), {}, x({}, c, l))), o.registerForm(c, l);
      },
      unregisterForm: function(c) {
        var l = T({}, s.current);
        delete l[c], s.current = l, o.unregisterForm(c);
      }
    })
  }, a);
}, Gv = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], Xv = function(t, e) {
  var n = t.name, i = t.initialValues, a = t.fields, o = t.form, s = t.preserve, u = t.children, c = t.component, l = c === void 0 ? "form" : c, f = t.validateMessages, v = t.validateTrigger, g = v === void 0 ? "onChange" : v, m = t.onValuesChange, h = t.onFieldsChange, d = t.onFinish, b = t.onFinishFailed, y = t.clearOnDestroy, S = Kt(t, Gv), P = p.useRef(null), w = p.useContext(Ca), E = $u(o), C = z(E, 1), _ = C[0], R = _.getInternalHooks(Ut), F = R.useSubscribe, A = R.setInitialValues, M = R.setCallbacks, N = R.setValidateMessages, k = R.setPreserve, j = R.destroyForm;
  p.useImperativeHandle(e, function() {
    return T(T({}, _), {}, {
      nativeElement: P.current
    });
  }), p.useEffect(function() {
    return w.registerForm(n, _), function() {
      w.unregisterForm(n);
    };
  }, [w, _, n]), N(T(T({}, w.validateMessages), f)), M({
    onValuesChange: m,
    onFieldsChange: function(U) {
      if (w.triggerFormChange(n, U), h) {
        for (var K = arguments.length, te = new Array(K > 1 ? K - 1 : 0), ne = 1; ne < K; ne++)
          te[ne - 1] = arguments[ne];
        h.apply(void 0, [U].concat(te));
      }
    },
    onFinish: function(U) {
      w.triggerFormFinish(n, U), d && d(U);
    },
    onFinishFailed: b
  }), k(s);
  var $ = p.useRef(null);
  A(i, !$.current), $.current || ($.current = !0), p.useEffect(
    function() {
      return function() {
        return j(y);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var L, H = typeof u == "function";
  if (H) {
    var X = _.getFieldsValue(!0);
    L = u(X, _);
  } else
    L = u;
  F(!H);
  var O = p.useRef();
  p.useEffect(function() {
    Lv(O.current || [], a || []) || _.setFields(a || []), O.current = a;
  }, [a, _]);
  var I = p.useMemo(function() {
    return T(T({}, _), {}, {
      validateTrigger: g
    });
  }, [_, g]), V = /* @__PURE__ */ p.createElement(Kn.Provider, {
    value: null
  }, /* @__PURE__ */ p.createElement(Sr.Provider, {
    value: I
  }, L));
  return l === !1 ? V : /* @__PURE__ */ p.createElement(l, bt({}, S, {
    ref: P,
    onSubmit: function(U) {
      U.preventDefault(), U.stopPropagation(), _.submit();
    },
    onReset: function(U) {
      var K;
      U.preventDefault(), _.resetFields(), (K = S.onReset) === null || K === void 0 || K.call(S, U);
    }
  }), V);
};
function rs(r) {
  try {
    return JSON.stringify(r);
  } catch {
    return Math.random();
  }
}
var Kv = process.env.NODE_ENV !== "production" ? function(r) {
  var t = r.join("__RC_FIELD_FORM_SPLIT__"), e = rt(t);
  me(e.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Yv() {
  for (var r = arguments.length, t = new Array(r), e = 0; e < r; e++)
    t[e] = arguments[e];
  var n = t[0], i = t[1], a = i === void 0 ? {} : i, o = iv(a) ? {
    form: a
  } : a, s = o.form, u = fs(), c = z(u, 2), l = c[0], f = c[1], v = ds(function() {
    return rs(l);
  }, [l]), g = rt(v);
  g.current = v;
  var m = Hr(Sr), h = s || m, d = h && h._init;
  process.env.NODE_ENV !== "production" && me(t.length === 2 ? s ? d : !0 : d, "useWatch requires a form instance since it can not auto detect from context.");
  var b = Se(n), y = rt(b);
  return y.current = b, Kv(b), vr(
    function() {
      if (d) {
        var S = h.getFieldsValue, P = h.getInternalHooks, w = P(Ut), E = w.registerWatch, C = function(A, M) {
          var N = o.preserve ? M : A;
          return typeof n == "function" ? n(N) : yt(N, y.current);
        }, _ = E(function(F, A) {
          var M = C(F, A), N = rs(M);
          g.current !== N && (g.current = N, f(M));
        }), R = C(S(), S(!0));
        return l !== R && f(R), _;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d]
  ), l;
}
var Zv = /* @__PURE__ */ p.forwardRef(Xv), en = Zv;
en.FormProvider = Uv;
en.Field = Mu;
en.List = Hv;
en.useForm = $u;
en.useWatch = Yv;
const xa = /* @__PURE__ */ p.createContext({});
process.env.NODE_ENV !== "production" && (xa.displayName = "FormItemInputContext");
const Qv = ({
  children: r,
  status: t,
  override: e
}) => {
  const n = p.useContext(xa), i = p.useMemo(() => {
    const a = Object.assign({}, n);
    return e && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, e, n]);
  return /* @__PURE__ */ p.createElement(xa.Provider, {
    value: i
  }, r);
}, Jv = (r) => {
  const {
    space: t,
    form: e,
    children: n
  } = r;
  if (n == null)
    return null;
  let i = n;
  return e && (i = /* @__PURE__ */ ke.createElement(Qv, {
    override: !0,
    status: !0
  }, i)), t && (i = /* @__PURE__ */ ke.createElement(Md, null, i)), i;
}, eh = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var r = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(r) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(r?.substr(0, 4));
};
function th(r) {
  var t = r.prefixCls, e = r.align, n = r.arrow, i = r.arrowPos, a = n || {}, o = a.className, s = a.content, u = i.x, c = u === void 0 ? 0 : u, l = i.y, f = l === void 0 ? 0 : l, v = p.useRef();
  if (!e || !e.points)
    return null;
  var g = {
    position: "absolute"
  };
  if (e.autoArrow !== !1) {
    var m = e.points[0], h = e.points[1], d = m[0], b = m[1], y = h[0], S = h[1];
    d === y || !["t", "b"].includes(d) ? g.top = f : d === "t" ? g.top = 0 : g.bottom = 0, b === S || !["l", "r"].includes(b) ? g.left = c : b === "l" ? g.left = 0 : g.right = 0;
  }
  return /* @__PURE__ */ p.createElement("div", {
    ref: v,
    className: Le("".concat(t, "-arrow"), o),
    style: g
  }, s);
}
function rh(r) {
  var t = r.prefixCls, e = r.open, n = r.zIndex, i = r.mask, a = r.motion;
  return i ? /* @__PURE__ */ p.createElement(La, bt({}, a, {
    motionAppear: !0,
    visible: e,
    removeOnLeave: !0
  }), function(o) {
    var s = o.className;
    return /* @__PURE__ */ p.createElement("div", {
      style: {
        zIndex: n
      },
      className: Le("".concat(t, "-mask"), s)
    });
  }) : null;
}
var Vu = /* @__PURE__ */ p.memo(function(r) {
  var t = r.children;
  return t;
}, function(r, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (Vu.displayName = "PopupContent");
var Iu = /* @__PURE__ */ p.forwardRef(function(r, t) {
  var e = r.popup, n = r.className, i = r.prefixCls, a = r.style, o = r.target, s = r.onVisibleChanged, u = r.open, c = r.keepDom, l = r.fresh, f = r.onClick, v = r.mask, g = r.arrow, m = r.arrowPos, h = r.align, d = r.motion, b = r.maskMotion, y = r.forceRender, S = r.getPopupContainer, P = r.autoDestroy, w = r.portal, E = r.zIndex, C = r.onMouseEnter, _ = r.onMouseLeave, R = r.onPointerEnter, F = r.onPointerDownCapture, A = r.ready, M = r.offsetX, N = r.offsetY, k = r.offsetR, j = r.offsetB, $ = r.onAlign, L = r.onPrepare, H = r.stretch, X = r.targetWidth, O = r.targetHeight, I = typeof e == "function" ? e() : e, V = u || c, B = S?.length > 0, U = p.useState(!S || !B), K = z(U, 2), te = K[0], ne = K[1];
  if (je(function() {
    !te && B && o && ne(!0);
  }, [te, B, o]), !te)
    return null;
  var J = "auto", re = {
    left: "-1000vw",
    top: "-1000vh",
    right: J,
    bottom: J
  };
  if (A || !u) {
    var Ee, Oe = h.points, ge = h.dynamicInset || ((Ee = h._experimental) === null || Ee === void 0 ? void 0 : Ee.dynamicInset), xe = ge && Oe[0][1] === "r", D = ge && Oe[0][0] === "b";
    xe ? (re.right = k, re.left = J) : (re.left = M, re.right = J), D ? (re.bottom = j, re.top = J) : (re.top = N, re.bottom = J);
  }
  var pe = {};
  return H && (H.includes("height") && O ? pe.height = O : H.includes("minHeight") && O && (pe.minHeight = O), H.includes("width") && X ? pe.width = X : H.includes("minWidth") && X && (pe.minWidth = X)), u || (pe.pointerEvents = "none"), /* @__PURE__ */ p.createElement(w, {
    open: y || V,
    getContainer: S && function() {
      return S(o);
    },
    autoDestroy: P
  }, /* @__PURE__ */ p.createElement(rh, {
    prefixCls: i,
    open: u,
    zIndex: E,
    mask: v,
    motion: b
  }), /* @__PURE__ */ p.createElement(Qn, {
    onResize: $,
    disabled: !u
  }, function(le) {
    return /* @__PURE__ */ p.createElement(La, bt({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: y,
      leavedClassName: "".concat(i, "-hidden")
    }, d, {
      onAppearPrepare: L,
      onEnterPrepare: L,
      visible: u,
      onVisibleChanged: function(Ve) {
        var ye;
        d == null || (ye = d.onVisibleChanged) === null || ye === void 0 || ye.call(d, Ve), s(Ve);
      }
    }), function(Fe, Ve) {
      var ye = Fe.className, He = Fe.style, oe = Le(i, ye, n);
      return /* @__PURE__ */ p.createElement("div", {
        ref: ps(le, t, Ve),
        className: oe,
        style: T(T(T(T({
          "--arrow-x": "".concat(m.x || 0, "px"),
          "--arrow-y": "".concat(m.y || 0, "px")
        }, re), pe), He), {}, {
          boxSizing: "border-box",
          zIndex: E
        }, a),
        onMouseEnter: C,
        onMouseLeave: _,
        onPointerEnter: R,
        onClick: f,
        onPointerDownCapture: F
      }, g && /* @__PURE__ */ p.createElement(th, {
        prefixCls: i,
        arrow: g,
        arrowPos: m,
        align: h
      }), /* @__PURE__ */ p.createElement(Vu, {
        cache: !u && !l
      }, I));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Iu.displayName = "Popup");
var ju = /* @__PURE__ */ p.forwardRef(function(r, t) {
  var e = r.children, n = r.getTriggerDOMNode, i = Yn(e), a = p.useCallback(function(s) {
    Oa(t, n ? n(s) : s);
  }, [n]), o = Ta(a, Ra(e));
  return i ? /* @__PURE__ */ p.cloneElement(e, {
    ref: o
  }) : e;
});
process.env.NODE_ENV !== "production" && (ju.displayName = "TriggerWrapper");
var ns = /* @__PURE__ */ p.createContext(null);
function is(r) {
  return r ? Array.isArray(r) ? r : [r] : [];
}
function nh(r, t, e, n) {
  return p.useMemo(function() {
    var i = is(e ?? t), a = is(n ?? t), o = new Set(i), s = new Set(a);
    return r && (o.has("hover") && (o.delete("hover"), o.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [o, s];
  }, [r, t, e, n]);
}
function ih() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], e = arguments.length > 2 ? arguments[2] : void 0;
  return e ? r[0] === t[0] : r[0] === t[0] && r[1] === t[1];
}
function ah(r, t, e, n) {
  for (var i = e.points, a = Object.keys(r), o = 0; o < a.length; o += 1) {
    var s, u = a[o];
    if (ih((s = r[u]) === null || s === void 0 ? void 0 : s.points, i, n))
      return "".concat(t, "-placement-").concat(u);
  }
  return "";
}
function as(r, t, e, n) {
  return t || (e ? {
    motionName: "".concat(r, "-").concat(e)
  } : n ? {
    motionName: n
  } : null);
}
function tn(r) {
  return r.ownerDocument.defaultView;
}
function Pa(r) {
  for (var t = [], e = r?.parentElement, n = ["hidden", "scroll", "clip", "auto"]; e; ) {
    var i = tn(e).getComputedStyle(e), a = i.overflowX, o = i.overflowY, s = i.overflow;
    [a, o, s].some(function(u) {
      return n.includes(u);
    }) && t.push(e), e = e.parentElement;
  }
  return t;
}
function Zr(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(r) ? t : r;
}
function Vr(r) {
  return Zr(parseFloat(r), 0);
}
function os(r, t) {
  var e = T({}, r);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var i = tn(n).getComputedStyle(n), a = i.overflow, o = i.overflowClipMargin, s = i.borderTopWidth, u = i.borderBottomWidth, c = i.borderLeftWidth, l = i.borderRightWidth, f = n.getBoundingClientRect(), v = n.offsetHeight, g = n.clientHeight, m = n.offsetWidth, h = n.clientWidth, d = Vr(s), b = Vr(u), y = Vr(c), S = Vr(l), P = Zr(Math.round(f.width / m * 1e3) / 1e3), w = Zr(Math.round(f.height / v * 1e3) / 1e3), E = (m - h - y - S) * P, C = (v - g - d - b) * w, _ = d * w, R = b * w, F = y * P, A = S * P, M = 0, N = 0;
      if (a === "clip") {
        var k = Vr(o);
        M = k * P, N = k * w;
      }
      var j = f.x + F - M, $ = f.y + _ - N, L = j + f.width + 2 * M - F - A - E, H = $ + f.height + 2 * N - _ - R - C;
      e.left = Math.max(e.left, j), e.top = Math.max(e.top, $), e.right = Math.min(e.right, L), e.bottom = Math.min(e.bottom, H);
    }
  }), e;
}
function ss(r) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = "".concat(t), n = e.match(/^(.*)\%$/);
  return n ? r * (parseFloat(n[1]) / 100) : parseFloat(e);
}
function us(r, t) {
  var e = t || [], n = z(e, 2), i = n[0], a = n[1];
  return [ss(r.width, i), ss(r.height, a)];
}
function cs() {
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
function At(r, t) {
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
function oh(r, t, e, n, i, a, o) {
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
  }), u = z(s, 2), c = u[0], l = u[1], f = p.useRef(0), v = p.useMemo(function() {
    return t ? Pa(t) : [];
  }, [t]), g = p.useRef({}), m = function() {
    g.current = {};
  };
  r || m();
  var h = tt(function() {
    if (t && e && r) {
      let Ze = function(Fr, Et) {
        var Bt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ge, bn = V.x + Fr, wn = V.y + Et, wi = bn + D, Si = wn + xe, W = Math.max(bn, Bt.left), G = Math.max(wn, Bt.top), de = Math.min(wi, Bt.right), we = Math.min(Si, Bt.bottom);
        return Math.max(0, (de - W) * (we - G));
      }, ir = function() {
        Ot = V.y + he, Tt = Ot + xe, jt = V.x + ce, St = jt + D;
      };
      var y, S, P, w, E = t, C = E.ownerDocument, _ = tn(E), R = _.getComputedStyle(E), F = R.position, A = E.style.left, M = E.style.top, N = E.style.right, k = E.style.bottom, j = E.style.overflow, $ = T(T({}, i[n]), a), L = C.createElement("div");
      (y = E.parentElement) === null || y === void 0 || y.appendChild(L), L.style.left = "".concat(E.offsetLeft, "px"), L.style.top = "".concat(E.offsetTop, "px"), L.style.position = F, L.style.height = "".concat(E.offsetHeight, "px"), L.style.width = "".concat(E.offsetWidth, "px"), E.style.left = "0", E.style.top = "0", E.style.right = "auto", E.style.bottom = "auto", E.style.overflow = "hidden";
      var H;
      if (Array.isArray(e))
        H = {
          x: e[0],
          y: e[1],
          width: 0,
          height: 0
        };
      else {
        var X, O, I = e.getBoundingClientRect();
        I.x = (X = I.x) !== null && X !== void 0 ? X : I.left, I.y = (O = I.y) !== null && O !== void 0 ? O : I.top, H = {
          x: I.x,
          y: I.y,
          width: I.width,
          height: I.height
        };
      }
      var V = E.getBoundingClientRect(), B = _.getComputedStyle(E), U = B.height, K = B.width;
      V.x = (S = V.x) !== null && S !== void 0 ? S : V.left, V.y = (P = V.y) !== null && P !== void 0 ? P : V.top;
      var te = C.documentElement, ne = te.clientWidth, J = te.clientHeight, re = te.scrollWidth, Ee = te.scrollHeight, Oe = te.scrollTop, ge = te.scrollLeft, xe = V.height, D = V.width, pe = H.height, le = H.width, Fe = {
        left: 0,
        top: 0,
        right: ne,
        bottom: J
      }, Ve = {
        left: -ge,
        top: -Oe,
        right: re - ge,
        bottom: Ee - Oe
      }, ye = $.htmlRegion, He = "visible", oe = "visibleFirst";
      ye !== "scroll" && ye !== oe && (ye = He);
      var ue = ye === oe, Ae = os(Ve, v), ee = os(Fe, v), Ge = ye === He ? ee : Ae, Pe = ue ? ee : Ge;
      E.style.left = "auto", E.style.top = "auto", E.style.right = "0", E.style.bottom = "0";
      var Jt = E.getBoundingClientRect();
      E.style.left = A, E.style.top = M, E.style.right = N, E.style.bottom = k, E.style.overflow = j, (w = E.parentElement) === null || w === void 0 || w.removeChild(L);
      var ot = Zr(Math.round(D / parseFloat(K) * 1e3) / 1e3), mt = Zr(Math.round(xe / parseFloat(U) * 1e3) / 1e3);
      if (ot === 0 || mt === 0 || Wr(e) && !kd(e))
        return;
      var Cr = $.offset, ve = $.targetOffset, fe = us(V, Cr), st = z(fe, 2), Xe = st[0], ut = st[1], er = us(H, ve), We = z(er, 2), _t = We[0], ai = We[1];
      H.x -= _t, H.y -= ai;
      var oi = $.points || [], rn = z(oi, 2), si = rn[0], nn = rn[1], wt = cs(nn), De = cs(si), Ie = ur(H, wt), an = ur(V, De), Ke = T({}, $), ce = Ie.x - an.x + Xe, he = Ie.y - an.y + ut, ct = Ze(ce, he), Vt = Ze(ce, he, ee), Ye = ur(H, ["t", "l"]), on = ur(V, ["t", "l"]), xr = ur(H, ["b", "r"]), tr = ur(V, ["b", "r"]), It = $.overflow || {}, ui = It.adjustX, sn = It.adjustY, rr = It.shiftX, Pr = It.shiftY, un = function(Et) {
        return typeof Et == "boolean" ? Et : Et >= 0;
      }, Ot, Tt, jt, St;
      ir();
      var cn = un(sn), ze = De[0] === wt[0];
      if (cn && De[0] === "t" && (Tt > Pe.bottom || g.current.bt)) {
        var Lt = he;
        ze ? Lt -= xe - pe : Lt = Ye.y - tr.y - ut;
        var ln = Ze(ce, Lt), ci = Ze(ce, Lt, ee);
        // Of course use larger one
        ln > ct || ln === ct && (!ue || // Choose recommend one
        ci >= Vt) ? (g.current.bt = !0, he = Lt, ut = -ut, Ke.points = [At(De, 0), At(wt, 0)]) : g.current.bt = !1;
      }
      if (cn && De[0] === "b" && (Ot < Pe.top || g.current.tb)) {
        var Dt = he;
        ze ? Dt += xe - pe : Dt = xr.y - on.y - ut;
        var fn = Ze(ce, Dt), li = Ze(ce, Dt, ee);
        // Of course use larger one
        fn > ct || fn === ct && (!ue || // Choose recommend one
        li >= Vt) ? (g.current.tb = !0, he = Dt, ut = -ut, Ke.points = [At(De, 0), At(wt, 0)]) : g.current.tb = !1;
      }
      var dn = un(ui), vn = De[1] === wt[1];
      if (dn && De[1] === "l" && (St > Pe.right || g.current.rl)) {
        var zt = ce;
        vn ? zt -= D - le : zt = Ye.x - tr.x - Xe;
        var Ht = Ze(zt, he), _r = Ze(zt, he, ee);
        // Of course use larger one
        Ht > ct || Ht === ct && (!ue || // Choose recommend one
        _r >= Vt) ? (g.current.rl = !0, ce = zt, Xe = -Xe, Ke.points = [At(De, 1), At(wt, 1)]) : g.current.rl = !1;
      }
      if (dn && De[1] === "r" && (jt < Pe.left || g.current.lr)) {
        var Wt = ce;
        vn ? Wt += D - le : Wt = xr.x - on.x - Xe;
        var Or = Ze(Wt, he), nr = Ze(Wt, he, ee);
        // Of course use larger one
        Or > ct || Or === ct && (!ue || // Choose recommend one
        nr >= Vt) ? (g.current.lr = !0, ce = Wt, Xe = -Xe, Ke.points = [At(De, 1), At(wt, 1)]) : g.current.lr = !1;
      }
      ir();
      var lt = rr === !0 ? 0 : rr;
      typeof lt == "number" && (jt < ee.left && (ce -= jt - ee.left - Xe, H.x + le < ee.left + lt && (ce += H.x - ee.left + le - lt)), St > ee.right && (ce -= St - ee.right - Xe, H.x > ee.right - lt && (ce += H.x - ee.right + lt)));
      var Rt = Pr === !0 ? 0 : Pr;
      typeof Rt == "number" && (Ot < ee.top && (he -= Ot - ee.top - ut, H.y + pe < ee.top + Rt && (he += H.y - ee.top + pe - Rt)), Tt > ee.bottom && (he -= Tt - ee.bottom - ut, H.y > ee.bottom - Rt && (he += H.y - ee.bottom + Rt)));
      var Ft = V.x + ce, kt = Ft + D, Tr = V.y + he, fi = Tr + xe, hn = H.x, mn = hn + le, gn = H.y, di = gn + pe, vi = Math.max(Ft, hn), pn = Math.min(kt, mn), hi = (vi + pn) / 2, mi = hi - Ft, yn = Math.max(Tr, gn), gi = Math.min(fi, di), pi = (yn + gi) / 2, yi = pi - Tr;
      o?.(t, Ke);
      var gt = Jt.right - V.x - (ce + V.width), Rr = Jt.bottom - V.y - (he + V.height);
      ot === 1 && (ce = Math.round(ce), gt = Math.round(gt)), mt === 1 && (he = Math.round(he), Rr = Math.round(Rr));
      var bi = {
        ready: !0,
        offsetX: ce / ot,
        offsetY: he / mt,
        offsetR: gt / ot,
        offsetB: Rr / mt,
        arrowX: mi / ot,
        arrowY: yi / mt,
        scaleX: ot,
        scaleY: mt,
        align: Ke
      };
      l(bi);
    }
  }), d = function() {
    f.current += 1;
    var S = f.current;
    Promise.resolve().then(function() {
      f.current === S && h();
    });
  }, b = function() {
    l(function(S) {
      return T(T({}, S), {}, {
        ready: !1
      });
    });
  };
  return je(b, [n]), je(function() {
    r || b();
  }, [r]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, d];
}
function sh(r, t, e, n, i) {
  je(function() {
    if (r && t && e) {
      let f = function() {
        n(), i();
      };
      var a = t, o = e, s = Pa(a), u = Pa(o), c = tn(o), l = new Set([c].concat(q(s), q(u)));
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
function uh(r, t, e, n, i, a, o, s) {
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
      }, g = tn(n);
      g.addEventListener("pointerdown", f, !0), g.addEventListener("mousedown", v, !0), g.addEventListener("contextmenu", v, !0);
      var m = va(e);
      if (m && (m.addEventListener("mousedown", v, !0), m.addEventListener("contextmenu", v, !0)), process.env.NODE_ENV !== "production") {
        var h, d, b = e == null || (h = e.getRootNode) === null || h === void 0 ? void 0 : h.call(e), y = (d = n.getRootNode) === null || d === void 0 ? void 0 : d.call(n);
        gr(b === y, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        g.removeEventListener("pointerdown", f, !0), g.removeEventListener("mousedown", v, !0), g.removeEventListener("contextmenu", v, !0), m && (m.removeEventListener("mousedown", v, !0), m.removeEventListener("contextmenu", v, !0));
      };
    }
  }, [t, e, n, i, a]);
  function l() {
    c.current = !0;
  }
  return l;
}
var ch = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function lh() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ha, t = /* @__PURE__ */ p.forwardRef(function(e, n) {
    var i = e.prefixCls, a = i === void 0 ? "rc-trigger-popup" : i, o = e.children, s = e.action, u = s === void 0 ? "hover" : s, c = e.showAction, l = e.hideAction, f = e.popupVisible, v = e.defaultPopupVisible, g = e.onPopupVisibleChange, m = e.afterPopupVisibleChange, h = e.mouseEnterDelay, d = e.mouseLeaveDelay, b = d === void 0 ? 0.1 : d, y = e.focusDelay, S = e.blurDelay, P = e.mask, w = e.maskClosable, E = w === void 0 ? !0 : w, C = e.getPopupContainer, _ = e.forceRender, R = e.autoDestroy, F = e.destroyPopupOnHide, A = e.popup, M = e.popupClassName, N = e.popupStyle, k = e.popupPlacement, j = e.builtinPlacements, $ = j === void 0 ? {} : j, L = e.popupAlign, H = e.zIndex, X = e.stretch, O = e.getPopupClassNameFromAlign, I = e.fresh, V = e.alignPoint, B = e.onPopupClick, U = e.onPopupAlign, K = e.arrow, te = e.popupMotion, ne = e.maskMotion, J = e.popupTransitionName, re = e.popupAnimation, Ee = e.maskTransitionName, Oe = e.maskAnimation, ge = e.className, xe = e.getTriggerDOMNode, D = Kt(e, ch), pe = R || F || !1, le = p.useState(!1), Fe = z(le, 2), Ve = Fe[0], ye = Fe[1];
    je(function() {
      ye(eh());
    }, []);
    var He = p.useRef({}), oe = p.useContext(ns), ue = p.useMemo(function() {
      return {
        registerSubPopup: function(G, de) {
          He.current[G] = de, oe?.registerSubPopup(G, de);
        }
      };
    }, [oe]), Ae = Tu(), ee = p.useState(null), Ge = z(ee, 2), Pe = Ge[0], Jt = Ge[1], ot = p.useRef(null), mt = tt(function(W) {
      ot.current = W, Wr(W) && Pe !== W && Jt(W), oe?.registerSubPopup(Ae, W);
    }), Cr = p.useState(null), ve = z(Cr, 2), fe = ve[0], st = ve[1], Xe = p.useRef(null), ut = tt(function(W) {
      Wr(W) && fe !== W && (st(W), Xe.current = W);
    }), er = p.Children.only(o), We = er?.props || {}, _t = {}, ai = tt(function(W) {
      var G, de, we = fe;
      return we?.contains(W) || ((G = va(we)) === null || G === void 0 ? void 0 : G.host) === W || W === we || Pe?.contains(W) || ((de = va(Pe)) === null || de === void 0 ? void 0 : de.host) === W || W === Pe || Object.values(He.current).some(function(be) {
        return be?.contains(W) || W === be;
      });
    }), oi = as(a, te, re, J), rn = as(a, ne, Oe, Ee), si = p.useState(v || !1), nn = z(si, 2), wt = nn[0], De = nn[1], Ie = f ?? wt, an = tt(function(W) {
      f === void 0 && De(W);
    });
    je(function() {
      De(f || !1);
    }, [f]);
    var Ke = p.useRef(Ie);
    Ke.current = Ie;
    var ce = p.useRef([]);
    ce.current = [];
    var he = tt(function(W) {
      var G;
      an(W), ((G = ce.current[ce.current.length - 1]) !== null && G !== void 0 ? G : Ie) !== W && (ce.current.push(W), g?.(W));
    }), ct = p.useRef(), Vt = function() {
      clearTimeout(ct.current);
    }, Ye = function(G) {
      var de = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Vt(), de === 0 ? he(G) : ct.current = setTimeout(function() {
        he(G);
      }, de * 1e3);
    };
    p.useEffect(function() {
      return Vt;
    }, []);
    var on = p.useState(!1), xr = z(on, 2), tr = xr[0], It = xr[1];
    je(function(W) {
      (!W || Ie) && It(!0);
    }, [Ie]);
    var ui = p.useState(null), sn = z(ui, 2), rr = sn[0], Pr = sn[1], un = p.useState(null), Ot = z(un, 2), Tt = Ot[0], jt = Ot[1], St = function(G) {
      jt([G.clientX, G.clientY]);
    }, cn = oh(Ie, Pe, V && Tt !== null ? Tt : fe, k, $, L, U), ze = z(cn, 11), Lt = ze[0], ln = ze[1], ci = ze[2], Dt = ze[3], fn = ze[4], li = ze[5], dn = ze[6], vn = ze[7], zt = ze[8], Ht = ze[9], _r = ze[10], Wt = nh(Ve, u, c, l), Or = z(Wt, 2), nr = Or[0], lt = Or[1], Rt = nr.has("click"), Ft = lt.has("click") || lt.has("contextMenu"), kt = tt(function() {
      tr || _r();
    }), Tr = function() {
      Ke.current && V && Ft && Ye(!1);
    };
    sh(Ie, fe, Pe, kt, Tr), je(function() {
      kt();
    }, [Tt, k]), je(function() {
      Ie && !($ != null && $[k]) && kt();
    }, [JSON.stringify(L)]);
    var fi = p.useMemo(function() {
      var W = ah($, a, Ht, V);
      return Le(W, O?.(Ht));
    }, [Ht, O, $, a, V]);
    p.useImperativeHandle(n, function() {
      return {
        nativeElement: Xe.current,
        popupElement: ot.current,
        forceAlign: kt
      };
    });
    var hn = p.useState(0), mn = z(hn, 2), gn = mn[0], di = mn[1], vi = p.useState(0), pn = z(vi, 2), hi = pn[0], mi = pn[1], yn = function() {
      if (X && fe) {
        var G = fe.getBoundingClientRect();
        di(G.width), mi(G.height);
      }
    }, gi = function() {
      yn(), kt();
    }, pi = function(G) {
      It(!1), _r(), m?.(G);
    }, yi = function() {
      return new Promise(function(G) {
        yn(), Pr(function() {
          return G;
        });
      });
    };
    je(function() {
      rr && (_r(), rr(), Pr(null));
    }, [rr]);
    function gt(W, G, de, we) {
      _t[W] = function(be) {
        var Sn;
        we?.(be), Ye(G, de);
        for (var Ei = arguments.length, qa = new Array(Ei > 1 ? Ei - 1 : 0), En = 1; En < Ei; En++)
          qa[En - 1] = arguments[En];
        (Sn = We[W]) === null || Sn === void 0 || Sn.call.apply(Sn, [We, be].concat(qa));
      };
    }
    (Rt || Ft) && (_t.onClick = function(W) {
      var G;
      Ke.current && Ft ? Ye(!1) : !Ke.current && Rt && (St(W), Ye(!0));
      for (var de = arguments.length, we = new Array(de > 1 ? de - 1 : 0), be = 1; be < de; be++)
        we[be - 1] = arguments[be];
      (G = We.onClick) === null || G === void 0 || G.call.apply(G, [We, W].concat(we));
    });
    var Rr = uh(Ie, Ft, fe, Pe, P, E, ai, Ye), bi = nr.has("hover"), Ze = lt.has("hover"), ir, Fr;
    bi && (gt("onMouseEnter", !0, h, function(W) {
      St(W);
    }), gt("onPointerEnter", !0, h, function(W) {
      St(W);
    }), ir = function(G) {
      (Ie || tr) && Pe !== null && Pe !== void 0 && Pe.contains(G.target) && Ye(!0, h);
    }, V && (_t.onMouseMove = function(W) {
      var G;
      (G = We.onMouseMove) === null || G === void 0 || G.call(We, W);
    })), Ze && (gt("onMouseLeave", !1, b), gt("onPointerLeave", !1, b), Fr = function() {
      Ye(!1, b);
    }), nr.has("focus") && gt("onFocus", !0, y), lt.has("focus") && gt("onBlur", !1, S), nr.has("contextMenu") && (_t.onContextMenu = function(W) {
      var G;
      Ke.current && lt.has("contextMenu") ? Ye(!1) : (St(W), Ye(!0)), W.preventDefault();
      for (var de = arguments.length, we = new Array(de > 1 ? de - 1 : 0), be = 1; be < de; be++)
        we[be - 1] = arguments[be];
      (G = We.onContextMenu) === null || G === void 0 || G.call.apply(G, [We, W].concat(we));
    }), ge && (_t.className = Le(We.className, ge));
    var Et = T(T({}, We), _t), Bt = {}, bn = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    bn.forEach(function(W) {
      D[W] && (Bt[W] = function() {
        for (var G, de = arguments.length, we = new Array(de), be = 0; be < de; be++)
          we[be] = arguments[be];
        (G = Et[W]) === null || G === void 0 || G.call.apply(G, [Et].concat(we)), D[W].apply(D, we);
      });
    });
    var wn = /* @__PURE__ */ p.cloneElement(er, T(T({}, Et), Bt)), wi = {
      x: li,
      y: dn
    }, Si = K ? T({}, K !== !0 ? K : {}) : null;
    return /* @__PURE__ */ p.createElement(p.Fragment, null, /* @__PURE__ */ p.createElement(Qn, {
      disabled: !Ie,
      ref: ut,
      onResize: gi
    }, /* @__PURE__ */ p.createElement(ju, {
      getTriggerDOMNode: xe
    }, wn)), /* @__PURE__ */ p.createElement(ns.Provider, {
      value: ue
    }, /* @__PURE__ */ p.createElement(Iu, {
      portal: r,
      ref: mt,
      prefixCls: a,
      popup: A,
      className: Le(M, fi),
      style: N,
      target: fe,
      onMouseEnter: ir,
      onMouseLeave: Fr,
      onPointerEnter: ir,
      zIndex: H,
      open: Ie,
      keepDom: tr,
      fresh: I,
      onClick: B,
      onPointerDownCapture: Rr,
      mask: P,
      motion: oi,
      maskMotion: rn,
      onVisibleChanged: pi,
      onPrepare: yi,
      forceRender: _,
      autoDestroy: pe,
      getPopupContainer: C,
      align: Ht,
      arrow: Si,
      arrowPos: wi,
      ready: Lt,
      offsetX: ln,
      offsetY: ci,
      offsetR: Dt,
      offsetB: fn,
      onAlign: kt,
      stretch: X,
      targetWidth: gn / vn,
      targetHeight: hi / zt
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const fh = lh(Ha);
function Lu(r) {
  var t = r.children, e = r.prefixCls, n = r.id, i = r.overlayInnerStyle, a = r.bodyClassName, o = r.className, s = r.style;
  return /* @__PURE__ */ p.createElement("div", {
    className: Le("".concat(e, "-content"), o),
    style: s
  }, /* @__PURE__ */ p.createElement("div", {
    className: Le("".concat(e, "-inner"), a),
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
}, et = [0, 0], dh = {
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
}, vh = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], hh = function(t, e) {
  var n = t.overlayClassName, i = t.trigger, a = i === void 0 ? ["hover"] : i, o = t.mouseEnterDelay, s = o === void 0 ? 0 : o, u = t.mouseLeaveDelay, c = u === void 0 ? 0.1 : u, l = t.overlayStyle, f = t.prefixCls, v = f === void 0 ? "rc-tooltip" : f, g = t.children, m = t.onVisibleChange, h = t.afterVisibleChange, d = t.transitionName, b = t.animation, y = t.motion, S = t.placement, P = S === void 0 ? "right" : S, w = t.align, E = w === void 0 ? {} : w, C = t.destroyTooltipOnHide, _ = C === void 0 ? !1 : C, R = t.defaultVisible, F = t.getTooltipContainer, A = t.overlayInnerStyle;
  t.arrowContent;
  var M = t.overlay, N = t.id, k = t.showArrow, j = k === void 0 ? !0 : k, $ = t.classNames, L = t.styles, H = Kt(t, vh), X = Tu(N), O = rt(null);
  Xu(e, function() {
    return O.current;
  });
  var I = T({}, H);
  "visible" in t && (I.popupVisible = t.visible);
  var V = function() {
    return /* @__PURE__ */ p.createElement(Lu, {
      key: "content",
      prefixCls: v,
      id: X,
      bodyClassName: $?.body,
      overlayInnerStyle: T(T({}, A), L?.body)
    }, M);
  }, B = function() {
    var K = p.Children.only(g), te = K?.props || {}, ne = T(T({}, te), {}, {
      "aria-describedby": M ? X : null
    });
    return /* @__PURE__ */ p.cloneElement(g, ne);
  };
  return /* @__PURE__ */ p.createElement(fh, bt({
    popupClassName: Le(n, $?.root),
    prefixCls: v,
    popup: V,
    action: a,
    builtinPlacements: dh,
    popupPlacement: P,
    ref: O,
    popupAlign: E,
    getPopupContainer: F,
    onPopupVisibleChange: m,
    afterPopupVisibleChange: h,
    popupTransitionName: d,
    popupAnimation: b,
    popupMotion: y,
    defaultPopupVisible: R,
    autoDestroy: _,
    mouseLeaveDelay: c,
    popupStyle: T(T({}, l), L?.root),
    mouseEnterDelay: s,
    arrow: j
  }, I), B());
};
const mh = /* @__PURE__ */ Gu(hh);
function gh(r) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: e,
    borderRadiusOuter: n
  } = r, i = t / 2, a = 0, o = i, s = n * 1 / Math.sqrt(2), u = i - n * (1 - 1 / Math.sqrt(2)), c = i - e * (1 / Math.sqrt(2)), l = n * (Math.sqrt(2) - 1) + e * (1 / Math.sqrt(2)), f = 2 * i - c, v = l, g = 2 * i - s, m = u, h = 2 * i - a, d = o, b = i * Math.sqrt(2) + n * (Math.sqrt(2) - 2), y = n * (Math.sqrt(2) - 1), S = `polygon(${y}px 100%, 50% ${y}px, ${2 * i - y}px 100%, ${y}px 100%)`, P = `path('M ${a} ${o} A ${n} ${n} 0 0 0 ${s} ${u} L ${c} ${l} A ${e} ${e} 0 0 1 ${f} ${v} L ${g} ${m} A ${n} ${n} 0 0 0 ${h} ${d} Z')`;
  return {
    arrowShadowWidth: b,
    arrowPath: P,
    arrowPolygon: S
  };
}
const ph = (r, t, e) => {
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
        value: `0 0 ${Yt(s)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: e,
      zIndex: 0,
      background: "transparent"
    }
  };
}, Du = 8;
function zu(r) {
  const {
    contentRadius: t,
    limitVerticalRadius: e
  } = r, n = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: n,
    arrowOffsetVertical: e ? Du : n
  };
}
function Nn(r, t) {
  return r ? t : {};
}
function yh(r, t, e) {
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
      }, ph(r, t, i)), {
        "&:before": {
          background: t
        }
      })]
    }, Nn(!!u.top, {
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
        "--arrow-offset-horizontal": `calc(100% - ${Yt(o)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: o
          }
        }
      }
    })), Nn(!!u.bottom, {
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
        "--arrow-offset-horizontal": `calc(100% - ${Yt(o)})`,
        [`> ${n}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: o
          }
        }
      }
    })), Nn(!!u.left, {
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
    })), Nn(!!u.right, {
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
function bh(r, t, e, n) {
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
const ls = {
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
}, wh = {
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
}, Sh = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function Eh(r) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: e,
    arrowPointAtCenter: n,
    offset: i,
    borderRadius: a
  } = r, o = t / 2, s = {};
  return Object.keys(ls).forEach((u) => {
    const c = n && wh[u] || ls[u], l = Object.assign(Object.assign({}, c), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (s[u] = l, Sh.has(u) && (l.autoArrow = !1), u) {
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
    const f = zu({
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
    l.overflow = bh(u, f, t, e), l.htmlRegion = "visibleFirst";
  }), s;
}
const Ch = (r) => {
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
    sizePopupArrow: g
  } = r, m = t(o).add(g).add(v).equal(), h = t(o).mul(2).add(g).equal();
  return [
    {
      [e]: Object.assign(Object.assign(Object.assign(Object.assign({}, qf(r)), {
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
          padding: `${Yt(r.calc(l).div(2).equal())} ${Yt(f)}`,
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
          minWidth: m
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${e}-inner`]: {
            borderRadius: r.min(o, Du)
          }
        },
        [`${e}-content`]: {
          position: "relative"
        }
      }), Zf(r, (d, {
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
    yh(r, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${e}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: r.sizePopupArrow
      }
    }
  ];
}, xh = (r) => Object.assign(Object.assign({
  zIndexPopup: r.zIndexPopupBase + 70
}, zu({
  contentRadius: r.borderRadius,
  limitVerticalRadius: !0
})), gh(ii(r, {
  borderRadiusOuter: Math.min(r.borderRadiusOuter, 4)
}))), Hu = (r, t = !0) => Yf("Tooltip", (n) => {
  const {
    borderRadius: i,
    colorTextLightSolid: a,
    colorBgSpotlight: o
  } = n, s = ii(n, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: a,
    tooltipBorderRadius: i,
    tooltipBg: o
  });
  return [Ch(s), Xd(n, "zoom-big-fast")];
}, xh, {
  resetStyle: !1,
  // Popover use Tooltip as internal component. We do not need to handle this.
  injectStyle: t
})(r), Ph = Gn.map((r) => `${r}-inverse`);
function _h(r, t = !0) {
  return t ? [].concat(q(Ph), q(Gn)).includes(r) : Gn.includes(r);
}
function Wu(r, t) {
  const e = _h(t), n = Le({
    [`${r}-${t}`]: t && e
  }), i = {}, a = {};
  return t && !e && (i.background = t, a["--antd-arrow-background-color"] = t), {
    className: n,
    overlayStyle: i,
    arrowStyle: a
  };
}
const Oh = (r) => {
  const {
    prefixCls: t,
    className: e,
    placement: n = "top",
    title: i,
    color: a,
    overlayInnerStyle: o
  } = r, {
    getPrefixCls: s
  } = p.useContext(Kr), u = s("tooltip", t), [c, l, f] = Hu(u), v = Wu(u, a), g = v.arrowStyle, m = Object.assign(Object.assign({}, o), v.overlayStyle), h = Le(l, f, u, `${u}-pure`, `${u}-placement-${n}`, e, v.className);
  return c(/* @__PURE__ */ p.createElement("div", {
    className: h,
    style: g
  }, /* @__PURE__ */ p.createElement("div", {
    className: `${u}-arrow`
  }), /* @__PURE__ */ p.createElement(Lu, Object.assign({}, r, {
    className: l,
    prefixCls: u,
    overlayInnerStyle: m
  }), i)));
};
var Th = function(r, t) {
  var e = {};
  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && t.indexOf(n) < 0 && (e[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
    t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (e[n[i]] = r[n[i]]);
  return e;
};
const Rh = /* @__PURE__ */ p.forwardRef((r, t) => {
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
    destroyOnHidden: g,
    arrow: m = !0,
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
    overlayStyle: R,
    rootClassName: F,
    overlayClassName: A,
    styles: M,
    classNames: N
  } = r, k = Th(r, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "destroyOnHidden", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), j = !!m, [, $] = Ia(), {
    getPopupContainer: L,
    getPrefixCls: H,
    direction: X,
    className: O,
    style: I,
    classNames: V,
    styles: B
  } = Of("tooltip"), U = ru("Tooltip"), K = p.useRef(null), te = () => {
    var ve;
    (ve = K.current) === null || ve === void 0 || ve.forceAlign();
  };
  p.useImperativeHandle(t, () => {
    var ve, fe;
    return {
      forceAlign: te,
      forcePopupAlign: () => {
        U.deprecated(!1, "forcePopupAlign", "forceAlign"), te();
      },
      nativeElement: (ve = K.current) === null || ve === void 0 ? void 0 : ve.nativeElement,
      popupElement: (fe = K.current) === null || fe === void 0 ? void 0 : fe.popupElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["destroyTooltipOnHide", "destroyOnHidden"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"], ["overlayStyle", "styles={{ root: {} }}"], ["overlayInnerStyle", "styles={{ body: {} }}"], ["overlayClassName", 'classNames={{ root: "" }}']].forEach(([ve, fe]) => {
    U.deprecated(!(ve in r), ve, fe);
  }), process.env.NODE_ENV !== "production" && U(!v || typeof v == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && U(!m || typeof m == "boolean" || !("arrowPointAtCenter" in m), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [ne, J] = Af(!1, {
    value: (e = r.open) !== null && e !== void 0 ? e : r.visible,
    defaultValue: (n = r.defaultOpen) !== null && n !== void 0 ? n : r.defaultVisible
  }), re = !h && !d && h !== 0, Ee = (ve) => {
    var fe, st;
    J(re ? !1 : ve), re || ((fe = r.onOpenChange) === null || fe === void 0 || fe.call(r, ve), (st = r.onVisibleChange) === null || st === void 0 || st.call(r, ve));
  }, Oe = p.useMemo(() => {
    var ve, fe;
    let st = y;
    return typeof m == "object" && (st = (fe = (ve = m.pointAtCenter) !== null && ve !== void 0 ? ve : m.arrowPointAtCenter) !== null && fe !== void 0 ? fe : y), b || Eh({
      arrowPointAtCenter: st,
      autoAdjustOverflow: S,
      arrowWidth: j ? $.sizePopupArrow : 0,
      borderRadius: $.borderRadius,
      offset: $.marginXXS
    });
  }, [y, m, b, $]), ge = p.useMemo(() => h === 0 ? h : d || h || "", [d, h]), xe = /* @__PURE__ */ p.createElement(Jv, {
    space: !0
  }, typeof ge == "function" ? ge() : ge), D = H("tooltip", i), pe = H(), le = r["data-popover-inject"];
  let Fe = ne;
  !("open" in r) && !("visible" in r) && re && (Fe = !1);
  const Ve = /* @__PURE__ */ p.isValidElement(c) && !bd(c) ? c : /* @__PURE__ */ p.createElement("span", null, c), ye = Ve.props, He = !ye.className || typeof ye.className == "string" ? Le(ye.className, a || `${D}-open`) : ye.className, [oe, ue, Ae] = Hu(D, !le), ee = Wu(D, s), Ge = ee.arrowStyle, Pe = Le(A, {
    [`${D}-rtl`]: X === "rtl"
  }, ee.className, F, ue, Ae, O, V.root, N?.root), Jt = Le(V.body, N?.body), [ot, mt] = Od("Tooltip", k.zIndex), Cr = /* @__PURE__ */ p.createElement(mh, Object.assign({}, k, {
    zIndex: ot,
    showArrow: j,
    placement: E,
    mouseEnterDelay: C,
    mouseLeaveDelay: _,
    prefixCls: D,
    classNames: {
      root: Pe,
      body: Jt
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ge), B.root), I), R), M?.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, B.body), u), M?.body), ee.overlayStyle)
    },
    getTooltipContainer: w || o || L,
    ref: K,
    builtinPlacements: Oe,
    overlay: xe,
    visible: Fe,
    onVisibleChange: Ee,
    afterVisibleChange: l ?? f,
    arrowContent: /* @__PURE__ */ p.createElement("span", {
      className: `${D}-arrow-content`
    }),
    motion: {
      motionName: Fd(pe, "zoom-big-fast", r.transitionName),
      motionDeadline: 1e3
    },
    // TODO: In the future, destroyTooltipOnHide in rc-tooltip needs to be upgrade to destroyOnHidden
    destroyTooltipOnHide: g ?? !!v
  }), Fe ? Sd(Ve, {
    className: He
  }) : Ve);
  return oe(/* @__PURE__ */ p.createElement(Da.Provider, {
    value: mt
  }, Cr));
}), Ba = Rh;
process.env.NODE_ENV !== "production" && (Ba.displayName = "Tooltip");
Ba._InternalPanelDoNotUseOrYouWillBeFired = Oh;
function ji(r) {
  return console.log("is not dist"), r == null;
}
function Fh(r) {
  console.log(ji(23232), ji(null), "isUndef");
  const { content: t } = r, [e, n] = fs(!1), i = rt(null), a = ds(() => ji(t) ? "------" : t, [t]);
  return vr(() => {
    if (!i?.current) return;
    let o = window.getComputedStyle(i.current).fontSize, s = window.getComputedStyle(i.current).width.replace("px", ""), u = document.createElement("p");
    u.style.fontSize = o, u.style.whiteSpace = "nowrap", u.style.position = "fixed", u.style.top = "-100px", u.style.opacity = "0", u.innerHTML = t, document.body.appendChild(u);
    const c = document.createRange();
    c.setStart(u, 0), c.setEnd(u, u.childNodes.length);
    let l = c.getBoundingClientRect().width;
    document.body.removeChild(u), u = null, console.log(s, "width"), console.log(l, "textWidth"), s && l && parseInt(s) < l ? (console.log(111), n(!0)) : n(!1);
  }, [t]), /* @__PURE__ */ Ir.jsx("div", { className: "mt-ui-ellipsis", ref: i, children: e ? /* @__PURE__ */ Ir.jsx(Ba, { title: a, placement: "topLeft", children: /* @__PURE__ */ Ir.jsx("span", { className: "mt-ui-ellipsis", children: a }) }) : /* @__PURE__ */ Ir.jsx("span", { className: "screen-min", children: a }) });
}
const $h = Ku(Fh);
export {
  Mh as Button,
  $h as TextEllipsis
};
