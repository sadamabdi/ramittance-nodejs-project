const status = require("http-status");
const {customerService} = require("../service");
const {ApiResponse} = require("../payload/ApiResponse");
const {handleAsync} = require("../utils/util");




const register = handleAsync(async (req, res) => {

   
    let data = req.body;
    // console.log(data);
    let resp = await customerService.isPhoneExist(data.phone);
    if (resp){
    resp = customerService.register(data);
    return res.status(status.OK).send(new ApiResponse(status.OK,'new customer created'));
}

});
const login = handleAsync(async (req, res) => {

   
    let data = req.body;
    // console.log(data);
    let resp = await customerService.login(data.phone,data.password);
    return res.status(status.OK).send(new ApiResponse(status.OK,'login successfully',resp));

});

module.exports = {
    register,
    login
}