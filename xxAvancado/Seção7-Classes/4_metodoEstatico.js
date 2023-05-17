class Controle {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }


    // METODO DE INSTANCIA
    aumentarVolume() {
        this.volume += 1
        console.log(`${this.tv} aumentou o volume`)
    }

    diminuirVolume() {
        if (this.volume != 0) {
            this.volume -= 1
            console.log(`${this.tv} diminuiu o volume`)
            return
        }

        console.log('Volume 0')
        return
    }


    // METODO ESTÁTICO SERVE PARA SER CHAMADO SEM INSTANCIAR
    static trocarPilha() {
        console.log('Trocando pilha de todasd TV`s')
    }
}

const controleUm = new Controle('Samsung')

controleUm.diminuirVolume()
controleUm.aumentarVolume()

// PARA CHAMAR UM METODO ESTÁTICO DEVEMOS FAZER O SEGUINTE: 

Controle.trocarPilha()