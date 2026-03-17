import { createClient } from 'redis';
import { config } from './config';

export const redisClient = createClient({
  socket: {
    host: config.redis.host,
    port: config.redis.port,
  },
  password: config.redis.password || undefined,
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('disconnect', () => {
  console.log('Disconnected from Redis');
});

// Connect to Redis
export const connectRedis = async (): Promise<void> => {
  try {
    await redisClient.connect();
  } catch (error) {
    console.error('Failed to connect to Redis:', error);
    // Don't throw error to allow app to continue without Redis
  }
};

// Graceful shutdown
export const disconnectRedis = async (): Promise<void> => {
  try {
    await redisClient.disconnect();
  } catch (error) {
    console.error('Error disconnecting from Redis:', error);
  }
};