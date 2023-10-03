import { Router } from 'express';
import AlunosController from '../controllers/AlunoController';

const router = new Router();

router.get('/', AlunosController.index);
router.post('/', AlunosController.store);
router.post('/:id', AlunosController.update);
router.post('/:id', AlunosController.show);
router.post('/:id', AlunosController.delete);

export default router;
