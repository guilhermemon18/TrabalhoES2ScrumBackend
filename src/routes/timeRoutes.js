const express = require('express');
const router = express.Router();

const timeController = require('../controller/timeController');

router.get('/buscarTime/:idTime', timeController.buscarTime);

module.exports = router;