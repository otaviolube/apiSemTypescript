const UsuariosModel = require('../models/UsuariosModel');

class UsuariosController {

    async create(req, res){
        try{
            const body = req.body;
            const usuario = await UsuariosModel.create(body)

            res.json({
                msg: 'Usuário inserido com sucesso!',
                usuario: usuario
            });
        }catch(erro){
            res.json({
                msg: 'erro ao inserir usuario'
            });
        }
    }

    read(){

    }

    update(){

    }

    delete(){

    }
}

module.exports = new UsuariosController();