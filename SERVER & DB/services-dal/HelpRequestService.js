const helpRequestsModel = require('../models/HelpRequestsModel');

class HelpRequestService {

get(id) {
    
    const foundVolunteersById = helpRequestsModel.findById(id);
    return foundVolunteersById;
}

getAll(queryParameters) {
    let result = helpRequestsModel.find({});
    if (queryParameters.status) {
        result = result.find({ 'Status.typeOfStatus': queryParameters.status })
    }
    if (queryParameters.location) {
        result = result.find({ 'Location.location_code': queryParameters.location })
    }
    if (queryParameters.priority) {
        result = result.find({ 'Priority.priorityName': queryParameters.priority })
    }
   
    return result;
}


async update(helpRequestId, volunteerCode) {
     debugger
    const helpRequestById = await helpRequestsModel.findOne({ _id: helpRequestId });

    if (!helpRequestById)
        throw new Error(`Invalid help request Id ${helpRequestId}!`)
    else if (helpRequestById.Volunteers.id != 0)
        throw new Error('The help request has a volunteer')
    else {
        await helpRequestById.updateOne({ _id: helpRequestId },{ $set: { "Volunteers.id": volunteerCode }}, { $set: { "Status.typeOfStatus": "inTreatment" } }
            )
    }
    return helpRequestById;
}

   
}
let helpRequestService = new HelpRequestService();
module.exports = helpRequestService