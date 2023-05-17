const nomes = ['João', 'Renan', 'Kauan', 'Luana']

// SIMULAR O POP COM O SPLICE
const removerPop = nomes.splice(-1, 1) // ---ESSA VARIAVÉL GUARDA O VALOR REMOVIDO---
console.log(nomes, removerPop)


// A SYNTAX DO SPLICE(INDICE, QNTD DELETE, ELEMENTOS EX: 'Luan', 'Pedrinho')



// QUERO ADICIONAR LUAN NO INDICE 2
//                  -4       -3       -2       -1
//                   0        1        2        3
const nomesDois = ['João', 'Renan', 'Kauan', 'Luana']

nomesDois.splice(2, 0, 'Luan')
console.log(nomesDois)