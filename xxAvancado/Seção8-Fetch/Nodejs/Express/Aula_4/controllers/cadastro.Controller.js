// EXPORTANDO RESPOSTA DA PAGINA DE CADASTRO
exports.paginaCadastro = (req, res) => {
    res.send(`Olá ${req.body.nomeUsuario}, recebemos seu cadastro com sucesso`)
}