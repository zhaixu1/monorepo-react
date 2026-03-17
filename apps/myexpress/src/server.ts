import { createApp, initializeServices } from './app';
import { config } from '@/config/config';
import { logger } from '@/utils/logger';
import { disconnectRedis } from '@/config/redis';

const startServer = async (): Promise<void> => {
  try {
    // Initialize external services
    await initializeServices();

    // Create Express app
    const app = createApp();

    // Start server
    const server = app.listen(config.port, () => {
      logger.info(`🚀 ${config.app.name} v${config.app.version} is running!`);
      logger.info(`📍 Server running on port ${config.port}`);
      logger.info(`🌍 Environment: ${config.env}`);
      if (config.apiDocs.enabled) {
        logger.info(`📚 API Documentation available at: http://localhost:${config.port}${config.apiDocs.url}`);
      }
    });

    // Graceful shutdown handling
    const gracefulShutdown = (signal: string) => {
      logger.info(`${signal} received. Starting graceful shutdown...`);

      server.close(async (err) => {
        if (err) {
          logger.error('Error during server shutdown:', err);
          process.exit(1);
        }

        try {
          // Disconnect from Redis
          await disconnectRedis();
          logger.info('✅ Graceful shutdown completed');
          process.exit(0);
        } catch (error) {
          logger.error('Error during graceful shutdown:', error);
          process.exit(1);
        }
      });
    };

    // Listen for shutdown signals
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      logger.error('Uncaught Exception:', error);
      process.exit(1);
    });

    // Handle unhandled promise rejections
    process.on('unhandledRejection', (reason, promise) => {
      logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
      process.exit(1);
    });

  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Start the server
startServer();