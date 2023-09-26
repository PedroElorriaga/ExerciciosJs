import { Router } from 'express';
import AlunosController from '../controllers/HomeController';

const router = new Router();

router.get('/', AlunosController.index);
router.post('/', AlunosController.store);
router.put('alunos/:id', AlunosController.update);

export default router;
