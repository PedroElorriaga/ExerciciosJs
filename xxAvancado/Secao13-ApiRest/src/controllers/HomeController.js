import Aluno from '../models/Aluno';

class GetAllAlunos {
  async index(req, res) {
    const dadosAlunos = await Aluno.findAll();
    res.json(dadosAlunos);
  }
}

class CreateAluno {
  async index(req, res) {
    const criarAluno = await Aluno.create(req.body);
    res.json({ Status: 'Criado', corpo: { criarAluno } });
  }
}

class UpdateAluno {
  async index(req, res) {
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

const getAllAlunos = new GetAllAlunos();
const createAluno = new CreateAluno();
const updateAluno = new UpdateAluno();

export { getAllAlunos, createAluno, updateAluno };
