exports.cookiesSimulator = (req, res, next) => {
    if (req.session.username === undefined) {
        req.session.username = req.body.username
        req.session.createAt = new Date().toLocaleDateString()
    } else {
        _cookie = req.session.username
    }
    next()
}