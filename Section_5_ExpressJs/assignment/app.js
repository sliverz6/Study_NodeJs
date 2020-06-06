const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('First middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Second middleware');
//     res.send('<h1>Second middleware</h1>');
// });

app.use('/user', (req, res, next) => {
    res.send('<h1>User Page</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Main Page</h1>');
});

app.listen(3000);