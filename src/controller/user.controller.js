const status = require('http-status');
const {userService} = require('../service');
const logger = require('../config/logger');
let { ApiResponse } = require ('../payload/ApiResponse');
let {handleAsync} = require('../utils/util');

const getAll = handleAsync(async (req, res) =>{
     usersData = await userService.getAll();
    logger.info('gell all data')
    return res.status(status.OK).send(new ApiResponse(status.OK,'All Users',usersData))
});

//  get user
const getUser = handleAsync(async (req, res) =>{
    let resp = await userService.isIdExist(req.params.userid);
    if(resp){
        let usersInfo = await userService.getUser(req.params.userid);
        logger.info('gell single data by'+req.params.userid)
        return res.status(status.OK).send(new ApiResponse(status.OK,'fetch single user with id:'+req.params.userid,usersInfo))
    }
    

});

// create user
const updateUser = handleAsync(async (req, res) =>{
    let data = req.body;
    let response = await userService.isIdExist(data.userid);
    if (response){
        let resp = userService.updateUser(data);
        return res.status(status.OK).send(new ApiResponse(status.OK,'updated successfully'))

    }
});

// delete user
const deleteUser = handleAsync(async (req, res) =>{
    let resp = await userService.isIdExist(req.params.userid);
    if (resp){
    logger.info('delete user data with email '+req.params.userid)
    resp = userServices.deleteUser(req.params.userid);
    return  res.status(status.OK).send(new ApiResponse(status.OK,'deleted successfully'));
    }
   
});
const createUser = handleAsync(async (req, res) =>{
    let data = req.body;
    let resp = await userService.isEmailExist(data.email);
    if (resp){
    resp = userServices.createUser(data);
    return res.status(status.OK).send(new ApiResponse(status.NOT_ACCEPTABLE,'new user created'));
}
});

const login = handleAsync(async (req,res) => {
    let email = req.body.email;
    let password = req.body.password;
    let loginResponse = await userService.login(email,password);

    // let message = res.__('loginSuccess', email);
    res.status(status.OK).send(new ApiResponse(status.OK,'login successfully',loginResponse))
});


module.exports = {
    getAll,
    getUser,
    updateUser,
    deleteUser,
    createUser,
    login
    
}