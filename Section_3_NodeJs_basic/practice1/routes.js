const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Shop</title></head>');
        res.write('<body><form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/add-product' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
            console.log(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First web page from node js!</title></head>');
    res.write('<body><h1>Hello From Node.Js Server!</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;