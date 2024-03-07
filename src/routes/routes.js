const express = require('express');

//rotas especificas (exemplos):

const projetoRoutes = require('./projetoRoutes');
//so para fazer o add
const server = express();

server.use('/projeto',projetoRoutes);

module.exports = server;