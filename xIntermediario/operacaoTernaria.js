// condição ? 'valor verdadeiro' : 'Valor falso';

let pontuacao = 890

let tipoCliente = pontuacao >= 1000 ? 'Cliente VIP' : 'Cliente bronze'

console.log(tipoCliente)


console.log()


// Set de valor padrão Fall Back

let corUsuario = null

let corPadrao = corUsuario || 'preto'

console.log(corPadrao)