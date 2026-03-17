import { User, Prisma } from '@prisma/client';
import { db } from '@/config/database';
import { hashPassword, comparePassword, generateTokens, sanitizeUser } from '@/utils/auth';
import { AppError } from '@/middleware/errorHandler';
import { LoginRequest, RegisterRequest, AuthResponse, PaginationQuery } from '@/types';
import { getPagination, getPaginationData } from '@/utils/helpers';

export class UserService {
  // Register new user
  static async register(data: RegisterRequest): Promise<AuthResponse> {
    const { email, username, password, firstName, lastName } = data;

    // Check if user already exists
    const existingUser = await db.user.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      throw new AppError('User with this email or username already exists', 409);
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await db.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        firstName,
        lastName,
      },
    });

    // Generate tokens
    const tokens = generateTokens(user);

    return {
      user: sanitizeUser(user),
      tokens,
    };
  }

  // Login user
  static async login(data: LoginRequest): Promise<AuthResponse> {
    const { email, password } = data;

    // Find user by email
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user || !(await comparePassword(password, user.password))) {
      throw new AppError('Invalid email or password', 401);
    }

    if (user.status !== 'ACTIVE') {
      throw new AppError('Account is not active', 401);
    }

    // Update last login
    await db.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    // Generate tokens
    const tokens = generateTokens(user);

    return {
      user: sanitizeUser(user),
      tokens,
    };
  }

  // Get user by ID
  static async getUserById(id: string): Promise<Omit<User, 'password'> | null> {
    const user = await db.user.findUnique({
      where: { id },
    });

    return user ? sanitizeUser(user) : null;
  }

  // Get users with pagination
  static async getUsers(query: PaginationQuery) {
    const { limit, offset } = getPagination(query.page, query.limit);
    const { search, sortBy = 'createdAt', sortOrder = 'desc' } = query;

    const where: Prisma.UserWhereInput = {};

    if (search) {
      where.OR = [
        { email: { contains: search, mode: 'insensitive' } },
        { username: { contains: search, mode: 'insensitive' } },
        { firstName: { contains: search, mode: 'insensitive' } },
        { lastName: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [users, total] = await Promise.all([
      db.user.findMany({
        where,
        skip: offset,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        select: {
          id: true,
          email: true,
          username: true,
          firstName: true,
          lastName: true,
          avatar: true,
          role: true,
          status: true,
          emailVerified: true,
          createdAt: true,
          updatedAt: true,
          lastLoginAt: true,
        },
      }),
      db.user.count({ where }),
    ]);

    return getPaginationData(users, query.page || 0, limit, total);
  }

  // Update user
  static async updateUser(id: string, data: Partial<User>): Promise<Omit<User, 'password'>> {
    // Remove password from update data if present
    const { password, ...updateData } = data as any;

    const user = await db.user.update({
      where: { id },
      data: updateData,
    });

    return sanitizeUser(user);
  }

  // Change password
  static async changePassword(
    id: string,
    currentPassword: string,
    newPassword: string
  ): Promise<void> {
    const user = await db.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const isValidPassword = await comparePassword(currentPassword, user.password);
    if (!isValidPassword) {
      throw new AppError('Current password is incorrect', 400);
    }

    const hashedNewPassword = await hashPassword(newPassword);

    await db.user.update({
      where: { id },
      data: { password: hashedNewPassword },
    });
  }

  // Delete user
  static async deleteUser(id: string): Promise<void> {
    const user = await db.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new AppError('User not found', 404);
    }

    await db.user.delete({
      where: { id },
    });
  }

  // Get user stats
  static async getUserStats() {
    const [totalUsers, activeUsers, newUsersToday] = await Promise.all([
      db.user.count(),
      db.user.count({ where: { status: 'ACTIVE' } }),
      db.user.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
    ]);

    return {
      totalUsers,
      activeUsers,
      newUsersToday,
      inactiveUsers: totalUsers - activeUsers,
    };
  }
}