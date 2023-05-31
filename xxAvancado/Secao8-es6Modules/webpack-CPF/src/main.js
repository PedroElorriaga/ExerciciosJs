import GeraCPF from './modules/geraCPF'
import './assets/css/style.css';


const botaoGerarCPF = document.querySelector('.gerar-cpf')
const resultado = document.querySelector('.resultado')

botaoGerarCPF.addEventListener('click', (e) => {
    const newCPF = new GeraCPF()
    resultado.value = newCPF.gerarNovoCpf()

})