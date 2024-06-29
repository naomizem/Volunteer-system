const mongoose = require('mongoose');

const helpRequestsSchema = mongoose.Schema({
    _id: Number,
    Location: { locationCode: String },
    problem_description: String,
    contact_phone: String,
    Status: { typeOfStatus: String },
    number_of_people_stuck: Number,
    Priority: { priorityName: String },
    Volunteers: { id: Number }
},
    { collection: 'HelpRequests' }
)

const model = mongoose.model('HelpRequests', helpRequestsSchema);

module.exports = model;
