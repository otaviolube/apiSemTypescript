const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const UsuariosModel = require('../app/models/UsuariosModel');
const SessoesModel = require('../app/models/SessoesModel');

const connection = new Sequelize(dbConfig);

UsuariosModel.init(connection);
SessoesModel.init(connection);

SessoesModel.associate(connection.models);

module.exports = connection;