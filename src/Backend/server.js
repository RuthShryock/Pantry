require('dotenv').config();

// TODO: replace with env vars
const dbURL = "mongodb+srv://APIAccess:apiteam123456@cop4331-largeproject-pa.yxoncp7.mongodb.net/?retryWrites=true&w=majority";
const port = 3001;

const express = require('express');
const app = express();
const bodyParser = require('body-parser').json();

const mongoose = require('mongoose');
const mongoclient = require('mongodb').MongoClient;
const client = new mongoclient(dbURL);
client.connect();

// Connect to the database
mongoose.connect(dbURL)
        .then(() => {
            console.log('-----in the db and ready to go------');
        })
        .catch((err) => {
            console.log(err);
        });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('-----DB opening-----successfully connected to the database'));

// Endpoints
app.get('/', bodyParser, (req, res) => {
    res.send("Hello world!");
});

const signup = require('./routes/signup');
app.use('/signup', signup);

const login = require('./routes/login');
app.use('/login', login);

const users = require('./routes/users');
app.use('/users', users);

app.listen(port, () => {
    console.log('-----PORT OPEN---SERVER CHECK Valid------')
});