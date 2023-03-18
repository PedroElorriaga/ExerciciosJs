/*
Dados primitivos (São imutaveis) String, number, boolean

Dados de referência (São mutaveis) Array, object, functions
*/ 

let nome = 'Pedro'
nome_2 = nome
console.log(nome, nome_2)

nome = 'Bryan'
console.log(nome, nome_2)



const a = {
    n : 'Carlos',
    middleName : 'Bernadino'
};

const b = {...a} //Ao fazer isso copiamos o valor e não sera alterado caso o valor matriz for mudado, como no exemplo abaixo

a.n = 'Flavia'
console.log(a, b)


