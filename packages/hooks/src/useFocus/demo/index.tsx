import React from "react";
import { useFocus } from "zxreact-hooks";

export default function Index() {
    const [focusRef, setFocus] = useFocus();
    return (
        <div>
            <input ref={focusRef} style={{ marginRight: "20px" }} />
            <button onClick={() => setFocus()}>事件聚焦</button>
        </div>
    );
}
