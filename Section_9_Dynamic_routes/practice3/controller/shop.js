const Product = require('../model/product');

const Cart = require('../model/cart');

// const getOtherProds = prodId => {
//     const promise = new Promise((resolve, reject) => {
//         Product.getOtherProducts(prodId, others => {
//             resolve(others);
//         });
//     });
//     return promise
// };

// const findById = prodId => {
//     const promise = new Promise((resolve, reject) => {
//         Product.findById(prodId, product => {
//             resolve(product);
//         });
//     });
//     return promise;
// };

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            path: '/',
            pageTitle: 'Shop',
            products: products
        });
    });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/products', {
            path: '/products',
            pageTitle: 'Products',
            prods: products
        });
    });
};

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Cart',
        path: '/cart',
    });
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        const price = product.price;
        Cart.addProduct(prodId, price);
        res.redirect('/cart');
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.getOtherProducts(prodId, otherProds => {
        Product.findById(prodId, product => {
            res.render('shop/product-detail', {
                path: '/products',
                pageTitle: product.title,
                product: product,
                prods: otherProds
            });
        });
    });
    // let otherProducts;
    // getOtherProds(prodId)
    // .then(otherProds => {
    //     otherProducts = otherProds;
    //     return findById;
    // })
    // .then(product => {
    //     console.log(product);
    //     res.render('shop/product-detail', {
    //         path: '/products',
    //         pageTitle: product.title,
    //         product: product,
    //         prods: otherProducts
    //     });
    // });
    
};