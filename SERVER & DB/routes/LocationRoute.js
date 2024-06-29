const express = require('express');
const router = express.Router();

const  controller= require('../controllers-bl/LocationController');

router.get('/', async (req, res, next) => {
    try {
        const result = await controller.getAll();
        res.json(result);
    } catch (error) {
        next(error);
    }
})

module.exports = router;