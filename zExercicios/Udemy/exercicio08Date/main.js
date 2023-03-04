const data = new Date()

const resultado = document.querySelector('.resultado')

let semana = data.getDay()
let dia = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()
let hora = data.getHours()
let minuto = data.getMinutes()

console.log(mes)

switch (semana) {
    case 0:
        semana = 'Domingo'
        break

    case 1:
        semana = 'Segunda-feira'
        break

    case 2:
        semana = 'Terça-feira'
        break
    
    case 3:
        semana = 'Quarta-feira'
        break

    case 4:
        semana = 'Quinta-feira'
        break

    case 5:
        semana = 'Sexta-feira'
        break

    case 6:
        semana = 'Sabádo'
        break

    default:
        semana = 'Dia inválido'
        break
}

switch (mes) {
    case 0:
        mes = 'janeiro'
        break
    
    case 1:
            mes = 'fevereiro'
            break

    case 2:
        mes = 'março'
        break

    case 3:
        mes = 'abril'
        break

    case 4:
        mes = 'maio'
        break

    case 5:
        mes = 'junho'
        break

    case 6:
        mes = 'julho'
        break

    case 7:
        mes = 'agosto'
        break

    case 8:
        mes = 'setembro'
        break

    case 9:
        mes = 'outubro'
        break

    case 10:
        mes = 'novembro'
        break

    case 11:
        mes = 'dezembro'
        break


}

resultado.innerHTML = `${semana}, ${dia} de ${mes} de ${ano} ${hora >= 10 ? hora : `0${hora}`}:${minuto >= 10 ? minuto : `0${minuto}`}`