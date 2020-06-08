const 

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFilr();
});

router.post('/add-product', (req, res, next) => {

});

module.exports = router;