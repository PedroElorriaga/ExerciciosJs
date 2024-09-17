// A CLASSE É PARECIDA COM O CONSTRUCTION FUNCTION
// PORÉM A CLASSE CRIA UM PROTOTYPE AUTOMATICAMENTE

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        return `Atenção o Sr ${this.nome} ${this.sobrenome} está falando...`
    }

    anunciar() {
        return `Atenção o Sr ${this.nome} ${this.sobrenome} está anunciando...`
    }
}

const humanoUm = new Pessoa('Pedro', 'Elorriaga')

console.log(humanoUm.falar())
console.log(humanoUm.anunciar())