const fs = require('fs').promises
const path = require('path')
const caminhoDoArquivo = path.resolve(__dirname, '..', 'arquivo.json')

const listaClientes = [
    { nome: 'Pedro' },
    { nome: 'Renan' },
    { nome: 'Kauan' },
    { nome: 'Leonardo' },
    { nome: 'Larissa' },
    { nome: 'Estephanie' },
]

const json = JSON.stringify(listaClientes, '', 2)

fs.writeFile(caminhoDoArquivo, json, { flag: 'w'})

