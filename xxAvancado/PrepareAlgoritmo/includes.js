/* O método includes determina se um 
Array contém um determinado elemento, 
retornando true ou false */

const arrayIncludes = [1, 2, 3, 4];
console.log(arrayIncludes.includes(2)); // Retorno true


// Outro exemplo com formIndex
const arrayNomes = ['Apple', 'Microsoft', 'Tesla', 'Blackrock'];
/* Verifica se existe um nome Tesla na posição 1 do array */
console.log(arrayIncludes.includes('Tesla', 1)) // Retorno false

console.log(arrayNomes.includes('Blackrock', -1)) // Retorno true