function start(){
    //pegar inputs
    var getInit = document.getElementById('inicio')
    var getLast = document.getElementById('fim')
    var getSkip = document.getElementById('passo')
    //Convertendo inteiros
    var getInit = Number(getInit.value)
    var getLast = Number(getLast.value)
    var getInfoSkip = Number(getSkip.value)
    //resultado
    var res = document.getElementById('res')

    res.innerHTML = ``
    if (inicio.value.length != 0){
        if(getLast > getInit){
            if(getInfoSkip > 0){
                console.log(getInit)
                for(getInit;getInit <= getLast;getInit += getInfoSkip){
                    res.append(`Contando \u{1F449} ${getInit} `)/*O comando
                    \u é utilizado para colcoar emoji */
            } } else {
                window.alert('ERRO, O CAMPO "PASSO" DEVE SER > 0!')
            }
        } else {
            window.alert('ERRO, PREENCHA O CAMPO "FIM"!')
        }
    } else {
        window.alert('ERRO, PREENCHA O CAMPO "INICIO"!')
    }
        
}