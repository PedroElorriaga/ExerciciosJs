const formulario = document.querySelector('.formulario')
const resultado = document.querySelector('.resposta')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    resultado.innerHTML = ''
    // resultado.innerHTML = `Música: ${formulario.getElementsByTagName('input')[1].value}`
    console.log(formulario.getElementsByTagName('input')[0].value)
    apiVagalume(formulario.getElementsByTagName('input')[0].value, formulario.getElementsByTagName('input')[1].value)
})

function apiVagalume(artista, musica) {
    fetch(`https://api.vagalume.com.br/search.php?art=${artista}&mus=${musica}&apikey={9b99ab45677fb702b33f1b76d620e5ba}`)
        .then(res => res.json())
        .then(data => {
            resultado.innerHTML = data.mus[0].text
        })
}
