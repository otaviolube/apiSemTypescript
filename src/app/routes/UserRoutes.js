const UserRoutes = require('express').Router();

UserRoutes.get('/user', (req, res) => res.status(200).json({
  status: 'ok',
  mensagem: 'fazer alguma coisa com usuário',
}));

module.exports = UserRoutes;
