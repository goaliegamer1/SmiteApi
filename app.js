const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const testRoutes = require('./api/routes/test');

mongoose.connect('mongodb+srv://admin:adminpassword@smiteapidatabase.p4slf.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/test', testRoutes);

module.exports = app;