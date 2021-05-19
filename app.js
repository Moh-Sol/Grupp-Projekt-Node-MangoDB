const express = require('express')
const app = express()
const router = require('./routers/apiRouter')
const productsRouter = require('./router/products');
const mongoose = require('mongoose');
require('dotenv').config();


app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.use('/api', router)
app.use('/api', productsRouter);




// connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to db')
);

module.exports = app;
