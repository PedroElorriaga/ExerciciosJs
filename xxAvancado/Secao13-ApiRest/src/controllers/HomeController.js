class HomeController {
  index(req, res) {
    res.json({
      nome: 'Pedro',
    });
  }
}

export default new HomeController();
