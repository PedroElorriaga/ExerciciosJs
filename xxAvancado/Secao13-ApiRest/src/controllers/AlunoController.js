import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunosController {
  async index(req, res) {
    const dadosAlunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade'],
      order: [['id', 'desc'], [Foto, 'id', 'desc']],
      include: {
        model: Foto,
        attributes: ['filename'],
      }
    });
    res.json(dadosAlunos);
  }

  async store(req, res) {
    try {
      const createAluno = await Aluno.create(req.body);
      return res.json(createAluno);

    } catch (e) {
      return res.status(401).json({ erro: e.parent.sqlMessage });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        nome, idade, sobrenome, email,
      } = req.body;

      if (!id) {
        return res.status(401).json({ ERRO: ['Missing ID'] });
      }

      const getOneAluno = await Aluno.findByPk(id);

      if (!getOneAluno) {
        return res.status(401).json({ ERRO: ['Aluno(a) não localizado'] });
      }

      if (!nome && !idade && !sobrenome && !email) {
        return res.status(401).json({ ERRO: ['Nenhum parâmetro foi alterado'] });
      }

      await getOneAluno.update(req.body);

      return res.status(200).json({ STATUS: [`Aluno(a) ${getOneAluno.nome} foi atulizado com sucesso!`] });

    } catch (e) {
      return res.status(400).json({ erro: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({ ERRO: ['Missing ID'] });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({ ERRO: ['Aluno(a) não existe'] });
      }

      const { nome, sobrenome, idade } = aluno;

      return res.status(200).json({ ALUNO: { name: nome, lastname: sobrenome, age: idade } });

    } catch (e) {
      return res.status(400).json({ erro: e });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({ ERRO: ['Missing ID'] });
      }

      const deleteAluno = await Aluno.findByPk(id);

      if (!deleteAluno) {
        return res.status(400).json({ ERRO: ['Aluno(a) não existe!'] });
      }

      await deleteAluno.destroy();

      return res.status(200).json({ STATUS: [`Aluno(a) ${deleteAluno.nome} ${deleteAluno.sobrenome} foi excluido com sucesso!`] });

    } catch (e) {
      return res.status(400).json({ erro: e.errors.map((err) => err.message) });
    }
  }
}

export default new AlunosController();
