


// PROTOTYPES SÃO MEIOS DE DEIXAR SEU SISTEMA MAIS AGIL


function ObjetoPessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

// this.nome = 'target window'
// https://udgwebdev.github.io/quando-nao-usar-arrow-functions/

ObjetoPessoa.prototype.nomeCompleto = function () {
    return `Nome completo: ${this.nome} ${this.sobrenome}`
}

const cliente1 = new ObjetoPessoa('Pedro', 'Elorriaga')
console.dir(cliente1) // RETORNA NA JANELA HTML

console.log(cliente1.nomeCompleto()) // RETORNA Nome completo: Pedro Elorriaga