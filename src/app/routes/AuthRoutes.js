const AuthController = require('../controllers/AuthController');

const AuthRouter = require('express').Router();

AuthRouter.post('/login', AuthController.login)
AuthRouter.get('/logout', AuthController.logout);
AuthRouter.post('/forget-password', AuthController.forgetPassword)

module.exports = AuthRouter;