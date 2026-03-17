import { beforeAll, afterAll, beforeEach } from '@jest/globals';

// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-jwt-secret';
process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test_db';
process.env.REDIS_HOST = 'localhost';
process.env.REDIS_PORT = '6379';

// Mock external services for testing
beforeAll(async () => {
  // Setup test database and other services
});

afterAll(async () => {
  // Cleanup test database and close connections
});

beforeEach(() => {
  // Reset mocks before each test
  jest.clearAllMocks();
});