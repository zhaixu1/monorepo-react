import React, { useMemo, memo, useRef, useEffect, useState } from 'react';

import { Outlet, RouteObject } from "react-router-dom";

import Home from "../pages/home/index";
import RecommendList from "../components/RecommendList";
import { TextEllipsis, Button } from "zxreact-components";
import 'zxreact-components/dist/zxreact-components.css'; 

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
        <TextEllipsis content="测试一段很长的文字测试一段很长的文字测试一段很长的文字测试一段很长的文字测试一段很长的文字测试一段很长的文字">按钮</TextEllipsis>
      </div> },
      { path: 'hot', element: <div>
        <Button>热榜</Button>
      </div> },
      { path: 'zvideo', element: <div>视频</div> },
    ],
  },
  { path: 'hot', element: <div>热榜</div> },
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
