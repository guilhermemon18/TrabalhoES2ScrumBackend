const express = require('express');

const testeRoutes = require('./testeRoutes');

const server = express();

server.use('/teste',testeRoutes);

module.exports = server;