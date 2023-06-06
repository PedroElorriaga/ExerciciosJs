import './assets/css/style.css'
import GeradorDeSenha from './gerador.js'

export const tamanhoSenha = document.getElementById('chk-quantidade')
tamanhoSenha.value = 6
const resultado = document.querySelector('.inp-resultado')
const gerarSenha = document.getElementsByTagName('button')[0]

let arrayDeCaracteres = []
gerarSenha.addEventListener('click', () => {
    const gera = GeradorDeSenha.verificarCheckBox()
    arrayDeCaracteres.push(gera)
    
    resultado.value = arrayDeCaracteres.join('')
    //AGUARDAR IMPLEMENTAÇÃO DE LÓGICA DE RETORNO
})


