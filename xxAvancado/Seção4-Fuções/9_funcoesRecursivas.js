// FUNÇÃO RECURSIVA É UMA FUNÇÃO QUE SE AUTO EXECUTA

function recursiva(max) {
    if (max >= 10) return
    max++
    console.log(max)
    recursiva(max) // AQUI A FUNÇÃO SE AUTO EXECUTA
}

recursiva(0)