import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import { redisClient } from '@/config/redis';
import { config } from '@/config/config';
import { logger } from '@/utils/logger';
import { errorResponse } from '@/utils/helpers';

// Basic rate limiting middleware using express-rate-limit
export const basicRateLimit = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.',
    timestamp: new Date().toISOString(),
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Advanced rate limiting using Redis (if available)
let redisRateLimiter: RateLimiterRedis | null = null;

if (redisClient.isReady) {
  redisRateLimiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'rl',
    points: config.rateLimit.max, // Number of requests
    duration: Math.floor(config.rateLimit.windowMs / 1000), // Per duration in seconds
  });
}

export const advancedRateLimit = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!redisRateLimiter) {
    return next();
  }

  const clientId = req.ip || req.connection.remoteAddress || 'unknown';

  try {
    await redisRateLimiter.consume(clientId);
    next();
  } catch (rejRes: any) {
    const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
    res.set('Retry-After', String(secs));
    res.status(429).json(
      errorResponse(
        `Too many requests. Retry after ${secs} seconds.`,
        429
      )
    );
  }
};

// API key rate limiting (for authenticated endpoints)
export const createApiKeyRateLimit = (points: number, duration: number) => {
  if (!redisClient.isReady) {
    return (req: Request, res: Response, next: NextFunction) => next();
  }

  const rateLimiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'api_rl',
    points,
    duration,
  });

  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const apiKey = req.headers['x-api-key'] as string;
    const clientId = apiKey || req.ip || 'unknown';

    try {
      await rateLimiter.consume(clientId);
      next();
    } catch (rejRes: any) {
      const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
      res.set('Retry-After', String(secs));
      res.status(429).json(
        errorResponse(
          'API rate limit exceeded. Please try again later.',
          429
        )
      );
    }
  };
};