let players = [
    {id: 1, nome: 'Pedro'},
    {id: 2, nome: 'Renan'},
    {id: 3, nome: 'Kauan'},
    {id: 4, nome: 'Leonardo'}
]
// O metodo forEach ele busca pelo nome da chave informada todos os valores nela

// Método sem Arrow Function

let valoresNomes = []

players.forEach(function (item){
    valoresNomes.push(item.nome)
});

console.log(valoresNomes)



// Método com Arrow function
let nomesValores = players.map(item => item.nome) // Map percorre todos os itens do array e => é igual a Return em arrow functions

 console.log(nomesValores)