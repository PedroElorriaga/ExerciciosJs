// REDUCE TENTA COLOCAR TODO VALOR DO ARRAY EU UM UNICO INDICE
// SINTAX DO REDUCE(ACUMULADOR, VALOR, INDICE, ARRAY)

const valores = [10, 30, 2, 3, 6, 7, 8, 11, 35]

const totalValores = valores.reduce((acumulador, valor) => {
    acumulador += valor // ACUMULADOR ESTÁ IGUAL A 0
    return acumulador
}, 0) // 0 É O VALOR INICIAL DO ACUMULADOR

console.log(totalValores)


console.log()


// RETORNE SOMENTE NUMEROS PARES
const pares = valores.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])

console.log(pares)

console.log()


// RETORNE OS VALORES DOBRADOS
const dobrado = valores.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador
}, [])

console.log(dobrado)


// RETORNE A PESSOA MAIS VELHA
const pessoas = [
    { nome: 'Kauan', idade: 21 },
    { nome: 'Renan', idade: 22 },
    { nome: 'Leonardo', idade: 15 },
    { nome: 'Eduarda', idade: 16 },
    { nome: 'Thais', idade: 27 },
    { nome: 'Luan', idade: 23 }
]

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador
    return valor 
})

console.log(maisVelha)
console.log()


// ENTENDENDO 
const entendendoReduce = pessoas.reduce((acumulador, valor) => {
    return `${acumulador.idade} ${valor.nome}`
})

console.log(entendendoReduce)