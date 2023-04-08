function iniciaCalculadora() {

    return {
        display: document.querySelector('.display'),




        inicia() {
            this.getButtons() // ESSE THIS É O OBEJTO startCalculadora
        },

        getButtons() {
            document.addEventListener('click', (e) => {
                const el  = e.target
                
                if (el.classList.contains('btn-num')){
                    this.adicionarNumberDisplay(el.innerText) // ESSE THIS PASSA A SER O DOCUMENT SE MINHA FUNÇÃO NÃO FOSSE ARROW
                }

                if (el.classList.contains('btn-clear')){
                    this.botaoLimpar()
                } 

                if (el.classList.contains('btn-pop')){
                    this.botaoLimparPop(this.display.value)
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
        }
    }
}

const startCalculadora = iniciaCalculadora()
startCalculadora.inicia()