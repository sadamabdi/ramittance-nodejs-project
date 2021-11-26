const db = require('../config/database');

// get countries
const getCountries = async () => {
    let qry = 'select *from country';
    let response = await db.executeQuery(qry);
    return response;

}

// get currencies
const getCurrencies = async () => {
    let qry = 'select *from currencies';
    let response = await db.executeQuery(qry);
    return response;
}

// get currency
const getCurrency = async (countryId) => {
    let qry = 'select *from currencies where countryid = '+countryId;
    let response = await db.executeQuery(qry);
    return response;
}

// get state
const getState = async (countryId) => {
    let qry = 'select * from state where countryid = '+countryId;
    let response = await db.executeQuery(qry);
    return response;
}

// get city
const getCity = async (countryId,stateId) => {
    let qry = `select *from cities where stateid =${stateId} or countryid = ${countryId}`;
    let response = await db.executeQuery(qry);
    return response;
}

// get status
const getStatus = async () => {
    let qry = `select * from status`;
    let response = await db.executeQuery(qry);
    return response;
}



module.exports = {
    getCountries,
    getStatus,
    getCity,
    getState,
    getCurrency,
    getCurrencies

}