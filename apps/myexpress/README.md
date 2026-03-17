# MyExpress Enterprise

A production-ready, enterprise-grade Express.js application built with TypeScript, featuring comprehensive authentication, authorization, logging, monitoring, and deployment capabilities.

## 🚀 Features

- **TypeScript** - Full type safety and modern JavaScript features
- **Authentication & Authorization** - JWT-based auth with role-based access control
- **Database Integration** - PostgreSQL with Prisma ORM
- **Redis Caching** - Session management and caching
- **Comprehensive Logging** - Winston with log rotation
- **API Documentation** - Auto-generated Swagger/OpenAPI docs
- **Rate Limiting** - Multiple rate limiting strategies
- **Security** - Helmet.js security headers, input sanitization
- **Error Handling** - Centralized error handling with proper status codes
- **Testing** - Jest testing framework with test helpers
- **Docker Support** - Multi-stage Docker builds and Docker Compose
- **Health Checks** - Kubernetes-ready health endpoints
- **Production Ready** - Nginx reverse proxy, graceful shutdowns

## 📁 Project Structure

```
myexpress/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Request handlers (if using MVC pattern)
│   ├── middleware/     # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic services
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── tests/              # Test files
├── docker/             # Docker configuration files
├── scripts/            # Deployment and utility scripts
├── prisma/             # Database schema and migrations
└── logs/               # Application logs (created at runtime)
```

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 15+
- Redis 7+
- Docker & Docker Compose (for containerized setup)

### Local Development

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd myexpress
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Set up database**
   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run migrations
   npx prisma migrate dev
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - API: http://localhost:3000
   - Documentation: http://localhost:3000/api-docs

### Docker Development

1. **Start all services**
   ```bash
   docker-compose up -d
   ```

2. **Run migrations**
   ```bash
   docker-compose exec app npx prisma migrate dev
   ```

3. **View logs**
   ```bash
   docker-compose logs -f app
   ```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment (development/production/test) | development |
| `PORT` | Server port | 3000 |
| `DATABASE_URL` | PostgreSQL connection string | - |
| `JWT_SECRET` | JWT secret key | - |
| `REDIS_HOST` | Redis host | localhost |
| `REDIS_PORT` | Redis port | 6379 |

See `.env.example` for complete list.

### Database Schema

The application uses Prisma ORM with PostgreSQL. Key models include:

- **User** - User accounts with authentication
- **Post** - Blog posts with author relations
- **Comment** - Comments on posts
- **Session** - User sessions for token management

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user profile
- `PATCH /api/auth/change-password` - Change password

### User Management

- `GET /api/users` - List users (Admin/Moderator only)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (Admin only)
- `GET /api/users/stats` - User statistics

### Posts

- `GET /api/posts` - List posts
- `POST /api/posts` - Create post
- `GET /api/posts/:id` - Get post by ID
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `GET /api/posts/my-posts` - Get current user's posts

### Health Monitoring

- `GET /api/health` - Basic health check
- `GET /api/health/detailed` - Detailed health with dependencies
- `GET /api/health/readiness` - Kubernetes readiness probe
- `GET /api/health/liveness` - Kubernetes liveness probe

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Role-Based Access Control** - User roles (USER, ADMIN, MODERATOR)
- **Rate Limiting** - API and IP-based rate limiting
- **Input Sanitization** - XSS protection and input validation
- **Security Headers** - Helmet.js security headers
- **CORS Configuration** - Configurable CORS policies

## 📊 Monitoring & Logging

### Logging

- **Winston Logger** - Structured logging with multiple transports
- **Log Rotation** - Daily log rotation with configurable retention
- **Log Levels** - Configurable log levels (error, warn, info, debug)
- **HTTP Logging** - Morgan HTTP request logging

### Health Monitoring

- **Health Endpoints** - Multiple health check endpoints
- **Dependency Checks** - Database and Redis connectivity checks
- **Metrics** - System and application metrics

## 🚀 Deployment

### Docker Deployment

```bash
# Development
docker-compose up -d

# Production
docker-compose -f docker-compose.prod.yml up -d
```

### Using Deployment Script

```bash
# Make script executable
chmod +x scripts/deploy.sh

# Development deployment
./scripts/deploy.sh deploy development

# Production deployment
./scripts/deploy.sh deploy production

# View logs
./scripts/deploy.sh logs production app

# Backup database
./scripts/deploy.sh backup

# Stop services
./scripts/deploy.sh stop production
```

### Production Considerations

1. **Environment Variables** - Set production environment variables
2. **Database Migrations** - Run migrations in production
3. **SSL/TLS** - Configure HTTPS certificates
4. **Load Balancing** - Use nginx or load balancer
5. **Monitoring** - Set up application monitoring
6. **Backups** - Configure automated database backups

## 📝 Development Guide

### Adding New Routes

1. Create route file in `src/routes/`
2. Add validation middleware
3. Implement service layer logic
4. Add Swagger documentation
5. Write tests

### Database Changes

1. Update Prisma schema
2. Generate migration: `npx prisma migrate dev --name description`
3. Update TypeScript types
4. Update service layer

### Adding Middleware

1. Create middleware in `src/middleware/`
2. Add to application in `src/app.ts`
3. Add tests

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Available at `/api-docs` when running
- **Issues**: Report issues on GitHub
- **Email**: support@yourcompany.com

## 📈 Performance Tips

1. **Database Indexing** - Add indexes for frequently queried fields
2. **Redis Caching** - Cache frequently accessed data
3. **Query Optimization** - Use Prisma query optimization
4. **Connection Pooling** - Configure database connection pooling
5. **Compression** - Enable gzip compression (already configured)

---

Built with ❤️ using Express.js, TypeScript, and modern best practices.