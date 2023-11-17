import { Router } from 'express';
import multer from 'multer';

import photoController from '../controllers/PhotoController';
import loginRequired from '../middlewares/loginRequired';
import multerConfig from '../config/multer';

const upload = multer(multerConfig);
const router = new Router();

router.get('/', upload.single('photo'), photoController.index);

export default router;
