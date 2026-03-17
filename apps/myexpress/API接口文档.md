# MyExpress API 接口文档

## 📍 基本信息

- **基础 URL**: `http://localhost:3000`
- **API 版本**: v1
- **文档地址**: `/api-docs`
- **认证方式**: Bearer Token (JWT)

## 🔐 身份验证

### 注册用户
**POST** `/api/auth/register`

创建新用户账户。

**请求体**:
```json
{
  "email": "user@example.com",
  "username": "testuser",
  "password": "Password123",
  "firstName": "张",
  "lastName": "三"
}
```

**响应示例**:
```json
{
  "success": true,
  "message": "用户注册成功",
  "data": {
    "user": {
      "id": "clpxxx...",
      "email": "user@example.com",
      "username": "testuser",
      "firstName": "张",
      "lastName": "三",
      "role": "USER",
      "status": "ACTIVE"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  }
}
```

### 用户登录
**POST** `/api/auth/login`

用户登录获取访问令牌。

**请求体**:
```json
{
  "email": "user@example.com",
  "password": "Password123"
}
```

**响应示例**:
```json
{
  "success": true,
  "message": "登录成功",
  "data": {
    "user": {
      "id": "clpxxx...",
      "email": "user@example.com",
      "username": "testuser"
    },
    "tokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
  }
}
```

### 获取当前用户信息
**GET** `/api/auth/me`

获取当前登录用户的详细信息。

**请求头**:
```
Authorization: Bearer <access_token>
```

**响应示例**:
```json
{
  "success": true,
  "message": "用户信息获取成功",
  "data": {
    "id": "clpxxx...",
    "email": "user@example.com",
    "username": "testuser",
    "firstName": "张",
    "lastName": "三",
    "role": "USER",
    "status": "ACTIVE",
    "createdAt": "2024-01-18T10:30:00Z"
  }
}
```

### 修改密码
**PATCH** `/api/auth/change-password`

修改当前用户密码。

**请求头**:
```
Authorization: Bearer <access_token>
```

**请求体**:
```json
{
  "currentPassword": "OldPassword123",
  "newPassword": "NewPassword123"
}
```

**响应示例**:
```json
{
  "success": true,
  "message": "密码修改成功"
}
```

## 👥 用户管理

### 获取用户列表
**GET** `/api/users`

获取系统用户列表（需要管理员权限）。

**请求头**:
```
Authorization: Bearer <access_token>
```

**查询参数**:
- `page` (number): 页码，从0开始
- `limit` (number): 每页数量，最大100
- `search` (string): 搜索关键词
- `sortBy` (string): 排序字段
- `sortOrder` (string): 排序顺序 (asc|desc)

**请求示例**:
```
GET /api/users?page=0&limit=10&search=张&sortBy=createdAt&sortOrder=desc
```

**响应示例**:
```json
{
  "success": true,
  "message": "用户列表获取成功",
  "data": {
    "items": [
      {
        "id": "clpxxx...",
        "email": "user@example.com",
        "username": "testuser",
        "firstName": "张",
        "lastName": "三",
        "role": "USER",
        "status": "ACTIVE",
        "createdAt": "2024-01-18T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 0,
      "limit": 10,
      "total": 1,
      "totalPages": 1,
      "hasNext": false,
      "hasPrev": false
    }
  }
}
```

### 获取用户统计
**GET** `/api/users/stats`

获取用户统计信息（需要管理员权限）。

**请求头**:
```
Authorization: Bearer <access_token>
```

**响应示例**:
```json
{
  "success": true,
  "message": "用户统计获取成功",
  "data": {
    "totalUsers": 150,
    "activeUsers": 142,
    "newUsersToday": 5,
    "inactiveUsers": 8
  }
}
```

### 获取指定用户信息
**GET** `/api/users/:id`

根据用户 ID 获取用户详细信息。

**请求头**:
```
Authorization: Bearer <access_token>
```

**路径参数**:
- `id` (string): 用户ID

**响应示例**:
```json
{
  "success": true,
  "message": "用户信息获取成功",
  "data": {
    "id": "clpxxx...",
    "email": "user@example.com",
    "username": "testuser",
    "firstName": "张",
    "lastName": "三",
    "role": "USER",
    "status": "ACTIVE"
  }
}
```

### 更新用户信息
**PUT** `/api/users/:id`

更新指定用户的信息。

**请求头**:
```
Authorization: Bearer <access_token>
```

**请求体**:
```json
{
  "firstName": "新名字",
  "lastName": "新姓氏",
  "avatar": "https://example.com/avatar.jpg"
}
```

### 删除用户
**DELETE** `/api/users/:id`

删除指定用户（需要管理员权限）。

**请求头**:
```
Authorization: Bearer <access_token>
```

## 📝 文章管理

### 获取文章列表
**GET** `/api/posts`

获取文章列表，支持分页和搜索。

**查询参数**:
- `page` (number): 页码
- `limit` (number): 每页数量
- `search` (string): 搜索关键词

**响应示例**:
```json
{
  "success": true,
  "message": "文章列表获取成功",
  "data": {
    "items": [
      {
        "id": "clpxxx...",
        "title": "我的第一篇文章",
        "content": "这是文章内容...",
        "slug": "my-first-post",
        "published": true,
        "author": {
          "id": "clpxxx...",
          "username": "testuser",
          "firstName": "张",
          "lastName": "三"
        },
        "createdAt": "2024-01-18T10:30:00Z"
      }
    ],
    "pagination": {
      "page": 0,
      "limit": 10,
      "total": 1,
      "totalPages": 1
    }
  }
}
```

### 创建文章
**POST** `/api/posts`

创建新文章。

**请求头**:
```
Authorization: Bearer <access_token>
```

**请求体**:
```json
{
  "title": "我的新文章",
  "content": "这是文章的详细内容...",
  "published": false
}
```

### 获取指定文章
**GET** `/api/posts/:id`

根据文章 ID 获取文章详情。

**响应示例**:
```json
{
  "success": true,
  "message": "文章获取成功",
  "data": {
    "id": "clpxxx...",
    "title": "我的第一篇文章",
    "content": "这是文章内容...",
    "published": true,
    "author": {
      "id": "clpxxx...",
      "username": "testuser",
      "firstName": "张",
      "lastName": "三"
    },
    "comments": [
      {
        "id": "clpxxx...",
        "content": "很棒的文章！",
        "author": {
          "username": "commenter"
        },
        "createdAt": "2024-01-18T11:00:00Z"
      }
    ]
  }
}
```

### 更新文章
**PUT** `/api/posts/:id`

更新指定文章（仅作者可操作）。

**请求头**:
```
Authorization: Bearer <access_token>
```

**请求体**:
```json
{
  "title": "更新后的标题",
  "content": "更新后的内容",
  "published": true
}
```

### 删除文章
**DELETE** `/api/posts/:id`

删除指定文章（仅作者可操作）。

### 获取我的文章
**GET** `/api/posts/my-posts`

获取当前用户的文章列表。

**请求头**:
```
Authorization: Bearer <access_token>
```

### 获取文章统计
**GET** `/api/posts/stats`

获取文章统计信息（需要管理员权限）。

**响应示例**:
```json
{
  "success": true,
  "message": "文章统计获取成功",
  "data": {
    "totalPosts": 50,
    "publishedPosts": 45,
    "drafts": 5,
    "postsToday": 3
  }
}
```

## 🏥 健康监控

### 基本健康检查
**GET** `/api/health`

检查应用程序基本运行状态。

**响应示例**:
```json
{
  "success": true,
  "message": "服务健康",
  "data": {
    "status": "healthy",
    "timestamp": "2024-01-18T10:30:00Z",
    "uptime": 3600.5,
    "environment": "development",
    "version": "1.0.0"
  }
}
```

### 详细健康检查
**GET** `/api/health/detailed`

检查应用程序及其依赖项的详细状态。

**响应示例**:
```json
{
  "success": true,
  "message": "详细健康状态",
  "data": {
    "status": "healthy",
    "services": {
      "database": {
        "status": "healthy",
        "responseTime": 15
      },
      "redis": {
        "status": "healthy",
        "responseTime": 2
      }
    },
    "system": {
      "memory": {
        "rss": 45678592,
        "heapTotal": 18874368,
        "heapUsed": 12456789
      },
      "cpu": {
        "user": 123456,
        "system": 98765
      }
    }
  }
}
```

### 就绪探针
**GET** `/api/health/readiness`

Kubernetes 就绪探针端点。

### 存活探针
**GET** `/api/health/liveness`

Kubernetes 存活探针端点。

## 📊 状态码说明

| 状态码 | 说明 |
|--------|------|
| 200 | 请求成功 |
| 201 | 资源创建成功 |
| 400 | 请求参数错误 |
| 401 | 未授权访问 |
| 403 | 权限不足 |
| 404 | 资源不存在 |
| 409 | 资源冲突 |
| 429 | 请求过于频繁 |
| 500 | 服务器内部错误 |

## 🚦 错误处理

所有错误响应都遵循统一格式：

```json
{
  "success": false,
  "message": "错误描述",
  "error": "详细错误信息（仅开发环境）",
  "timestamp": "2024-01-18T10:30:00Z"
}
```

## 🔧 请求示例

### 使用 curl

```bash
# 用户注册
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","username":"testuser","password":"Password123"}'

# 用户登录
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"Password123"}'

# 获取用户信息（需要替换 TOKEN）
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### 使用 JavaScript (Fetch)

```javascript
// 用户登录
const login = async () => {
  const response = await fetch('http://localhost:3000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'test@example.com',
      password: 'Password123'
    })
  });

  const data = await response.json();
  console.log(data);
};

// 获取用户信息
const getUserInfo = async (token) => {
  const response = await fetch('http://localhost:3000/api/auth/me', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data = await response.json();
  console.log(data);
};
```

---

更多详细信息和交互式 API 测试，请访问：http://localhost:3000/api-docs