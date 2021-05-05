// const express = require("express");
// const cart = require('./cart');

// const app = express();
// app.use('/', cart);

// const port = 3000;
// app.listen(port, () => console.log(`Listening on port: ${port}.`));

// const { Router } = require('express');
// const express = require('express');
// const app = express();
// const port = 3000;

// app.use = (express.json);

// const cartItems =[
//     {
//         id: 1,
//         product: 'Chili',
//         price: 27.00,
//         quantity: 15,
//     },

//     {
//         id:2,
//         product: 'Bananas',
//         price:80.00,
//         quantity: 1,
//     },

//     {
//         id: 3,
//         product:'Wine',
//         price:100.00,
//         quantity:1,
//     },

//     {   
//         id: 4,
//         product: 'Cookies',
//         price: 79.00,
//         quantity: 5,

//     },
// ];
// app.get('/cart-items', (req, res) => {
//     res.json(cartItems[0])
// });

// router.post("/cart-items", (req, res) => {
//     console.log(req.body)
//     cartItems.push({
//         id: cartItems, length + 1,
//         product: req.body.product,
//         price:req.body.price,
//         quantity: req.body.quantity,
//     })
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// });

// module.exports = router;

const express = require('express');
const cart = require('./cart');
const app = express();
// app.use('/', cart());
const port = 3000;


const carts = express.Router();
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

app.listen(3000, () => console.log(`Cart app is listening to ${port} the hard way. If you know what I mean.`));