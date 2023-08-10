import User from '../models/User';

class HomeController {
  async index(req, res) {
    const novoUser = await User.create({
      nome: 'Cassio',
      email: 'cassio2012@hotmail.com',
      password: '1234',
    });
    res.json(novoUser);
  }
}

export default new HomeController();
