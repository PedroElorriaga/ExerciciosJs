import Aluno from '../models/Aluno';

class AlunosController {
  async index(req, res) {
    const dadosAlunos = await Aluno.findAll();
    res.json(dadosAlunos);
  }

  async store(req, res) {
    try {
      const createAluno = await Aluno.create();
      return res.json(createAluno);
    } catch (e) {
      return res.status(401).json({ ERRO: ['Erro'] });
    }
  }

  async update(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ ERRO: ['Missing ID'] });
    }
    return id;
  }

  async show(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ ERRO: ['Missing ID'] });
    }
    return id;
  }

  async delete(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ ERRO: ['Missing ID'] });
    }
    return id;
  }
}

export default new AlunosController();
