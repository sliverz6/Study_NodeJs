const path = require('path');

const express = require('express');

const inputData = require('./input');

const router = express.Router();

const userList = inputData.userList;

router.get('/users', (req, res, next) => {
    res.render('users', { pageTitle: 'Users', userList: userList });
});

module.exports = router;