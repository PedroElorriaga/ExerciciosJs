// EXPORTANDO RESPOSTA DA PÁGINA INICIAL
exports.paginaInicial = (req, res) => {

    res.render('index', {
        titulo: 'Titulo de conteúdo'
    })
}