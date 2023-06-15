require('dotenv').config()

const express = require('express')
const app = express()
const routes = require('./routes') // IMPORTAÇÃO DE ROUTES
const path = require('path')

// ------------- CONECTANDO NA BASE DE DADOS --------------
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado na base de dados...')
        app.emit('connect')
    })
    .catch(e => console.log(e))


app.use(express.urlencoded({ extended: true }))

// ARQUIVO ESTATICO
app.use(express.static(path.resolve(__dirname, 'public'))) // <- CAMINHO ABSOLUTO
// CAMINHO DIRETO -> './public'

// CONFIGURAÇÃO DE VIEWS
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes) // UTILIZANDO ROUTES COMO PARAMETRO


app.on('connect', () => {
    app.listen(3000, () => {
        console.log('Servidor sendo executado na porta: 3000')
        console.log('Acessar http://localhost:3000')
    })
})
