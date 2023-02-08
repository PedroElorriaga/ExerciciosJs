/*Neste script utilizei a forma dinamica pelo proprio java script para subir imagens*/ 
function search(){
    //data

    var data = new Date()
    var dateYear = data.getFullYear()
    //Get ids

    var getBornYear = document.getElementById('num1')
    var getBornAgeINT = Number(dateYear - getBornYear.value)
    var resultado = document.getElementById('res')
    //Forma dinamica

    var img = document.createElement('img')//createElement foi usado para criar um elemento de imagem
    img.setAttribute('id', 'foto')/*Aqui atribuo valores, o primeiro é o ID, e o segundo é o valor
    atribuido ao ID */

    // Verifica se não é vazio ou maior que o ano atual
    if (num1.value.length == 0 || Number(num1.value) > dateYear){
        window.alert('[ERRO] Por favor verifique os valores digitados!')
    } else {
        var getSex = document.getElementsByName('sexo')
        // Verifica o sexo e calcula a idade
        if (getSex[0].checked){
            if (getBornAgeINT >= 0 && getBornAgeINT < 5){
                resultado.innerHTML = `<b>É um bebê menino</b>`
                img.setAttribute('src', 'img/Bebemale.png')
                resultado.appendChild(img)
                
            } else if (getBornAgeINT <= 17){
                resultado.innerHTML = `<b>É um menino de ${getBornAgeINT} anos de idade</b>`
                
            } else {
                resultado.innerHTML = `<b>É um homem de ${getBornAgeINT} anos de idade</b>`
                
            }
        } else {
            if (getBornAgeINT >= 0 && getBornAgeINT < 5){
                resultado.innerHTML = `<b>É uma baby girl</b>`
                
            } else if (getBornAgeINT <= 17){
                resultado.innerHTML = `<b>É uma menina de ${getBornAgeINT} anos de idade</b>`
                
            } else {
                resultado.innerHTML = `<b>É uma mulher de ${getBornAgeINT} anos de idade</b>`
                
            }
        }
    }

    
    
    
}
