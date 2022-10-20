
const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // store the date the user was created
    date: {
        type: Date,
        default: Date.now
    },
    profilePicture: {
        type: String,
        // did set it to a default picture 
        // we will have a folder that has images for avatars and stuff 
        // which I will encode and then we will have for each user a picture here
        default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    favoriteRecipes: {
        type: Array,
        // contingent to the content of the mealDB we chose 
        // each user will have a set of favorite recipes which we plan to 
        // store in an array of objects based on the name of the revipe 
        // or a codified id (we have both options)
        default: []
    },
    paymentInfo: {
        type: Object,
        // contingent to the payment API we chose
        // each user will have a set of payment info which we plan to
        // store in an object
        default: {}
    },
    location: {
        type: Object,
        // contingent to the GoogleMap API We chose 
        // each user will have a set of location info which we plan to
        // store in an object it helps us locate local businesses around them to recommend recipes
        default: {}
    },
    favoriteIngredients: {
        type: Array,
        required: true,
        default: []
    },
    favoriteCuisines: {
        type: Array,
        required: true,
        default: []
    },
    searchHistory: {
        type: Array,
        default: []
    },
    profileDescription: {
        type: String,
        default: ''
    },
}, {collection: 'User'}, {timestamps: true});


// export the model, so we can use it in other files
// this is for the users
module.exports = mongoose.model('User', userSchema);


// Attention: in other files we will have to import the model like this:
// const User = require('../models/users'); (just as a side note : ))
// for all the files that will need it 

// and then we will be able to use it like this:

User.find({}).then((users) => {
     console.log(users);
});

// or create the user like this:
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
// or 
const newUser2 = await User.create({
    firstname: 'Ademo',
    lastname: 'PNL',
    email: 'ademoPNL@onizuka.fr',
    address: '1000 rue de la paix',
    phoneNumber: '1234567890',
    password: 'password',
    favoriteRecipes: [],
    paymentInfo: {},
    location: {},
    favoriteIngredients: [],
    favoriteCuisines: [],
    searchHistory: [],
});

// and then we can save it like this:
newUser.save().then((user) => {
     // code goes here
});

// and then we can find the user by email like this:
User.findOne({email: 'email'}).then((user) => {
      // code goes here
});

// and then we can update the user like this:
User.findOneAndUpdate({email: 'email'}, {firstname: 'Jane'}).then((user) => {
      // code goes here
});

// and then we can delete the user like this:
User.findOneAndDelete({email: 'email'}).then((user) => {
      // code goes here
});

// and then we can find the user by id like this:
User.findById('id').then((user) => {
      // code goes here
});

// and then we can update the user by id like this:
User.findByIdAndUpdate('id', {firstname: 'Jane'}).then((user) => {
      // code goes here
});

// and then we can delete the user by id like this:
User.findByIdAndDelete('id').then((user) => {
     // code goes here
});

// and then we can find the user by id and update the favoriteRecipes like this:
User.findByIdAndUpdate('id', {$push: {favoriteRecipes: 'recipe'}}).then((user) => {
     // code goes here
});

// and then we can find the user by id and update the favoriteIngredients like this:
User.findByIdAndUpdate('id', {$push: {favoriteIngredients: 'ingredient'}}).then((user) => {
     // code goes here
});

// and then we can find the user by id and update the favoriteCuisines like this:
User.findByIdAndUpdate('id', {$push: {favoriteCuisines: 'cuisine'}}).then((user) => {
     // code goes here
});

// and then we can find the user by id and update the searchHistory like this:
User.findByIdAndUpdate('id', {$push: {searchHistory: 'search'}}).then((user) => {
     // code goes here
});

// and then we can find the user by id and update the paymentInfo like this:
User.findByIdAndUpdate('id', {$set: {paymentInfo: {}}}).then((user) => {
      // code goes here
});

// and then we can find the user by id and update the location like this:
User.findByIdAndUpdate('id', {$set: {location: {}}}).then((user) => {
      // code goes here
});

// and then we can find the user by id and update the profilePicture like this:
User.findByIdAndUpdate('id', {$set: {profilePicture: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'}}).then((user) => {
     // code goes here
});

// and then we can find the user by id and update the lastLogin like this:
User.findByIdAndUpdate('id', {$set: {lastLogin: Date.now()}}).then((user) => {
     // code goes here
});

// and then we can find the user by id and update the password like this:
User.findByIdAndUpdate('id', {$set: {password: 'password'}}).then((user) => {
     // code goes here
});

// and then we can find the user by id and update the phoneNumber like this:
User.findByIdAndUpdate('id', {$set: {phoneNumber: '1234567890'}}).then((user) => {
      // code goes here
});

// and then we can find the user by id and update the address like this:
User.findByIdAndUpdate('id', {$set: {address: 'ademoPNL@onizuka.fr'}}).then((user) => {
     // code goes here
});

// and then we can find the user by id and update the lastname like this:
User.findByIdAndUpdate('id', {$set: {lastname: 'PNL'}}).then((user) => {
     // code goes here
});

// and then we can find the user by id and update the firstname like this:
User.findByIdAndUpdate('id', {$set: {firstname: 'Ademo'}}).then((user) => {
     // code goes here

});



   


