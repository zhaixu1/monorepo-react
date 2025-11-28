"use strict";(self.webpackChunkmonorepo=self.webpackChunkmonorepo||[]).push([[56],{82941:function(l,n,e){var t;e.r(n),e.d(n,{demos:function(){return o}});var c=e(90228),u=e.n(c),x=e(87999),m=e.n(x),I=e(96237),f=e(48534),E=e(46564),o={"button-demo-demo":{component:I.memo(I.lazy(function(){return e.e(570).then(e.bind(e,41841))})),asset:{type:"BLOCK",id:"button-demo-demo",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:e(94101).Z},react:{type:"NPM",value:"19.2.0"},"../index.tsx":{type:"FILE",value:e(52548).Z},"./index.less":{type:"FILE",value:e(46065).Z}},entry:"index.tsx"},context:{"../index.tsx":f,"./index.less":E,react:t||(t=e.t(I,2)),"/home/runner/work/monorepo-react/monorepo-react/packages/components/src/Button/index.tsx":f,"/home/runner/work/monorepo-react/monorepo-react/packages/components/src/Button/index.less":E},renderOpts:{compile:function(){var d=m()(u()().mark(function _(){var s,v=arguments;return u()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e.e(35).then(e.bind(e,81035));case 2:return i.abrupt("return",(s=i.sent).default.apply(s,v));case 3:case"end":return i.stop()}},_)}));function r(){return d.apply(this,arguments)}return r}()}}}},71212:function(l,n,e){var t;e.r(n),e.d(n,{demos:function(){return _}});var c=e(48305),u=e.n(c),x=e(90228),m=e.n(x),I=e(87999),f=e.n(I),E=e(96237),o=e(2284),d=e(70784),r=e(14005),_={"modal-demo-demo":{component:E.memo(E.lazy(function(){return e.e(682).then(e.bind(e,89613))})),asset:{type:"BLOCK",id:"modal-demo-demo",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:e(66746).Z},react:{type:"NPM",value:"19.2.0"},"../index.tsx":{type:"FILE",value:e(64239).Z},antd:{type:"NPM",value:"5.29.1"},"./man.css":{type:"FILE",value:e(28692).Z}},entry:"index.tsx"},context:{"../index.tsx":o,"./man.css":r,react:t||(t=e.t(E,2)),"/home/runner/work/monorepo-react/monorepo-react/packages/components/src/Modal/index.tsx":o,antd:d,"/home/runner/work/monorepo-react/monorepo-react/packages/components/src/Modal/man.css":r},renderOpts:{compile:function(){var s=f()(m()().mark(function a(){var i,M=arguments;return m()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(35).then(e.bind(e,81035));case 2:return p.abrupt("return",(i=p.sent).default.apply(i,M));case 3:case"end":return p.stop()}},a)}));function v(){return s.apply(this,arguments)}return v}()}},"modal-demo-0":{component:E.memo(E.lazy(f()(m()().mark(function s(){var v,a,i,M,h;return m()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.resolve().then(e.t.bind(e,96237,19));case 2:return v=g.sent,a=v.default,i=v.useState,g.next=7,Promise.resolve().then(e.bind(e,2284));case 7:return M=g.sent,h=M.default,g.abrupt("return",{default:function(){var R=i(!1),O=u()(R,2),D=O[0],y=O[1],C=i(!1),L=u()(C,2),b=L[0],T=L[1],A=i(!1),B=u()(A,2),S=B[0],j=B[1],U={title:"\u793A\u4F8B\u5F39\u7A97",width:400,layout:"vertical",initialValues:{name:""},listData:[{label:"\u59D3\u540D",name:"name",render:a.createElement("input",{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"}),rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D"}]}]},K=function(F){T(!0),setTimeout(function(){T(!1),y(!1),alert("\u63D0\u4EA4\u6210\u529F\uFF1A"+JSON.stringify(F))},1e3)};return a.createElement("div",null,a.createElement("button",{onClick:function(){return y(!0)}},"\u6253\u5F00\u5F39\u7A97"),a.createElement(h,{open:D,loading:b,isloading:S,data:U,onCancel:function(){return y(!1)},onFinish:K}))}});case 10:case"end":return g.stop()}},s)})))),asset:{type:"BLOCK",id:"modal-demo-0",refAtomIds:["Modal"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
}`},react:{type:"NPM",value:"19.2.0"}},entry:"index.tsx"},context:{react:t||(t=e.t(E,2))},renderOpts:{compile:function(){var s=f()(m()().mark(function a(){var i,M=arguments;return m()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,e.e(35).then(e.bind(e,81035));case 2:return p.abrupt("return",(i=p.sent).default.apply(i,M));case 3:case"end":return p.stop()}},a)}));function v(){return s.apply(this,arguments)}return v}()}}}},68450:function(l,n,e){var t;e.r(n),e.d(n,{demos:function(){return r}});var c=e(90228),u=e.n(c),x=e(87999),m=e.n(x),I=e(96237),f=e(86015),E=e(70784),o=e(92430),d=e(71288),r={"textellipsis-demo-demo":{component:I.memo(I.lazy(function(){return e.e(612).then(e.bind(e,73722))})),asset:{type:"BLOCK",id:"textellipsis-demo-demo",refAtomIds:["TextEllipsis"],dependencies:{"index.tsx":{type:"FILE",value:e(79997).Z},react:{type:"NPM",value:"19.2.0"},"../index.tsx":{type:"FILE",value:e(99521).Z},antd:{type:"NPM",value:"5.29.1"},"@monorepo/lib":{type:"NPM",value:"1.0.0"},"./index.less":{type:"FILE",value:e(17642).Z}},entry:"index.tsx"},context:{"../index.tsx":f,"./index.less":d,react:t||(t=e.t(I,2)),"/home/runner/work/monorepo-react/monorepo-react/packages/components/src/TextEllipsis/index.tsx":f,antd:E,"@monorepo/lib":o,"/home/runner/work/monorepo-react/monorepo-react/packages/components/src/TextEllipsis/index.less":d},renderOpts:{compile:function(){var _=m()(u()().mark(function v(){var a,i=arguments;return u()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,e.e(35).then(e.bind(e,81035));case 2:return h.abrupt("return",(a=h.sent).default.apply(a,i));case 3:case"end":return h.stop()}},v)}));function s(){return _.apply(this,arguments)}return s}()}}}},6517:function(l,n,e){e.r(n),e.d(n,{demos:function(){return c}});var t=e(96237),c={}},32916:function(l,n,e){e.r(n),e.d(n,{demos:function(){return c}});var t=e(96237),c={}},49291:function(l,n,e){var t;e.r(n),e.d(n,{demos:function(){return E}});var c=e(90228),u=e.n(c),x=e(87999),m=e.n(x),I=e(96237),f=e(94756),E={"packages-hooks-src-use-debounce-demo-demo":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,64261))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-debounce-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(76634).Z},react:{type:"NPM",value:"19.2.0"},"zxreact-hooks":{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:t||(t=e.t(I,2)),"zxreact-hooks":f},renderOpts:{compile:function(){var o=m()(u()().mark(function r(){var _,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(35).then(e.bind(e,81035));case 2:return a.abrupt("return",(_=a.sent).default.apply(_,s));case 3:case"end":return a.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}}}},88906:function(l,n,e){var t;e.r(n),e.d(n,{demos:function(){return E}});var c=e(90228),u=e.n(c),x=e(87999),m=e.n(x),I=e(96237),f=e(94756),E={"packages-hooks-src-use-focus-demo-demo":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,77221))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-focus-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(73351).Z},react:{type:"NPM",value:"19.2.0"},"zxreact-hooks":{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:t||(t=e.t(I,2)),"zxreact-hooks":f},renderOpts:{compile:function(){var o=m()(u()().mark(function r(){var _,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(35).then(e.bind(e,81035));case 2:return a.abrupt("return",(_=a.sent).default.apply(_,s));case 3:case"end":return a.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}}}},31439:function(l,n,e){e.r(n),e.d(n,{demos:function(){return c}});var t=e(96237),c={}},64386:function(l,n,e){e.r(n),e.d(n,{demos:function(){return c}});var t=e(96237),c={}},15428:function(l,n,e){var t;e.r(n),e.d(n,{demos:function(){return E}});var c=e(90228),u=e.n(c),x=e(87999),m=e.n(x),I=e(96237),f=e(94756),E={"packages-hooks-src-use-window-size-demo-demo":{component:I.memo(I.lazy(function(){return e.e(433).then(e.bind(e,33390))})),asset:{type:"BLOCK",id:"packages-hooks-src-use-window-size-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(11835).Z},react:{type:"NPM",value:"19.2.0"},"zxreact-hooks":{type:"NPM",value:"1.0.7"}},entry:"index.tsx"},context:{react:t||(t=e.t(I,2)),"zxreact-hooks":f},renderOpts:{compile:function(){var o=m()(u()().mark(function r(){var _,s=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(35).then(e.bind(e,81035));case 2:return a.abrupt("return",(_=a.sent).default.apply(_,s));case 3:case"end":return a.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}}}},48534:function(l,n,e){e.r(n);var t=e(26068),c=e.n(t),u=e(67825),x=e.n(u),m=e(96237),I=e(46564),f=e(48502),E=["children"],o=function(r){var _=r.children,s=x()(r,E);return(0,f.jsx)("button",c()(c()({className:"my-btn"},s),{},{children:_}))};n.default=o},2284:function(l,n,e){e.r(n);var t=e(48305),c=e.n(t),u=e(42324),x=e(67834),m=e(61741),I=e(76300),f=e(96237),E=e(14005),o=e(48502);function d(r){var _=r.open,s=r.loading,v=r.isloading,a=(0,f.useState)([]),i=c()(a,2),M=i[0],h=i[1],p=u.Z.useForm(),g=c()(p,1),P=g[0];(0,f.useEffect)(function(){h(r.data.listData)},[r]);var R=function(D){r.onFinish(D)};return(0,o.jsx)(x.Z,{open:_,title:r.data.title,onCancel:function(){return r.onCancel()},footer:null,width:r.data.width||520,children:(0,o.jsx)(m.Z,{tip:"Loading...",spinning:v||!1,children:(0,o.jsxs)(u.Z,{layout:r.data.layout,initialValues:r.data.initialValues,form:P,onFinish:R,children:[M&&M.map(function(O,D){var y=O.label,C=O.name,L=O.render,b=O.rules,T=O.style;return(0,o.jsx)(u.Z.Item,{label:y,name:C,rules:b||[],style:T||{},children:L},D)}),(0,o.jsx)(u.Z.Item,{children:(0,o.jsxs)("div",{className:"subit",children:[(0,o.jsx)(I.ZP,{htmlType:"button",onClick:function(){return r.onCancel()},children:"\u53D6\u6D88"}),(0,o.jsx)(I.ZP,{htmlType:"submit",type:"primary",loading:s,children:"\u63D0\u4EA4"})]})})]})})})}n.default=d},86015:function(l,n,e){e.r(n);var t=e(48305),c=e.n(t),u=e(96237),x=e(64246),m=e(92430),I=e(71288),f=e(48502);function E(o){console.log((0,m.isUndef)(23232),(0,m.isUndef)(null),"isUndef");var d=o.content,r=(0,u.useState)(!1),_=c()(r,2),s=_[0],v=_[1],a=(0,u.useRef)(null),i=(0,u.useMemo)(function(){return(0,m.isUndef)(d)?"------":d},[d]);return(0,u.useEffect)(function(){if(a!=null&&a.current){var M=window.getComputedStyle(a.current).fontSize,h=window.getComputedStyle(a.current).width.replace("px",""),p=document.createElement("p");p.style.fontSize=M,p.style.whiteSpace="nowrap",p.style.position="fixed",p.style.top="-100px",p.style.opacity="0",p.innerHTML=d,document.body.appendChild(p);var g=document.createRange();g.setStart(p,0),g.setEnd(p,p.childNodes.length);var P=g.getBoundingClientRect().width;document.body.removeChild(p),p=null,console.log(h,"width"),console.log(P,"textWidth"),h&&P&&parseInt(h)<P?(console.log(111),v(!0)):v(!1)}},[d]),(0,f.jsx)("div",{className:"mt-ui-ellipsis",ref:a,children:s?(0,f.jsx)(x.Z,{title:i,placement:"topLeft",children:(0,f.jsx)("span",{className:"mt-ui-ellipsis",children:i})}):(0,f.jsx)("span",{className:"screen-min",children:i})})}n.default=(0,u.memo)(E)},14005:function(l,n,e){e.r(n)},46564:function(l,n,e){e.r(n)},71288:function(l,n,e){e.r(n)},58082:function(l,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[]},17498:function(l,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"ModalList \u662F\u4E00\u4E2A\u57FA\u4E8E antd Modal \u548C Form \u5C01\u88C5\u7684\u5F39\u7A97\u8868\u5355\u7EC4\u4EF6\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u8868\u5355\u9879\u3001loading \u72B6\u6001\u3001\u5BBD\u5EA6\u3001\u6807\u9898\u7B49\u3002",paraId:0,tocIndex:2},{value:"ModalList is a modal form component based on antd Modal and Form, supporting custom form items, loading state, width, title, etc.",paraId:1,tocIndex:2},{value:"\u5C5E\u6027\u540D",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"open",paraId:2,tocIndex:3},{value:"\u662F\u5426\u663E\u793A\u5F39\u7A97",paraId:2,tocIndex:3},{value:"boolean",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"loading",paraId:2,tocIndex:3},{value:"\u63D0\u4EA4\u6309\u94AE loading",paraId:2,tocIndex:3},{value:"boolean",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"isloading",paraId:2,tocIndex:3},{value:"\u8868\u5355\u5185\u5BB9 loading",paraId:2,tocIndex:3},{value:"boolean",paraId:2,tocIndex:3},{value:"false",paraId:2,tocIndex:3},{value:"data",paraId:2,tocIndex:3},{value:"\u5F39\u7A97\u548C\u8868\u5355\u914D\u7F6E",paraId:2,tocIndex:3},{value:"object",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"onCancel",paraId:2,tocIndex:3},{value:"\u5173\u95ED\u5F39\u7A97\u56DE\u8C03",paraId:2,tocIndex:3},{value:"function",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"onFinish",paraId:2,tocIndex:3},{value:"\u8868\u5355\u63D0\u4EA4\u56DE\u8C03",paraId:2,tocIndex:3},{value:"function",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u5C5E\u6027\u540D",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"\u793A\u4F8B\u503C",paraId:3,tocIndex:4},{value:"title",paraId:3,tocIndex:4},{value:"\u5F39\u7A97\u6807\u9898",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"'\u793A\u4F8B\u5F39\u7A97'",paraId:3,tocIndex:4},{value:"width",paraId:3,tocIndex:4},{value:"\u5F39\u7A97\u5BBD\u5EA6",paraId:3,tocIndex:4},{value:"number",paraId:3,tocIndex:4},{value:"400",paraId:3,tocIndex:4},{value:"layout",paraId:3,tocIndex:4},{value:"\u8868\u5355\u5E03\u5C40",paraId:3,tocIndex:4},{value:"string",paraId:3,tocIndex:4},{value:"'vertical'",paraId:3,tocIndex:4},{value:"initialValues",paraId:3,tocIndex:4},{value:"\u8868\u5355\u521D\u59CB\u503C",paraId:3,tocIndex:4},{value:"object",paraId:3,tocIndex:4},{value:"{ name: '' }",paraId:3,tocIndex:4},{value:"listData",paraId:3,tocIndex:4},{value:"\u8868\u5355\u9879\u914D\u7F6E\u6570\u7EC4",paraId:3,tocIndex:4},{value:"array",paraId:3,tocIndex:4},{value:"\u89C1\u4E0B\u65B9\u793A\u4F8B",paraId:3,tocIndex:4},{value:"\u5C5E\u6027\u540D",paraId:4,tocIndex:5},{value:"\u8BF4\u660E",paraId:4,tocIndex:5},{value:"\u7C7B\u578B",paraId:4,tocIndex:5},{value:"label",paraId:4,tocIndex:5},{value:"\u8868\u5355\u9879\u6807\u7B7E",paraId:4,tocIndex:5},{value:"string",paraId:4,tocIndex:5},{value:"name",paraId:4,tocIndex:5},{value:"\u5B57\u6BB5\u540D",paraId:4,tocIndex:5},{value:"string",paraId:4,tocIndex:5},{value:"render",paraId:4,tocIndex:5},{value:"\u6E32\u67D3\u5185\u5BB9",paraId:4,tocIndex:5},{value:"ReactNode",paraId:4,tocIndex:5},{value:"rules",paraId:4,tocIndex:5},{value:"\u6821\u9A8C\u89C4\u5219",paraId:4,tocIndex:5},{value:"array",paraId:4,tocIndex:5},{value:"style",paraId:4,tocIndex:5},{value:"\u6837\u5F0F",paraId:4,tocIndex:5},{value:"object",paraId:4,tocIndex:5}]},50229:function(l,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[]},20897:function(l,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u8FD9\u91CC\u662F ",paraId:0,tocIndex:0},{value:"Monorepo-React",paraId:0,tocIndex:0},{value:" \u9879\u76EE\u7684\u7EC4\u4EF6\u5E93\uFF0C\u5305\u542B\u4E86\u4E00\u7CFB\u5217\u9AD8\u8D28\u91CF\u7684 React \u7EC4\u4EF6\u3002",paraId:0,tocIndex:0}]},27148:function(l,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u8FD9\u91CC\u662F ",paraId:0,tocIndex:0},{value:"Monorepo-React",paraId:0,tocIndex:0},{value:" \u9879\u76EE\u7684 Hooks \u5E93\uFF0C\u5305\u542B\u4E86\u4E00\u7CFB\u5217\u9AD8\u8D28\u91CF\u7684 React Hooks\uFF0C\u5E2E\u52A9\u4F60\u66F4\u9AD8\u6548\u5730\u5F00\u53D1 React \u5E94\u7528\u3002",paraId:0,tocIndex:0}]},89383:function(l,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"const debouncedValue = useDebounce(value, 500);",paraId:0,tocIndex:2},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"value",paraId:1,tocIndex:2},{value:"\u4E0D\u9700\u8981\u5B9E\u65F6\u663E\u793A\u7684\u503C",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"delay",paraId:1,tocIndex:2},{value:"\u5EF6\u8FDF\u65F6\u95F4",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"1000 \uFF08\u5355\u4F4Dms\uFF09",paraId:1,tocIndex:2}]},82661:function(l,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"const [eleRef, setFocusFn] = useFocus()",paraId:0},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"\u65E0",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:` const [eleRef, setFocusFn] = useFocus();
`,paraId:2,tocIndex:3},{value:"eleRef: \u83B7\u53D6\u7126\u70B9\u7684\u5143\u7D20",paraId:3,tocIndex:3},{value:"setFocusFn: \u8BBE\u7F6E\u7126\u70B9\u7684\u65B9\u6CD5",paraId:3,tocIndex:3}]},42600:function(l,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"useStorage",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u7528\u4E8E\u5728 React \u7EC4\u4EF6\u4E2D\u4FBF\u6377\u5730\u8BFB\u5199\u672C\u5730\u5B58\u50A8\uFF08localStorage/sessionStorage\uFF09\u7684\u81EA\u5B9A\u4E49 Hook\u3002\u5B83\u8BA9\u4F60\u50CF\u4F7F\u7528 useState \u4E00\u6837\u64CD\u4F5C\u672C\u5730\u5B58\u50A8\u7684\u6570\u636E\uFF0C\u5E76\u4E14\u6570\u636E\u4F1A\u81EA\u52A8\u540C\u6B65\u5230\u5B58\u50A8\u4E2D\u3002",paraId:0,tocIndex:0},{value:"const [value, setValue] = useStorage(key, initialValue?, storage?)",paraId:1},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"key",paraId:2,tocIndex:3},{value:"\u5B58\u50A8\u7684 key",paraId:2,tocIndex:3},{value:"string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"initialValue",paraId:2,tocIndex:3},{value:"\u521D\u59CB\u503C",paraId:2,tocIndex:3},{value:"any",paraId:2,tocIndex:3},{value:"undefined",paraId:2,tocIndex:3},{value:"storage",paraId:2,tocIndex:3},{value:"\u5B58\u50A8\u7C7B\u578B\uFF0ClocalStorage \u6216 sessionStorage",paraId:2,tocIndex:3},{value:"Storage",paraId:2,tocIndex:3},{value:"window.localStorage",paraId:2,tocIndex:3},{value:"key",paraId:3,tocIndex:3},{value:"\uFF1A\u5FC5\u586B\uFF0C\u5B58\u50A8\u7684\u952E\u540D\u3002",paraId:3,tocIndex:3},{value:"initialValue",paraId:3,tocIndex:3},{value:"\uFF1A\u53EF\u9009\uFF0C\u521D\u59CB\u503C\u3002",paraId:3,tocIndex:3},{value:"storage",paraId:3,tocIndex:3},{value:"\uFF1A\u53EF\u9009\uFF0C\u5B58\u50A8\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A localStorage\u3002",paraId:3,tocIndex:3},{value:"value",paraId:4,tocIndex:4},{value:"\uFF1A\u5F53\u524D\u5B58\u50A8\u7684\u503C\u3002",paraId:4,tocIndex:4},{value:"setValue",paraId:4,tocIndex:4},{value:"\uFF1A\u8BBE\u7F6E\u503C\u7684\u65B9\u6CD5\uFF0C\u8C03\u7528\u540E\u4F1A\u81EA\u52A8\u540C\u6B65\u5230\u672C\u5730\u5B58\u50A8\u3002",paraId:4,tocIndex:4},{value:`const [value, setValue] = useStorage('my-key', '\u9ED8\u8BA4\u503C');
setValue('\u65B0\u503C');
`,paraId:5,tocIndex:6},{value:`const [value, setValue] = useStorage('my-key', '\u9ED8\u8BA4\u503C', window.sessionStorage);
`,paraId:6,tocIndex:7},{value:`const [user, setUser] = useStorage('user', { name: '\u5F20\u4E09' });
`,paraId:7,tocIndex:8},{value:"useStorage",paraId:8,tocIndex:9},{value:" \u4F1A\u81EA\u52A8\u5C06\u975E\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u503C\u7528 JSON \u5E8F\u5217\u5316\u5B58\u50A8\u3002",paraId:8,tocIndex:9},{value:"\u8BFB\u53D6\u65F6\u4F1A\u81EA\u52A8\u53CD\u5E8F\u5217\u5316\u4E3A\u539F\u59CB\u7C7B\u578B\u3002",paraId:8,tocIndex:9},{value:"\u9002\u7528\u4E8E localStorage \u548C sessionStorage\u3002",paraId:8,tocIndex:9}]},36093:function(l,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"useToggle",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u7528\u4E8E\u5728\u4E24\u4E2A\u72B6\u6001\u503C\u4E4B\u95F4\u5207\u6362\u7684 React Hook\uFF0C\u652F\u6301\u5E03\u5C14\u503C\u6216\u4EFB\u610F\u81EA\u5B9A\u4E49\u503C\u3002\u5E38\u7528\u4E8E\u5F00\u5173\u3001\u72B6\u6001\u5207\u6362\u7B49\u573A\u666F\u3002",paraId:0,tocIndex:0},{value:"const [state, actions] = useToggle(initialState?, reverseValue?)",paraId:1},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"initialState",paraId:2,tocIndex:2},{value:"\u521D\u59CB\u72B6\u6001",paraId:2,tocIndex:2},{value:"T",paraId:2,tocIndex:2},{value:"false",paraId:2,tocIndex:2},{value:"reverseValue",paraId:2,tocIndex:2},{value:"\u53CD\u8F6C\u72B6\u6001\u503C",paraId:2,tocIndex:2},{value:"U",paraId:2,tocIndex:2},{value:"!T",paraId:2,tocIndex:2},{value:"initialState",paraId:3,tocIndex:2},{value:"\uFF1A\u53EF\u9009\uFF0C\u521D\u59CB\u72B6\u6001\uFF0C\u9ED8\u8BA4\u4E3A ",paraId:3,tocIndex:2},{value:"false",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"reverseValue",paraId:3,tocIndex:2},{value:"\uFF1A\u53EF\u9009\uFF0C\u5207\u6362\u65F6\u7684\u53CD\u8F6C\u503C\uFF0C\u9ED8\u8BA4\u4E3A ",paraId:3,tocIndex:2},{value:"!initialState",paraId:3,tocIndex:2},{value:"\u3002",paraId:3,tocIndex:2},{value:"state",paraId:4,tocIndex:3},{value:"\uFF1A\u5F53\u524D\u72B6\u6001\u503C\u3002",paraId:4,tocIndex:3},{value:"actions",paraId:4,tocIndex:3},{value:"\uFF1A\u5305\u542B\u4EE5\u4E0B\u65B9\u6CD5\u7684\u5BF9\u8C61\uFF1A",paraId:4,tocIndex:3},{value:"\u65B9\u6CD5\u540D",paraId:5,tocIndex:3},{value:"\u8BF4\u660E",paraId:5,tocIndex:3},{value:"\u7C7B\u578B",paraId:5,tocIndex:3},{value:"toggle",paraId:5,tocIndex:3},{value:"\u5207\u6362\u72B6\u6001",paraId:5,tocIndex:3},{value:"() => void",paraId:5,tocIndex:3},{value:"set",paraId:5,tocIndex:3},{value:"\u8BBE\u7F6E\u4E3A\u6307\u5B9A\u503C",paraId:5,tocIndex:3},{value:"(value: T|U) => void",paraId:5,tocIndex:3},{value:"setLeft",paraId:5,tocIndex:3},{value:"\u8BBE\u7F6E\u4E3A\u521D\u59CB\u72B6\u6001",paraId:5,tocIndex:3},{value:"() => void",paraId:5,tocIndex:3},{value:"setRight",paraId:5,tocIndex:3},{value:"\u8BBE\u7F6E\u4E3A\u53CD\u8F6C\u503C",paraId:5,tocIndex:3},{value:"() => void",paraId:5,tocIndex:3},{value:`const [state, { toggle }] = useToggle();
toggle(); // false -> true -> false ...
`,paraId:6,tocIndex:6},{value:`const [color, { toggle }] = useToggle('red', 'blue');
toggle(); // red <-> blue
`,paraId:7,tocIndex:7}]},26987:function(l,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"useWindowSize  \u5B9E\u65F6\u83B7\u53D6\u5F53\u524D\u7A97\u53E3\u5C3A\u5BF8\u3002",paraId:0,tocIndex:0},{value:"const size = useWindowSize();",paraId:1,tocIndex:1},{value:"\u8FD4\u56DE\u503C",paraId:2,tocIndex:1},{value:"\u8BF4\u660E",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"size",paraId:2,tocIndex:1},{value:"\u7A97\u53E3\u5C3A\u5BF8",paraId:2,tocIndex:1},{value:"{ width: number; height: number; }",paraId:2,tocIndex:1}]},94101:function(l,n){n.Z=`import React from 'react'
import Button from '../index'
export default function Index() {
  return (
    <div>
        <Button>\u6309\u94AE</Button>
    </div>
  )
}
`},46065:function(l,n){n.Z=`.my-btn {
  padding: 8px 16px;
  background: hsl(0, 92%, 50%);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
`},52548:function(l,n){n.Z=`import React from "react";
import "./index.less";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button className="my-btn" {...rest}>{children}</button>
);

export default Button;`},66746:function(l,n){n.Z=`import React, { useState } from 'react'
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
`},64239:function(l,n){n.Z=`import { Button, Form, Modal, Spin } from 'antd';
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

export default ModalList;`},28692:function(l,n){n.Z=`.subit {
    padding: 24px 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .subit button {
    margin-left: 20px;
  }`},79997:function(l,n){n.Z=`import React from 'react'
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
`},17642:function(l,n){n.Z=`.mt-ui-ellipsis {
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
`},99521:function(l,n){n.Z=`import React, { useMemo, memo, useRef, useEffect, useState } from 'react';
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
`},76634:function(l,n){n.Z=`import React, { useState } from "react";
import { useDebounce } from "zxreact-hooks";

export default function Demo() {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
      <p style={{ marginTop: 16 }}>Current Value: {value}</p>
      <p style={{ marginTop: 16 }}>Debounced Value: {debouncedValue}</p>
    </div>
  );
}

`},73351:function(l,n){n.Z=`import React from "react";
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
`},11835:function(l,n){n.Z=`import React from "react";
import { useWindowSize } from "zxreact-hooks";
export default function index() {
    const windowSize = useWindowSize();
    return (
        <div>
            \u6D4F\u89C8\u5668\u7A97\u53E3\u5927\u5C0F\uFF1A{windowSize.width} x {windowSize.height}
        </div>
    );
}
`},94756:function(l,n,e){e.r(n),e.d(n,{useDebounce:function(){return E},useFocus:function(){return I},useStorage:function(){return m},useToggle:function(){return c},useWindowSize:function(){return f}});var t=e(96237);function c(o,d){o===void 0&&(o=!1);var r=(0,t.useState)(o),_=r[0],s=r[1];return[_,(0,t.useMemo)(function(){var v=d===void 0?!o:d;return{toggle:function(){return s(function(i){return i===o?v:o})},set:function(i){return s(i)},setLeft:function(){return s(o)},setRight:function(){return s(v)}}},[])]}function u(o,d){return m(o,d,window.localStorage)}function x(o,d){return m(o,d,window.sessionStorage)}function m(o,d,r){var _=(0,t.useState)(function(){var i=r.getItem(o);return i!=null?JSON.parse(i):typeof d=="function"?d():d}),s=_[0],v=_[1];(0,t.useEffect)(function(){if(s===void 0)return r.removeItem(o);r.setItem(o,JSON.stringify(s))},[o,s,r]);var a=(0,t.useCallback)(function(){v(void 0)},[]);return[s,v,a]}function I(){var o=(0,t.useRef)(null),d=(0,t.useCallback)(function(){var r;(r=o==null?void 0:o.current)===null||r===void 0||r.focus()},[]);return[o,d]}var f=function(){var d=(0,t.useState)({width:window.innerWidth,height:window.innerHeight}),r=d[0],_=d[1];return(0,t.useEffect)(function(){var s=function(){_({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}},[]),r};function E(o,d){var r=(0,t.useState)(o),_=r[0],s=r[1];return(0,t.useEffect)(function(){var v=setTimeout(function(){s(o)},d);return function(){clearTimeout(v)}},[o,d]),_}},92430:function(l,n,e){e.r(n),e.d(n,{add:function(){return t},isUndef:function(){return u},minus:function(){return c}});function t(x,m){return x+m}function c(x,m){return x-m}function u(x){return console.log("is not dist"),x==null}}}]);
