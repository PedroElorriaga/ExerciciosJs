// RETORNE A SOMA DO DOBRO DE TODOS OS PARES

const valores = [10, 30, 2, 3, 6, 7, 8, 11, 35]


const encadeamento = valores.filter((obj) => {
    return obj % 2 === 0
}).map((obj) => {
    return obj * 2
}).reduce((preValue, currentValue) => {
    return preValue + currentValue
}, 0)

console.log(encadeamento)

// AQUI USAMOS OS 3 ELEMENTOS JUNTOS