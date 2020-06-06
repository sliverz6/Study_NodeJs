const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mypageRoutes = require('./routes/mypage');
const loginRoutes = require('./routes/login');
const mainRoutes = require('./routes/main');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mypageRoutes);
app.use(loginRoutes);
app.use(mainRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);