import { useEffect, useLayoutEffect, useRef } from "react";

type EffectHookType = typeof useEffect | typeof useLayoutEffect;

export const createUpdateEffect: (
  effectHook: EffectHookType
) => EffectHookType = (hook) => (effect: EffectHookType, deps?: any) => {
  const isMount = useRef(false);

  effect(() => {
    if (!isMount.current) {
      isMount.current = true;
    } else {
      return effect();
    }
  }, deps);
};
