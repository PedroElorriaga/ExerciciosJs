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
      const getAllUser = await Usuario.findAll();
      return res.json(getAllUser);
    } catch (e) {
      return res.status(400).json({ erro: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const getPkUser = await Usuario.findByPk(id);
      return res.status(200).json(getPkUser);
    } catch (e) {
      return res.status(400).json({ erro: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          erro: ['Missing ID'],
        });
      }

      const getPkUser = await Usuario.findByPk(id);

      if (!getPkUser) {
        return res.status(400).json({ erro: ['Usuário não existe'] });
      }

      const updateUser = await getPkUser.update(req.body);
      return res.status(200).json(updateUser);
    } catch (e) {
      return res.status(400).json({ erro: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erro: ['Missing ID'] });
      }

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
