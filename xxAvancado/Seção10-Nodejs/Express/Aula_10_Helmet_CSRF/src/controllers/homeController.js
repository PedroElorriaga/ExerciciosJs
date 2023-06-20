// EXPORTANDO RESPOSTA DA PÁGINA INICIAL
exports.paginaInicial = (req, res) => {

    res.render('index', {
        titulo: 'Helmet e CSRF'
    })
}

exports.recebidos = (req, res) => {
    res.send(req.body.message + req.body._csrf)
}