"use strict";(self.webpackChunkmonorepo=self.webpackChunkmonorepo||[]).push([[56],{72096:function(d,n,e){var t;e.r(n),e.d(n,{demos:function(){return r}});var c=e(90228),u=e.n(c),E=e(87999),m=e.n(E),f=e(52136),v=e(17780),a=e(44846),r={"button-demo-demo":{component:f.memo(f.lazy(function(){return e.e(570).then(e.bind(e,85731))})),asset:{type:"BLOCK",id:"button-demo-demo",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:e(71738).Z},react:{type:"NPM",value:"19.1.1"},"../index.tsx":{type:"FILE",value:e(69078).Z},"./index.less":{type:"FILE",value:e(48072).Z}},entry:"index.tsx"},context:{"../index.tsx":v,"./index.less":a,react:t||(t=e.t(f,2)),"/home/runner/work/monorepo-react/monorepo-react/packages/components/src/Button/index.tsx":v,"/home/runner/work/monorepo-react/monorepo-react/packages/components/src/Button/index.less":a},renderOpts:{compile:function(){var s=m()(u()().mark(function i(){var p,x=arguments;return u()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,e.e(984).then(e.bind(e,8984));case 2:return I.abrupt("return",(p=I.sent).default.apply(p,x));case 3:case"end":return I.stop()}},i)}));function l(){return s.apply(this,arguments)}return l}()}}}},70250:function(d,n,e){var t;e.r(n),e.d(n,{demos:function(){return i}});var c=e(48305),u=e.n(c),E=e(90228),m=e.n(E),f=e(87999),v=e.n(f),a=e(52136),r=e(64631),s=e(59991),l=e(39636),i={"modal-demo-demo":{component:a.memo(a.lazy(function(){return e.e(682).then(e.bind(e,76185))})),asset:{type:"BLOCK",id:"modal-demo-demo",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:e(44396).Z},react:{type:"NPM",value:"19.1.1"},"../index.tsx":{type:"FILE",value:e(45436).Z},antd:{type:"NPM",value:"5.27.0"},"./man.css":{type:"FILE",value:e(74549).Z}},entry:"index.tsx"},context:{"../index.tsx":r,"./man.css":l,react:t||(t=e.t(a,2)),"/home/runner/work/monorepo-react/monorepo-react/packages/components/src/Modal/index.tsx":r,antd:s,"/home/runner/work/monorepo-react/monorepo-react/packages/components/src/Modal/man.css":l},renderOpts:{compile:function(){var p=v()(m()().mark(function o(){var I,M=arguments;return m()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,e.e(984).then(e.bind(e,8984));case 2:return _.abrupt("return",(I=_.sent).default.apply(I,M));case 3:case"end":return _.stop()}},o)}));function x(){return p.apply(this,arguments)}return x}()}},"modal-demo-0":{component:a.memo(a.lazy(v()(m()().mark(function p(){var x,o,I,M,h;return m()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,52136,19));case 2:return x=g.sent,o=x.default,I=x.useState,g.next=7,Promise.resolve().then(e.bind(e,64631));case 7:return M=g.sent,h=M.default,g.abrupt("return",{default:function(){var R=I(!1),O=u()(R,2),y=O[0],D=O[1],C=I(!1),L=u()(C,2),B=L[0],T=L[1],W=I(!1),b=u()(W,2),A=b[0],j=b[1],U={title:"\u793A\u4F8B\u5F39\u7A97",width:400,layout:"vertical",initialValues:{name:""},listData:[{label:"\u59D3\u540D",name:"name",render:o.createElement("input",{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"}),rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}]}]},K=function(F){T(!0),setTimeout(function(){T(!1),D(!1),alert("\u63D0\u4EA4\u6210\u529F\uFF1A"+JSON.stringify(F))},1e3)};return o.createElement("div",null,o.createElement("button",{onClick:function(){return D(!0)}},"\u6253\u5F00\u5F39\u7A97"),o.createElement(h,{open:y,loading:B,isloading:A,data:U,onCancel:function(){return D(!1)},onFinish:K}))}});case 10:case"end":return g.stop()}},p)})))),asset:{type:"BLOCK",id:"modal-demo-0",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import ModalList from './index';

export default function ModalDemo() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const data = {
    title: '\u793A\u4F8B\u5F39\u7A97',
    width: 400,
    layout: 'vertical',
    initialValues: { name: '' },
    listData: [
      {
        label: '\u59D3\u540D',
        name: 'name',
        render: <input placeholder="\u8BF7\u8F93\u5165\u59D3\u540D" />,
        rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u59D3\u540D' }],
      },
    ],
  };

  const handleFinish = (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      alert('\u63D0\u4EA4\u6210\u529F\uFF1A' + JSON.stringify(values));
    }, 1000);
  };

  return (
    <div>
      <button onClick={() => setOpen(true)}>\u6253\u5F00\u5F39\u7A97</button>
      <ModalList
        open={open}
        loading={loading}
        isloading={isloading}
        data={data}
        onCancel={() => setOpen(false)}
        onFinish={handleFinish}
      />
    </div>
  );
}`},react:{type:"NPM",value:"19.1.1"}},entry:"index.tsx"},context:{react:t||(t=e.t(a,2))},renderOpts:{compile:function(){var p=v()(m()().mark(function o(){var I,M=arguments;return m()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,e.e(984).then(e.bind(e,8984));case 2:return _.abrupt("return",(I=_.sent).default.apply(I,M));case 3:case"end":return _.stop()}},o)}));function x(){return p.apply(this,arguments)}return x}()}}}},83638:function(d,n,e){var t;e.r(n),e.d(n,{demos:function(){return l}});var c=e(90228),u=e.n(c),E=e(87999),m=e.n(E),f=e(52136),v=e(94701),a=e(59991),r=e(39075),s=e(48900),l={"textellipsis-demo-demo":{component:f.memo(f.lazy(function(){return e.e(612).then(e.bind(e,92817))})),asset:{type:"BLOCK",id:"textellipsis-demo-demo",refAtomIds:["TextEllipsis"],dependencies:{"index.tsx":{type:"FILE",value:e(42816).Z},react:{type:"NPM",value:"19.1.1"},"../index.tsx":{type:"FILE",value:e(78883).Z},antd:{type:"NPM",value:"5.27.0"},"@monorepo/lib":{type:"NPM",value:"1.0.0"},"./index.less":{type:"FILE",value:e(83187).Z}},entry:"index.tsx"},context:{"../index.tsx":v,"./index.less":s,react:t||(t=e.t(f,2)),"/home/runner/work/monorepo-react/monorepo-react/packages/components/src/TextEllipsis/index.tsx":v,antd:a,"@monorepo/lib":r,"/home/runner/work/monorepo-react/monorepo-react/packages/components/src/TextEllipsis/index.less":s},renderOpts:{compile:function(){var i=m()(u()().mark(function x(){var o,I=arguments;return u()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(984).then(e.bind(e,8984));case 2:return h.abrupt("return",(o=h.sent).default.apply(o,I));case 3:case"end":return h.stop()}},x)}));function p(){return i.apply(this,arguments)}return p}()}}}},20006:function(d,n,e){e.r(n),e.d(n,{demos:function(){return c}});var t=e(52136),c={}},35192:function(d,n,e){e.r(n),e.d(n,{demos:function(){return c}});var t=e(52136),c={}},59534:function(d,n,e){var t;e.r(n),e.d(n,{demos:function(){return a}});var c=e(90228),u=e.n(c),E=e(87999),m=e.n(E),f=e(52136),v=e(71791),a={"packages-hooks-src-use-focus-demo-demo":{component:f.memo(f.lazy(function(){return e.e(433).then(e.bind(e,58424))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-focus-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(61217).Z},react:{type:"NPM",value:"19.1.1"},"zxreact-hooks":{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:t||(t=e.t(f,2)),"zxreact-hooks":v},renderOpts:{compile:function(){var r=m()(u()().mark(function l(){var i,p=arguments;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(984).then(e.bind(e,8984));case 2:return o.abrupt("return",(i=o.sent).default.apply(i,p));case 3:case"end":return o.stop()}},l)}));function s(){return r.apply(this,arguments)}return s}()}}}},84574:function(d,n,e){e.r(n),e.d(n,{demos:function(){return c}});var t=e(52136),c={}},11972:function(d,n,e){e.r(n),e.d(n,{demos:function(){return c}});var t=e(52136),c={}},73153:function(d,n,e){var t;e.r(n),e.d(n,{demos:function(){return a}});var c=e(90228),u=e.n(c),E=e(87999),m=e.n(E),f=e(52136),v=e(71791),a={"packages-hooks-src-use-window-size-demo-demo":{component:f.memo(f.lazy(function(){return e.e(433).then(e.bind(e,42713))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-window-size-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(95136).Z},react:{type:"NPM",value:"19.1.1"},"zxreact-hooks":{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:t||(t=e.t(f,2)),"zxreact-hooks":v},renderOpts:{compile:function(){var r=m()(u()().mark(function l(){var i,p=arguments;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(984).then(e.bind(e,8984));case 2:return o.abrupt("return",(i=o.sent).default.apply(i,p));case 3:case"end":return o.stop()}},l)}));function s(){return r.apply(this,arguments)}return s}()}}}},17780:function(d,n,e){e.r(n);var t=e(26068),c=e.n(t),u=e(67825),E=e.n(u),m=e(52136),f=e(44846),v=e(69979),a=["children"],r=function(l){var i=l.children,p=E()(l,a);return(0,v.jsx)("button",c()(c()({className:"my-btn"},p),{},{children:i}))};n.default=r},64631:function(d,n,e){e.r(n);var t=e(48305),c=e.n(t),u=e(50972),E=e(96867),m=e(50657),f=e(33017),v=e(52136),a=e(39636),r=e(69979);function s(l){var i=l.open,p=l.loading,x=l.isloading,o=(0,v.useState)([]),I=c()(o,2),M=I[0],h=I[1],_=u.Z.useForm(),g=c()(_,1),P=g[0];(0,v.useEffect)(function(){h(l.data.listData)},[l]);var R=function(y){l.onFinish(y)};return(0,r.jsx)(E.Z,{open:i,title:l.data.title,onCancel:function(){return l.onCancel()},footer:null,width:l.data.width||520,children:(0,r.jsx)(m.Z,{tip:"Loading...",spinning:x||!1,children:(0,r.jsxs)(u.Z,{layout:l.data.layout,initialValues:l.data.initialValues,form:P,onFinish:R,children:[M&&M.map(function(O,y){var D=O.label,C=O.name,L=O.render,B=O.rules,T=O.style;return(0,r.jsx)(u.Z.Item,{label:D,name:C,rules:B||[],style:T||{},children:L},y)}),(0,r.jsx)(u.Z.Item,{children:(0,r.jsxs)("div",{className:"subit",children:[(0,r.jsx)(f.ZP,{htmlType:"button",onClick:function(){return l.onCancel()},children:"\u53D6\u6D88"}),(0,r.jsx)(f.ZP,{htmlType:"submit",type:"primary",loading:p,children:"\u63D0\u4EA4"})]})})]})})})}n.default=s},94701:function(d,n,e){e.r(n);var t=e(48305),c=e.n(t),u=e(52136),E=e(24611),m=e(39075),f=e(48900),v=e(69979);function a(r){console.log((0,m.isUndef)(23232),(0,m.isUndef)(null),"isUndef");var s=r.content,l=(0,u.useState)(!1),i=c()(l,2),p=i[0],x=i[1],o=(0,u.useRef)(null),I=(0,u.useMemo)(function(){return(0,m.isUndef)(s)?"------":s},[s]);return(0,u.useEffect)(function(){if(o!=null&&o.current){var M=window.getComputedStyle(o.current).fontSize,h=window.getComputedStyle(o.current).width.replace("px",""),_=document.createElement("p");_.style.fontSize=M,_.style.whiteSpace="nowrap",_.style.position="fixed",_.style.top="-100px",_.style.opacity="0",_.innerHTML=s,document.body.appendChild(_);var g=document.createRange();g.setStart(_,0),g.setEnd(_,_.childNodes.length);var P=g.getBoundingClientRect().width;document.body.removeChild(_),_=null,console.log(h,"width"),console.log(P,"textWidth"),h&&P&&parseInt(h)<P?(console.log(111),x(!0)):x(!1)}},[s]),(0,v.jsx)("div",{className:"mt-ui-ellipsis",ref:o,children:p?(0,v.jsx)(E.Z,{title:I,placement:"topLeft",children:(0,v.jsx)("span",{className:"mt-ui-ellipsis",children:I})}):(0,v.jsx)("span",{className:"screen-min",children:I})})}n.default=(0,u.memo)(a)},39636:function(d,n,e){e.r(n)},44846:function(d,n,e){e.r(n)},48900:function(d,n,e){e.r(n)},91920:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[]},69337:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"ModalList \u662F\u4E00\u4E2A\u57FA\u4E8E antd Modal \u548C Form \u5C01\u88C5\u7684\u5F39\u7A97\u8868\u5355\u7EC4\u4EF6\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u8868\u5355\u9879\u3001loading \u72B6\u6001\u3001\u5BBD\u5EA6\u3001\u6807\u9898\u7B49\u3002",paraId:0,tocIndex:2},{value:"ModalList is a modal form component based on antd Modal and Form, supporting custom form items, loading state, width, title, etc.",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"open",paraId:2,tocIndex:3},{value:"\u662F\u5426\u663E\u793A\u5F39\u7A97",paraId:2,tocIndex:3},{value:"boolean",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"loading",paraId:2,tocIndex:3},{value:"\u63D0\u4EA4\u6309\u94AE loading",paraId:2,tocIndex:3},{value:"boolean",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"isloading",paraId:2,tocIndex:3},{value:"\u8868\u5355\u5185\u5BB9 loading",paraId:2,tocIndex:3},{value:"boolean",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"data",paraId:2,tocIndex:3},{value:"\u5F39\u7A97\u548C\u8868\u5355\u914D\u7F6E",paraId:2,tocIndex:3},{value:"object",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"onCancel",paraId:2,tocIndex:3},{value:"\u5173\u95ED\u5F39\u7A97\u56DE\u8C03",paraId:2,tocIndex:3},{value:"function",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"onFinish",paraId:2,tocIndex:3},{value:"\u8868\u5355\u63D0\u4EA4\u56DE\u8C03",paraId:2,tocIndex:3},{value:"function",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u5C5E\u6027\u540D",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"\u793A\u4F8B\u503C",paraId:3,tocIndex:4},{value:"title",paraId:3,tocIndex:4},{value:"\u5F39\u7A97\u6807\u9898",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"'\u793A\u4F8B\u5F39\u7A97'",paraId:3,tocIndex:4},{value:"width",paraId:3,tocIndex:4},{value:"\u5F39\u7A97\u5BBD\u5EA6",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"400",paraId:3,tocIndex:4},{value:"layout",paraId:3,tocIndex:4},{value:"\u8868\u5355\u5E03\u5C40",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"'vertical'",paraId:3,tocIndex:4},{value:"initialValues",paraId:3,tocIndex:4},{value:"\u8868\u5355\u521D\u59CB\u503C",paraId:3,tocIndex:4},{value:"object",paraId:3,tocIndex:4},{value:"{ name: '' }",paraId:3,tocIndex:4},{value:"listData",paraId:3,tocIndex:4},{value:"\u8868\u5355\u9879\u914D\u7F6E\u6570\u7EC4",paraId:3,tocIndex:4},{value:"array",paraId:3,tocIndex:4},{value:"\u89C1\u4E0B\u65B9\u793A\u4F8B",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:5},{value:"\u8BF4\u660E",paraId:4,tocIndex:5},{value:"\u7C7B\u578B",paraId:4,tocIndex:5},{value:"label",paraId:4,tocIndex:5},{value:"\u8868\u5355\u9879\u6807\u7B7E",paraId:4,tocIndex:5},{value:"string",paraId:4,tocIndex:5},{value:"name",paraId:4,tocIndex:5},{value:"\u5B57\u6BB5\u540D",paraId:4,tocIndex:5},{value:"string",paraId:4,tocIndex:5},{value:"render",paraId:4,tocIndex:5},{value:"\u6E32\u67D3\u5185\u5BB9",paraId:4,tocIndex:5},{value:"ReactNode",paraId:4,tocIndex:5},{value:"rules",paraId:4,tocIndex:5},{value:"\u6821\u9A8C\u89C4\u5219",paraId:4,tocIndex:5},{value:"array",paraId:4,tocIndex:5},{value:"style",paraId:4,tocIndex:5},{value:"\u6837\u5F0F",paraId:4,tocIndex:5},{value:"object",paraId:4,tocIndex:5}]},53598:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[]},37253:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u8FD9\u91CC\u662F ",paraId:0,tocIndex:0},{value:"Monorepo-React",paraId:0,tocIndex:0},{value:" \u9879\u76EE\u7684\u7EC4\u4EF6\u5E93\uFF0C\u5305\u542B\u4E86\u4E00\u7CFB\u5217\u9AD8\u8D28\u91CF\u7684 React \u7EC4\u4EF6\u3002",paraId:0,tocIndex:0}]},36942:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u8FD9\u91CC\u662F ",paraId:0,tocIndex:0},{value:"Monorepo-React",paraId:0,tocIndex:0},{value:" \u9879\u76EE\u7684 Hooks \u5E93\uFF0C\u5305\u542B\u4E86\u4E00\u7CFB\u5217\u9AD8\u8D28\u91CF\u7684 React Hooks\uFF0C\u5E2E\u52A9\u4F60\u66F4\u9AD8\u6548\u5730\u5F00\u53D1 React \u5E94\u7528\u3002",paraId:0,tocIndex:0}]},39263:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"const [eleRef, setFocusFn] = useFocus()",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u65E0",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:` const [eleRef, setFocusFn] = useFocus();
`,paraId:2,tocIndex:3},{value:"eleRef: \u83B7\u53D6\u7126\u70B9\u7684\u5143\u7D20",paraId:3,tocIndex:3},{value:"setFocusFn: \u8BBE\u7F6E\u7126\u70B9\u7684\u65B9\u6CD5",paraId:3,tocIndex:3}]},7113:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"useStorage",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u7528\u4E8E\u5728 React \u7EC4\u4EF6\u4E2D\u4FBF\u6377\u5730\u8BFB\u5199\u672C\u5730\u5B58\u50A8\uFF08localStorage/sessionStorage\uFF09\u7684\u81EA\u5B9A\u4E49 Hook\u3002\u5B83\u8BA9\u4F60\u50CF\u4F7F\u7528 useState \u4E00\u6837\u64CD\u4F5C\u672C\u5730\u5B58\u50A8\u7684\u6570\u636E\uFF0C\u5E76\u4E14\u6570\u636E\u4F1A\u81EA\u52A8\u540C\u6B65\u5230\u5B58\u50A8\u4E2D\u3002",paraId:0,tocIndex:0},{value:"const [value, setValue] = useStorage(key, initialValue?, storage?)",paraId:1},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"key",paraId:2,tocIndex:3},{value:"\u5B58\u50A8\u7684 key",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"initialValue",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:2,tocIndex:3},{value:"any",paraId:2,tocIndex:3},{value:"undefined",paraId:2,tocIndex:3},{value:"storage",paraId:2,tocIndex:3},{value:"\u5B58\u50A8\u7C7B\u578B\uFF0ClocalStorage \u6216 sessionStorage",paraId:2,tocIndex:3},{value:"Storage",paraId:2,tocIndex:3},{value:"window.localStorage",paraId:2,tocIndex:3},{value:"key",paraId:3,tocIndex:3},{value:"\uFF1A\u5FC5\u586B\uFF0C\u5B58\u50A8\u7684\u952E\u540D\u3002",paraId:3,tocIndex:3},{value:"initialValue",paraId:3,tocIndex:3},{value:"\uFF1A\u53EF\u9009\uFF0C\u521D\u59CB\u503C\u3002",paraId:3,tocIndex:3},{value:"storage",paraId:3,tocIndex:3},{value:"\uFF1A\u53EF\u9009\uFF0C\u5B58\u50A8\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A localStorage\u3002",paraId:3,tocIndex:3},{value:"value",paraId:4,tocIndex:4},{value:"\uFF1A\u5F53\u524D\u5B58\u50A8\u7684\u503C\u3002",paraId:4,tocIndex:4},{value:"setValue",paraId:4,tocIndex:4},{value:"\uFF1A\u8BBE\u7F6E\u503C\u7684\u65B9\u6CD5\uFF0C\u8C03\u7528\u540E\u4F1A\u81EA\u52A8\u540C\u6B65\u5230\u672C\u5730\u5B58\u50A8\u3002",paraId:4,tocIndex:4},{value:`const [value, setValue] = useStorage('my-key', '\u9ED8\u8BA4\u503C');
setValue('\u65B0\u503C');
`,paraId:5,tocIndex:6},{value:`const [value, setValue] = useStorage('my-key', '\u9ED8\u8BA4\u503C', window.sessionStorage);
`,paraId:6,tocIndex:7},{value:`const [user, setUser] = useStorage('user', { name: '\u5F20\u4E09' });
`,paraId:7,tocIndex:8},{value:"useStorage",paraId:8,tocIndex:9},{value:" \u4F1A\u81EA\u52A8\u5C06\u975E\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u503C\u7528 JSON \u5E8F\u5217\u5316\u5B58\u50A8\u3002",paraId:8,tocIndex:9},{value:"\u8BFB\u53D6\u65F6\u4F1A\u81EA\u52A8\u53CD\u5E8F\u5217\u5316\u4E3A\u539F\u59CB\u7C7B\u578B\u3002",paraId:8,tocIndex:9},{value:"\u9002\u7528\u4E8E localStorage \u548C sessionStorage\u3002",paraId:8,tocIndex:9}]},50630:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"useToggle",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u7528\u4E8E\u5728\u4E24\u4E2A\u72B6\u6001\u503C\u4E4B\u95F4\u5207\u6362\u7684 React Hook\uFF0C\u652F\u6301\u5E03\u5C14\u503C\u6216\u4EFB\u610F\u81EA\u5B9A\u4E49\u503C\u3002\u5E38\u7528\u4E8E\u5F00\u5173\u3001\u72B6\u6001\u5207\u6362\u7B49\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"const [state, actions] = useToggle(initialState?, reverseValue?)",paraId:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"initialState",paraId:2,tocIndex:2},{value:"\u521D\u59CB\u72B6\u6001",paraId:2,tocIndex:2},{value:"T",paraId:2,tocIndex:2},{value:"false",paraId:2,tocIndex:2},{value:"reverseValue",paraId:2,tocIndex:2},{value:"\u53CD\u8F6C\u72B6\u6001\u503C",paraId:2,tocIndex:2},{value:"U",paraId:2,tocIndex:2},{value:"!T",paraId:2,tocIndex:2},{value:"initialState",paraId:3,tocIndex:2},{value:"\uFF1A\u53EF\u9009\uFF0C\u521D\u59CB\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3A ",paraId:3,tocIndex:2},{value:"false",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"reverseValue",paraId:3,tocIndex:2},{value:"\uFF1A\u53EF\u9009\uFF0C\u5207\u6362\u65F6\u7684\u53CD\u8F6C\u503C\uFF0C\u9ED8\u8BA4\u4E3A ",paraId:3,tocIndex:2},{value:"!initialState",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"state",paraId:4,tocIndex:3},{value:"\uFF1A\u5F53\u524D\u72B6\u6001\u503C\u3002",paraId:4,tocIndex:3},{value:"actions",paraId:4,tocIndex:3},{value:"\uFF1A\u5305\u542B\u4EE5\u4E0B\u65B9\u6CD5\u7684\u5BF9\u8C61\uFF1A",paraId:4,tocIndex:3},{value:"\u65B9\u6CD5\u540D",paraId:5,tocIndex:3},{value:"\u8BF4\u660E",paraId:5,tocIndex:3},{value:"\u7C7B\u578B",paraId:5,tocIndex:3},{value:"toggle",paraId:5,tocIndex:3},{value:"\u5207\u6362\u72B6\u6001",paraId:5,tocIndex:3},{value:"() => void",paraId:5,tocIndex:3},{value:"set",paraId:5,tocIndex:3},{value:"\u8BBE\u7F6E\u4E3A\u6307\u5B9A\u503C",paraId:5,tocIndex:3},{value:"(value: T|U) => void",paraId:5,tocIndex:3},{value:"setLeft",paraId:5,tocIndex:3},{value:"\u8BBE\u7F6E\u4E3A\u521D\u59CB\u72B6\u6001",paraId:5,tocIndex:3},{value:"() => void",paraId:5,tocIndex:3},{value:"setRight",paraId:5,tocIndex:3},{value:"\u8BBE\u7F6E\u4E3A\u53CD\u8F6C\u503C",paraId:5,tocIndex:3},{value:"() => void",paraId:5,tocIndex:3},{value:`const [state, { toggle }] = useToggle();
toggle(); // false -> true -> false ...
`,paraId:6,tocIndex:6},{value:`const [color, { toggle }] = useToggle('red', 'blue');
toggle(); // red <-> blue
`,paraId:7,tocIndex:7}]},42448:function(d,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"useWindowSize  \u5B9E\u65F6\u83B7\u53D6\u5F53\u524D\u7A97\u53E3\u5C3A\u5BF8\u3002",paraId:0,tocIndex:0},{value:"const size = useWindowSize();",paraId:1,tocIndex:1},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:1},{value:"\u8BF4\u660E",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"size",paraId:2,tocIndex:1},{value:"\u7A97\u53E3\u5C3A\u5BF8",paraId:2,tocIndex:1},{value:"{ width: number; height: number; }",paraId:2,tocIndex:1}]},71738:function(d,n){n.Z=`import React from 'react'
import Button from '../index'
export default function Index() {
  return (
    <div>
        <Button>\u6309\u94AE</Button>
    </div>
  )
}
`},48072:function(d,n){n.Z=`.my-btn {
  padding: 8px 16px;
  background: hsl(0, 92%, 50%);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
`},69078:function(d,n){n.Z=`import React from "react";
import "./index.less";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button className="my-btn" {...rest}>{children}</button>
);

export default Button;`},44396:function(d,n){n.Z=`import React, { useState } from 'react'
import ModalList from '../index'

export default function ModalDemo() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isloading, setIsLoading] = useState(false)

  // \u6A21\u62DF\u8868\u5355\u6570\u636E
  const data = {
    title: '\u793A\u4F8B\u5F39\u7A97',
    width: 400,
    layout: 'vertical',
    initialValues: { name: '' },
    listData: [
      {
        label: '\u59D3\u540D',
        name: 'name',
        render: <input placeholder="\u8BF7\u8F93\u5165\u59D3\u540D" />,
        rules: [{ required: true, message: '\u8BF7\u8F93\u5165\u59D3\u540D' }],
      },
    ],
  }

  const handleFinish = (values: any) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOpen(false)
      alert('\u63D0\u4EA4\u6210\u529F\uFF1A' + JSON.stringify(values))
    }, 1000)
  }

  return (
    <div>
      <button onClick={() => setOpen(true)}>\u6253\u5F00\u5F39\u7A97</button>
      <ModalList
        open={open}
        loading={loading}
        isloading={isloading}
        data={data}
        onCancel={() => setOpen(false)}
        onFinish={handleFinish}
      />
    </div>
  )
}
`},45436:function(d,n){n.Z=`import { Button, Form, Modal, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import './man.css';
function ModalList(props: any) {
  const { open, loading, isloading } = props;
  const [List, setList] = useState([]);
  const [form] = Form.useForm();
  useEffect(() => {
    setList(props.data.listData);
  }, [props]);
  const onFinish = (values: any): any => {
    props.onFinish(values);
  };
  return (
    <Modal
      open={open}
      title={props.data.title}
      onCancel={() => props.onCancel()}
      footer={null}
      width={props.data.width || 520}
    >
      <Spin tip="Loading..." spinning={isloading || false}>
        <Form
          layout={props.data.layout}
          initialValues={props.data.initialValues}
          form={form}
          onFinish={onFinish}
        >
          {List &&
            List.map(({ label, name, render, rules, style }, index) => (
              <Form.Item
                label={label}
                name={name}
                key={index}
                rules={rules || []}
                style={style || {}}
              >
                {render}
              </Form.Item>
            ))}
          <Form.Item>
            <div className="subit">
              <Button htmlType="button" onClick={() => props.onCancel()}>
                \u53D6\u6D88
              </Button>
              <Button htmlType="submit" type="primary" loading={loading}>
                \u63D0\u4EA4
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
}

export default ModalList;`},74549:function(d,n){n.Z=`.subit {
    padding: 24px 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .subit button {
    margin-left: 20px;
  }`},42816:function(d,n){n.Z=`import React from 'react'
import TextEllipsis from '../index'
// @ts-ignore
// import { TextEllipsis } from '../../../dist/index.es.js'

export default function Index() {
  return (
    <div style={{width: 200}}>
        <TextEllipsis content="\u6D4B\u8BD5\u4E00\u6BB5\u5F88\u957F\u7684\u6587\u5B57\u6D4B\u8BD5\u4E00\u6BB5\u5F88\u957F\u7684\u6587\u5B57\u6D4B\u8BD5\u4E00\u6BB5\u5F88\u957F\u7684\u6587\u5B57\u6D4B\u8BD5\u4E00\u6BB5\u5F88\u957F\u7684\u6587\u5B57\u6D4B\u8BD5\u4E00\u6BB5\u5F88\u957F\u7684\u6587\u5B57\u6D4B\u8BD5\u4E00\u6BB5\u5F88\u957F\u7684\u6587\u5B57"></TextEllipsis>
    </div>
  )
}
`},83187:function(d,n){n.Z=`.mt-ui-ellipsis {
    display: block;
    width: 100%;
}

.mt-ui-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.mt-ui-ellipsis2 {
    display: -webkit-box !important;
    overflow: hidden;
    white-space: normal !important;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.mt-ui-ellipsis3 {
    display: -webkit-box !important;
    overflow: hidden;
    white-space: normal !important;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
`},78883:function(d,n){n.Z=`import React, { useMemo, memo, useRef, useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import { isUndef } from '@monorepo/lib';
import './index.less'
function TextEllipsis(props: any) {
    console.log(isUndef(23232), isUndef(null), 'isUndef');
    
  const { content } = props;
  const [isEllipsis, setEllipsis] = useState(false);
  const wrap = useRef(null);

  const realContent = useMemo(() => {
    
    return isUndef(content) ? '------' : content;
  }, [content]);

  useEffect(() => {
    if (!wrap?.current) return;

    let fontSize = window.getComputedStyle(wrap.current).fontSize;
    let width = window.getComputedStyle(wrap.current).width.replace('px', '');
    let p: HTMLParagraphElement | null = document.createElement('p');
    p.style.fontSize = fontSize;
    p.style.whiteSpace = 'nowrap';
    p.style.position = 'fixed';
    p.style.top = '-100px';
    p.style.opacity = '0';
    p.innerHTML = content;
    document.body.appendChild(p);
    const range = document.createRange();
    range.setStart(p, 0);
    range.setEnd(p, p.childNodes.length);
    let textWidth = range.getBoundingClientRect().width;
    document.body.removeChild(p);
    p = null;
    console.log(width, 'width');
    console.log(textWidth, 'textWidth');

    
    
    if (width && textWidth && parseInt(width) < textWidth) {
        console.log(111);
        
      setEllipsis(true);
    } else {
      setEllipsis(false);
    }
  }, [content]);

  return (
    <div className={'mt-ui-ellipsis'} ref={wrap}>
      {isEllipsis ? (
        <Tooltip title={realContent} placement="topLeft">
          <span className="mt-ui-ellipsis">{realContent}</span>
        </Tooltip>
      ) : (
        <span className="screen-min">{realContent}</span>
      )}
    </div>
  );
}

export default memo(TextEllipsis);
`},61217:function(d,n){n.Z=`import React from "react";
import { useFocus } from "zxreact-hooks";

export default function Index() {
    const [focusRef, setFocus] = useFocus();
    return (
        <div>
            <input ref={focusRef} style={{ marginRight: "20px" }} />
            <button onClick={() => setFocus()}>\u4E8B\u4EF6\u805A\u7126</button>
        </div>
    );
}
`},95136:function(d,n){n.Z=`import React from "react";
import { useWindowSize } from "zxreact-hooks";
export default function index() {
    const windowSize = useWindowSize();
    return (
        <div>
            \u6D4F\u89C8\u5668\u7A97\u53E3\u5927\u5C0F\uFF1A{windowSize.width} x {windowSize.height}
        </div>
    );
}
`},71791:function(d,n,e){e.r(n),e.d(n,{useFocus:function(){return f},useStorage:function(){return m},useToggle:function(){return c},useWindowSize:function(){return v}});var t=e(52136);function c(a,r){a===void 0&&(a=!1);var s=(0,t.useState)(a),l=s[0],i=s[1];return[l,(0,t.useMemo)(function(){var p=r===void 0?!a:r;return{toggle:function(){return i(function(o){return o===a?p:a})},set:function(o){return i(o)},setLeft:function(){return i(a)},setRight:function(){return i(p)}}},[])]}function u(a,r){return m(a,r,window.localStorage)}function E(a,r){return m(a,r,window.sessionStorage)}function m(a,r,s){var l=(0,t.useState)(function(){var o=s.getItem(a);return o!=null?JSON.parse(o):typeof r=="function"?r():r}),i=l[0],p=l[1];(0,t.useEffect)(function(){if(i===void 0)return s.removeItem(a);s.setItem(a,JSON.stringify(i))},[a,i,s]);var x=(0,t.useCallback)(function(){p(void 0)},[]);return[i,p,x]}function f(){var a=(0,t.useRef)(null),r=(0,t.useCallback)(function(){var s;(s=a==null?void 0:a.current)===null||s===void 0||s.focus()},[]);return[a,r]}var v=function(){var r=(0,t.useState)({width:window.innerWidth,height:window.innerHeight}),s=r[0],l=r[1];return(0,t.useEffect)(function(){var i=function(){l({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}},[]),s}},39075:function(d,n,e){e.r(n),e.d(n,{add:function(){return t},isUndef:function(){return u},minus:function(){return c}});function t(E,m){return E+m}function c(E,m){return E-m}function u(E){return console.log("is not dist"),E==null}}}]);
