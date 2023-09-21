import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ erro: ['Login necessário'] });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email; // Conseguimos acessar em outros controllers
  } catch (e) {
    return res.status(401).json({ erro: ['Token expirado ou Inválido'] });
  }

  next();
};
