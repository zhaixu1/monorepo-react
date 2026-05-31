import React, { useMemo, memo, useRef, useEffect, useState } from 'react';

import { Outlet, RouteObject } from "react-router-dom";

import Home from "../pages/home/index";
import RecommendList from "../components/RecommendList";
import ElectronicMedicalRecord from "../pages/ElectronicMedicalRecord";
import { TextEllipsis, Button } from "zxreact-components";
import 'zxreact-components/dist/index.css'
import { useToggle } from "zxreact-hooks";

export interface extraBizObj {
  title?: string;
}

type ZHROuter = extraBizObj & RouteObject;

export const router = [
 {
    path: '/',
    element: <Home />,
    title: '首页',
    children: [
      { path: '', element: <RecommendList /> },
      { path: 'follow', element: <div style={{ width: 200}}>
        <TextEllipsis
          content="这是一段非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的文字，需要被省略展示在三行以内。"
          rows={3}
        />
        <TextEllipsis content="测试一段很长的文字测试一段很长的文字测试一段很长的文字测试一段很长的文字测试一段很长的文字测试一段很长的文字">按钮</TextEllipsis>
      </div> },
      { path: 'hot', element: <div>
        <Button>热榜</Button>
      </div> },
      { path: 'zvideo', element: <div></div> },
    ],
  },
  { path: 'hot', element: <div>热榜</div> },
  {
    path: '/medical-record',
    element: <ElectronicMedicalRecord />,
    title: '电子病历',
  },
  {
    path: '/education',
    element: (
      <div>
        知学堂
        <Outlet />
      </div>
    ),
    title: '知乎知学堂',
    children: [{ path: 'learning', element: <div>教育</div> }],
  },
  {
    path: '/explore',
    element: <div>发现</div>,
    title: '发现',
  },
  {
    path: '/question',
    element: <div>等你来答</div>,
    title: '等你来答',
    children: [{ path: 'learning', element: <div>为你推荐</div> }],
  },
];
