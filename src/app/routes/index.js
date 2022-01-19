const app = require('../../app');
const UsuariosRouter = require('../routes/UsuariosRouter');
const AuthRouter = require('./AuthRoutes');

module.exports = (app) => {
    app.use(UsuariosRouter);
    app.use(AuthRouter);
}