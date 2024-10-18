const Info = require('../models/infoModel')

exports.homePage = async (req, res) => {
    await res.render('index', { cookie: _cookie })
}

exports.homeCreatePage = async (req, res) => {
    const infoModel = new Info(req.body)
    await infoModel.createData()

    if (infoModel.exceptions.length > 0) {
        req.flash('errors', infoModel.exceptions)
        return res.redirect('/')
    }

    req.flash('success', 'Usuário criado com sucesso.')
    return res.redirect('/')
}