const express = require('express');

const projetoRoutes = require('./projetoRoutes');

const server = express();

server.use('/projeto',projetoRoutes);

module.exports = server;