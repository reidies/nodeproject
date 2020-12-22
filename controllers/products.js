// const products = [];

const Product = require('../models/product');




  exports.getProducts = (req, res, next) => {
    //   console.log('shop.js', adminData.products);
    //   res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    // const products = adminData.products;
  // const products =  Product.fetchAll();
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });
    }