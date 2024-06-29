const volunteersModel = require('../models/volunteersModel');


class VolunteersService {


    getAll() {
        let result = volunteersModel.find({});
        return result;
    }


    async insert(newVolunteer) {
        debugger
        
        const foundVolunteer = await volunteersModel.findOne({ _id: newVolunteer.id });
        if (foundVolunteer) {
            throw new Error('Invalid new volunteer id');
        } else {
            const createdVolunteer = await volunteersModel.create(newVolunteer);
            return createdVolunteer;
        }
    }

}
let volunteersService = new VolunteersService();
module.exports = volunteersService;