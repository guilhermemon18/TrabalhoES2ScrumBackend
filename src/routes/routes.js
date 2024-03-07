const express = require('express');

//rotas especificas (exemplos):

// const testeRoutes = require('./testeRoutes');
const timeRoutes = require('./timeRoutes');
//so para fazer o add
const server = express();

// server.use('/teste',testeRoutes);
server.use('/time',timeRoutes);

module.exports = server;