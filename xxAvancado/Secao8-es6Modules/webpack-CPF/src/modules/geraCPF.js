import ValidaCPF from './validaCPF'


export default class GeraCPF {
    rand(min = 100000000, max = 999999999) {
        const num = Math.random() * (max - min) + min
        return String(Math.floor(num))
    }

    gerarNovoCpf() {
        const numeroAleatiorio = this.rand()
        const gerarDigitos = String(ValidaCPF.gerarPrimeiroDigito(numeroAleatiorio))
        return this.cpfFormatado(gerarDigitos)
    }

    cpfFormatado(valor) {
        return (valor.slice(0, 3) + '.' + valor.slice(3, 6) + '.' + valor.slice(6, 9) + '-' + valor.slice(9, 11))
    }
}