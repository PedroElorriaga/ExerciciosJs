require('dotenv').config()

const express = require('express')
const app = express()
const routes = require('./routes') // IMPORTAÇÃO DE ROUTES
const path = require('path')
const middlewareGlobal = require('./src/middlewares/middleware')
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Base de dados conectada...')
        app.emit('connection')
    })
    .catch(e => console.log('ERRO: ' + e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

app.use(express.urlencoded({ extended: true }))

// ARQUIVO ESTATICO
app.use(express.static(path.resolve(__dirname, 'public'))) // <- CAMINHO ABSOLUTO
// CAMINHO DIRETO -> './public'

const sessionOptions = session({
    secret: 'Qaulquer informação',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60, // 1 minuto
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())

// CONFIGURAÇÃO DE VIEWS
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(middlewareGlobal)
app.use(routes) // UTILIZANDO ROUTES COMO PARAMETRO

app.on('connection', () => {
    app.listen(3000, () => {
        console.log('Servidor sendo executado na porta: 3000')
        console.log('Acessar http://localhost:3000')
    })
})
