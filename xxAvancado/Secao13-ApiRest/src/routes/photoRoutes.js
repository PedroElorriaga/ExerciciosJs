import { Router } from 'express';
import multer from 'multer';

import photoController from '../controllers/PhotoController';

const router = new Router();

router.post('/', photoController.store);

export default router;
