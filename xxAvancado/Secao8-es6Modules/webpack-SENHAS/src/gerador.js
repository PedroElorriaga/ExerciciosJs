export default class GeradorDeSenha {
    static rand(min, max) {
        const random = Math.random() * (max - min) + min
        return Math.floor(random)
    }

    static verificarCheckBox() {
        const checkBox = document.querySelector('.chk-content').getElementsByTagName('input')
        for (let i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked) {
                switch (checkBox[i].name) {

                    //TODO CRIAR UMA LÓGICA PARA RETORNAR MAIS DE UMA FUNÇÃO
                    case 'chk-lowcase':
                        return this.letraLowcase()

                    case 'chk-maiuscula':
                        this.letraUppercase()
                        break

                    case 'chk-number':
                        this.numerosPassword()
                        break

                    case 'chk-special':
                        this.specialPassword()
                        break

                    default:
                        console.log('Nenhum')
                        break
                }
            }
        }
    }

    //TODO FAZER A CRIAÇÃO DAS FUNÇÕES CONFORME O ASCII

    static letraLowcase() {
        return (String.fromCharCode(this.rand(65, 90))) 
    }

    static letraUppercase() {
        console.log('letraUppercase')
    }

    static numerosPassword() {
        console.log('numerosPassword')
    }

    static specialPassword() {
        console.log('specialPassword')
    }
}