let form = document.querySelector('.form')


form.addEventListener('submit', function (event) {
    event.preventDefault() // Não atualiza a página qnd submit for acionado

    // Pega os inputs
    let peso = document.querySelector('#peso') 
    let altura = document.querySelector('#altura')

    // Faz o calculo do IMC
    let imc = Number(peso.value) / (Number(altura.value) ** 2) 

    if (peso.value == '' || altura.value == '') {
        window.alert('Preencha os campos corretamente')

    } else if (!Number(peso.value) || !Number(altura.value)) {
        window.alert('Preencha os campos corretamente')

    } else {
        setResultado(imc.toFixed(2))

    }
    
    
});

function setResultado(imc) {
    // Pega o campo resultado no HTML
    let resultado = document.querySelector('.resultado')
    resultado.innerHTML = `` // deixa em branco o resultado
    let p = document.createElement('p')
    p.innerHTML = `Seu IMC é de <b>${imc}</b>`

    let nivel = document.createElement('p')
    if (imc < 18.5) {
        nivel.innerHTML = '<b>Abaixo do peso</b>'
        nivel.style.color = '#ef1919'
    } else if (imc >= 18.5 && imc <= 24.9) {
        nivel.innerHTML = '<b>Peso ideal</b>'
        nivel.style.color = '#12b512'
    } else if (imc >= 25 && imc <= 29.9) {
        nivel.innerHTML = '<b>Sobrepeso</b>'
        nivel.style.color = 'orange'
    } else {
        nivel.innerHTML = '<b>Obesidade</b>'
        nivel.style.color = '#ef1919'
    }

    resultado.appendChild(nivel)
    resultado.appendChild(p)
}