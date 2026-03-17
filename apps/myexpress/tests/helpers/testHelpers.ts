import request from 'supertest';
import { Express } from 'express';
import { User } from '@prisma/client';
import { generateTokens } from '@/utils/auth';

export class TestHelpers {
  private app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  // Create a test user
  static createTestUser(overrides: Partial<User> = {}): User {
    return {
      id: 'test-user-id',
      email: 'test@example.com',
      username: 'testuser',
      password: 'hashedpassword',
      firstName: 'Test',
      lastName: 'User',
      avatar: null,
      role: 'USER',
      status: 'ACTIVE',
      emailVerified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastLoginAt: new Date(),
      ...overrides,
    } as User;
  }

  // Create an authenticated request
  authenticatedRequest(user?: Partial<User>) {
    const testUser = TestHelpers.createTestUser(user);
    const { accessToken } = generateTokens(testUser);

    return request(this.app).set('Authorization', `Bearer ${accessToken}`);
  }

  // Create a regular request
  request() {
    return request(this.app);
  }

  // Create admin user
  static createAdminUser(overrides: Partial<User> = {}): User {
    return TestHelpers.createTestUser({
      id: 'admin-user-id',
      email: 'admin@example.com',
      username: 'admin',
      role: 'ADMIN',
      ...overrides,
    });
  }

  // Create moderator user
  static createModeratorUser(overrides: Partial<User> = {}): User {
    return TestHelpers.createTestUser({
      id: 'moderator-user-id',
      email: 'moderator@example.com',
      username: 'moderator',
      role: 'MODERATOR',
      ...overrides,
    });
  }
}

export const expectSuccessResponse = (response: any, statusCode = 200) => {
  expect(response.status).toBe(statusCode);
  expect(response.body).toHaveProperty('success', true);
  expect(response.body).toHaveProperty('message');
  expect(response.body).toHaveProperty('timestamp');
};

export const expectErrorResponse = (response: any, statusCode = 400) => {
  expect(response.status).toBe(statusCode);
  expect(response.body).toHaveProperty('success', false);
  expect(response.body).toHaveProperty('message');
  expect(response.body).toHaveProperty('timestamp');
};