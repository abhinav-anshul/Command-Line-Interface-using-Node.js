const mongoose = require('mongoose');

//customer schema
const customerSchema = mongoose.Schema({
    firstname: { type: String},
    lastname: { type: String},
    phone: { type: String},
    email: { type: String}
});


//define an export
module.exports = mongoose.model('Customer', customerSchema );
