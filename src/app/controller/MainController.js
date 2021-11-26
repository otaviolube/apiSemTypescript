class MainController{

    main(req, res){
        return res.status(200).json({
            status: 'ok',
            mensagem: 'tudo ok com a API'
        });
    }

    teste(req, res){
        return res.status(200).json({
            status: 'ok',
            mensagem: 'método teste'
        });
    }
}

module.exports = new MainController();