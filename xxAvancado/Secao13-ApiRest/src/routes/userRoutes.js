import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', userController.index);

export default router;
