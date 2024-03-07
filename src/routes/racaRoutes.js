const express = require('express');
const router = express.Router();

const racaController = require('../controller/racaController');

router.get('/listar', racaController.listarRaca);

module.exports = router;