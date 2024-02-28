const express = require('express');
const router = express.Router();

const testeController = require('../controller/testeController')

router.get('/listar',testeController.listar);


module.exports = router;