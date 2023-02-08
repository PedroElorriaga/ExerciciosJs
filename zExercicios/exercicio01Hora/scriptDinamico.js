let data = new Date()
let timeHour = data.getMinutes()
let timeMinute = data.getMinutes()

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