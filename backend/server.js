const express = require('express')

const app = express();
const products = require('./data/products');

app.get('/', (req, res) => {
    res.send("Api is running...")
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

port = 5000 || process.env.PORT;

app.listen(port,console.log(`Server is running at port: ${port}`))