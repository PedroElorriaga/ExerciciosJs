const _volume = Symbol('volume')
class Controle {
    constructor(tv) {
        this.tv = tv
        this[_volume] = 0
    }

    set volume(valor) {
        this[_volume] = valor
    }

    get volume() {
        return this[_volume]
    }

    // METODO DE INSTANCIA
    aumentarVolume() {
        if (this[_volume] < 100) {
            this[_volume] += 1
            console.log(`${this.tv} aumentou o volume`)
            return
        }
        console.log('O volume ja está no máximo')
    }

    diminuirVolume() {
        if (this[_volume] != 0) {
            this[_volume] -= 1
            console.log(`${this.tv} diminuiu o volume`)
            return
        }
        console.log('O volume ja está mutado')
    }


    // METODO ESTÁTICO SERVE PARA SER CHAMADO SEM INSTANCIAR
    static trocarPilha() {
        console.log('Trocando pilha de toda as TV`s')
    }
}

const controleUm = new Controle('Samsung')

controleUm.diminuirVolume()
controleUm.aumentarVolume()
controleUm.aumentarVolume()
controleUm.aumentarVolume()
console.log(controleUm.volume)
controleUm.diminuirVolume()
console.log(controleUm.volume)

controleUm.volume = 100
console.log(controleUm.volume)
controleUm.aumentarVolume()

// PARA CHAMAR UM METODO ESTÁTICO DEVEMOS FAZER O SEGUINTE: 
Controle.trocarPilha()