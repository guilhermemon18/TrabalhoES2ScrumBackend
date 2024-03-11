const express = require('express');
const router = express.Router();

const enderecoController = require('../controller/enderecoController');
const bairroController = require('../controller/bairroController');
const tipoLogradouroController = require('../controller/tipoLogradouroController');
const logradouroController = require('../controller/logradouroController');
const cidadeController = require('../controller/cidadeController');
const unidadeFederativaController = require('../controller/unidadeFederativaController');

router.get('/buscarEnderecoCompleto/:idEndereco', enderecoController.buscarEnderecoCompleto);

router.get('/listarUnidadesFederativas', unidadeFederativaController.listarUnidadeFederativa);

router.post('/inserirEndereco', enderecoController.inserirEndereco);
router.post('/inserirBairro', bairroController.inserirBairro);
router.post('/inserirTipoLogradouro', tipoLogradouroController.inserirTipoLogradouro);
router.post('/inserirLogradouro', logradouroController.inserirLogradouro);
router.post('/inserirCidade', cidadeController.inserirCidade);

router.get('/buscarEndereco/:cep', enderecoController.buscarEndereco);
router.get('/buscarBairro/:id', bairroController.buscarBairro);
router.get('/buscarTipoLogradouro/:id', tipoLogradouroController.buscarTipoLogradouro);
router.get('/buscarLogradouro/:id', logradouroController.buscarLogradouro);
router.get('/buscarCidade/:id', cidadeController.buscarCidade);
router.get('/buscarUnidadeFederativa/:id', unidadeFederativaController.buscarUnidadeFederativa);

router.get('/buscarIdEndereco/:cep', enderecoController.buscarIdEndereco);
router.get('/buscarIdBairro/:nomeBairro', bairroController.buscarIdBairro);
router.get('/buscarIdTipoLogradouro/:nomeTipoLogradouro', tipoLogradouroController.buscarIdTipoLogradouro);
router.get('/buscarIdLogradouro/:nomeLogradouro', logradouroController.buscarIdLogradouro);
router.get('/buscarIdCidade/:nomeCidade', cidadeController.buscarIdCidade);
router.get('/buscarIdUnidadeFederativa/:nomeUnidadeFederativa', unidadeFederativaController.buscarIdUnidadeFederativa);

module.exports = router;