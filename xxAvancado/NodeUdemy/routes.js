const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const formsController = require('./src/controllers/formsController')

// HOME ROUTES
route.get('/', homeController.homePage)
route.post('/create/user', homeController.homeCreatePage)

// FORMS ROUTES
route.get('/testforms', formsController.formsPage)
route.post('/forms', formsController.formsRecivePage)

module.exports = route