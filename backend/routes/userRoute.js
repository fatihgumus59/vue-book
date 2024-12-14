import express from 'express';
import * as userController from '../controller/userController.js';
import * as authMiddleware from '../middlewares/auth.js';
const router = express.Router();

router
  .route('/updateUser')
  .put(authMiddleware.authenticateUser, userController.updateUser);

export default router;