
// CONFIGURAÇÃO .ENV
require('dotenv').config()



// IMPORTAÇÕES
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const routes = require('./routes') // ROTAS DA APLICAÇÃO EX: /HOME /RECEBIDOS
const path = require('path')
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')
const MongoStore = require('connect-mongo') // SESSÕES SÃO SALVAS NA BASE DE DADOS
const helmet = require('helmet')
const csrf = require('csurf') // TOKENS PARA FORMULÁRIOS 
const session = require('express-session') // COOKIES
const flash = require('connect-flash') // MENSAGENS PROVISÓRIAS



// SCHEMA BASE DE DADOS
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Base de dados conectada...')
        app.emit('connection')
    })
    .catch(e => console.log('ERRO: ' + e))


app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))


// SESSÃO
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


app.use(csrf())

// MIDDLEWARES
app.use(middlewareGlobal)
app.use(csrfMiddleware)
app.use(checkCsrfError)
app.use(routes) // UTILIZANDO ROUTES COMO PARAMETRO

app.on('connection', () => {
    app.listen(3000, () => {
        console.log('Servidor sendo executado na porta: 3000')
        console.log('Acessar http://localhost:3000')
    })
})
