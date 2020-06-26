const Product = require('../model/product');
const Cart = require('../model/cart');

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            pageTitle: 'Shop',
            path: '/',
            prods: products
        });
    });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            pageTitle: 'Products',
            path: '/products',
            prods: products
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            pageTitle: product.title,
            path: '/products',
            product: product
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart',
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders',
    });
};

exports.getCheckout = (req, res, next) => {

};