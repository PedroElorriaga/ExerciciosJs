/* O método reduce executa uma função reducer para cada 
elemento do array, resultuando em um único valor de retorno */

const arrayIncludes = [1, 2, 4, 8, 16];

const arrayReduce = arrayIncludes.reduce((acc, cur) => acc + cur);
console.log(arrayReduce); // Retorna 31 ** 1 + 2 + 4 + 8 + 16