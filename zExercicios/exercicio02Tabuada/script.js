function buscar(){
    let num = document.getElementById('num1')
    let resTab = document.getElementById('resSelect')

    if(num.value.length == 0){
        window.alert('ERRO, VERIFIQUE OS DADOS TENTE NOVAMENTE')
    } else {
        let n = Number(num.value)
        resTab.innerHTML = ''
        for(c = 1;c <= 10;c++){
            let res = document.createElement('option')
            res.text = `${n} x ${c} = ${n*c}`
            resTab.appendChild(res)
        }
        
    }
}