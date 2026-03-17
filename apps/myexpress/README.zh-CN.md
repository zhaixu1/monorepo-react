# MyExpress 企业级框架

基于 TypeScript 构建的生产就绪、企业级 Express.js 应用程序，具备完整的身份验证、授权、日志记录、监控和部署功能。

## 🚀 核心特性

- **TypeScript** - 完整的类型安全和现代 JavaScript 特性
- **身份验证和授权** - 基于 JWT 的认证系统，支持基于角色的访问控制
- **数据库集成** - PostgreSQL 数据库配合 Prisma ORM
- **Redis 缓存** - 会话管理和数据缓存
- **完整日志系统** - Winston 日志框架，支持日志轮转
- **API 文档** - 自动生成的 Swagger/OpenAPI 文档
- **速率限制** - 多种速率限制策略
- **安全防护** - Helmet.js 安全头、输入清理
- **错误处理** - 集中式错误处理和正确的状态码
- **测试框架** - Jest 测试框架和测试辅助工具
- **Docker 支持** - 多阶段 Docker 构建和 Docker Compose
- **健康检查** - Kubernetes 就绪的健康检查端点
- **生产就绪** - Nginx 反向代理、优雅关闭

## 📁 项目结构

```
myexpress/
├── src/
│   ├── config/         # 配置文件
│   ├── controllers/    # 请求处理器 (如果使用 MVC 模式)
│   ├── middleware/     # 自定义中间件
│   ├── models/         # 数据库模型
│   ├── routes/         # API 路由
│   ├── services/       # 业务逻辑服务层
│   ├── types/          # TypeScript 类型定义
│   └── utils/          # 工具函数
├── tests/              # 测试文件
├── docker/             # Docker 配置文件
├── scripts/            # 部署和工具脚本
├── prisma/             # 数据库架构和迁移
└── logs/               # 应用程序日志 (运行时创建)
```

## 🛠️ 快速开始

### 环境要求

- Node.js 18+
- PostgreSQL 15+
- Redis 7+
- Docker & Docker Compose (容器化部署)

### 本地开发

1. **克隆项目并安装依赖**
   ```bash
   git clone <repository-url>
   cd myexpress
   npm install
   ```

2. **配置环境变量**
   ```bash
   cp .env.example .env
   # 编辑 .env 文件配置您的环境
   ```

3. **设置数据库**
   ```bash
   # 生成 Prisma 客户端
   npx prisma generate

   # 运行数据库迁移
   npx prisma migrate dev
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```

5. **访问应用程序**
   - API 接口: http://localhost:3000
   - API 文档: http://localhost:3000/api-docs

### Docker 开发环境

1. **启动所有服务**
   ```bash
   docker-compose up -d
   ```

2. **运行数据库迁移**
   ```bash
   docker-compose exec app npx prisma migrate dev
   ```

3. **查看日志**
   ```bash
   docker-compose logs -f app
   ```

## 🔧 配置说明

### 环境变量

| 变量名 | 描述 | 默认值 |
|--------|------|--------|
| `NODE_ENV` | 运行环境 (development/production/test) | development |
| `PORT` | 服务器端口 | 3000 |
| `DATABASE_URL` | PostgreSQL 连接字符串 | - |
| `JWT_SECRET` | JWT 密钥 | - |
| `REDIS_HOST` | Redis 主机地址 | localhost |
| `REDIS_PORT` | Redis 端口 | 6379 |

完整配置请参考 `.env.example` 文件。

### 数据库架构

应用程序使用 Prisma ORM 配合 PostgreSQL 数据库。主要模型包括：

- **User** - 用户账户和身份验证
- **Post** - 博客文章和作者关联
- **Comment** - 文章评论
- **Session** - 用户会话和令牌管理

## 📚 API 接口文档

### 身份验证接口

- `POST /api/auth/register` - 用户注册
- `POST /api/auth/login` - 用户登录
- `GET /api/auth/me` - 获取当前用户信息
- `PATCH /api/auth/change-password` - 修改密码

### 用户管理

- `GET /api/users` - 获取用户列表 (仅管理员/版主)
- `GET /api/users/:id` - 根据 ID 获取用户信息
- `PUT /api/users/:id` - 更新用户信息
- `DELETE /api/users/:id` - 删除用户 (仅管理员)
- `GET /api/users/stats` - 用户统计信息

### 文章管理

- `GET /api/posts` - 获取文章列表
- `POST /api/posts` - 创建文章
- `GET /api/posts/:id` - 根据 ID 获取文章
- `PUT /api/posts/:id` - 更新文章
- `DELETE /api/posts/:id` - 删除文章
- `GET /api/posts/my-posts` - 获取当前用户的文章

### 健康监控

- `GET /api/health` - 基本健康检查
- `GET /api/health/detailed` - 详细健康检查包含依赖项
- `GET /api/health/readiness` - Kubernetes 就绪探针
- `GET /api/health/liveness` - Kubernetes 存活探针

## 🧪 测试

```bash
# 运行所有测试
npm test

# 监听模式运行测试
npm run test:watch

# 生成覆盖率报告
npm run test:coverage
```

## 🔒 安全特性

- **JWT 身份验证** - 安全的基于令牌的身份验证
- **基于角色的访问控制** - 用户角色 (USER, ADMIN, MODERATOR)
- **速率限制** - API 和 IP 基础的速率限制
- **输入清理** - XSS 防护和输入验证
- **安全头** - Helmet.js 安全头设置
- **CORS 配置** - 可配置的跨域策略

## 📊 监控和日志

### 日志系统

- **Winston 日志器** - 结构化日志和多种传输方式
- **日志轮转** - 每日日志轮转和可配置保留期
- **日志级别** - 可配置的日志级别 (error, warn, info, debug)
- **HTTP 日志** - Morgan HTTP 请求日志

### 健康监控

- **健康检查端点** - 多个健康检查接口
- **依赖项检查** - 数据库和 Redis 连接检查
- **指标监控** - 系统和应用程序指标

## 🚀 部署

### Docker 部署

```bash
# 开发环境
docker-compose up -d

# 生产环境
docker-compose -f docker-compose.prod.yml up -d
```

### 使用部署脚本

```bash
# 使脚本可执行
chmod +x scripts/deploy.sh

# 开发环境部署
./scripts/deploy.sh deploy development

# 生产环境部署
./scripts/deploy.sh deploy production

# 查看日志
./scripts/deploy.sh logs production app

# 数据库备份
./scripts/deploy.sh backup

# 停止服务
./scripts/deploy.sh stop production
```

### 生产环境注意事项

1. **环境变量** - 设置生产环境变量
2. **数据库迁移** - 在生产环境运行迁移
3. **SSL/TLS** - 配置 HTTPS 证书
4. **负载均衡** - 使用 nginx 或负载均衡器
5. **监控** - 设置应用程序监控
6. **备份** - 配置自动化数据库备份

## 📝 开发指南

### 添加新路由

1. 在 `src/routes/` 创建路由文件
2. 添加验证中间件
3. 实现服务层逻辑
4. 添加 Swagger 文档
5. 编写测试

### 数据库变更

1. 更新 Prisma 架构
2. 生成迁移: `npx prisma migrate dev --name 描述`
3. 更新 TypeScript 类型
4. 更新服务层

### 添加中间件

1. 在 `src/middleware/` 创建中间件
2. 在 `src/app.ts` 中添加到应用程序
3. 添加测试

## 🤝 贡献指南

1. Fork 项目仓库
2. 创建功能分支: `git checkout -b feature/amazing-feature`
3. 提交更改: `git commit -m 'Add amazing feature'`
4. 推送到分支: `git push origin feature/amazing-feature`
5. 创建 Pull Request

## 📄 许可证

该项目基于 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🆘 技术支持

- **文档**: 运行时可在 `/api-docs` 访问
- **问题反馈**: 在 GitHub 上报告问题
- **邮箱**: support@yourcompany.com

## 📈 性能优化建议

1. **数据库索引** - 为频繁查询的字段添加索引
2. **Redis 缓存** - 缓存频繁访问的数据
3. **查询优化** - 使用 Prisma 查询优化
4. **连接池** - 配置数据库连接池
5. **压缩** - 启用 gzip 压缩 (已配置)

## 🎯 使用方法

### 快速启动

1. **安装依赖**
   ```bash
   cd apps/myexpress
   npm install
   ```

2. **配置环境**
   ```bash
   cp .env.example .env
   # 编辑 .env 文件，配置数据库连接等信息
   ```

3. **初始化数据库**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   ```

5. **访问应用**
   - 应用程序: http://localhost:3000
   - API 文档: http://localhost:3000/api-docs

### Docker 快速部署

```bash
# 启动所有服务 (包括数据库和 Redis)
docker-compose up -d

# 运行数据库迁移
docker-compose exec app npx prisma migrate dev

# 查看应用日志
docker-compose logs -f app
```

## 🏗️ 架构特点

- **分层架构** - 控制器、服务、数据访问层清晰分离
- **依赖注入** - 松耦合的组件设计
- **中间件机制** - 可插拔的功能模块
- **配置管理** - 环境变量和配置文件统一管理
- **错误处理** - 统一的错误处理和响应格式

---

使用 ❤️ 基于 Express.js、TypeScript 和现代最佳实践构建。