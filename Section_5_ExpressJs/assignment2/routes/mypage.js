const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/mypage', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'mypage.html'));
});

module.exports = router;