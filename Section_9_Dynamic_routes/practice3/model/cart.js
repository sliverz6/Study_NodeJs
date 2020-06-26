const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, price) {
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], total: 0 };
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products.find(prod => prod.id === id);
            if (existingProduct) {
                cart.products[existingProductIndex].amount = cart.products[existingProductIndex].amount + 1;
            } else {
                cart.products.push({ id: id, amount: 1 });
            }
            
            cart.total = cart.total + +price;

            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }
}