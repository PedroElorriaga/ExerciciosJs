function ePaisagem (x,y){
    let verifica_isntrucao = x === 1.200 && y === 566 ? true : false
    // let verifica_professor = x > y ? true : false     Solução professor

    if (verifica_isntrucao){
        console.log('É paisagem')
    } else {
        console.log('Não é paisagem')
    }
}

ePaisagem(1.200, 560)