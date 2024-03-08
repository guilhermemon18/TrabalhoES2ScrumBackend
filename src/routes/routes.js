const express = require('express');

const profissionalRoutes = require('./profissionalRoutes');
const especialidadeRoutes = require('./especialidadeRoutes');
const enderecoRoutes = require('./enderecoRoutes');

const server = express();

server.use('/profissional', profissionalRoutes);
server.use('/especialidade', especialidadeRoutes);
server.use('/endereco', enderecoRoutes);

module.exports = server;