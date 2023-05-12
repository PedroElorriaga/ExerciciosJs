function horas() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hours12: false // toLocaleTimeString mostra o horário atual e hours12 false exibe o valor de 24hrs
    })
}

//        setInterval executa após um tempo
const timer = setInterval(() => {
    console.log(horas())               // Esse bloco se chama Função anônima
}, 3000)

