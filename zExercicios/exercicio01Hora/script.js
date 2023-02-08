var data = new Date()
var timeHour = data.getHours()
var timeMinute = data.getMinutes()
var hour = document.getElementById('horas')
var img = document.getElementById('imgCh')
//var timeHour = 20
hour.innerHTML = `Agora são ${timeHour} horas e ${timeMinute} minutos`

if (timeHour >=5 && timeHour < 12){
    img.src = 'img/manhã.png'
    document.body.style.backgroundColor = '#FFDAB9'
}
else if(timeHour < 19){
    img.src = 'img/tarde.png'
    document.body.style.backgroundColor = '#FF8C00'//Muda o fundo de forma dinâmica
}
else{
    img.src = 'img/noite.png'
    document.body.style.backgroundColor = '#696969'
}

