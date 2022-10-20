// server connection code
// schemas are within the models folder
// the meal api is : https://www.themealdb.com/api.php 

require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const mongoclient = require('mongodb').MongoClient;
const client = new mongoclient(process.env.DATABASE_URL);
client.connect();

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


// connect to the database 
mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            // if all is ok we will be here
            // start the server
            // listen to requests
            console.log('-----in the db and ready to go------');
            app.listen(process.env.PORT, () => {console.log('-----PORT OPEN---SERVER CHECK Valid------')});
        })
        // if we are not here something went wrong
        .catch((errorHere) => {
            console.log(errorHere)
        }); 

 const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('-----DB opening-----successfully connected to the database')); 
