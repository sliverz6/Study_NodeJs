const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        let products;
        if (!err) {
            products = JSON.parse(fileContent);
        } else {
            products = []; 
        }
        cb(products);
    });
};

module.exports = class Product {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString();
        getProductFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static getOtherProducts(id, cb) {
        Product.fetchAll(products => {
            const otherProducts = products.filter(p => p.id !== id);
            cb(otherProducts);
        });
    }

    static findById(id, cb) {
        getProductFromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }

    static fetchAll(cb) {
        getProductFromFile(cb);
    }
}