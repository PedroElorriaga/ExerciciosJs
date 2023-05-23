const funcaoDeFalarMensagem = function (msg) {
    return msg + '    @deployed by pedrinho'
}

const funcaoDeIncluirNomeNaMensagem = function (nome, mensagem) {
    return nome + ' está falando: ' + funcaoDeFalarMensagem(mensagem)
}

module.exports = {
    funcaoDeIncluirNomeNaMensagem
}

console.log(module.exports) // RETORNA { funcaoDeIncluirNomeNaMensagem: [Function: funcaoDeIncluirNomeNaMensagem] }
