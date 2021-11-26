const app = require('../../app');
const MainRoutes = require('../routes/MainRoutes');
const UserRoutes = require('../routes/UserRoutes');

module.exports = (app) => {
    app.use(MainRoutes);
    app.use(UserRoutes);
}