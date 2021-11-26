const {userModel} = require('../model');
const jwt = require('jsonwebtoken');
const { ApiError } = require('../payload/ApiError');
const isEmailExist = async (email) => {

    let  resp = await userModel.isEmailExist(email);
    if (resp.length > 0){
        throw new ApiError(401,email + 'This email already exists');
    }
    return true;
}



const login = async (email,password) => {

    let user = await userModel.getUserByEmailAndPassword(email,password);
    if (user.length <= 0){
        throw new ApiError(401,`Email or password doesn't match`)
    }
    // console.log(user);
    const token = jwt.sign({userid:user[0].userid,role:user[0].rolename}, process.env.JWT_SECRET_KEY);
    // console.log(token);
    return  {'accesstoken':token,'users':user};
    
    }

const isIdExist = async (id) => {
    let  resp = await userModel.isIdExist(id);
    if (resp.length <= 0){
        throw new ApiError(401,id + ' not found ');
    }
    return true;
}
const createUser = (data) => {
    resp = userModel.create(data);
    if (!resp) {
        throw new ApiError(401,`something seems to be wrong`)
    }
    return resp;
}
const getAll = async () => {
    let resp =  await userModel.getAll();
    if (resp.length <= 0) {
        throw new ApiError(200,`No Data to display`)
    }
    return resp;
}
const getUser = async (id) => {
    let resp = await userModel.getUser(id);
    return resp;
}
const updateUser = (data) => {
    resp = userModel.updateUser(data);
    if (!resp) {
        throw new ApiError(401,`something seems to be wrong`)
    }
    return resp;
}
const deleteUser = (id) => {
    resp = userModel.deleteUser(id);
    if (!resp) {
        throw new ApiError(401,`not deleted something seems to be wrong`)
    }
    return resp;
}
module.exports = {
    isEmailExist,
    createUser,
    getAll,
    getUser,
    updateUser,
    deleteUser,
    isIdExist,
    login
    // getAllEmployee
}