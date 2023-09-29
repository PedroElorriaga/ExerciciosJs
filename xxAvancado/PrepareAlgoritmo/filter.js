/* O método filter cria um novo array com todos os elementos
que passaram no teste implementado pela função fornecida */

const nomes = ['Apple', 'Microsoft', 'Google', 'Pinterest', 'Amazon'];
const resultadoDeFiltro = nomes.filter((nome) => nome.length > 6);

console.log(resultadoDeFiltro); // Retorna [ 'Microsoft', 'Pinterest' ]


// Outro exemplo
const menorQueQuatro = (valor) => {
    return valor.length <= 5;
};

const resultadoFiltrado = nomes.filter(menorQueQuatro); // Faz o callback usando a função menorQueQuatro
console.log(resultadoFiltrado); // Retorna [ 'Apple' ]
