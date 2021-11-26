const express = require('express');
const router = express.Router();
const {remittanceController} = require('../controller');
router.get('/createRamittance', remittanceController.createRamittance);

// router.get('/:userId', userController.getUserById); //userId validation


module.exports = router;