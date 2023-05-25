const express = require('express')
const route = express.Router()
// IMPORTAÇÕES DOS CONTROLLERS
const homeController = require('./controllers/homeController')

// PAGINA HOME
route.get('/', homeController.paginaInicial)


//EXPORTANDO MODULO
module.exports = route 