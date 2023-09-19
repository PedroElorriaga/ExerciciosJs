import { Router } from 'express';
import { getAllAlunos, createAluno, updateAluno } from '../controllers/HomeController';

const router = new Router();

router.get('/', getAllAlunos.index);
router.post('/', createAluno.index);
router.put('/:id', updateAluno.index);

export default router;
