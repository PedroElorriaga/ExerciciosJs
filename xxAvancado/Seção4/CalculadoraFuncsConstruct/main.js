function Calculadora() {
    this.display = document.querySelector('.display')

    this.iniciaCalculadora = () => {
        pegarBotoes()
        this.display.focus()
    }

    const pegarBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target

            if (el.classList.contains('btn-num')) {
                mostrarNoDisplay(el.innerText)
            }

            if (el.classList.contains('btn-clear')) {
                limparInput()
            }

            if (el.classList.contains('btn-pop')) {
                limparUltimo()
            }

            if (el.classList.contains('btn-eq')) {
                fazConta()
            }
        })

        this.display.addEventListener('keypress', (e) => {
            if (e.keyCode === 13) {
                fazConta()
            }
        })
    }

    const mostrarNoDisplay = (valor) => {
        this.display.value += valor
    }

    const limparInput = () => {
        this.display.value = ''
    }

    const limparUltimo = () => {
        const remover = this.display.value.slice(0, -1)
        this.display.value = remover
    }

    const fazConta = () => {
        const operacao = this.display.value

        try {
            this.display.value = eval(operacao)
        } catch (e) {
            alert('CONTA INVÁLIDA')
            limparInput() 
        }       
    }
}

const calculadoraStart = new Calculadora()
calculadoraStart.iniciaCalculadora()
