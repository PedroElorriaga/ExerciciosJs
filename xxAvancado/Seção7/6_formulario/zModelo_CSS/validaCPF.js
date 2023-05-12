class ValidadorDeCpf {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfDoUsuarioLimpo', {
            value: cpf.replace(/\D/g, ''),
            enumerable: true
        })

        Object.defineProperty(this, 'consultaFinal', {
            value: false,
            enumerable: true,
            writable: true
        })
    }

    validaCPF(valor = null) {
        if (!this.consultaFinal) {
            if (!this.cpfDoUsuarioLimpo) return false
            if (this.cpfDoUsuarioLimpo.length !== 11) return false

            return this.removerDigitos()
        }

        if (valor !== this.cpfDoUsuarioLimpo) {
            return false
        }

        return true
    }

    removerDigitos() {
        const cpfSemDigitos = this.cpfDoUsuarioLimpo.slice(0, 9)

        return this.gerarPrimeiroDigito(cpfSemDigitos)
    }

    gerarPrimeiroDigito(valor) {
        let indiceDoValor = 0
        let valorAcumulado = 0
        for (let i = 10; i >= 2; i--) {
            valorAcumulado += (i * valor[indiceDoValor])
            indiceDoValor++
        }

        let primeiroDigito = 11 - (valorAcumulado % 11)
        if (primeiroDigito > 9) return primeiroDigito = 0

        valor += primeiroDigito
        return this.gerarSegundoDigito(valor)
    }

    gerarSegundoDigito(valor) {
        let indiceDoValor = 0
        let valorAcumulado = 0
        for (let i = 11; i >= 2; i--) {
            valorAcumulado += (i * valor[indiceDoValor])
            indiceDoValor++
        }

        let segundoDigito = 11 - (valorAcumulado % 11)
        if (segundoDigito > 9) return segundoDigito = 0

        valor += segundoDigito
        this.consultaFinal = true
        return this.validaCPF(valor)
    }
}
