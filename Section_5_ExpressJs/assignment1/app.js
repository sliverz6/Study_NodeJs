const express = require('express');

const app = express();

app.use('/user', (req, res, next) => {
    console.log('First Middleware!');
    res.send('<h1>User Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Second Middleware!');
    res.send('<h1>Main Page</h1>');
});

app.listen(3000);