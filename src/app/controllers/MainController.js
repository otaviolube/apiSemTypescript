class MainController {
  main = (req, res) => res.status(200).json({
    status: 'ok',
    mensagem: 'tudo ok com a API',
  });

  teste(req, res) {
    return res.status(200).json({
      status: 'ok',
      mensagem: 'método teste',
    });
  }

  testeId(req, res) {
    const { params } = req;

    res.json({
      id: parseInt(params.id, 2),
    });
  }
}

module.exports = new MainController();
