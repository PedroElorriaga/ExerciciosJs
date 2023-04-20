// RESUMO DO OBJETO

// COMO CRIAR UM OBJETO DINAMICAMENTE
const pessoa = new Object()
pessoa.nome = 'Pedro'
pessoa.sobrenome = 'Elorriaga'

console.log(pessoa) // RETORNA {nome: 'Pedro', sobrenome: 'Elorriaga'}

console.log(pessoa.nome) // RETORNA Pedro

// CRIANDO OBJETOS PARA VARIAS PESSOAS

function ObjetoUniversal(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

console.log('--------------------')
const p1 = new ObjetoUniversal('Carlos', 'Magno')
console.log(p1.nome, p1.sobrenome) // RETORNA Carlos Magno

const p2 = new ObjetoUniversal('Carolina', 'Molina')
p2.sobrenome = 'Ihh Alterei' // ALTERA
console.log(p2) // RETORNA ObjetoUniversal { nome: 'Carolina', sobrenome: 'Ihh Alterei' }
console.log('--------------------')


// COMO TRAVAR O OBEJTO, NÃO DEIXAR COM QUE NADA DENTRO DELE SEJA ALTERADO
function ObjetoInalteravel(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this) // FREEZE NÃO DEIXA ALTERAR O OBJETO
}

const objIna1 = new ObjetoInalteravel('Caio', 'Castro')
console.log(objIna1.nome, objIna1.sobrenome) // RETORNA Caio Castro

const objIna2 = new ObjetoInalteravel('Julia', 'Matos')
objIna2.nome = 'Flavia' // NÃO ALTERA
console.log(objIna2.nome, objIna2.sobrenome) // RETORNA Julia Matos