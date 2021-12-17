const UsuariosRouter = require('express').Router();
const UsuariosController = require('../controllers/UsuariosController');

//CRUD -> CREATE, READ, UPDATE AND DELETE
UsuariosRouter.post('/usuarios', UsuariosController.create);

// UsuariosRouter.get('/usuarios', UsuariosController.read);

// UsuariosRouter.patch('/usuarios/:id', UsuariosController.update);

// UsuariosRouter.delete('/usuarios/:id', UsuariosController.delete);

module.exports = UsuariosRouter;
