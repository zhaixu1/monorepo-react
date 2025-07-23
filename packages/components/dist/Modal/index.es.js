import { j as i } from "../jsx-runtime-CH8yh2Yd.mjs";
import { Form as n, Modal as y, Spin as g, Button as l } from "antd";
import { useState as C, useEffect as F } from "react";
function E(t) {
  const { open: s, loading: o, isloading: d } = t, [a, c] = C([]), [m] = n.useForm();
  F(() => {
    c(t.data.listData);
  }, [t]);
  const u = (e) => {
    t.onFinish(e);
  };
  return /* @__PURE__ */ i.jsx(
    y,
    {
      open: s,
      title: t.data.title,
      onCancel: () => t.onCancel(),
      footer: null,
      width: t.data.width || 520,
      children: /* @__PURE__ */ i.jsx(g, { tip: "Loading...", spinning: d || !1, children: /* @__PURE__ */ i.jsxs(
        n,
        {
          layout: t.data.layout,
          initialValues: t.data.initialValues,
          form: m,
          onFinish: u,
          children: [
            a && a.map(({ label: e, name: r, render: h, rules: x, style: f }, j) => /* @__PURE__ */ i.jsx(
              n.Item,
              {
                label: e,
                name: r,
                rules: x || [],
                style: f || {},
                children: h
              },
              j
            )),
            /* @__PURE__ */ i.jsx(n.Item, { children: /* @__PURE__ */ i.jsxs("div", { className: "subit", children: [
              /* @__PURE__ */ i.jsx(l, { htmlType: "button", onClick: () => t.onCancel(), children: "取消" }),
              /* @__PURE__ */ i.jsx(l, { htmlType: "submit", type: "primary", loading: o, children: "提交" })
            ] }) })
          ]
        }
      ) })
    }
  );
}
export {
  E as default
};
