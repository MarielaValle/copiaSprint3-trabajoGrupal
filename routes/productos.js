var express = require('express');
var router = express.Router();
var productosCtrl = require('../controllers/productosControllers');

router.get('/', productosCtrl.productosTodos);
router.get('/descripcionProducto', productosCtrl.descripcionProducto);
router.get('/cargaProductos', productosCtrl.cargarProducto);

module.exports = router;