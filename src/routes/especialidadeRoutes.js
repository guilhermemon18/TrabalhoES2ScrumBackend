const express = require('express');
const router = express.Router();

const especialidadeController = require('../controller/especialidadeController');

router.get('/listar', especialidadeController.listarEspecialidade);

module.exports = router;