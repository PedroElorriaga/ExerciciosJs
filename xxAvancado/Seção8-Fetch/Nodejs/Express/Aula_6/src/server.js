const express = require('express')
const app = express()
const routes = require('./routes') // IMPORTAÇÃO DE ROUTES
const path = require('path')

app.use(express.urlencoded({ extended: true }))

// ARQUIVO ESTATICO
app.use(express.static(path.resolve(__dirname, 'public'))) // <- CAMINHO ABSOLUTO
// CAMINHO DIRETO -> './public'

// CONFIGURAÇÃO DE VIEWS
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(routes) // UTILIZANDO ROUTES COMO PARAMETRO


app.listen(3000, () => {
    console.log('Servidor sendo executado na porta: 3000')
    console.log('Acessar http://localhost:3000')
})