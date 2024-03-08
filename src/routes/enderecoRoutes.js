const express = require('express');
const router = express.Router();

const enderecoController = require('../controller/enderecoController');
const bairroController = require('../controller/bairroController');
const tipoLogradouroController = require('../controller/tipoLogradouroController');
const logradouroController = require('../controller/logradouroController');
const cidadeController = require('../controller/cidadeController');
const unidadeFederativaController = require('../controller/unidadeFederativaController');

router.get('/buscarEnderecoCompleto/:idEndereco', enderecoController.buscarEnderecoCompleto);

router.get('/buscarIdEndereco/:cep', enderecoController.buscarIdEndereco);
router.get('/buscarIdBairro/:', bairroController.buscarIdBairro);
router.get('/buscarIdTipoLogradouro/:', tipoLogradouroController.buscarIdTipoLogradouro);
router.get('/buscarIdLogradouro/:', logradouroController.buscarIdLogradouro);
router.get('/buscarIdCidade/:', cidadeController.buscarIdCidade);
router.get('/buscarIdUnidadeFederativa/:', unidadeFederativaController.buscarIdUnidadeFederativa);

module.exports = router;