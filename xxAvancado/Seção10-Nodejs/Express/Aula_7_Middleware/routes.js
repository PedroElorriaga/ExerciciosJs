const express = require('express')
const route = express.Router()
// IMPORTAÇÕES DOS CONTROLLERS
const homeController = require('./src/controllers/homeController')

function middleware(req, res, next) {
    req.session = { nome: 'Pedro Elorriaga' }
    console.log('')
    console.log('Sessão Middleware USUÁRIO: ' + req.session.nome)
    console.log('')
    next()
}

// PAGINA HOME
route.get('/', middleware, homeController.paginaInicial, function(req, res) {
    console.log('')
    console.log('Sessão Final USUÁRIO: ' + req.session.nome)
    console.log('')
})


//EXPORTANDO MODULO
module.exports = route 