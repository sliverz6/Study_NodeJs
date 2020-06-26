const express = require('express');

const shopController = require('../controller/shop');

const router = express.Router();

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/', shopController.getIndex);

module.exports = router;