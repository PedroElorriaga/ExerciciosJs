import Usuario from '../models/Usuario';

class UsuarioController {
  async store(req, res) {
    try {
      const createUser = await Usuario.create({
        nome: 'Admin',
        email: 'admin@adm.com',
        password: '1234abcde',
      });

      res.json(createUser);
    } catch (e) {
      res.status(400).json({ erro: e.errors.map((err) => err.message) });
    }
  }
}

const createUsuario = new UsuarioController();

export { createUsuario };
