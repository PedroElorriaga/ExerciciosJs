require('dotenv').config()

const express = require('express')
const app = express()
const route = require('./routes')
const path = require('path')
const { cookiesSimulator } = require('./src/middlewares/cookies')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const MongoDBStore = require('connect-mongodb-session')(session)
const helmet = require('helmet')
const csurf = require('csurf')
const { csurfMiddleware, csurfError } = require('./src/middlewares/csrfToken')
const { flashMessage } = require('./src/middlewares/flashMessages')


// DATABASE
mongoose.connect(process.env.URL_DB).then(() => {
    console.log('Connection with database was successful')
    console.log()
    app.emit('connect')
}).catch((err) => {
    console.log(`Error to connect: ${err}`)
})

// USES
app.use(express.urlencoded({ extended: true })) // Atenção, isso deve ser sempre o primeiro .use a ser considerado
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: new MongoDBStore({ uri: process.env.URL_DB }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))
app.use(csurf())
app.use(flash())
app.use(helmet())
app.use(flashMessage)
app.use(csurfError)
app.use(csurfMiddleware)
app.use(cookiesSimulator)
app.use(route)
app.use(express.static(path.resolve(__dirname, 'frontend')))

// SETS
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'src', 'views'))

app.on('connect', () => {
    app.listen(8000, () => {
        console.log(`Server is running on http://localhost:8000`)
    })
})
