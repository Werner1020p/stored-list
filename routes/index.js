var express = require('express');
var router = express.Router();
const Items = require('../models/items');

/* GET home page. */
router.get('/', async function (req, res, next) {
    try {
        // get all documents from the MongoDB collection
        const items = await Items.find();

        // send them to the index.hbs page
        res.render('index', {
            items: items
        });
    } catch (error) {
        console.log('Error getting items from MongoDB:', error);
        next(error);
    }
});

module.exports = router;