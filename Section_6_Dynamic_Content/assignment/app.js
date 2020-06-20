const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');
const inputData = require('./routes/input');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(inputData.routes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Error</h1>');
});

app.listen(3000);