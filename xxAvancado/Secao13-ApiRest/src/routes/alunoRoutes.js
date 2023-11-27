import { Router } from 'express';
import AlunosController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, AlunosController.index);
router.post('/', loginRequired, AlunosController.store);
router.put('/:id', loginRequired, AlunosController.update);
router.get('/:id', loginRequired, AlunosController.show);
router.delete('/:id', loginRequired, AlunosController.delete);

export default router;
