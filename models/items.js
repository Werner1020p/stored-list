// Your code goes here
const mongoose = require('mongoose');

// create the structure for each document in MongoDB
const itemSchema = new mongoose.Schema({
    category: String,
    fact: String
});

// create the model
const Item = mongoose.model('Item', itemSchema);

// export the model so we can use it in routes/index.js
module.exports = Item;