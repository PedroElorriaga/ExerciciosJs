exports.csurfError = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.send('<h1>Erro CSRF</h1>')
    }
    next()
}

exports.csurfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}