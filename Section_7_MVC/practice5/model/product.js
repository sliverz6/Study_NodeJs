const products = [];

module.exports = class Product {
    constructor(title) {
        this.title
    }

    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}