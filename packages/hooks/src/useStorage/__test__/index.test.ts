import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useStorage from "../index";

describe("useStorage", () => {
    it("默认", () => {
        const hook = renderHook(() => useStorage("key", "default", window.localStorage));
        expect(window.localStorage.getItem("key")).toEqual('"default"')
        act( () =>{
            hook.result.current[1]("new")
        })
        expect(window.localStorage.getItem("key")).toEqual('"new"')
    });
});
