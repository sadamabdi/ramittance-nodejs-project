const {operationModel }= require('../model');

// get countries
const getCountries = async () => {
let result = await operationModel.getCountries();
return result;
}

// get currencies
const getCurrencies = async () => {
let result = await operationModel.getCurrencies();
return result;
}

// get currency
const getCurrency = async (countryId) => {
let result = await operationModel.getCurrency(countryId);
return result;

}

// get state
const getState = async (countryId) => {
    let result = await operationModel.getState(countryId);
    return result;
}

// get city
const getCity = async (countryId,stateId) => {
    let result = await operationModel.getCity(countryId,stateId);
    return result;
}

// get status
const getStatus = async () => {
    let result = await operationModel.getStatus();
     return result;
}




module.exports = {
    getCountries,
    getStatus,
    getCity,
    getState,
    getCurrency,
    getCurrencies

}