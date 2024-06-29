const mongoose = require('mongoose');

const volunteersSchema = mongoose.Schema({
    _id: Number,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    list_of_specialization_types: Array
},

    { collection: 'Volunteers' }
)

const model = mongoose.model('Volunteers', volunteersSchema);

module.exports = model;