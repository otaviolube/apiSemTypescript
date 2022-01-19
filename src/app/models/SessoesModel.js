const { Model, DataTypes } = require('sequelize');

class SessoesModel extends Model {
    static init(sequelize){
        super.init({
            token: DataTypes.STRING(512),
            status: DataTypes.BOOLEAN,
        }, {
            sequelize,
            tableName: 'sessoes'
        })
    }

    static associate(models){
        this.belongsTo(models.UsuariosModel, { foreignKey: 'id_usuario' , as: 'session_user' });
    }
}

module.exports = SessoesModel;