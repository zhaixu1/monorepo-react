import { renderHook, act } from '@testing-library/react';
import useToggle from '../index';
import { describe, it, expect } from 'vitest';

const callToggle = (hook: any) => {
  act(() => {
    hook.result.current[1].toggle();
  });
};

describe('useToggle', () => {
  it('test on init', async () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();
  });


  it('test on methods', async () => {
    const hook = renderHook(() => useToggle('Hello'));
    expect(hook.result.current[0]).toEqual('Hello');
    callToggle(hook);
    expect(hook.result.current[0]).toBeFalsy(); // 测试是否切换成功
    expect(hook.result.current[0]).toEqual(false);
    act( () => {
        hook.result.current[1].setLeft();
    })
    expect(hook.result.current[0]).toEqual('Hello');
    act( () => {
        hook.result.current[1].setRight();
    })
    expect(hook.result.current[0]).toEqual(false);
    expect(hook.result.current[0]).toBeFalsy()
  })

  it('test on optional', () => {
    const hook = renderHook(() => useToggle('Hello', 'World'));
    callToggle(hook);
    expect(hook.result.current[0]).toBe('World');
    act(() => {
      hook.result.current[1].set('World');
    });
    expect(hook.result.current[0]).toBe('World');
    callToggle(hook);
    expect(hook.result.current[0]).toBe('Hello');
  });
});
