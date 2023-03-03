
function search(){
    //data
    var data = new Date()
    var dateYear = data.getFullYear()
    //Get ids
    var getBornYear = document.getElementById('num1')
    var getBornAgeINT = Number(dateYear - getBornYear.value)
    var resultado = document.getElementById('res')
    var img = document.getElementById('img')
    // Verifica pelo id se não é vazio ou maior que o ano atual
    if (num1.value.length == 0 || Number(num1.value) > dateYear){
        window.alert('[ERRO] Por favor verifique os valores digitados!')
    } else {
        var getSex = document.getElementsByName('sexo')
        // Verifica o sexo e calcula a idade
        if (getSex[0].checked){
            if (getBornAgeINT >= 0 && getBornAgeINT < 5){
                resultado.innerHTML = `<b>É um bebê menino</b>`
                img.src = 'img/Bebemale.png'
            } else if (getBornAgeINT <= 17){
                resultado.innerHTML = `<b>É um menino de ${getBornAgeINT} anos de idade</b>`
                img.src = 'img/Menino.png'
            } else {
                resultado.innerHTML = `<b>É um homem de ${getBornAgeINT} anos de idade</b>`
                img.src = 'img/homem.png'
            }
        } else {
            if (getBornAgeINT >= 0 && getBornAgeINT < 5){
                resultado.innerHTML = `<b>É uma bebê menina</b>`
                img.src = 'img/bebefem.png'
            } else if (getBornAgeINT <= 17){
                resultado.innerHTML = `<b>É uma menina de ${getBornAgeINT} anos de idade</b>`
                img.src = 'img/menina.png'
            } else {
                resultado.innerHTML = `<b>É uma mulher de ${getBornAgeINT} anos de idade</b>`
                img.src = 'img/mulher.png'
            }
        }
    }

    
    
    
}
