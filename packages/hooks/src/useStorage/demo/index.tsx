import React from "react";
import { useStorage } from "zxreact-hooks";

export default function Index() {
    const [value, setValue] = useStorage("key", "value", window.localStorage);

    return (
        <div>
            <p>key对应的value值是：{`${value}`}</p>

            <button onClick={() => setValue("newValue")}>
                设置value未（newValue）
            </button>

            <button onClick={() => setValue("value")}>重置</button>
        </div>
    );
}
