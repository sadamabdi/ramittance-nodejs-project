const status = require('http-status');
const {ApiError} = require('../payload/apiError')
const jwt = require('jsonwebtoken');
const roles = require('../roles/role');
const permission = require('../model/permission.modal')
const NodeCache = require('node-cache');
const myCache = new NodeCache();
const authentication = (per) => (req,res,next) =>{
  let token = myCache.get("myKey");
  let userid = token.payload.userid;
  let role = token.payload.role;
  console.log(role);
  let usrPermissions =  permission.getUserPermission(role).then(res=>{
     let perm = res.filter(d => d.permissionname.toLowerCase() == per.toLowerCase() )
     if (perm.length > 0) {
        return next();
     }
     next(new ApiError(401,`you haven't any permission to ${per} `));
  })
};


const autherization = (req,res,next) =>{
const authHeader = req.headers.authorization;

if (!authHeader){
    throw new ApiError(401,'token required');
}
const token = authHeader.split(' ')[1];
var response = jwt.verify(token, process.env.JWT_SECRET_KEY);
var decoded = jwt.decode(token, {complete: true});
if (response){
    myCache.set("myKey", decoded);
    return next();
}

    throw new ApiError(401,'you have not permission');
}

module.exports = {
    autherization,
    authentication
};