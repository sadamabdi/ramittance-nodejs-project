const express = require('express');
const router = express.Router();
const {operationController} = require('../controller');
const r = require('../roles/role')
const {autherization,authentication}= require('../middlewares/auth')

router.get('/getcounties',autherization,authentication(r.viewOper), operationController.getCountries);
router.get('/getcurrencies',autherization,authentication(r.viewOper), operationController.getCurrencies);
router.get('/getcurrency/:countryid',autherization,authentication(r.viewOper), operationController.getCurrency);
router.get('/getstate/:countryid', autherization,authentication(r.viewOper),operationController.getState);
router.get('/:countryid/:stateid',authentication(r.viewOper), operationController.getCity);
router.get('/status', operationController.getStatus);
// router.get('/:userId', userController.getUserById); //userId validation


module.exports = router;