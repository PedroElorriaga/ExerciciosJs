import { Router } from 'express';
import { getAllAlunos, createAluno, updateAluno } from '../controllers/HomeController';

const router = new Router();

router.get('/', getAllAlunos.index);
router.post('/', createAluno.store);
router.put('/:id', updateAluno.update);

export default router;
