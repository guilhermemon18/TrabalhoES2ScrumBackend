const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clienteController');

router.get('/listar', clienteController.listarClientes);

module.exports = router;