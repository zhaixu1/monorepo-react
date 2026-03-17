import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { createApp } from '@/app';
import { TestHelpers, expectSuccessResponse, expectErrorResponse } from '../helpers/testHelpers';
import { UserService } from '@/services/userService';

// Mock UserService
jest.mock('@/services/userService');
const mockUserService = UserService as jest.Mocked<typeof UserService>;

describe('Auth Routes', () => {
  let testHelpers: TestHelpers;

  beforeAll(() => {
    const app = createApp();
    testHelpers = new TestHelpers(app);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('POST /api/auth/register', () => {
    const validRegisterData = {
      email: 'test@example.com',
      username: 'testuser',
      password: 'Password123',
      firstName: 'Test',
      lastName: 'User',
    };

    it('should register a new user successfully', async () => {
      const mockUser = TestHelpers.createTestUser();
      const mockTokens = {
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
      };

      mockUserService.register.mockResolvedValue({
        user: mockUser,
        tokens: mockTokens,
      });

      const response = await testHelpers.request()
        .post('/api/auth/register')
        .send(validRegisterData)
        .expect(201);

      expectSuccessResponse(response, 201);
      expect(response.body.data).toHaveProperty('user');
      expect(response.body.data).toHaveProperty('tokens');
      expect(mockUserService.register).toHaveBeenCalledWith(validRegisterData);
    });

    it('should return validation error for invalid email', async () => {
      const invalidData = {
        ...validRegisterData,
        email: 'invalid-email',
      };

      const response = await testHelpers.request()
        .post('/api/auth/register')
        .send(invalidData)
        .expect(400);

      expectErrorResponse(response, 400);
    });

    it('should return validation error for weak password', async () => {
      const invalidData = {
        ...validRegisterData,
        password: 'weak',
      };

      const response = await testHelpers.request()
        .post('/api/auth/register')
        .send(invalidData)
        .expect(400);

      expectErrorResponse(response, 400);
    });
  });

  describe('POST /api/auth/login', () => {
    const validLoginData = {
      email: 'test@example.com',
      password: 'Password123',
    };

    it('should login user successfully', async () => {
      const mockUser = TestHelpers.createTestUser();
      const mockTokens = {
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
      };

      mockUserService.login.mockResolvedValue({
        user: mockUser,
        tokens: mockTokens,
      });

      const response = await testHelpers.request()
        .post('/api/auth/login')
        .send(validLoginData)
        .expect(200);

      expectSuccessResponse(response);
      expect(response.body.data).toHaveProperty('user');
      expect(response.body.data).toHaveProperty('tokens');
      expect(mockUserService.login).toHaveBeenCalledWith(validLoginData);
    });

    it('should return validation error for invalid email', async () => {
      const invalidData = {
        ...validLoginData,
        email: 'invalid-email',
      };

      const response = await testHelpers.request()
        .post('/api/auth/login')
        .send(invalidData)
        .expect(400);

      expectErrorResponse(response, 400);
    });

    it('should return error for missing password', async () => {
      const invalidData = {
        email: validLoginData.email,
      };

      const response = await testHelpers.request()
        .post('/api/auth/login')
        .send(invalidData)
        .expect(400);

      expectErrorResponse(response, 400);
    });
  });

  describe('GET /api/auth/me', () => {
    it('should return current user profile', async () => {
      const mockUser = TestHelpers.createTestUser();
      mockUserService.getUserById.mockResolvedValue(mockUser);

      const response = await testHelpers
        .authenticatedRequest()
        .get('/api/auth/me')
        .expect(200);

      expectSuccessResponse(response);
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data).toHaveProperty('email');
    });

    it('should return unauthorized without token', async () => {
      const response = await testHelpers.request()
        .get('/api/auth/me')
        .expect(401);

      expectErrorResponse(response, 401);
    });
  });

  describe('PATCH /api/auth/change-password', () => {
    const validChangePasswordData = {
      currentPassword: 'oldPassword123',
      newPassword: 'newPassword123',
    };

    it('should change password successfully', async () => {
      mockUserService.changePassword.mockResolvedValue();

      const response = await testHelpers
        .authenticatedRequest()
        .patch('/api/auth/change-password')
        .send(validChangePasswordData)
        .expect(200);

      expectSuccessResponse(response);
      expect(mockUserService.changePassword).toHaveBeenCalled();
    });

    it('should return validation error for weak new password', async () => {
      const invalidData = {
        ...validChangePasswordData,
        newPassword: 'weak',
      };

      const response = await testHelpers
        .authenticatedRequest()
        .patch('/api/auth/change-password')
        .send(invalidData)
        .expect(400);

      expectErrorResponse(response, 400);
    });

    it('should return unauthorized without token', async () => {
      const response = await testHelpers.request()
        .patch('/api/auth/change-password')
        .send(validChangePasswordData)
        .expect(401);

      expectErrorResponse(response, 401);
    });
  });
});