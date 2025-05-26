var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController');
router.get('/detalle/:detalle', productsController.index);
router.get('/productAdd', productsController.productAdd);
router.post('/nuevoProducto', productsController.nuevoProd);

module.exports = router;