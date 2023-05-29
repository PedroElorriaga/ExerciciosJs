const express = require('express')
const route = express.Router()
// IMPORTAÇÕES DOS CONTROLLERS
const homeController = require('./controllers/homeController')
const cadastroController = require('./controllers/cadastro.Controller')

// PAGINA HOME
route.get('/', homeController.paginaInicial)

//PAGINA CADASTRO COM SUCESSO
route.post('/cadastroComSucesso', cadastroController.paginaCadastro)

//EXPORTANDO MODULO
module.exports = route 