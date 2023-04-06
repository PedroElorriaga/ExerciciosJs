// FUNÇÕES FABRICA

function pessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,

        // GETTER
        get nomeCompleto() {
            return `${nome} ${sobrenome}`
        },

        // SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' ') // SPLIT SEPARA OS ELEMENTOS PELO ' ' EM UM ARRAY 
            this.nome = valor.shift() // SHIFT PEGA O PRIMEIRO VALOR DO ARRAY E JOGA NA VARIAVEL INDICADA
            this.sobrenome = valor.join(' ')
        },

        falar: function (assunto) {
            return `${nome} está ${assunto}` // FUNCTION FACTORY
        },

        peso,
        altura,

        // GETTER
        get imc() { // GET EU FINGO QUE O IMC É UM ATRIBUTO, SENDO ASSIM NÃO PRECISO USAR () PARA CHAMA-LO
            return this.peso / (this.altura ** 2) // THIS SE REFERE AO OBJETO
        }
    }
}

const p1 = pessoa('Pedro', 'Elorriaga', 70, 1.75)
console.log(p1.nome, p1.sobrenome)
console.log(p1.falar('falando, Vai conrinthians!'))
console.log(p1.imc.toFixed(2))
console.log()
const p2 = pessoa('Leonardo', 'Matos de oliveira', 63, 1.73)
console.log(p2.nome)
console.log(p2.sobrenome)

