const status = require("http-status");
const {operationService} = require("../service");
const {ApiResponse} = require("../payload/ApiResponse");





// get countries
const getCountries = async (req, res) => {
    let result = await operationService.getCountries();
    res.status(status.OK)
    .send(new ApiResponse(status.OK, 'ALL countries', result));

}

// get currencies
const getCurrencies = async (req, res) => {
    let result = await operationService.getCurrencies();
    res.status(status.OK)
    .send(new ApiResponse(status.OK, 'currencies', result));
}

// get currency
const getCurrency = async (req, res) => {
    let countryId = req.params.countryid;
    let result = await operationService.getCurrency(countryId);
    res.status(status.OK)
    .send(new ApiResponse(status.OK, 'single currency', result));
}

// get state
const getState = async (req, res) => {
    let countryId = req.params.countryid;
    let result = await operationService.getState(countryId);
    res.status(status.OK)
    .send(new ApiResponse(status.OK, 'single state', result));
}

// get city
const getCity = async (req, res) => {
    let countryId = req.params.countryid;
    let stateid = req.params.stateid;
    let result = await operationService.getCity(countryId,stateid);
    res.status(status.OK)
    .send(new ApiResponse(status.OK, 'city', result));

}

// get status
const getStatus = async (req, res) => {
    let result = await operationService.getStatus();
    res.status(status.OK)
    .send(new ApiResponse(status.OK, 'status', result));

}




module.exports = {
    getCountries,
    getStatus,
    getCity,
    getState,
    getCurrency,
    getCurrencies

}