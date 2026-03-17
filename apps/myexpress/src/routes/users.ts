import { Router, Request, Response } from 'express';
import { body, param, query } from 'express-validator';
import { UserService } from '@/services/userService';
import { authenticate, authorize } from '@/middleware/auth';
import { validate } from '@/middleware/validation';
import { successResponse, asyncHandler } from '@/utils/helpers';
import { AuthenticatedRequest, PaginationQuery } from '@/types';

const router = Router();

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get users with pagination
 *     tags: [Users]
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
 *         description: Users retrieved successfully
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
 *                             $ref: '#/components/schemas/User'
 *                         pagination:
 *                           $ref: '#/components/schemas/Pagination'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       403:
 *         description: Insufficient permissions
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get('/',
  authenticate,
  authorize('ADMIN', 'MODERATOR'),
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
  asyncHandler(async (req: Request, res: Response) => {
    const query: PaginationQuery = {
      page: parseInt(req.query.page as string) || 0,
      limit: parseInt(req.query.limit as string) || 10,
      search: req.query.search as string,
      sortBy: req.query.sortBy as string,
      sortOrder: req.query.sortOrder as 'asc' | 'desc',
    };

    const result = await UserService.getUsers(query);

    res.json(
      successResponse(result, 'Users retrieved successfully')
    );
  })
);

/**
 * @swagger
 * /api/users/stats:
 *   get:
 *     summary: Get user statistics
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User statistics retrieved successfully
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
 *                         totalUsers:
 *                           type: integer
 *                         activeUsers:
 *                           type: integer
 *                         newUsersToday:
 *                           type: integer
 *                         inactiveUsers:
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
    const stats = await UserService.getUserStats();

    res.json(
      successResponse(stats, 'User statistics retrieved successfully')
    );
  })
);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */
router.get('/:id',
  authenticate,
  [
    param('id').isString().notEmpty().withMessage('Valid user ID is required'),
  ],
  validate([
    param('id').isString().notEmpty().withMessage('Valid user ID is required'),
  ]),
  asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;

    // Users can only view their own profile or admins can view any profile
    if (req.user!.id !== id && !['ADMIN', 'MODERATOR'].includes(req.user!.role)) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions',
        timestamp: new Date().toISOString(),
      });
    }

    const user = await UserService.getUserById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        timestamp: new Date().toISOString(),
      });
    }

    res.json(
      successResponse(user, 'User retrieved successfully')
    );
  })
);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               avatar:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Insufficient permissions
 *       404:
 *         description: User not found
 */
router.put('/:id',
  authenticate,
  [
    param('id').isString().notEmpty().withMessage('Valid user ID is required'),
    body('firstName').optional().isLength({ max: 50 }).withMessage('First name too long'),
    body('lastName').optional().isLength({ max: 50 }).withMessage('Last name too long'),
    body('avatar').optional().isURL().withMessage('Avatar must be a valid URL'),
  ],
  validate([
    param('id').isString().notEmpty(),
    body('firstName').optional().isLength({ max: 50 }),
    body('lastName').optional().isLength({ max: 50 }),
    body('avatar').optional().isURL(),
  ]),
  asyncHandler(async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params;

    // Users can only update their own profile or admins can update any profile
    if (req.user!.id !== id && !['ADMIN'].includes(req.user!.role)) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions',
        timestamp: new Date().toISOString(),
      });
    }

    const updatedUser = await UserService.updateUser(id, req.body);

    res.json(
      successResponse(updatedUser, 'User updated successfully')
    );
  })
);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Insufficient permissions
 *       404:
 *         description: User not found
 */
router.delete('/:id',
  authenticate,
  authorize('ADMIN'),
  [
    param('id').isString().notEmpty().withMessage('Valid user ID is required'),
  ],
  validate([
    param('id').isString().notEmpty(),
  ]),
  asyncHandler(async (req: Request, res: Response) => {
    const { id } = req.params;

    await UserService.deleteUser(id);

    res.json(
      successResponse(null, 'User deleted successfully')
    );
  })
);

export { router as userRouter };