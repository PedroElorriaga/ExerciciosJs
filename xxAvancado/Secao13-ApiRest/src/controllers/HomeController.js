import Cliente from '../models/Cliente';

class HomeController {
  async index(req, res) {
    const novoCliente = await Cliente.create({
      nome: 'Cassio',
      sobrenome: 'Ramos',
      email: 'cassio2012@hotmail.com',
      idade: 34,
    });
    res.json(novoCliente);
  }
}

export default new HomeController();
