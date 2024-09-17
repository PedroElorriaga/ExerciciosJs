const _velocidade = Symbol('velocidade') // Propriedade Privada     Symbol é tipo uma descrição mas sendo um Symbol único
class Carro {
    constructor(modelo) {
        this.modelo = modelo
        this[_velocidade] = 0
    }

    set velocidade(valor) {
        this[_velocidade] = valor
    }

    get velocidade() {
        return this[_velocidade]
    }
}

const mercedes = new Carro('Mercedes')

mercedes.velocidade = 20
console.log(mercedes.velocidade)