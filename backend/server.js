const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const app = express();
const connectDB = require('./config/db');
const products = require('./data/products');

dotenv.config();

connectDB();

app.get('/', (req, res) => {
    res.send("Api is running...")
})

// getting all the products
app.get('/api/products', (req, res) => {
    res.json(products)
})

// getting a single product
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    if (product){
        res.status(200).json(product);
    } else {
        res.json({
            error: true,
            errorType: "404",
            message: "Product is not found!"
        })
    }
    res.status(200).json(product);
})

const port = 5000 || process.env.PORT;

app.listen(port,console.log(`Server is running at port: ${port}`.yellow.bold))