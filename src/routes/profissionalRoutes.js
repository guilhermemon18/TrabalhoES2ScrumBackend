const express = require('express');
const router = express.Router();

const profissionalController = require('../controller/profissionalController');

router.get('/profissional/buscarProfissional/:idProfissional', profissionalController.buscarProfissional);
//router.get('/equipamento/listarCaracteristicasTecnicasEquipamento/:codEquipamento', equipamentoController.listarCaracteristicasTecnicasEquipamento);

//router.get('/equipamento/listarInspecoesEquipamento/:codEquipamento', equipamentoController.listarInspecoesEquipamento);
//router.get('/equipamento/listarInspecaoCaracteristicas/:idInspecaoEquipamento', equipamentoController.listarInspecaoCaracteristicas);

//router.get('/equipamento/listarDivergenciasInspecao/:dataInspecao', equipamentoController.listarDivergenciasInspecao);

module.exports = router;