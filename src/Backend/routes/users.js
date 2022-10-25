const express = require('express');
const router = express.Router();

const User = require('../models/users');

router.get('/', function(req, res) {
  const newUser = new User({
    firstname: 'Ademo',
    lastname: 'PNL',
    email: 'ademoPNL@onizuka.fr',
    address: '1000 rue de la paix',
    phoneNumber: '1000 1000 1000',
    password: 'password',
    favoriteRecipes: [],
    paymentInfo: {},
    location: {},
    favoriteIngredients: [],
    favoriteCuisines: [],
    searchHistory: [],
  });

  res.send(`New user created ${newUser["firstname"]}`);
});

router.post('/', function(req, res) {
  res.send("POST on users page");
})

module.exports = router;