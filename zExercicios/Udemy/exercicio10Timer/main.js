function relogio(start, stop, reset) {
    let resultado = document.querySelector('.timer_zone')

    let segundos = 0;
    let timer

    let start = start()

    function createSeconds(segundos) {
        const data = new Date(segundos * 1000)

        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    function start() {
        clearInterval(timer)
        resultado.style.color = 'black'
        timer = setInterval(function () {
            segundos++
            resultado.innerHTML = createSeconds(segundos)

        }, 1000)

    }

    function stop() {
        clearInterval(timer)
        resultado.style.color = 'red'
    }

    function reset() {
        clearInterval(timer)
        resultado.innerHTML = '00:00:00'
        segundos = 0
        resultado.style.color = 'black'
    }
}
