/* O elemento join junta todos os elementos de um array
em uma string e retorna esta string */


const elementos = ['Água', 'Ar', 'Fogo'];
console.log(elementos.join()); // Retorna Água,Ar,Fogo


// Outro exemplo
console.log(elementos.join(' ')); // Retorna Água Ar Fogo


// Outro exemplo com split

const str = 'The quick brown fox jumps over the lazy dog.';
const arraySplit = str.split('');
console.log(arraySplit); /* Retorna [ 'T', 'h', 'e', ' ', 'q', 'u', 'i',
     'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x',
     ' ', 'j', 'u', 'm', 'p', 's', ' ', 'o', 'v', 'e', 'r', ' ',
    't', 'h', 'e', ' ', 'l', 'a', 'z', 'y', ' ', 'd', 'o', 'g', '.' ] */

const juntarTudo = arraySplit.join('');
console.log(juntarTudo); // Retorna The quick brown fox jumps over the lazy dog.