const path = require('path');

const express = require('express');

const router = express.Router();

const userList = [];

router.get('/', (req, res, next) => {
    res.render('input', { pageTitle: 'Input' });
});

router.post('/', (req, res, next) => {
    userList.push({ userName: req.body.username });
    res.redirect('/users');
});

exports.routes = router;
exports.userList = userList;