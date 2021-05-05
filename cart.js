// const express = require('express');
// const cart = express.Router();
// cart.use(express.json());


// cart.post("/id", (req, res) => {
//     console.log(req.body);
//     res.json('Adding an id..');
// });

// cart.put('/product', (req, res) => {
//     res.json('Adding a product..');
// });

// cart.delete("/price", (req, res) => {
//     res.json("Adding a price..");
// });

// cart.get('/quantity', (req, res) => {
//     console.log(req.query.keyword);
//     res.json('Adding a quantity');
// });

// module.exports = cart;

const express = require('express');

const cart = express.Router();
cart.use(express.json());

const cartItems =[
    {
        id: 1,
        product: 'Chili',
        price: 27.00,
        quantity: 15,
    },

    {
        id:2,
        product: 'Bananas',
        price:80.00,
        quantity: 1,
    },

    {
        id: 3,
        product:'Wine',
        price:100.00,
        quantity:1,
    },

    {   
        id: 4,
        product: 'Cookies',
        price: 79.00,
        quantity: 5,

    },
];


cart.get('/cart-items', (req, res) => {
    for(carts of cartItems);
    res.json(carts[0]);
    
});

module.exports = cart;
