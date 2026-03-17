import dotenv from 'dotenv';
import joi from 'joi';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

// Environment validation schema
const envVarsSchema = joi
  .object()
  .keys({
    NODE_ENV: joi.string().valid('production', 'development', 'test').required(),
    PORT: joi.number().default(3000),
    APP_NAME: joi.string().default('MyExpress Enterprise'),
    APP_VERSION: joi.string().default('1.0.0'),

    // Database
    DATABASE_URL: joi.string().required().description('PostgreSQL database URL'),

    // JWT
    JWT_SECRET: joi.string().required().description('JWT secret key'),
    JWT_EXPIRES_IN: joi.string().default('7d'),
    JWT_REFRESH_EXPIRES_IN: joi.string().default('30d'),

    // Redis
    REDIS_HOST: joi.string().default('localhost'),
    REDIS_PORT: joi.number().default(6379),
    REDIS_PASSWORD: joi.string().allow(''),

    // Email
    SMTP_HOST: joi.string().required(),
    SMTP_PORT: joi.number().default(587),
    SMTP_USER: joi.string().allow(''),
    SMTP_PASS: joi.string().allow(''),
    FROM_EMAIL: joi.string().email().required(),
    FROM_NAME: joi.string().default('MyExpress App'),

    // Rate Limiting
    RATE_LIMIT_WINDOW_MS: joi.number().default(900000), // 15 minutes
    RATE_LIMIT_MAX_REQUESTS: joi.number().default(100),

    // Logging
    LOG_LEVEL: joi.string().valid('error', 'warn', 'info', 'debug').default('info'),
    LOG_FILE_MAX_SIZE: joi.string().default('20m'),
    LOG_FILE_MAX_FILES: joi.string().default('14d'),

    // CORS
    CORS_ORIGIN: joi.string().default('*'),

    // API Documentation
    API_DOCS_URL: joi.string().default('/api-docs'),
    SWAGGER_ENABLE: joi.boolean().default(true),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  app: {
    name: envVars.APP_NAME,
    version: envVars.APP_VERSION,
  },
  database: {
    url: envVars.DATABASE_URL,
  },
  jwt: {
    secret: envVars.JWT_SECRET,
    expiresIn: envVars.JWT_EXPIRES_IN,
    refreshExpiresIn: envVars.JWT_REFRESH_EXPIRES_IN,
  },
  redis: {
    host: envVars.REDIS_HOST,
    port: envVars.REDIS_PORT,
    password: envVars.REDIS_PASSWORD,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USER,
        pass: envVars.SMTP_PASS,
      },
    },
    from: {
      email: envVars.FROM_EMAIL,
      name: envVars.FROM_NAME,
    },
  },
  rateLimit: {
    windowMs: envVars.RATE_LIMIT_WINDOW_MS,
    max: envVars.RATE_LIMIT_MAX_REQUESTS,
  },
  logging: {
    level: envVars.LOG_LEVEL,
    file: {
      maxSize: envVars.LOG_FILE_MAX_SIZE,
      maxFiles: envVars.LOG_FILE_MAX_FILES,
    },
  },
  cors: {
    origin: envVars.CORS_ORIGIN,
  },
  apiDocs: {
    url: envVars.API_DOCS_URL,
    enabled: envVars.SWAGGER_ENABLE,
  },
};