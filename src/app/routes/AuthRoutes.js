const AuthController = require('../controllers/AuthController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const AuthRouter = require('express').Router();

AuthRouter.post('/login', AuthController.login);
AuthRouter.get('/logout', AuthMiddleware.validarToken, AuthMiddleware.validarSessao, AuthController.logout);
AuthRouter.post('/forget-password', AuthController.forgetPassword);

module.exports = AuthRouter;