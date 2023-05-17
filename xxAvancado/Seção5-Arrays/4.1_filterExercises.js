const pessoas =[
    {   nome: 'Kauan', idade: 21    },
    {   nome: 'Renan', idade: 22    },
    {   nome: 'Leonardo', idade: 15    },
    {   nome: 'Eduarda', idade: 16   },
    {   nome: 'Taina', idade: 27   },
    {   nome: 'Luan', idade: 23   }
]

const pessoasFiltradasNome = pessoas.filter((obj) => {
    return obj.idade >= 18
})
console.log(pessoasFiltradasNome)



// EXIBIR SOMENTE NOMES QUE TERMINAM COM A

const pessoasFilterEndsA = pessoas.filter((obj) => {
    return obj.nome.toLowerCase().endsWith('a') // toLowerCase() DEIXA TODA A STRING EM MINUSCULO 
    //  E endsWith('a') PEGA SOMENTE OS VALORES QUE TERMINAM COM A LETRA a
})
console.log(pessoasFilterEndsA)

