const productsController = {
    index: function(req, res){
        res.render('product', {
            name: 'Auriculares Bluetooth',
            description: 'Auriculares inalámbricos con cancelación de ruido y micrófono incorporado.',
            image: '/images/products/auriculares.jpg',
            comments: [
                { username: 'Lucas', text: '¡Excelente calidad de sonido!' },
                { username: 'Ana', text: 'Cómodos y la batería dura mucho.' },
                { username: 'Carlos', text: 'Recomiendo comprar el estuche protector también.' }
            ]
        });
    }
}


module.exports = productsController;