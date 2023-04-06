// CALLBACK RETORNA UMA ATIVIDADE APÓS A OUTRA SER EXECUTADA

// GERAR NUM ALEATÓRIO
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min

    return Math.floor(num)
}

function func1(callback) {
    setTimeout(() => {
        console.log('func1')
        if (callback) callback()
    }, rand())
}

function func2(callback) {
    setTimeout(() => {
        console.log('func2')
        if (callback) callback()
    }, rand())
}

function func3(callback) {
    setTimeout(function () {
        console.log('func3')
        if (callback) callback()
    }, rand())
}


func1(f1Callback)

function f1Callback() {
    func2(f2Callback)
}

function f2Callback() {
    func3(f3Callback)
}

function f3Callback() {
    console.log('Ultimo comando executado!')
}