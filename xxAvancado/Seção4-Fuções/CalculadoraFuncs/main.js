function iniciaCalculadora() {

    return {
        display: document.querySelector('.display'),




        inicia() {
            this.getButtons() // ESSE THIS É O OBEJTO startCalculadora
            this.display.focus()
        },

        getButtons() {
            document.addEventListener('click', (e) => {
                // console.log(e) PARA VER OS PARAMETROS
                const el = e.target

                if (el.classList.contains('btn-num')) {
                    this.adicionarNumberDisplay(el.innerText) // ESSE THIS PASSA A SER O DOCUMENT SE MINHA FUNÇÃO NÃO FOSSE ARROW
                }

                if (el.classList.contains('btn-clear')) {
                    this.botaoLimpar()
                }

                if (el.classList.contains('btn-pop')) {
                    this.botaoLimparPop(this.display.value)
                }

                if (el.classList.contains('btn-eq')) {
                    this.fazerConta()
                }
            })

            this.display.addEventListener('keypress', (e) => {
                if (e.keyCode === 13) { 
                    this.fazerConta()
                }
            })
        },

        adicionarNumberDisplay(valor) {
            this.display.value += valor
        },

        botaoLimpar() {
            this.display.value = ''
        },

        botaoLimparPop(valor) {
            const remDisplay = valor.slice(0, -1)
            this.display.value = remDisplay
        },

        fazerConta() {
            // let operador = this.display.value

            // if (operador.includes('+')) {
            //     operador = operador.split('+')

            //     let soma = 0
            //     for (let chave in operador) {
            //         let inteiro = Number(operador[chave])
            //         soma += inteiro
            //     }
            //     this.display.value = soma
            // }


            // FORMA MAIS SIMPLIFICADA
            let operacao = this.display.value

            try {
                operacao = eval(operacao) // EVAL É UTILIZADO PARA O JAVASCRIPT FAZER AS FUÇÕES SOZINHO

                if (!operacao) {
                    alert('Conta invalida!')
                    this.botaoLimpar()
                    return
                }

                this.display.value = operacao
            } catch (e) {
                window.alert('Conta invalida!')
                this.botaoLimpar()
            }

        }
    }
}

const startCalculadora = iniciaCalculadora()
startCalculadora.inicia()