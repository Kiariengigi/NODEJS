const path = require('path'); 
const User = require('./models/user'); 
const userDao = require('./dao/userDao'); 
const productDao = require('./dao/productDao');
const express = require("express");
const mysql = require("mysql2");
const app = express(); 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",        
    password: "Pwaweru@@4",        
    database: "usiu_form" 
});
const PORT = 3000; 
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.json()); 
app.post('/api/products', async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const product = new Product(name, description, price, stock);
        product.validate();
        const id = await productDao.save(product, pool);
        res.status(201).json({ id, message: 'Product created successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.post('/api/users', async (req, res) => { 
try { 
const { name, email, phone } = req.body; 
const user = new User(name, email, phone); 
const id = await userDao.save(user); 
res.send(`User saved with ID: ${id}`); 
} catch (err) { 
console.error(err); 
res.status(500).send('Error saving user'); 
} 
}); 
app.listen(PORT, () => { 
console.log(`Server running at http://localhost:${PORT}`); 
}); 