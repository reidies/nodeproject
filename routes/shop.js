// const express = require('express');
// const path = require('path');
// const router = express.Router();
// const rootDir = require('../util/path');

// router.use('/', (req, res, next) =>{
//     console.log(' in another middleware');
//     res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

// });

// module.exports = router;


const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const productController = require('../controllers/products')

const router = express.Router();

router.get('/', productController.getProducts );
router.get('/products', productController.getProducts );
router.get('/cart', productController.getProducts );
router.get('/checkout', productController.getProducts );

module.exports = router;
