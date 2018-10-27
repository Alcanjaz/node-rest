const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://alcanjaz:'+ process.env.MONGO_ATLAS_PW +'@rest-shop-db-shard-00-00-dj5pf.gcp.mongodb.net:27017,rest-shop-db-shard-00-01-dj5pf.gcp.mongodb.net:27017,rest-shop-db-shard-00-02-dj5pf.gcp.mongodb.net:27017/test?ssl=true&replicaSet=rest-shop-db-shard-0&authSource=admin&retryWrites=true',{useNewUrlParser: true})
.then(db => console.log('DB connected'))
.catch(err =>console.error(err));
mongoose.set('useCreateIndex', true);

const producRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/users');

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });

//routes which should handle request
app.use('/products', producRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;