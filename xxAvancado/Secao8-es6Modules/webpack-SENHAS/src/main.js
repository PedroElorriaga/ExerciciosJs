import './assets/css/style.css'
import GeradorDeSenha from './gerador.js'


const resultado = document.querySelector('.inp-resultado')
const gerarSenha = document.getElementsByTagName('button')[0]


let teste = []
gerarSenha.addEventListener('click', () => {
    const gera = GeradorDeSenha.verificarCheckBox()
    teste.push(gera)

    resultado.value = teste.join('')
    //AGUARDAR IMPLEMENTAÇÃO DE LÓGICA DE RETORNO
})


