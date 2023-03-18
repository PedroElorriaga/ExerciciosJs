const pessoa = {
    nome: 'Pedro',
    Sobrenome: 'Elorriaga',
    idade: 20
}

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}

// For clássico - é usado com iteraveis (arrays ou strings)
// For in - é usado para retornar índice ou chave (string, array ou objetos)
// For of - retorna o valor (iteráveis, arrays ou strings)