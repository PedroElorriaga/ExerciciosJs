let data = new Date()
let timeHour = data.getHours() >= 10 ? data.getHours() : `0${data.getHours()}`
let timeMinute = data.getMinutes() >= 10 ? data.getMinutes() : `0${data.getMinutes()}`

//let formatMinute = timeMinute >= 10 ? timeMinute : `0${timeMinute}`

let hours = document.getElementById('horas')
let res = document.getElementById('img')

let imgR = document.createElement('img')

hours.innerHTML = `Agora são ${timeHour} horas e ${timeMinute} minutos`

res.innerHTML = ''
if (timeHour > 4 && timeHour < 12){
    document.body.style.backgroundColor = '#FFDAB9'
    imgR.setAttribute('src', 'img/manhã.png')

} else if (timeHour > 11 && timeHour < 19){
    document.body.style.backgroundColor = '#FF8C00'
    imgR.setAttribute('src', 'img/tarde.png')

} else {
    document.body.style.backgroundColor = '#696969'
    imgR.setAttribute('src', 'img/noite.png')

}
    res.appendChild(imgR)