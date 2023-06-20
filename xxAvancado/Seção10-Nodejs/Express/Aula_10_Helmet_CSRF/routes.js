const express = require('express')
const route = express.Router()
// IMPORTAÇÕES DOS CONTROLLERS
const homeController = require('./src/controllers/homeController')

// PAGINA HOME
route.get('/', homeController.paginaInicial)
route.post('/recebidos', homeController.recebidos)


//EXPORTANDO MODULO
module.exports = route 