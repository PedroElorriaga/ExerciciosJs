// OS FUNCTIONS TEM UMA PALAVRA ESPECIAL *ARGUMENTS* QUE SUSTENTA TODOS OS ARGUMENTOS ENVIADOS, EX:

function funcao() {
    let total = 0
    for (let argumento of arguments) {
        console.log(argumento)
        total += argumento
    }
    console.log('O total é -> ' + total)
}

funcao(1, 2, 3, 4, 5)



// REST OPERATOR

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros){
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
    }

    console.log(`Operador ${operador} -> ${acumulador}`)

}

conta('+', 0, 10, 20, 30, 40, 50)
conta('-', 0, 10, 20, 30, 40, 50)

