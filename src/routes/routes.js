const express = require('express');

const profissionalRoutes = require('./profissionalRoutes');
const racaRoutes = require('./racaRoutes');
const generoRoutes = require('./generoRoutes');
const especialidadeRoutes = require('./especialidadeRoutes');

const server = express();

server.use('/profissional', profissionalRoutes);
server.use('/raca', racaRoutes);
server.use('/genero', generoRoutes);
server.use('/especialidade', especialidadeRoutes);

module.exports = server;