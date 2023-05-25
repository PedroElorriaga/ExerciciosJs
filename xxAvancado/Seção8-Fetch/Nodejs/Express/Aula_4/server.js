const express = require('express')
const app = express()
const routes = require('./routes') // IMPORTAÇÃO DE ROUTES

app.use(express.urlencoded({ extended: true }))

app.use(routes) // UTILIZANDO ROUTES COMO PARAMETRO


app.listen(3000, () => {
    console.log('Servidor sendo executado na porta: 3000')
    console.log('Acessar http://localhost:3000')
})