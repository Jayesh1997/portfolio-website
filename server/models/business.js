let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    contact_name: String,
    contact_number: String,
    email_address: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('Business', businessModel);