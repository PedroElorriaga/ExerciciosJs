import Aluno from '../models/Aluno';

class AlunosController {
  async index(req, res) {
    const dadosAlunos = await Aluno.findAll();
    res.json(dadosAlunos);
  }

  async store(req, res) {
    const criarAluno = await Aluno.create(req.body);
    res.json({ Status: 'Criado', corpo: { criarAluno } });
  }

  async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    const atualizarAluno = await Aluno.update({ data }, {
      where: {
        id,
      },
    });
    res.json({ status: 'Atualizado!', atualizarAluno });
  }
}

export default new AlunosController();
