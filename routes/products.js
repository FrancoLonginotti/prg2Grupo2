var express = require('express');
var router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/detalle/:detalle', productsController.index);
router.get('/productAdd', productsController.productAdd);
router.post('/nuevoProducto', productsController.nuevoProd);
router.post('/nuevoComentario/:id', productsController.nuevoComent)
module.exports = router;