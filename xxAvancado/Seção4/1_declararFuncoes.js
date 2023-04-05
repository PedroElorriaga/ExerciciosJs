// FUNÇÃO HOISTING

funcaoHoisting()
function funcaoHoisting() {
    console.log('Função 1')
}


// FUNÇÃO EXPRESSION

const funcaoExpression = function() {
    console.log('Função expression')
}


// FUNÇÃO QUE EXECUTA OUTRA FUNÇÃO

function funcaoExecOutraFunc(funcao) {
    console.log('Vou executar a função acima')
    funcao()
}
funcaoExecOutraFunc(funcaoExpression)


// ARROW FUNCTION 

const funcaoArrow = () => {
    console.log('Arrow Function')
}
funcaoArrow()


// FUNÇÃO DENTRO DE UM OBJETO

const objeto = {
    falar(){
        console.log('Estou falando...')
    },

    deitar(){
        console.log('Estou deitando...')
    }
}

objeto.deitar()