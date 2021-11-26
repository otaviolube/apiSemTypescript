const MainController = require('../controller/MainController');
const MainRoutes = require('express').Router();

MainRoutes.get('/', MainController.main);
MainRoutes.get('/teste', MainController.teste);

module.exports = MainRoutes;