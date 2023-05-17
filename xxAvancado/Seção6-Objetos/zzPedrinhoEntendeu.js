const jogadoresFifa = [
    { id: 3, nickname: 'Pedronauta', habilidade: 90, posicao: 'ZAG' },
    { id: 2, nickname: 'leomatos', habilidade: 87, posicao: 'MD' },
    { id: 4, nickname: 'cainavicente', habilidade: 86, posicao: 'ME' },
    { id: 1, nickname: 'Renanzinn_', habilidade: 88, posicao: 'MC' }
]

const criarObjetoJogadores = new Map()
for (const jogador of jogadoresFifa) {
    const { id } = jogador
    criarObjetoJogadores.set(id, { ...jogador })
}

console.log('Jogadores Disponíveis')
console.log(criarObjetoJogadores)

console.log('-'.repeat(100))
console.log('Mostrando apenas NickNames')

for (const jogador of criarObjetoJogadores.values()) {
    console.log(jogador.nickname)
}


console.log('-'.repeat(100))
console.log('Melhores Jogadores')


for (const jogador of jogadoresFifa.values()) {
    const melhoresOverall = []
    melhoresOverall.push(jogador.habilidade, jogador.nickname)
    melhoresOverall.sort().reverse()
    console.log(melhoresOverall[0], '-> Overall: ', melhoresOverall[1])
}





