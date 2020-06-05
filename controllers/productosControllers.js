var productos = {
    productosTodos: function(req, res) {
        res.render('productos');
    },
    descripcionProducto: function(req, res) {
        res.render('descripcionProducto');
    },
    cargarProducto: function(req, res) {
        res.render('cargaProductos');
    }
};
module.exports = productos;