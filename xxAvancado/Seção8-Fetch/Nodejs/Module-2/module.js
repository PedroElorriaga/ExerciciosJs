module.exports = class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    verificaSeTemMaisDe18(idade) {
        if (this.idade > 17) return `${this.nome} é de maior: Entrada permitida.`

        return `${this.nome} é de menor: ${this.idade} entrada não permitida.`
    }
} // EXPORTAÇÃO feita de forma direta