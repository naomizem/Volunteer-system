const Controller = require("./Controller");
const HelpRequestsService = require('../services-dal/helpRequestService')

class HelpRequestService extends Controller {
    constructor() {
        super(HelpRequestsService)
    }
}

let helpRequestService = new HelpRequestService();
module.exports = helpRequestService;