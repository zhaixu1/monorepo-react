import swaggerJsdoc from 'swagger-jsdoc';
import { config } from './config';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: config.app.name,
      version: config.app.version,
      description: 'Enterprise-grade Express.js API with TypeScript',
      contact: {
        name: 'API Support',
        email: 'support@yourcompany.com',
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT',
      },
    },
    servers: [
      {
        url: `http://localhost:${config.port}`,
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        apiKey: {
          type: 'apiKey',
          in: 'header',
          name: 'X-API-Key',
        },
      },
      schemas: {
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false,
            },
            message: {
              type: 'string',
              example: 'Error message',
            },
            error: {
              type: 'string',
              example: 'Detailed error information',
            },
            timestamp: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        Success: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true,
            },
            message: {
              type: 'string',
              example: 'Operation successful',
            },
            data: {
              type: 'object',
            },
            timestamp: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        User: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: 'cuid_example',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'user@example.com',
            },
            username: {
              type: 'string',
              example: 'johndoe',
            },
            firstName: {
              type: 'string',
              example: 'John',
            },
            lastName: {
              type: 'string',
              example: 'Doe',
            },
            role: {
              type: 'string',
              enum: ['USER', 'ADMIN', 'MODERATOR'],
              example: 'USER',
            },
            status: {
              type: 'string',
              enum: ['ACTIVE', 'INACTIVE', 'SUSPENDED', 'PENDING'],
              example: 'ACTIVE',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        Post: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: 'cuid_example',
            },
            title: {
              type: 'string',
              example: 'My First Post',
            },
            content: {
              type: 'string',
              example: 'This is the content of my first post.',
            },
            slug: {
              type: 'string',
              example: 'my-first-post',
            },
            published: {
              type: 'boolean',
              example: true,
            },
            authorId: {
              type: 'string',
              example: 'cuid_example',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
            },
          },
        },
        Pagination: {
          type: 'object',
          properties: {
            page: {
              type: 'integer',
              example: 0,
            },
            limit: {
              type: 'integer',
              example: 10,
            },
            total: {
              type: 'integer',
              example: 100,
            },
            totalPages: {
              type: 'integer',
              example: 10,
            },
            hasNext: {
              type: 'boolean',
              example: true,
            },
            hasPrev: {
              type: 'boolean',
              example: false,
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'], // Path to the API files
};

export const swaggerSpec = swaggerJsdoc(options);