import { j as l } from "../jsx-runtime-CH8yh2Yd.mjs";
import { memo as m, useState as f, useRef as h, useMemo as x, useEffect as g } from "react";
import { Tooltip as w } from "antd";
function d(o) {
  return console.log("is not dist"), o == null;
}
function y(o) {
  console.log(d(23232), d(null), "isUndef");
  const { content: t } = o, [u, p] = f(!1), n = h(null), s = x(() => d(t) ? "------" : t, [t]);
  return g(() => {
    if (!n?.current) return;
    let a = window.getComputedStyle(n.current).fontSize, i = window.getComputedStyle(n.current).width.replace("px", ""), e = document.createElement("p");
    e.style.fontSize = a, e.style.whiteSpace = "nowrap", e.style.position = "fixed", e.style.top = "-100px", e.style.opacity = "0", e.innerHTML = t, document.body.appendChild(e);
    const r = document.createRange();
    r.setStart(e, 0), r.setEnd(e, e.childNodes.length);
    let c = r.getBoundingClientRect().width;
    document.body.removeChild(e), e = null, console.log(i, "width"), console.log(c, "textWidth"), i && c && parseInt(i) < c ? (console.log(111), p(!0)) : p(!1);
  }, [t]), /* @__PURE__ */ l.jsx("div", { className: "mt-ui-ellipsis", ref: n, children: u ? /* @__PURE__ */ l.jsx(w, { title: s, placement: "topLeft", children: /* @__PURE__ */ l.jsx("span", { className: "mt-ui-ellipsis", children: s }) }) : /* @__PURE__ */ l.jsx("span", { className: "screen-min", children: s }) });
}
const C = m(y);
export {
  C as default
};
