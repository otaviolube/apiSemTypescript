const UsuariosRouter = require('express').Router();
const UsuariosController = require('../controllers/UsuariosController');

UsuariosRouter.get('/usuarios', UsuariosController.teste);

module.exports = UsuariosRouter;
