const encontrarUsuario = new Promise((resolve, reject) => {

    const usuario = 'Pedro'


    if (usuario === 'Renan') resolve('Usuário encontrado')

    reject('Usuário não encontrado na base de dados')
})


encontrarUsuario.then((dadosDoPromisse) => {
    console.log(dadosDoPromisse) // RETORNA Usuário encontrado
    console.log('-'.repeat(100))
}).catch((err) => {
    console.log('Erro: ' + err) // RETORNA Erro: Usuário não encontrado na base de dados
    console.log('-'.repeat(100))
})


// PROFESSOR UDEMY


function rand(min, max) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max - min) + min)
}

function simulaDelay(mensagem, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tempo > 7000) reject('Timeout [404] ' + `ms: ${tempo}`)

            resolve(mensagem)
        }, tempo)
    })
}

simulaDelay('Entrando na dados na base...', rand(1, 3))
    .then((dadosDeBusca) => {
        console.log(dadosDeBusca)
        return simulaDelay('Buscando o dado informado...', rand(3, 10))
    })
    .then((dadosDeBusca) => {
        console.log(dadosDeBusca)
        return simulaDelay('Autenticando dados...', rand(2, 7))
    })
    .then((dadosDeBusca) => {
        console.log(dadosDeBusca)
        return simulaDelay('Dados encontrados!', rand(3, 5))
    })
    .then((dadosDeBusca) => {
        console.log(dadosDeBusca)
        console.log('-'.repeat(100))
    }).catch((err) => {
        console.log('Erro: ' + err)
        console.log('-'.repeat(100))
    })

