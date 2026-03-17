import { Response, NextFunction } from 'express';
import { db } from '@/config/database';
import { verifyToken } from '@/utils/auth';
import { AppError } from './errorHandler';
import { AuthenticatedRequest } from '@/types';

// Authentication middleware
export const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('Access token required', 401);
    }

    const token = authHeader.substring(7);

    if (!token) {
      throw new AppError('Access token required', 401);
    }

    // Verify token
    const decoded = verifyToken(token);

    // Get user from database
    const user = await db.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      throw new AppError('User not found', 401);
    }

    if (user.status !== 'ACTIVE') {
      throw new AppError('Account is not active', 401);
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    if (error instanceof AppError) {
      next(error);
    } else {
      next(new AppError('Invalid token', 401));
    }
  }
};

// Authorization middleware factory
export const authorize = (...roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      throw new AppError('Authentication required', 401);
    }

    if (!roles.includes(req.user.role)) {
      throw new AppError('Insufficient permissions', 403);
    }

    next();
  };
};

// Optional authentication middleware (doesn't throw error if no token)
export const optionalAuth = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const decoded = verifyToken(token);

      const user = await db.user.findUnique({
        where: { id: decoded.userId },
      });

      if (user && user.status === 'ACTIVE') {
        req.user = user;
      }
    }

    next();
  } catch (error) {
    // Continue without authentication for optional auth
    next();
  }
};