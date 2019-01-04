const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/user');

//mongoose.connect('mongodb://orean:' + 
//                process.env.MONGO_ATLAS_PW + 
//                '@node-rest-shop-shard-00-00-qqy8u.mongodb.net:27017,node-rest-shop-shard-00-01-qqy8u.mongodb.net:27017,node-rest-shop-shard-00-02-qqy8u.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin&retryWrites=true', 
//    {
//        useMongoClient: true
//    }
//)

 var url = 'mongodb://orean:' + 
 process.env.MONGO_ATLAS_PW + 
 '@node-rest-shop-shard-00-00-qqy8u.mongodb.net:27017,node-rest-shop-shard-00-01-qqy8u.mongodb.net:27017,node-rest-shop-shard-00-02-qqy8u.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin&retryWrites=true'



mongoose.connect(
    url, 
        {
            auth: {
                user: 'orean',
                password: '<your password>'
            },
            useNewUrlParser: true
        },
    function(err, client) {
        if (err) {
            console.log(err);
        }
    console.log('connected!!!');
    }
);
mongoose.Promise = global.Promise;
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-requested-With, Content_Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//routes which should handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});



module.exports = app;
