const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', { 
        fileName: 'Add Product',
        path: '/admin/add-product'
    });
});

router.post('/add-product', (req, res, next) => {
    res.redirect('/');
    products.push({ title: req.body.title });
});

exports.routes = router;
exports.products = products;