import { Post, Prisma } from '@prisma/client';
import { db } from '@/config/database';
import { AppError } from '@/middleware/errorHandler';
import { PaginationQuery } from '@/types';
import { getPagination, getPaginationData } from '@/utils/helpers';

export interface CreatePostRequest {
  title: string;
  content?: string;
  published?: boolean;
}

export interface UpdatePostRequest {
  title?: string;
  content?: string;
  published?: boolean;
}

export class PostService {
  // Create new post
  static async createPost(data: CreatePostRequest, authorId: string): Promise<Post> {
    const { title, content, published = false } = data;

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    // Check if slug already exists
    const existingPost = await db.post.findUnique({
      where: { slug },
    });

    if (existingPost) {
      throw new AppError('Post with this title already exists', 409);
    }

    const post = await db.post.create({
      data: {
        title,
        content,
        slug,
        published,
        authorId,
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });

    return post;
  }

  // Get posts with pagination
  static async getPosts(query: PaginationQuery, includeUnpublished = false) {
    const { limit, offset } = getPagination(query.page, query.limit);
    const { search, sortBy = 'createdAt', sortOrder = 'desc' } = query;

    const where: Prisma.PostWhereInput = {};

    if (!includeUnpublished) {
      where.published = true;
    }

    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
        {
          author: {
            OR: [
              { username: { contains: search, mode: 'insensitive' } },
              { firstName: { contains: search, mode: 'insensitive' } },
              { lastName: { contains: search, mode: 'insensitive' } },
            ],
          },
        },
      ];
    }

    const [posts, total] = await Promise.all([
      db.post.findMany({
        where,
        skip: offset,
        take: limit,
        orderBy: { [sortBy]: sortOrder },
        include: {
          author: {
            select: {
              id: true,
              username: true,
              firstName: true,
              lastName: true,
            },
          },
          _count: {
            select: {
              comments: true,
            },
          },
        },
      }),
      db.post.count({ where }),
    ]);

    return getPaginationData(posts, query.page || 0, limit, total);
  }

  // Get post by ID
  static async getPostById(id: string, includeUnpublished = false): Promise<Post | null> {
    const where: Prisma.PostWhereInput = { id };

    if (!includeUnpublished) {
      where.published = true;
    }

    const post = await db.post.findFirst({
      where,
      include: {
        author: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
        comments: {
          include: {
            author: {
              select: {
                id: true,
                username: true,
                firstName: true,
                lastName: true,
              },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });

    return post;
  }

  // Get post by slug
  static async getPostBySlug(slug: string, includeUnpublished = false): Promise<Post | null> {
    const where: Prisma.PostWhereInput = { slug };

    if (!includeUnpublished) {
      where.published = true;
    }

    const post = await db.post.findFirst({
      where,
      include: {
        author: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
            avatar: true,
          },
        },
        comments: {
          include: {
            author: {
              select: {
                id: true,
                username: true,
                firstName: true,
                lastName: true,
              },
            },
          },
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    return post;
  }

  // Update post
  static async updatePost(
    id: string,
    data: UpdatePostRequest,
    authorId: string
  ): Promise<Post> {
    const existingPost = await db.post.findUnique({
      where: { id },
    });

    if (!existingPost) {
      throw new AppError('Post not found', 404);
    }

    if (existingPost.authorId !== authorId) {
      throw new AppError('Not authorized to update this post', 403);
    }

    let slug = existingPost.slug;

    // Generate new slug if title is being updated
    if (data.title && data.title !== existingPost.title) {
      slug = data.title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      // Check if new slug already exists
      const slugExists = await db.post.findFirst({
        where: {
          slug,
          NOT: { id },
        },
      });

      if (slugExists) {
        throw new AppError('Post with this title already exists', 409);
      }
    }

    const updatedPost = await db.post.update({
      where: { id },
      data: {
        ...data,
        slug,
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            firstName: true,
            lastName: true,
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });

    return updatedPost;
  }

  // Delete post
  static async deletePost(id: string, authorId: string): Promise<void> {
    const post = await db.post.findUnique({
      where: { id },
    });

    if (!post) {
      throw new AppError('Post not found', 404);
    }

    if (post.authorId !== authorId) {
      throw new AppError('Not authorized to delete this post', 403);
    }

    await db.post.delete({
      where: { id },
    });
  }

  // Get posts by author
  static async getPostsByAuthor(authorId: string, query: PaginationQuery) {
    const { limit, offset } = getPagination(query.page, query.limit);

    const [posts, total] = await Promise.all([
      db.post.findMany({
        where: { authorId },
        skip: offset,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          _count: {
            select: {
              comments: true,
            },
          },
        },
      }),
      db.post.count({ where: { authorId } }),
    ]);

    return getPaginationData(posts, query.page || 0, limit, total);
  }

  // Get post stats
  static async getPostStats() {
    const [totalPosts, publishedPosts, drafts, postsToday] = await Promise.all([
      db.post.count(),
      db.post.count({ where: { published: true } }),
      db.post.count({ where: { published: false } }),
      db.post.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
    ]);

    return {
      totalPosts,
      publishedPosts,
      drafts,
      postsToday,
    };
  }
}