const UsuariosRouter = require('express').Router();
const UsuariosController = require('../controllers/UsuariosController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

//CRUD -> CREATE, READ, UPDATE AND DELETE
UsuariosRouter.post('/usuarios', UsuariosController.create);

UsuariosRouter.get('/usuarios', AuthMiddleware.validarToken, UsuariosController.read);

// UsuariosRouter.patch('/usuarios/:id', UsuariosController.update);

// UsuariosRouter.delete('/usuarios/:id', UsuariosController.delete);

module.exports = UsuariosRouter;
