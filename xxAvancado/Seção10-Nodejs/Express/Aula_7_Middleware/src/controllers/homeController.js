// EXPORTANDO RESPOSTA DA PÁGINA INICIAL
exports.paginaInicial = (req, res, next) => {
    res.render('index')
    console.log('')
    console.log('Respondendo cliente...')
    console.log('Sessão Pagina Inicial USUÁRIO: ' + req.session.nome)
    console.log('')
    next()
}