exports.formsRecivePage = async (req, res) => {
    await res.render('testReciveForms', { cookie: _cookie })
}

exports.formsPage = async (req, res) => {
    await res.render('testForms', { cookie: _cookie })
}