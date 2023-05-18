const { funcaoDeIncluirNomeNaMensagem } = require('./modulo.js') // DESTROCTURING
const axios = require('axios')

console.log(funcaoDeIncluirNomeNaMensagem('Pedro', 'Executei mano'))
console.log('-'.repeat(100))

// COM AXIOS()
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json') // É como se fosse um fetch()
    .then(response => console.log(response.data)) // Usamos um then() com .data de valor
    .catch(err => console.log(`Erro: ${err}`))

// COM FETCH()
// fetch('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => { return response.json() })
//     .then(arqJson => console.log(arqJson))
//     .catch(err => console.log(`Erro: ${err}`))