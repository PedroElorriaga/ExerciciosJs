//let timer = document.querySelector('.timer_zone')

let data = new Date()

let horas = data.toLocaleTimeString('pt-BR', {
    hours12: false
})

const timer = setInterval(function (){
    console.log(horas * 1000)
}, 1000)
8
function start(){
    

}
