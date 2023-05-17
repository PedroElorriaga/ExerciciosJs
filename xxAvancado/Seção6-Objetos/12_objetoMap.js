const players = [
    { id: 1, nome: 'Pedro' },
    { id: 3, nome: 'Renan' },
    { id: 2, nome: 'Kauan' }
]


/* console.log(players) 
RETORNA 
[
  { id: 1, nome: 'Pedro' },
  { id: 3, nome: 'Renan' },
  { id: 2, nome: 'Kauan' }
]
*/


const newPlayers = {}
for (const player of players) {
    /*  console.log(player) 
        RETORNA 
        { id: 1, nome: 'Pedro' }
        { id: 3, nome: 'Renan' }
        { id: 2, nome: 'Kauan' }
    */
    const { id } = player // RETORNA ex: { id: 1 } 
    const { nome } = player // RETORNA ex: { nome: 'Pedro' }
    newPlayers[id] = { ...player }
}

console.log(newPlayers) // RETORNA
/*
    {
        '1': { id: 1, nome: 'Pedro' },
        '2': { id: 2, nome: 'Kauan' },
        '3': { id: 3, nome: 'Renan' }
    }
*/

// O PROBLEMA AQUI É QUE O OBEJTO SAIU DA ORDEM DE EXIBIÇÃO DESEJADA 
/*
    { id: 1, nome: 'Pedro' },
    { id: 3, nome: 'Renan' },
    { id: 2, nome: 'Kauan' }
*/

// PARA ISSO USAREMOS MAP()

const newPlayersComMap = new Map()
for (const player of players) {
    const { id } = player // Pega o valor { valor } da chave dentro de player que veio de players
    newPlayersComMap.set(id, { ...player })
}

console.log(newPlayersComMap)
