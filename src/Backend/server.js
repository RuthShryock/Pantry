// server connection code
// schemas are within the models folder
// the meal api is : https://www.themealdb.com/api.php 

require('dotenv').config();

const dbURL = "mongodb+srv://APIAccess:apiteam123456@cop4331-largeproject-pa.yxoncp7.mongodb.net/?retryWrites=true&w=majority";
const port = 3001;

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const mongoclient = require('mongodb').MongoClient;
const client = new mongoclient(dbURL);
client.connect();

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// connect to the database 
mongoose.connect(dbURL)
        .then(() => {
            // if all is ok we will be here
            // start the server
            // listen to requests
            console.log('-----in the db and ready to go------');
            app.listen(port, () => {console.log('-----PORT OPEN---SERVER CHECK Valid------')});
        })
        // if we are not here something went wrong
        .catch((errorHere) => {
            console.log(errorHere)
        }); 

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('-----DB opening-----successfully connected to the database')); 
