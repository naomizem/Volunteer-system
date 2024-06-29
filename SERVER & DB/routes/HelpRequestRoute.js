const express = require('express');
const router = express.Router();

const  controller= require('../controllers-bl/HelpRequestController');

router.get('/', async (req, res, next) => {
    try {
        const result = await controller.getAll(req.query);
        res.json(result);
    } catch (error) {
        next(error);
    }
})


router.put('/:HelpRequestId', async (req, res, next) => {
    try {
        let result = await controller.update(req.params.HelpRequestId, req.body);
        res.status(200).send(result);
    } catch (error) {
        if (error.message.startsWith('Invalid help request Id')) {
            res.status(404).send(` help request  ${req.params.HelpRequestId} dont exists`);  
        }
        if (error.message.startsWith('The help request has a volunteer')) {
            res.status(404).send(`The help request ${req.params.HelpRequestId} has a volunteer`);  
        }  
        else next(error);
    }
});



module.exports = router;