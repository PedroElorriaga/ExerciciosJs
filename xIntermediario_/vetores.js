// Vetores é parecido com lista em python

let vet = [6,2,8,4,3,0]

//vet.push(VALOR) Adiciona no final
//vet.pop() Exclui o ultimo

console.log(vet)
console.log()
/*for(posicao = 0;posicao < vet.length;posicao++){
    console.log(`O valor ${vet[posicao]} está na posição ${posicao}`)
}*/

//For parecido com o do Python
for(let pos in vet){
    console.log(`O valor ${vet[pos]} está na posição ${pos}`)
}