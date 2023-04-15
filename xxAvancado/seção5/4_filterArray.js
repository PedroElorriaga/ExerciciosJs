// COMO FILTRAR ELEMTNOS DO ARRAY
// SINTAX DO FILTER filter CHAMA UMA FUNÇÃO callback QUE PODE CONTER OS SEGUINTES VALORES callback(valor, indice, array)
// filter(callback)


const lista = [5, 30, 4, 45, 21, 3, 9, 11, 17, 22]

// EXEMPLO DE COMO FUNCIONA A LOGICA DO FILTER

function chamaCallbackFilter(valor) {
    return valor > 10 // RETORNARA UM VALOR BOOLEANO
}

const listaFiltrada = lista.filter(chamaCallbackFilter)// SE FOR VERDADEIRO ELE ADICIONA O ELEMENTO NO ARRAY listaFiltrada
console.log(listaFiltrada)

console.log()




// FORMA SIMPLIFICADA DE EXIBIR O MESMO RESULTADO

const listaSimplesFiltrada = lista.filter((valor) => {
    return valor > 10
})

console.log(listaSimplesFiltrada, 'Lista simples')

console.log()


// EXEMPLOS DE SYNTAX

const listaSyntax = lista.filter((valor, indice, array) => {
    console.log(valor, indice, array)
    return valor
})
