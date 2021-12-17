const app = require('../../app');
const UsuariosRouter = require('../routes/UsuariosRouter');

module.exports = (app) => {
    app.use(UsuariosRouter);
}