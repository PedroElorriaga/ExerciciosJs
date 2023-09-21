import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController copy';

const router = new Router();

router.post('/', UsuarioController.store);
router.get('/', UsuarioController.index);
router.get('/:id', UsuarioController.show);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.delete);

export default router;
