const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
    _id:Number,
    locationCode:String,
    location:String
},
{collection:'Location'}
)

const model = mongoose.model('Location', locationSchema);

module.exports = model;