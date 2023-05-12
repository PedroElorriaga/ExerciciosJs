const botaoDoCv = document.querySelector('.btn-cv-a')
const tempoDeExecucao = setInterval(() => {
    botaoDoCv.removeAttribute('hidden')
    botaoDoCv.classList.add('button-delay')
}, 3000)