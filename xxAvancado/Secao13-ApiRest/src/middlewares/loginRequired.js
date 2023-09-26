import jwt from 'jsonwebtoken';
import Usuario from '../models/Usuario';

export default async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ erro: ['Login necessário'] });
    }

    const [, token] = authorization.split(' ');

    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const getUserAuth = await Usuario.findOne({
      where: {
        id,
        email,
      },
    });

    if (!getUserAuth) {
      return res.status(401).json({ erro: ['Usuário inválido'] });
    }

    req.userId = id;
    req.userEmail = email; // Conseguimos acessar em outros controllers
  } catch (e) {
    return res.status(401).json({ erro: ['Token expirado ou Inválido'] });
  }

  return next();
};
