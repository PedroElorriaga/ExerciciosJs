let num = 10.50

console.log(`Numero arredondado`, Math.round(num)) // Round arredonda o numero

const aleatorio = Math.round(Math.random() * (10 - 1)) // Numeros aleatorio arredondados utilizando random
console.log(`Numero aleatório`, aleatorio)


console.log()
// Formas de pegar o valor Min e Max de um array

let lista = [70,23,67,456,212,87,32,56,123,864,326,23,9,53,21]

console.log(`Menor numero da lista`, Math.min(...lista))
console.log(`Maior numero da lista`, Math.max(...lista))