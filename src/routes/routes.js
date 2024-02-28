const express = require('express');

//rotas especificas (exemplos):

const testeRoutes = require('./testeRoutes');
//so para fazer o add
const server = express();

server.use('/teste',testeRoutes);

module.exports = server;