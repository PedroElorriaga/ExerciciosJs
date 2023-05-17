const valores = [10, 30, 2, 3, 6, 7, 8, 11, 35]

valores.forEach((valor) => {
    console.log(valor)
})

console.log('---------------------')

// COPIANDO O REDUCE
const valoresDois = [10, 30, 2, 3, 6, 7, 8, 11, 35]

let recebeValores = 0

valoresDois.forEach((valor) => {
    recebeValores += valor
})
console.log(recebeValores)