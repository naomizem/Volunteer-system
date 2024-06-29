const locationsModel = require('../models/locationModel');

class LocationService {


    getAll() {
        let result = locationsModel.find({});
        return result;
    }


}

let locationService = new LocationService();
module.exports = locationService;