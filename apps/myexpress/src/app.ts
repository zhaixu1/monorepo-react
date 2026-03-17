import express from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import 'express-async-errors';

import { config } from '@/config/config';
import { connectRedis } from '@/config/redis';
import { logger, httpLogger } from '@/utils/logger';

// Middleware imports
import { securityHeaders, corsOptions, sanitizeRequest } from '@/middleware/security';
import { basicRateLimit } from '@/middleware/rateLimiter';
import { globalErrorHandler, notFoundHandler } from '@/middleware/errorHandler';

// Routes imports
import { healthRouter } from '@/routes/health';
import { authRouter } from '@/routes/auth';
import { userRouter } from '@/routes/users';
import { postRouter } from '@/routes/posts';

// Swagger imports
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '@/config/swagger';

export const createApp = (): express.Application => {
  const app = express();

  // Trust proxy
  app.set('trust proxy', 1);

  // Security middleware
  app.use(securityHeaders);
  app.use(cors(corsOptions));
  app.use(sanitizeRequest);

  // Basic middleware
  app.use(compression());
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));

  // Logging middleware
  const morganStream = {
    write: (message: string) => {
      httpLogger.info(message.trim());
    },
  };

  app.use(
    morgan(
      ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms',
      { stream: morganStream }
    )
  );

  // Rate limiting
  app.use(basicRateLimit);

  // API Documentation
  if (config.apiDocs.enabled) {
    app.use(config.apiDocs.url, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  // Routes
  app.use('/api/health', healthRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/users', userRouter);
  app.use('/api/posts', postRouter);

  // Welcome route
  app.get('/', (req, res) => {
    res.json({
      success: true,
      message: `Welcome to ${config.app.name} v${config.app.version}`,
      timestamp: new Date().toISOString(),
      documentation: config.apiDocs.enabled ? `${req.protocol}://${req.get('host')}${config.apiDocs.url}` : null,
    });
  });

  // Error handling
  app.use(notFoundHandler);
  app.use(globalErrorHandler);

  return app;
};

// Initialize external services
export const initializeServices = async (): Promise<void> => {
  try {
    // Connect to Redis
    await connectRedis();
    logger.info('External services initialized successfully');
  } catch (error) {
    logger.error('Failed to initialize external services:', error);
  }
};