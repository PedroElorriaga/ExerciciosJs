function horas() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR' ,{
        hours12: false // toLocaleTimeString mostra o horário atual e hours12 false exibe o valor de 24hrs
    })
}

const timer = setInterval(function() {
    console.log(horas())
}, 3000) 