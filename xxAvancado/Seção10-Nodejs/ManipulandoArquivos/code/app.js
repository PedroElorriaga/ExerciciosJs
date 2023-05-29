const fs = require('fs').promises
const path = require('path')

const caminhoDoArquivo = path.resolve(__dirname, '..', 'arquivo.txt')

const nome = 'Pedrinho'

// FIZ ISSO ABAIXO PARA EXIBIR DE FORMA ORDENADA
async function executaDeFormaOrdenada() {
    try {
        for (let letra of nome) {
            await fs.writeFile(caminhoDoArquivo, `${letra}\n`, { flag: 'a' })
        }
    } catch (err) {
        console.log(err)
    }
}

executaDeFormaOrdenada()