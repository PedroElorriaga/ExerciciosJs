import { Router } from 'express';
import { createUsuario } from '../controllers/UsuarioController copy';

const router = new Router();

router.get('/', createUsuario.store);

export default router;
