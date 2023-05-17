
// MÉTODO sem ASYNC e AWAIT
// ---- DEIXEI SETADO COM ERRO response.status > 200
fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')
    .then(response => {
        if (response.status > 200) throw new Error('Lançando erro Teste')

        console.log(response) // RETORNA os objetos da API
        return response.body
    }).then(corpoDaAPI => {
        console.warn(corpoDaAPI.tee.name) // ACESSANDO objetos
        console.log('-'.repeat(100))
    })
    .catch(err => {
        console.error(err)
        console.log('-'.repeat(100))
    })





// MÉTODO utilizando ASYNC e AWAIT
async function jsonAPI() {
    try {
        const url = await fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')
        const response = await Response.json(url)
        console.log(response)
    } catch (err) {
        console.error(err)
    }
}
jsonAPI()