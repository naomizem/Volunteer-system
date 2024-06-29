const mongoose = require('mongoose');

const prioritySchema = mongoose.Schema({
    _id: Number,
    PriorityCode: Number,
    PriorityName: String
},
    { collection: 'Priority' }
)

const model = mongoose.model('Priority', prioritySchema);

module.exports = model;