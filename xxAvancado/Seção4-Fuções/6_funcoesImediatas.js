// IIFE - GERA UMA FUNÇÃO PROTEGIDA

(function () {
    const sobrenome = 'Elorriaga'
    function nomeCompleto(nome) {
        return nome + ' ' + sobrenome
    }

    function insereNome() {
        console.log(nomeCompleto('Pedro'))
    }

    insereNome()
    console.log()

})() // ESSA É A ESTRUTURA DA FUNÇÃO QUE SE AUTO INVOCA

const sobrenome = 'Sobrenome fora da função'
console.log(sobrenome)