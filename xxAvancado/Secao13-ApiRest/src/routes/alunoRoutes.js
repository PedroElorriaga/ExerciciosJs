import { Router } from 'express';
import AlunosController from '../controllers/AlunoController';

const router = new Router();

router.get('/', AlunosController.index);

export default router;
