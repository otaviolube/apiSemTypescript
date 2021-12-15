const app = require('../../app');
const MainRoutes = require('../routes/MainRoutes');
const UserRoutes = require('../routes/UserRoutes');
const UsuariosRouter = require('../routes/UsuariosRouter');

module.exports = (app) => {
    app.use(MainRoutes);
    app.use(UserRoutes);
    app.use(UsuariosRouter);
}