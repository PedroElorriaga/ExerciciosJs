import Aluno from '../models/Aluno';

class AlunosController {
  async index(req, res) {
    const dadosAlunos = await Aluno.findAll();
    res.json(dadosAlunos);
  }
}

export default new AlunosController();
