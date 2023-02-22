const nome = 'Pedro Elorriaga'
const idade = 21
const peso = 71
const altura = 1.75
let imc = peso / (altura **2)
const data = new Date()
const anoAtual = data.getFullYear()
let anoNascimento = anoAtual - idade

console.log(`Paciente: ${nome}, idade: ${idade} anos, nascido em ${anoNascimento}, tem o IMC de ${imc}`)