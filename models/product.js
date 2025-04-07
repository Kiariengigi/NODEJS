class Product {
    constructor(name, description, price, stock) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }

    validate() {
        if (!this.name || typeof this.name !== 'string') {
            throw new Error('Invalid product name');
        }
        if (this.price <= 0 || isNaN(this.price)) {
            throw new Error('Invalid price');
        }
        if (this.stock < 0 || isNaN(this.stock)) {
            throw new Error('Invalid stock quantity');
        }
    }
}

module.exports = Product;
