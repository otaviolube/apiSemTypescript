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
                    
                    console.log(sessao)
                    console.log(usuarioBanco.id)

                    if (sessao) {
                        res.status(200).json({
                            msg: "Usuário já possui token válido",
                            token: sessao.token
                        })
                    } else {
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

    async logout() {

    }

    async refresh() {

    }

    async forgetPassword() {

    }
}

module.exports = new AuthController();