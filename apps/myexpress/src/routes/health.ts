import { Router, Request, Response } from 'express';
import { db } from '@/config/database';
import { redisClient } from '@/config/redis';
import { config } from '@/config/config';
import { successResponse, errorResponse, asyncHandler } from '@/utils/helpers';

const router = Router();

/**
 * @swagger
 * /api/health:
 *   get:
 *     summary: Basic health check
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Service is healthy
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 */
router.get('/', (req: Request, res: Response) => {
  res.json(
    successResponse({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: config.env,
      version: config.app.version,
    })
  );
});

/**
 * @swagger
 * /api/health/detailed:
 *   get:
 *     summary: Detailed health check including dependencies
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Detailed service health status
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *       503:
 *         description: Service unhealthy
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/detailed', asyncHandler(async (req: Request, res: Response) => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: config.env,
    version: config.app.version,
    services: {
      database: { status: 'unknown', responseTime: 0 },
      redis: { status: 'unknown', responseTime: 0 },
    },
    system: {
      memory: process.memoryUsage(),
      cpu: process.cpuUsage(),
      platform: process.platform,
      nodeVersion: process.version,
    },
  };

  let allServicesHealthy = true;

  // Check database connection
  try {
    const start = Date.now();
    await db.$queryRaw`SELECT 1`;
    health.services.database = {
      status: 'healthy',
      responseTime: Date.now() - start,
    };
  } catch (error) {
    health.services.database = {
      status: 'unhealthy',
      responseTime: 0,
    };
    allServicesHealthy = false;
  }

  // Check Redis connection
  try {
    if (redisClient.isReady) {
      const start = Date.now();
      await redisClient.ping();
      health.services.redis = {
        status: 'healthy',
        responseTime: Date.now() - start,
      };
    } else {
      health.services.redis = {
        status: 'disconnected',
        responseTime: 0,
      };
    }
  } catch (error) {
    health.services.redis = {
      status: 'unhealthy',
      responseTime: 0,
    };
  }

  if (allServicesHealthy) {
    res.json(successResponse(health));
  } else {
    health.status = 'degraded';
    res.status(503).json(errorResponse('Service is degraded', 503));
  }
}));

/**
 * @swagger
 * /api/health/readiness:
 *   get:
 *     summary: Readiness probe for Kubernetes
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Service is ready
 *       503:
 *         description: Service is not ready
 */
router.get('/readiness', asyncHandler(async (req: Request, res: Response) => {
  try {
    // Check critical dependencies
    await db.$queryRaw`SELECT 1`;

    res.json(successResponse({ status: 'ready' }));
  } catch (error) {
    res.status(503).json(errorResponse('Service not ready', 503));
  }
}));

/**
 * @swagger
 * /api/health/liveness:
 *   get:
 *     summary: Liveness probe for Kubernetes
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Service is alive
 */
router.get('/liveness', (req: Request, res: Response) => {
  res.json(successResponse({ status: 'alive' }));
});

export { router as healthRouter };