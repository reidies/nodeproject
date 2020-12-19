// const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');

// const router = express.Router();

// // admin/add-product (get)
// router.get('/add-product', (req, res, next) =>{
//     //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>');
//     res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
// });

// // admin/product (post)
// router.post('/product', (req, res, next) =>{
//     console.log(req.body);
//     res.redirect('/');
// });

// module.exports = router;

const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const productController = require('../controllers/products')


const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', productController.getAddProduct );

// /admin/products => GET
router.get('/products', productController.getAddProduct );

// /admin/add-product => POST
router.post('/add-product', productController.postAddProduct);



module.exports = router;
//exports.products = products;
