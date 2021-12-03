const MainRoutes = require('express').Router();
const MainController = require('../controllers/MainController');

// POST -> CREATE
MainRoutes.post('/', MainController.main);
MainRoutes.post('/teste/:id', MainController.testeId);

// GET -> READ
MainRoutes.get('/', MainController.main);
MainRoutes.get('/teste', MainController.teste);

// PATCH -> UPDATE
MainRoutes.patch('/', MainController.main);

// DELETE -> DELETE
MainRoutes.delete('/', MainController.teste);

module.exports = MainRoutes;
