const express = require('express');
const router = express.Router();

const enderecoController = require('../controller/enderecoController');

router.get('/endereco/buscarEnderecoCompleto/:idEndereco', enderecoController.buscarEnderecoCompleto);

module.exports = router;