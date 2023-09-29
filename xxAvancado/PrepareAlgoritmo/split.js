/* O método split divide uma string em uma lista ordenada de substring,
coloca essas substrings em um array e o retorna em no array. A divisão
é feita procurando um padrão, onde o padrão é fornecido como o primeiro
parâmetro na chamada do método */

const str = 'The quick brown fox jumps over the lazy dog.';
const palavras = str.split(' '); // O padrão da divisão é um espaço
console.log(palavras[2]) // Retorna brown


// Outro exemplo
const letras = str.split(''); // O padrão da divisão é todos elementos
console.log(letras[4]) // Retorna q


// Outro exemplo 
const strCopia = str.split(); // O padrão da divisão e juntar tudo em um array
console.log(strCopia) // Retorna [ 'The quick brown fox jumps over the lazy dog.' ]
