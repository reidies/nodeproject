// //const http = require('http');
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// //const routes = require('./routes')

// const app  = express();

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(express.static(path.join(__dirname, 'public')))

// app.use('/admin',adminRoutes);
// app.use(shopRoutes);

// //page not found
// app.use((req, res, next) =>{
//     res.statusCode(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });

// // app.use('/', (req, res, next) =>{
// //     console.log(' in another middleware');
// //     res.send('<h1> hello from express </h1>');
// //  next();
// // });
// //const server = http.createServer(app);

// //server.listen(3001);

// app.listen(3000);

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');

const app = express();

// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts', defaultLayout:'main-layout', extname: 'hbs'}));
//app.set('view engine', 'pug'); //using pug
// app.set('view engine', 'hbs'); //using handlebars
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error')
const db= require('./util/database');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.getEror404);
// app.use((req, res, next) => {
//     //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
//     res.status(404).render('404', {pageTitle: 'Page Not Found'});
// });

app.listen(3000);

