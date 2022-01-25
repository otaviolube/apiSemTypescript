const HashUtils = require("../../utils/HashUtils");
const UsuariosModel = require("../models/UsuariosModel");
const SessoesModel = require('../models/SessoesModel');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');

class AuthController {
   
    constructor() {

    }

    async login(req, res, next) {
        const { usuario, password } = req.body;

        if (!usuario || !password) {
            console.log("Usuário ou senha não informados ...");

            res.status(400).json({
                msg: "Usuário ou senha não informados"
            });
        }

        try {
            const usuarioBanco = await UsuariosModel.findOne({
                where: {
                    email: usuario
                }
            });

            if (!usuarioBanco) {
                res.status(400).json({
                    msg: "Usuário não encontrado"
                });
            } else {
                if (await HashUtils.validateHash(usuarioBanco.password, password)) {
                    console.log(usuarioBanco);

                    //Verificar se o usuário possui um token valido
                    const sessao = await SessoesModel.findOne({
                        where: {
                            [Op.and]: [
                                { id_usuario: usuarioBanco.id },
                                { status: true }
                            ]
                        }
                    });

                    if(sessao){
                        jwt.verify(sessao.token, process.env.JWT_SECRET, async (err, decoded) => {
                            if (err) {
                                sessao.status = false;
                                await sessao.save();
                                console.log("Token expirado!");
                            } else {
                                return res.status(200).json({
                                    msg: "Usuário já possui token válido",
                                    token: sessao.token
                                });
                            }

                            const token = jwt.sign({
                                id: usuarioBanco.id,
                                email: usuarioBanco.email,
                                nome: usuarioBanco.nome
                            }, process.env.JWT_SECRET, {
                                expiresIn: 3600
                            });
        
                            let inserirSessao = await SessoesModel.create({
                                token: token,
                                status: true,
                                id_usuario: usuarioBanco.id
                            });
        
                            console.log(inserirSessao)
        
                            res.status(200).json({
                                msg: "Usuário autenticado com sucesso",
                                token: token
                            });
                        });
                    }else{
                        const token = jwt.sign({
                            id: usuarioBanco.id,
                            email: usuarioBanco.email,
                            nome: usuarioBanco.nome
                        }, process.env.JWT_SECRET, {
                            expiresIn: 3600
                        });
    
                        let inserirSessao = await SessoesModel.create({
                            token: token,
                            status: true,
                            id_usuario: usuarioBanco.id
                        });
    
                        console.log(inserirSessao)
    
                        res.status(200).json({
                            msg: "Usuário autenticado com sucesso",
                            token: token
                        });
                    }
                } else {
                    res.status(200).json({
                        msg: "Usuário ou senha inválidas"
                    });
                }
            }
        } catch (error) {
            res.status(500).json({
                msg: "Erro ao consultar a base de dados",
                erro: error.message
            });
        }
    }

    async logout(req, res) {

        const { id, token } = req.user;

        if(!token || !id){
            return res.status(500).json({
                msg: 'User validation failed!'
            });
        }

        const sessao = await SessoesModel.findOne({
            where: {
                [Op.and]: [
                    { id_usuario: id },
                    { token: token }
                ]
            }
        });

        if(!sessao){
            return res.status(500).json({
                msg: 'Session not found!'
            });
        }

        sessao.status = false;
        await sessao.save();

        return res.status(200).json({
            msg: 'Logout realizado com sucesso!'
        });

    }

    async refresh() {

    }

    async forgetPassword() {

    }
}

module.exports = new AuthController();