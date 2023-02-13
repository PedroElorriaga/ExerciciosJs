let listaNumUser = []


function buscar(){
    //Pegar informações fornecidas pelo USER
    let getInputUser = document.getElementById('userInput-id')
    let getSelect = document.getElementById('escolher-id')
    
    console.log(listaNumUser)
    
    if (getInputUser.value.length == 0){
        window.alert('ERRO! PREENCHA O CAMPO NECESSÁRIO.')

    } else {
            //Verifica se o elemento digitado está na lista
            if (listaNumUser.includes(Number(getInputUser.value))){
                window.alert('ERRO! NUMERO JÁ INSERIDO')

            } else {
                if (Number(getInputUser.value) >=1 && Number(getInputUser.value) <=100){
                    listaNumUser.push(Number(getInputUser.value))
                    let createOption = document.createElement('option')
                    createOption.text = `Valor ${Number(getInputUser.value)} adicionado`
                    getSelect.appendChild(createOption)
                    console.log(listaNumUser)

                } else {
                    window.alert('ERRO! DIGITE NÚMEROS ENTRE 1 A 100')

                }

                // Apaga o valor que estava no userInput-id no arqv HTML e foca a digitação no mesmo
                getInputUser.value = ''
                getInputUser.focus()            
            }
        }
    
}


function calcular(){

    if (listaNumUser.length == 0){
        window.alert('ERRO! ADICIONE OS DADOS ANTES DE CONFIRMAR')

    } else {
        var somaItens = 0

        for(c = 0;c < listaNumUser.length;c++){
            var somaItens = listaNumUser[c] + somaItens
    
        }
        let media = somaItens / c

        let max = Math.max(...listaNumUser)
        let min = Math.min(...listaNumUser)
        
        let exibirResultado = document.getElementById('divResultado-id')
        exibirResultado.innerHTML = `<p>A soma dos valores inseridos é <b>${somaItens}</b></p>
        <p>A média dos valores é <b>${media}</b></p><p>A quantidade de números é <b>${c}</b></p>
        <p>O maior número é <b>${max}</b></p>
        <p>O menor número é <b>${min}</b></p>`

    }
}