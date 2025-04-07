var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController');
router.get('/:detalle', productsController.index);

module.exports = router;