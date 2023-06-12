// EXPORTANDO RESPOSTA DA PÁGINA INICIAL
exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.tratamentoDeForms = (req, res) => {
    res.send(req.body)
}