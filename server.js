// const express = require("express");
// const cart = require('./cart');

// const app = express();
// app.use('/', cart);

// const port = 3000;
// app.listen(port, () => console.log(`Listening on port: ${port}.`));

const { Router } = require('express');
const express = require('express');
const router = express();
const port = 3000;
const cartItems =[
    {
        id: 'International',
        product: 'Chili',
        price: 27.00,
        quantity: 15,
    },

    {
        id:'Produce',
        product: 'Bananas',
        price:80.00,
        quantity: 1,
    },

    {
        id: "Specialty",
        product:'Wine',
        price:100.00,
        quantity:1,
    },

    {   
        id: 'Grocery',
        product: 'Cookies',
        price: 79.00,
        quantity: 5,

    },
];
router.get('/cart-items', (req, res) => {
    res.send(cartItems[0])
});

router.post("/cart-items", (req, res) => {
    console.log(req.body)
    cartItems.push({
        id: cartItems, length + 1,
        product: req.body.product,
        price:req.body.price,
        quantity: req.body.quantity,
    })
})

router.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});