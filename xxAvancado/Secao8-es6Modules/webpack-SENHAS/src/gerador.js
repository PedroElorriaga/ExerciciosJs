import { tamanhoSenha } from "./main"

export default class GeradorDeSenha {
    static rand(min, max) {
        const random = Math.random() * (max - min) + min
        return Math.floor(random)
    }

    static verificarCheckBox() {
        const chkLowcase = document.querySelector('.chk-lowcase')
        const chkUppercase = document.querySelector('.chk-maiuscula')
        const chkNumber = document.querySelector('.chk-number')
        const chkSpecial = document.querySelector('.chk-special')
        const valorMax = tamanhoSenha.value
        
        return this.gerarSenha(valorMax, chkLowcase, chkUppercase, chkNumber, chkSpecial)
    }

    static gerarSenha(qtd, letraMinuscula, letraMaiuscula, numeros, specials) {
        const retornoPassword = []

        for (let i = 0; i < qtd; i++) {
            letraMinuscula.checked && retornoPassword.push(this.letraLowcase())
            letraMaiuscula.checked && retornoPassword.push(this.letraUppercase())
            numeros.checked && retornoPassword.push(this.numerosPassword())
            specials.checked && retornoPassword.push(this.specialPassword())
        }

        return retornoPassword.join('').slice(0, qtd)
    }

    // FUNÇÕES CONFORME O ASCII
    static letraLowcase() {
        return (String.fromCharCode(this.rand(97, 122)))
    }

    static letraUppercase() {
        return (String.fromCharCode(this.rand(65, 90)))
    }

    static numerosPassword() {
        return (String.fromCharCode(this.rand(48, 57)))
    }

    static specialPassword() {
        return (String.fromCharCode(this.rand(33, 47)))
    }
}