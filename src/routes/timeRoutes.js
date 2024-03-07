const express = require('express');
const router = express.Router();

const timeController = require('../controller/timeController');

router.get('/buscarTime/:idTime', timeController.buscarTime);
router.post('/inserir', timeController.inserirTime);

module.exports = router;