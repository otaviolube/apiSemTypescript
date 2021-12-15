const { Model, DataTypes } = require('sequelize');

class UsuariosModel extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'usuarios'
        })
    }
}

module.exports = UsuariosModel;