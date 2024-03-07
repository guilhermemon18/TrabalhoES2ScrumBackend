const express = require('express');
const router = express.Router();

const projetoController = require('../controller/projetoController')

router.get('/listar',projetoController.listarTimes);


module.exports = router;