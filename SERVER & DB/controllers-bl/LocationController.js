const Controller = require('./Controller');
const locationService = require('../services-dal/LocationService')

class LocationController extends Controller {
    constructor() {
        super(locationService)
    }  
}

let locationController= new LocationController();
module.exports = locationController