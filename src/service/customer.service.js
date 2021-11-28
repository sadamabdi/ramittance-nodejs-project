const logger = require("../config/logger");
const {customerModel} = require("../model");
const {ApiError} = require('../payload/ApiError')
var jwt = require('jsonwebtoken');

const isPhoneExist = async (phone) => {

    let  resp = await customerModel.isPhoneExist(phone);
    if (resp.length > 0){
        throw new ApiError(401,phone + 'This phone already exists');
    }
    return true;
}


const register = async (customer) => {
    let resp = await customerModel.create(customer);
    if (!resp) {
        throw new ApiError(401,`something seems to be wrong`)
    }
    return resp;
  
}

const login = async (phone,password) => {

    let user = await customerModel.getCustomerByPhoneAndPassword(phone,password);
    if (user.length <= 0){
        throw new ApiError(401,`phone or password doesn't match`)
    }
    return  user;
    
    }

    const getCustomer = async (id,type) =>{
        let resp = await customerModel.getCustomer(id,type)
        return resp;
    }


module.exports = {
    isPhoneExist,
    register,
    login,
    getCustomer
}