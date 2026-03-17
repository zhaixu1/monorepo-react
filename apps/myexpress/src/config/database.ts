import { PrismaClient } from '@prisma/client';
import { config } from './config';

declare global {
  // eslint-disable-next-line no-var
  var __db__: PrismaClient;
}

let db: PrismaClient;

// Prevent multiple instances of Prisma Client in development
if (config.env === 'production') {
  db = new PrismaClient();
} else {
  if (!global.__db__) {
    global.__db__ = new PrismaClient();
  }
  db = global.__db__;
}

// Enable query logging in development
if (config.env === 'development') {
  db.$on('query', (e) => {
    console.log('Query: ' + e.query);
    console.log('Params: ' + e.params);
    console.log('Duration: ' + e.duration + 'ms');
  });
}

export { db };