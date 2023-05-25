// EXPORTANDO RESPOSTA DA PÁGINA INICIAL
exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/cadastroComSucesso" method="POST">
    Coloque Seu Nome: <input type="text", name="nomeUsuario">
    <button>Enviar</button>
    </form>
    `)
}