function numero (x) {
    if (!isNaN(x)){
        console.log('Numero digitado', x)
    } else {
        console.log('Retornou Falso')
        return false
    }

    if (x % 3 === 0 && x % 5 === 0){
        console.log('FizzBuzz')
    } else if (x % 5 === 0){
        console.log('Buzz')
    } else if (x % 3 === 0){
        console.log('Fizz')
    } else {
        console.log(x, 'Não divide')
        return x
    }
}

function range(inicio, fim){
    let r = []
    for (i = inicio; i <= fim; i++){
        r.push(i)
    }
    return r
}

for (i in range(0, 100)){
    numero(i)
    console.log()
}
