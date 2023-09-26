import Usuario from '../models/Usuario';

class UsuarioController {
  async store(req, res) {
    try {
      const createUser = await Usuario.create(req.body);
      return await res.json(createUser);
    } catch (e) {
      return res.status(400).json({ erro: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const getAllUser = await Usuario.findAll({ attributes: ['id', 'nome', 'email'] });
      console.log(req.userEmail, req.userId);
      return res.json(getAllUser);
    } catch (e) {
      return res.status(400).json({ erro: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const { nome, email } = await Usuario.findByPk(id); // getPkUser
      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ erro: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const id = req.userId;

      const getPkUser = await Usuario.findByPk(id);

      if (!getPkUser) {
        return res.status(400).json({ erro: ['Usuário não existe'] });
      }

      const { updated_at, nome, email } = await getPkUser.update(req.body);
      return res.status(200).json({
        id, updated_at, nome, email,
      });
    } catch (e) {
      return res.status(400).json({ erro: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const id = req.userId;

      const getByPk = await Usuario.findByPk(id);

      if (!getByPk) {
        return res.status(400).json({ erro: ['Usuário não existe'] });
      }

      getByPk.destroy();
      return res.status(200).json({ status: ['Deletado com sucesso'] });
    } catch (e) {
      return res.status(400).json({ erro: e.errors.map((err) => err.message) });
    }
  }
}

export default new UsuarioController();
