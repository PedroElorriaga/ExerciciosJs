const nomes = ['Pedro', 'Leonardo', 'Cainã']

const lista = nomes
lista.pop()
console.log(lista)
console.log(nomes)

console.log()
// PERCEBE-SE QUE "NOMES" É AFETADO PELAS MUDANÇAS DA "LISTA"




const nomesDois = ['Pedro', 'Leonardo', 'Cainã']

const listaDois = [...nomesDois]  // SPREAD
listaDois.pop() // EXCLUI O ULTIMO E SHIFT EXCLUI O PRIMEIRO INDICE
console.log(listaDois)
console.log(nomesDois)

console.log()
// AQUI O "NOMESDOIS" NÃO É AFETADO PORQUE CRIAMOS UMA CÓPIA PARA "LISTADOIS", FAZEMOS ISSO COM USO DO SPREAD





const nomesTres = ['Pedro', 'Leonardo', 'Cainã']

nomesTres.push('Renan') // ADICIONA NO FINAL E UNPUSH UNSHIFT ADICIONA NO PRIMEIRO INDICE
console.log(nomesTres)

console.log()
// AQUI ADICIONAMOS UM VALOR NO ULTIMO INDICE DO ARRAY



const nomesQuatro = ['Pedro', 'Leonardo', 'Cainã']
const nomesQuatroNovo = nomesQuatro.slice(0, -1)

console.log(nomesQuatroNovo)

console.log()
// AQUI PODEMOS USAR O SLICE PARA INDICAR EM QUAL INDICE VAI COMEÇAR E EM QUAL VAI TERMINAR
// UTILIZAMOS NUMEROS NEGATIVOS PARA INVERTER OS VALORES E SUBTRAIR UM VALOR DO ARRAY




const nomesCinco = 'Pedro Henrique Elorriaga'
const nomeSeparado = nomesCinco.split(' ') // AQUI PASSAMOS O VALOR QUE VAI SER O DIVISOR 

console.log(nomeSeparado)
// USAMOS PARA SEPARAR OS ELEMENTOS DE UMA STRING EM ARRAYS 