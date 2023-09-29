/* O método idexOf retorna o primeiro indice em que o elemento
pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente */

const empresas = ['Accenture', 'Apple', 'Microsoft', 'Google', 'Amazon', 'Apple'];

console.log(empresas.indexOf('Accenture')); // Retorna 0 ** é o index onde o accenture está **


// Outro exemplo
console.log(empresas.indexOf('Apple')); // Retorna 1 ** Temos dois valores com Apple, mas lembrando que ele retorna o primeiro index **


// Outro exemplo
console.log(empresas.indexOf('Apple', 2)) // Retorna 5 ** o parâmetro adicional é a partir de qual index se inicia a busca pelo valor **


// Outro exemplo
console.log(empresas.indexOf('LDU')) // Retorna -1 