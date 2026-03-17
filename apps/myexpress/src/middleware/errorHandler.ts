import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { logger } from '@/utils/logger';
import { errorResponse } from '@/utils/helpers';
import { config } from '@/config/config';

export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Handle Prisma errors
const handlePrismaError = (error: Prisma.PrismaClientKnownRequestError) => {
  switch (error.code) {
    case 'P2002':
      return new AppError('Unique constraint violation', 409);
    case 'P2014':
      return new AppError('Invalid ID provided', 400);
    case 'P2003':
      return new AppError('Foreign key constraint violation', 400);
    case 'P2025':
      return new AppError('Record not found', 404);
    default:
      return new AppError('Database error', 500);
  }
};

// Handle JWT errors
const handleJWTError = () => new AppError('Invalid token', 401);
const handleJWTExpiredError = () => new AppError('Token expired', 401);

// Handle validation errors
const handleValidationError = (error: any) => {
  const messages = Object.values(error.details || {}).map((val: any) => val.message);
  return new AppError(`Invalid input data: ${messages.join('. ')}`, 400);
};

// Send error response
const sendErrorResponse = (err: AppError, res: Response) => {
  const { statusCode, message, isOperational } = err;

  if (config.env === 'production' && !isOperational) {
    // Don't leak error details in production
    res.status(500).json(
      errorResponse('Something went wrong!', 500)
    );
  } else {
    res.status(statusCode).json(
      errorResponse(message, statusCode, config.env === 'development' ? err.stack : undefined)
    );
  }
};

// Global error handling middleware
export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Log error
  logger.error('Error occurred:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
  });

  let error = { ...err };
  error.message = err.message;

  // Handle specific error types
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    error = handlePrismaError(err);
  } else if (err.name === 'JsonWebTokenError') {
    error = handleJWTError();
  } else if (err.name === 'TokenExpiredError') {
    error = handleJWTExpiredError();
  } else if (err.name === 'ValidationError') {
    error = handleValidationError(err);
  }

  sendErrorResponse(error, res);
};

// Handle unhandled routes
export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const err = new AppError(`Route ${req.originalUrl} not found`, 404);
  next(err);
};