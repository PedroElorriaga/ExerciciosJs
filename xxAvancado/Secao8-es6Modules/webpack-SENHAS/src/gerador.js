import { tamanhoSenha } from "./main"

export default class GeradorDeSenha {
    static rand(min, max) {
        const random = Math.random() * (max - min) + min
        return Math.floor(random)
    }

    static tamanhoDaSenha() {
        console.log(tamanhoSenha.value)
    }

    static verificarCheckBox() {
        const checkBox = document.querySelector('.chk-content').getElementsByTagName('input')
        for (let i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked) {
                switch (checkBox[i].name) {

                    //TODO CRIAR UMA LÓGICA PARA RETORNAR MAIS DE UMA FUNÇÃO
                    case 'chk-lowcase':
                        this.tamanhoDaSenha()
                        this.letraLowcase()
                        continue

                    case 'chk-maiuscula':
                        this.letraUppercase()
                        continue

                    case 'chk-number':
                        this.numerosPassword()
                        continue

                    case 'chk-special':
                        this.specialPassword()
                        continue

                    default:
                        console.log('Nenhum')
                }
            }
        }
    }

    //TODO FAZER A CRIAÇÃO DAS FUNÇÕES CONFORME O ASCII
    static letraLowcase() {
        return (String.fromCharCode(this.rand(97, 122)))
    }

    static letraUppercase() {
        return (String.fromCharCode(this.rand(65, 90)))
    }

    static numerosPassword() {
        return (String.fromCharCode(this.rand(30, 39)))
    }

    static specialPassword() {
        return (String.fromCharCode(this.rand(33, 47)))
    }
}