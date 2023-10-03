import { Router } from 'express';
import AlunosController from '../controllers/AlunoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', AlunosController.index);
router.post('/', loginRequired, AlunosController.store);
router.put('/:id', loginRequired, AlunosController.update);
router.get('/:id', AlunosController.show);
router.delete('/:id', loginRequired, AlunosController.delete);

export default router;
