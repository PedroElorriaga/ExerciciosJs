


// VALIDADOR DE CPF 


const usuarioInformandoCpf = '519.274.728-73'

function removerCaracteresNaoNumericos(cpfDoUsuario) {
    // ESSA EXPRESSÃO REGULAR VERIFICA O QUE NÃO FOR NUMERO ELE SUBSTITUI POR NADA (/\D/g)
    const cpfLimpo = cpfDoUsuario.replace(/\D/g, '')
    return cpfLimpo
}

function gerarPrimeiroDigitoCpf(cpfApenasNumericosSemDigito) {
    let arrayGeradoParaCpf = []
    // COLOCA O VALOR PASSADO -> ARRAY.FROM(VALOR) EM UM ARRAY
    arrayGeradoParaCpf = Array.from(cpfApenasNumericosSemDigito)

    let regressivoParaMultiplicar = arrayGeradoParaCpf.length + 1
    const resultadoDaContaRegressiva = arrayGeradoParaCpf.reduce((acumulador, valorAtual) => {
        console.log(regressivoParaMultiplicar)
        regressivoParaMultiplicar--
    }, 0)
}

function removerDigitosParaValidacao(cpfApenasNumericos) {
    let arrayGeradoParaRemoverDigitos = []
    arrayGeradoParaRemoverDigitos = Array.from(cpfApenasNumericos)
    arrayGeradoParaRemoverDigitos.splice(-2, 2)

    return arrayGeradoParaRemoverDigitos.join('')
}

const cpfApenasNumericos = removerCaracteresNaoNumericos(usuarioInformandoCpf)

const cpfApenasNumericosSemDigito = removerDigitosParaValidacao(cpfApenasNumericos)

const teste = gerarPrimeiroDigitoCpf(cpfApenasNumericosSemDigito)

