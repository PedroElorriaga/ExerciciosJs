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
                window.alert('ERRO')

            } else {
                listaNumUser.push(Number(getInputUser.value))
                let createOption = document.createElement('option')
                createOption.text = `Numero ${Number(getInputUser.value)}`
                getSelect.appendChild(createOption)
                console.log(listaNumUser)
            }
        }
    //Parei na verificando se o numero esta na lista
}