const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const UsuariosModel = require('../app/models/UsuariosModel');

const connection = new Sequelize(dbConfig);

UsuariosModel.init(connection);

module.exports = connection;