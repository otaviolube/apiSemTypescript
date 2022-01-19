const HashUtils = require('../../utils/HashUtils');
const UsuariosModel = require('../models/UsuariosModel');

class UsuariosController {

    async create(req, res){
        try{
            const userData = req.body;

            const usuarioExiste =  await UsuariosModel.findAll({
                where: {
                    email: userData.email
                }
            });

            if(usuarioExiste.length > 0){
                return res.json({
                    msg: 'Email já cadastrado na base de dados'
                });
            }

            userData.password = await HashUtils.generateHash(userData.password);

            console.log(userData);

            const usuario = await UsuariosModel.create(userData)

            res.json({
                msg: 'Usuário inserido com sucesso!',
                usuario: usuario
            });
        }catch(erro){
            console.log(erro)
            res.json({
                msg: 'erro ao inserir usuario'
            });
        }
    }

    async read(req, res){
        try{
            const usuarios = await UsuariosModel.findAll();
            res.json({
                msg: 'Usuários recuperados com sucesso!',
                usuarios: usuarios
            });
        }catch(error){
            console.log(error);
            res.json({
                msg: 'erro ao inserir usuario'
            });
        }
    }

    update(){

    }

    delete(){

    }
}

module.exports = new UsuariosController();