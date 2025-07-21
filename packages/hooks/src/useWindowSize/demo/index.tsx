import React from "react";
import { useWindowSize } from "zxreact-hooks";
export default function index() {
    const windowSize = useWindowSize();
    return (
        <div>
            浏览器窗口大小：{windowSize.width} x {windowSize.height}
        </div>
    );
}
