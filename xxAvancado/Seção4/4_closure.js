/* CLOSURE É QUANDO UMA FUNÇÃO "LEMBRA"
SEU ESCOPO LÉXICO, MESMO QUANDO A 
FUNÇÃO É EXECUTADA FORA DESSE ESCOPO LÉXICO */


let x = 10

function foraEscopo() {

    function closure() {
        return x + 5
    }

    return closure

}

const executarFuncoes = foraEscopo()
console.log(executarFuncoes())

console.log()

let y = 5

function foraEscopoDois() {

    let y = 100 // VAI LEMBRAR DESTE ESCOPO
    
    function closureDois() {
        return y + 5
    }

    return closureDois

}

const executarTesteDois = foraEscopoDois()
console.log(executarTesteDois())