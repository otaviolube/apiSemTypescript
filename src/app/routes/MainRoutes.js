const MainRoutes = require('express').Router();

MainRoutes.get('/', (req, res) => {
    return res.status(200).json({
        status: 'ok',
        mensagem: 'tudo ok!'
    })
});

module.exports = MainRoutes;