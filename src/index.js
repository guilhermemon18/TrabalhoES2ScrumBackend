//arquivo principal que roda o servidor
require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const server = express();
//server.use(atualizar);
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.use('/empresa-tec',routes);

const port = process.env.PORT || 3000;

server.listen(port, () => { 
    console.log(`Servidor rodando na porta:${port}`);
});