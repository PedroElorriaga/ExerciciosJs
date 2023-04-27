


// VALIDADOR DE CPF 


const usuarioInformandoCpf = '519.274.728-73'

function removerCaracteresNaoNumericos(cpfDoUsuario) {
    // ESSA EXPRESSÃO REGULAR VERIFICA O QUE NÃO FOR NUMERO ELE SUBSTITUI POR NADA (/\D/g)
    const cpfLimpo = cpfDoUsuario.replace(/\D/g, '')
    return cpfLimpo
}

function removerDigitosParaValidacao(cpfApenasNumericos) {
    let arrayGeradoParaRemoverDigitos = []
    arrayGeradoParaRemoverDigitos = Array.from(cpfApenasNumericos)
    arrayGeradoParaRemoverDigitos.splice(-2, 2)

    return arrayGeradoParaRemoverDigitos.join('')
}

function gerarPrimeiroDigitoCpf(cpfApenasNumericosSemDigito) {
    let arrayGeradoParaCpf = []
    // COLOCA O VALOR PASSADO -> ARRAY.FROM(VALOR) EM UM ARRAY
    arrayGeradoParaCpf = Array.from(cpfApenasNumericosSemDigito)

    let regressivoParaMultiplicar = arrayGeradoParaCpf.length + 1 // VALOR 10
    const resultadoDaContaRegressiva = arrayGeradoParaCpf.reduce((acumulador, valorAtual) => {
        acumulador += Number(valorAtual) * regressivoParaMultiplicar
        regressivoParaMultiplicar--
        return acumulador
    }, 0)
    return formulaParaPrimeiroDigito(resultadoDaContaRegressiva)
}

function formulaParaPrimeiroDigito(resultadoDaContaRegressiva) {
    let operacaoDigitoUm = 11 - (resultadoDaContaRegressiva % 11)

    if (operacaoDigitoUm > 9) operacaoDigitoUm = 0

    return cpfApenasNumericosSemDigito + operacaoDigitoUm
}

function gerarSegundoDigitoCpf(primeiroDigitoGerado) {
    let arrayGeradoParaCpf = []
    arrayGeradoParaCpf = Array.from(primeiroDigitoGerado)

    let regressivoParaMultiplicar = arrayGeradoParaCpf.length + 1
    const resultadoDaContaRegressiva = arrayGeradoParaCpf.reduce((acumulador, valorAtual) => {
        acumulador += Number(valorAtual) * regressivoParaMultiplicar
        regressivoParaMultiplicar--
        return acumulador
    }, 0)
    return formulaParaSegundodigito(resultadoDaContaRegressiva)
}

function formulaParaSegundodigito(resultadoDaContaRegressiva) {
    let operacaoDigitoDois = 11 - (resultadoDaContaRegressiva % 11)

    if (operacaoDigitoDois > 9) operacaoDigitoDois = 0

    return primeiroDigitoGerado + operacaoDigitoDois
}

function validadorDeCpf(cpfValidado) {
    if (cpfApenasNumericos === cpfValidado) {
        return `CPF: ${usuarioInformandoCpf} validado com sucesso!`
    } else {
        return `CPF: ${usuarioInformandoCpf} inválido, ajustando para ${cpfValidado}`
    }
}

const cpfApenasNumericos = removerCaracteresNaoNumericos(usuarioInformandoCpf)

const cpfApenasNumericosSemDigito = removerDigitosParaValidacao(cpfApenasNumericos)

const primeiroDigitoGerado = gerarPrimeiroDigitoCpf(cpfApenasNumericosSemDigito)

const cpfValidado = gerarSegundoDigitoCpf(primeiroDigitoGerado)

const validarCpf = validadorDeCpf(cpfValidado)
console.log(validarCpf)

