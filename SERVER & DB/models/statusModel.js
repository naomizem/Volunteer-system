const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
    _id:Number,
    typeOfStatus: Array
},
{collection:'Status'}
)

const model = mongoose.model('Status', statusSchema);

module.exports = model;