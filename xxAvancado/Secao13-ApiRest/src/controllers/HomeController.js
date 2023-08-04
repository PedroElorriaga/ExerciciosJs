import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Pedro',
      sobrenome: 'Elorriaga',
      email: 'pedrohes2002@outlook.com',
      idade: 21,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
