const express = require('express');
const router = express.Router();

const generoController = require('../controller/generoController');

router.get('/listar', generoController.listarGenero);

module.exports = router;