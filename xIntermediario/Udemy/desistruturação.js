const lista = [10,20,30,40,50]

const [...resto] = lista

//... isso é utilizado para exibir o resto, por isso é conhecido como rest ou spread
console.log(resto)

console.log()

const [primeiro_valor, ,terceiro_valor,...resto_ex2] = lista

console.log(primeiro_valor, terceiro_valor, ...resto_ex2) // Percebe que aqui pulamos o segundo valor apenas deixando um espaço