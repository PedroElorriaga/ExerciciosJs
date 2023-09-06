const validacaoEnvios = (req, res, next) => {
    if (req.body.titulo == undefined || req.body.titulo == '')  {
        return res.status(400).json({ "ERROR": "O campo 'titulo' deve ser válido"});
    };

    next();
};

module.exports = {
    validacaoEnvios
}