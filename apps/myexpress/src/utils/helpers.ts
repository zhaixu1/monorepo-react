import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '@/types';

// Success response helper
export const successResponse = <T = any>(
  data: T,
  message = 'Success',
  statusCode = 200
) => {
  return {
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  } as ApiResponse<T>;
};

// Error response helper
export const errorResponse = (
  message = 'Internal Server Error',
  statusCode = 500,
  error?: string
) => {
  return {
    success: false,
    message,
    error,
    timestamp: new Date().toISOString(),
  } as ApiResponse;
};

// Async error handler wrapper
export const asyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

// Pagination helper
export const getPagination = (page?: string | number, size?: string | number) => {
  const limit = size ? +size : 10;
  const offset = page ? +page * limit : 0;

  return { limit, offset };
};

// Generate pagination metadata
export const getPaginationData = (data: any[], page: number, limit: number, total: number) => {
  const currentPage = page || 0;
  const totalPages = Math.ceil(total / limit);

  return {
    items: data,
    pagination: {
      page: currentPage,
      limit,
      total,
      totalPages,
      hasNext: currentPage < totalPages - 1,
      hasPrev: currentPage > 0,
    },
  };
};