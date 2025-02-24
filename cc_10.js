// Task 1: Creating Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    
    updateStock(quantity) {
        this.stock -= quantity;
    }
}

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());
prod1.updateStock(3);
console.log(prod1.getDetails());

// Task 2: Creating Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = product.price * quantity;
        product.updateStock(quantity);
    }
    
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
}

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());
console.log(prod1.getDetails());


// Task 3: Creating Inventory Class
class Inventory {
    constructor() {
        this.products = [];
    }
    
    addProduct(product) {
        this.products.push(product);
    }
    
    getProductDetails() {
        return this.products.map(product => product.getDetails());
    }
       // Task 4: Implementing Order Management
       placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const order = new Order(orderId, product, quantity);
            this.orders.push(order);
            console.log(order.getOrderDetails());
        } else {
            console.log("Insufficient stock to place order.");
        }
    }
    
    listOrders() {
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    }

    // Task 5: Implementing Product Restocking
    restockProduct(productId, quantity) {
        const product = this.products.find(prod => prod.id === productId);
        if (product) {
            product.stock += quantity;
        } else {
            console.log("Product not found in inventory.");
        }
    }
}

// restock inventory
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.restockProduct(101, 10);

console.log(inventory.getProductDetails());
console.log(prod1.getDetails());



