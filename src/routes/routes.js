const express = require('express');

const profissionalRoutes = require('./profissionalRoutes');
const especialidadeRoutes = require('./especialidadeRoutes');

const server = express();

server.use('/profissional', profissionalRoutes);
server.use('/especialidade', especialidadeRoutes);

module.exports = server;