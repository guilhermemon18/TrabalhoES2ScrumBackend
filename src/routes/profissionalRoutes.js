const express = require('express');
const router = express.Router();

const profissionalController = require('../controller/profissionalController');

router.get('/listarProfissional', profissionalController.listarProfissional);
router.get('/buscarProfissional/:id', profissionalController.buscarProfissional);
router.post('/inserirProfissional', profissionalController.inserirProfissional)
router.put('/alterarProfissional/:id', profissionalController.alterarProfissional)
router.delete('/excluirProfissional/:id', profissionalController.excluirProfissional)

module.exports = router;