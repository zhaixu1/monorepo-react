import { Router, Request, Response } from 'express';
import { body, param, query } from 'express-validator';
import { PostService } from '@/services/postService';
import { authenticate, authorize, optionalAuth } from '@/middleware/auth';
import { validate } from '@/middleware/validation';
import { successResponse, asyncHandler } from '@/utils/helpers';
import { AuthenticatedRequest, PaginationQuery } from '@/types';

const router = Router();

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get posts with pagination
 *     tags: [Posts]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 0
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         description: Number of items per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Field to sort by
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *         description: Sort order
 *     responses:
 *       200:
 *         description: Posts retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: object
 *                       properties:
 *                         items:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/Post'
 *                         pagination:
 *                           $ref: '#/components/schemas/Pagination'
 */
router.get('/',
  optionalAuth,
  [
    query('page').optional().isInt({ min: 0 }).withMessage('Page must be a non-negative integer'),
    query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
    query('sortOrder').optional().isIn(['asc', 'desc']).withMessage('Sort order must be asc or desc'),
  ],
  validate([
    query('page').optional().isInt({ min: 0 }),
    query('limit').optional().isInt({ min: 1, max: 100 }),
    query('sortOrder').optional().isIn(['asc', 'desc']),
  ]),
  asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const query: PaginationQuery = {
      page: parseInt(req.query.page as string) || 0,
      limit: parseInt(req.query.limit as string) || 10,
      search: req.query.search as string,
      sortBy: req.query.sortBy as string || 'createdAt',
      sortOrder: req.query.sortOrder as 'asc' | 'desc' || 'desc',
    };

    // Show unpublished posts only for authenticated users with appropriate permissions
    const includeUnpublished = req.user && ['ADMIN', 'MODERATOR'].includes(req.user.role);

    const result = await PostService.getPosts(query, includeUnpublished);

    res.json(
      successResponse(result, 'Posts retrieved successfully')
    );
  })
);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 200
 *               content:
 *                 type: string
 *               published:
 *                 type: boolean
 *                 default: false
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/Post'
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 *       409:
 *         description: Post with this title already exists
 */
router.post('/',
  authenticate,
  [
    body('title')
      .isLength({ min: 1, max: 200 })
      .withMessage('Title must be between 1 and 200 characters'),
    body('content').optional().isString().withMessage('Content must be a string'),
    body('published').optional().isBoolean().withMessage('Published must be a boolean'),
  ],
  validate([
    body('title').isLength({ min: 1, max: 200 }),
    body('content').optional().isString(),
    body('published').optional().isBoolean(),
  ]),
  asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const post = await PostService.createPost(req.body, req.user!.id);

    res.status(201).json(
      successResponse(post, 'Post created successfully', 201)
    );
  })
);

/**
 * @swagger
 * /api/posts/stats:
 *   get:
 *     summary: Get post statistics
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Post statistics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: object
 *                       properties:
 *                         totalPosts:
 *                           type: integer
 *                         publishedPosts:
 *                           type: integer
 *                         drafts:
 *                           type: integer
 *                         postsToday:
 *                           type: integer
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Insufficient permissions
 */
router.get('/stats',
  authenticate,
  authorize('ADMIN', 'MODERATOR'),
  asyncHandler(async (req: Request, res: Response) => {
    const stats = await PostService.getPostStats();

    res.json(
      successResponse(stats, 'Post statistics retrieved successfully')
    );
  })
);

/**
 * @swagger
 * /api/posts/my-posts:
 *   get:
 *     summary: Get current user's posts
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 0
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: User posts retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: object
 *                       properties:
 *                         items:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/Post'
 *                         pagination:
 *                           $ref: '#/components/schemas/Pagination'
 *       401:
 *         description: Unauthorized
 */
router.get('/my-posts',
  authenticate,
  [
    query('page').optional().isInt({ min: 0 }).withMessage('Page must be a non-negative integer'),
    query('limit').optional().isInt({ min: 1, max: 100 }).withMessage('Limit must be between 1 and 100'),
  ],
  validate([
    query('page').optional().isInt({ min: 0 }),
    query('limit').optional().isInt({ min: 1, max: 100 }),
  ]),
  asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const query: PaginationQuery = {
      page: parseInt(req.query.page as string) || 0,
      limit: parseInt(req.query.limit as string) || 10,
    };

    const result = await PostService.getPostsByAuthor(req.user!.id, query);

    res.json(
      successResponse(result, 'User posts retrieved successfully')
    );
  })
);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/Post'
 *       404:
 *         description: Post not found
 */
router.get('/:id',
  optionalAuth,
  [
    param('id').isString().notEmpty().withMessage('Valid post ID is required'),
  ],
  validate([
    param('id').isString().notEmpty(),
  ]),
  asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;

    // Show unpublished posts only for authenticated users with appropriate permissions or post author
    const includeUnpublished = req.user &&
      (['ADMIN', 'MODERATOR'].includes(req.user.role) ||
       (await PostService.getPostById(id, true))?.authorId === req.user.id);

    const post = await PostService.getPostById(id, includeUnpublished);

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found',
        timestamp: new Date().toISOString(),
      });
    }

    res.json(
      successResponse(post, 'Post retrieved successfully')
    );
  })
);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Update post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 200
 *               content:
 *                 type: string
 *               published:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/Post'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Insufficient permissions
 *       404:
 *         description: Post not found
 *       409:
 *         description: Post with this title already exists
 */
router.put('/:id',
  authenticate,
  [
    param('id').isString().notEmpty().withMessage('Valid post ID is required'),
    body('title')
      .optional()
      .isLength({ min: 1, max: 200 })
      .withMessage('Title must be between 1 and 200 characters'),
    body('content').optional().isString().withMessage('Content must be a string'),
    body('published').optional().isBoolean().withMessage('Published must be a boolean'),
  ],
  validate([
    param('id').isString().notEmpty(),
    body('title').optional().isLength({ min: 1, max: 200 }),
    body('content').optional().isString(),
    body('published').optional().isBoolean(),
  ]),
  asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;

    const updatedPost = await PostService.updatePost(id, req.body, req.user!.id);

    res.json(
      successResponse(updatedPost, 'Post updated successfully')
    );
  })
);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Delete post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Post ID
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Insufficient permissions
 *       404:
 *         description: Post not found
 */
router.delete('/:id',
  authenticate,
  [
    param('id').isString().notEmpty().withMessage('Valid post ID is required'),
  ],
  validate([
    param('id').isString().notEmpty(),
  ]),
  asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;

    await PostService.deletePost(id, req.user!.id);

    res.json(
      successResponse(null, 'Post deleted successfully')
    );
  })
);

export { router as postRouter };