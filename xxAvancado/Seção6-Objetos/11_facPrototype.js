const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const correr = {
    correr() {
        console.log(`${this.nome} está correndo`)
    }
}

const andar = {
    andar() {
        console.log(`${this.nome} está andando`)
    }
}

const pessoaPrototype = { ...falar, ...correr, ...andar }
// OUTRO MÉTODO QUE FUNCIONA
// const pessoaPrototype = Object.assign({}, falar, correr, andar)

function criaCliente(nome, idade) {
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome
        },

        idade: {
            value: idade
        }
    })
}

const pessoaUm = criaCliente('Pedrinho', 21)
console.log(pessoaUm)