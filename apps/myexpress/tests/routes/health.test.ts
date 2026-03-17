import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';
import { createApp } from '@/app';
import { TestHelpers, expectSuccessResponse } from '../helpers/testHelpers';

describe('Health Routes', () => {
  let testHelpers: TestHelpers;

  beforeAll(() => {
    const app = createApp();
    testHelpers = new TestHelpers(app);
  });

  describe('GET /api/health', () => {
    it('should return basic health status', async () => {
      const response = await testHelpers.request()
        .get('/api/health')
        .expect(200);

      expectSuccessResponse(response);
      expect(response.body.data).toHaveProperty('status', 'healthy');
      expect(response.body.data).toHaveProperty('uptime');
      expect(response.body.data).toHaveProperty('environment');
      expect(response.body.data).toHaveProperty('version');
    });
  });

  describe('GET /api/health/liveness', () => {
    it('should return liveness status', async () => {
      const response = await testHelpers.request()
        .get('/api/health/liveness')
        .expect(200);

      expectSuccessResponse(response);
      expect(response.body.data).toHaveProperty('status', 'alive');
    });
  });

  describe('GET /api/health/readiness', () => {
    it('should return readiness status', async () => {
      const response = await testHelpers.request()
        .get('/api/health/readiness');

      expectSuccessResponse(response);
      expect(response.body.data).toHaveProperty('status', 'ready');
    });
  });

  describe('GET /api/health/detailed', () => {
    it('should return detailed health information', async () => {
      const response = await testHelpers.request()
        .get('/api/health/detailed');

      expect(response.body.data).toHaveProperty('status');
      expect(response.body.data).toHaveProperty('services');
      expect(response.body.data).toHaveProperty('system');
      expect(response.body.data.services).toHaveProperty('database');
      expect(response.body.data.services).toHaveProperty('redis');
    });
  });
});