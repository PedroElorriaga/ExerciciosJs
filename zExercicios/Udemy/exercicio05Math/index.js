let numero = Number(window.prompt(`Digite um número: `))
console.log(numero, typeof numero)// Teste

let res = document.getElementById('resultado')
res.append(numero)

let raizQdr = Math.sqrt(numero)
let verificaNumeroInt = Number.isInteger(numero)
let verificaNotNumber = Number.isNaN(numero)
let floorNumber = Math.floor(numero)
let ceilNumber = Math.ceil(numero)
let casaDecimais = numero.toFixed(2)
console.log(raizQdr, verificaNumeroInt, verificaNotNumber, floorNumber, ceilNumber, casaDecimais)// Teste

let resDin = document.getElementById('resDinamico')
resDin.innerHTML = `<p>Raiz quadrada: <b>${raizQdr}</b></p>
<p>${numero} é inteiro: <b>${verificaNumeroInt}</b></p>
<p>É NaN: <b>${verificaNotNumber}</b></p>
<p>Round pra baixo: <b>${floorNumber}</b></p>
<p>Round pra cima: <b>${ceilNumber}</b></p>
<p>Com duas casas decimais: <b>${casaDecimais}</b></p>`

