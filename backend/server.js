const express = require('express')

const app = express();
const products = require('./data/products');

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

port = 5000 || process.env.PORT;

app.listen(port,console.log(`Server is running at port: ${port}`))