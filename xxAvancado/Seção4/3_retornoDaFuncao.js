function criaMultiplicador(multiplicador) {
    return function (numero) {
        console.log(multiplicador)
        return numero * multiplicador
    }
}

const duplica = criaMultiplicador(2)
const quadriplica = criaMultiplicador(4)

console.log('Função duplica ' + duplica(5))
console.log('Função quadriplica ' + quadriplica(20))
