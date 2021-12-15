const UsuariosModel = require('../models/UsuariosModel');

class UsuariosController {
    async teste(req, res){
        try{
            const usuario = await UsuariosModel.create({
                nome: 'otavio',
                email: 'otaviolube@gmail.com',
                password: '123'
            });
            console.log(usuario);
            res.json({
                msg: 'usuario criado com sucesso',
                usuario: usuario
            });
        }catch(erro){
            res.json({
                msg: 'erro ao inserir usuario'
            });
        }
    }

    create(){

    }

    read(){

    }

    update(){

    }

    delete(){

    }
}

module.exports = new UsuariosController();