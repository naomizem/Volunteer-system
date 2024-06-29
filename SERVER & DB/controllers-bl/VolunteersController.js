const Controller = require('./Controller');
const VolunteersService = require('../services-dal/VolunteersService')

class VolunteersController extends Controller {
    constructor() {
        super(VolunteersService)
    }  
}

let volunteersController = new VolunteersController();
module.exports = volunteersController