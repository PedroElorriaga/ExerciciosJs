module.exports = (req, res, next) => {
    console.log('Passando pelo Middleware')
    console.log('')
    next()
}