const Product = require('../model/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Shop',
        path: '/admin/add-product'
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop', { 
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            activeShop: true,
            productCSS: true
        });
    });
};