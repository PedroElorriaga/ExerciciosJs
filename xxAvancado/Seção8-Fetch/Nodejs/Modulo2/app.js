const funcao = require('./module')

const pessoaUm = new funcao('Leonardo', 17)
console.log(pessoaUm.verificaSeTemMaisDe18())

const pessoaDois = new funcao('Ana', 22)
console.log(pessoaDois.verificaSeTemMaisDe18())