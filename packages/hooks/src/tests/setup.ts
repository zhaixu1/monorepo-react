import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach } from 'vitest';

beforeEach(() => {
    console.log('beforeEach')
});

afterEach(() => {
  // 测试结束后，清除所有模拟
  cleanup()
});