// MAP UTILIZA TODO O ARRAY, DIFERENTE DE FILTER EM QUE CONSEGUIMOS REDUZIR ELE

const pessoas =[
    {   nome: 'Kauan', idade: 21    },
    {   nome: 'Renan', idade: 22    },
    {   nome: 'Leonardo', idade: 15    },
    {   nome: 'Eduarda', idade: 16   },
    {   nome: 'Thais', idade: 27   },
    {   nome: 'Luan', idade: 23   }
]

// A SINTAX DO MAP É IGUAL A DO FILTER

// EXIBINDO APENAS O NOME
const onlyNome = pessoas.map((obj) => {
    return obj.nome
})
console.log(onlyNome)

console.log()
// EXIBINDO SOMENTE CHAVE IDADE E O VALOR DELA
const keyIdade = pessoas.map((obj) => {
    delete obj.nome
    return obj
})

console.log(keyIdade)


// COMO NÃO ALTERAR O OBJETO ORIGINAL
console.log()
const copia = pessoas.map((obj, indice) => {
    const objNew = {...obj}
    objNew.id = indice
    return objNew
})

console.log(copia)
console.log(pessoas)