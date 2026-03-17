import { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import { config } from '@/config/config';

// Basic security headers
export const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:'],
    },
  },
  crossOriginEmbedderPolicy: false,
});

// CORS configuration
export const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    const allowedOrigins = Array.isArray(config.cors.origin)
      ? config.cors.origin
      : [config.cors.origin];

    if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200, // For legacy browser support
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-API-Key'],
};

// Request sanitization
export const sanitizeRequest = (req: Request, res: Response, next: NextFunction) => {
  // Remove any potential XSS payloads from request body
  if (req.body && typeof req.body === 'object') {
    sanitizeObject(req.body);
  }

  // Remove from query parameters
  if (req.query && typeof req.query === 'object') {
    sanitizeObject(req.query);
  }

  next();
};

// Helper function to sanitize objects
const sanitizeObject = (obj: any): void => {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      // Remove potential XSS patterns
      obj[key] = obj[key]
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+\s*=/gi, '');
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      sanitizeObject(obj[key]);
    }
  }
};

// API Key validation middleware
export const validateApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];

  if (!apiKey) {
    return res.status(401).json({
      success: false,
      message: 'API key required',
      timestamp: new Date().toISOString(),
    });
  }

  // In a real application, you would validate the API key against a database
  // For now, we'll just check if it exists
  if (typeof apiKey !== 'string' || apiKey.length < 10) {
    return res.status(401).json({
      success: false,
      message: 'Invalid API key',
      timestamp: new Date().toISOString(),
    });
  }

  next();
};