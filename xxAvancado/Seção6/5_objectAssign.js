// OBJECT.ASSIGN FUNCIONA COMO UM SPREAD


const objetoLiteral = {
    produto: 'Nome do produto',
    valor: 'Valor do produto'
}
console.log(objetoLiteral) // RETORNA { produto: 'Nome do produto', valor: 'Valor do produto' }

const produtoCopiadoSpread = { ...objetoLiteral }
produtoCopiadoSpread.produto = 'Camisa Corinthians'
produtoCopiadoSpread.valor = 300
console.log(produtoCopiadoSpread) // RETORNA { produto: 'Camisa Corinthians', valor: 300 }

console.log('-'.repeat(100))



// SINTAX DO ASSIGN(TARGET, NOME DA VARIAVEL, {OPCIONAL CRIAR OBJETOS})



const objetoAssign = {
    nome: 'Nome cliente',
    id: 'Id cliente'
}
console.log(objetoAssign) // RETORNA { nome: 'Nome cliente', id: 'Id cliente' }

const clienteCopiadoAssign = Object.assign({}, objetoAssign, { idade: 'Idade cliente' })
clienteCopiadoAssign.nome = 'Pedro Elorriaga'
clienteCopiadoAssign.id = 1
clienteCopiadoAssign.idade = 21
console.log(clienteCopiadoAssign) // RETORNA { nome: 'Pedro Elorriaga', id: 1, idade: 21 }
