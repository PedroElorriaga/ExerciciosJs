import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          erro: ['Credenciais inválidas'],
        });
      }

      const findUser = await Usuario.findOne({ where: { email } });

      if (!findUser) {
        return res.status(400).json({
          erro: ['Usuário não existe'],
        });
      }

      if (!(await findUser.verificaHashDeSenha(password))) {
        return res.status(401).json({ erro: ['Senha inválida'] });
      }

      const { id } = findUser;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ status: 'Ok', token });
    } catch (e) {
      return res.status(400).json({ erro: e });
    }
  }
}

export default new TokenController();
