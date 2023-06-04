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
        const retornosDoSwitch = []
        const checkBox = document.querySelector('.chk-content').getElementsByTagName('input')
        for (let i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked) {
                switch (checkBox[i].name) {

                    //TODO CRIAR UMA LÓGICA PARA RETORNAR MAIS DE UMA FUNÇÃO
                    case 'chk-lowcase':
                        retornosDoSwitch.push(this.letraLowcase())
                        continue

                    case 'chk-maiuscula':
                        retornosDoSwitch.push(this.letraUppercase())
                        continue

                    case 'chk-number':
                        retornosDoSwitch.push(this.numerosPassword())
                        continue

                    case 'chk-special':
                        retornosDoSwitch.push(this.specialPassword())
                        continue

                    default:
                        console.log('Nenhum')
                }
            }
        }
        return retornosDoSwitch.join('')
    }

    //TODO FAZER A CRIAÇÃO DAS FUNÇÕES CONFORME O ASCII
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