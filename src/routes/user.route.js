let express = require('express');
let routers = express.Router();
let {userController} = require('../controller')
let {autherization,authentication} = require('../middlewares/auth')
let role = require('../roles/role')
routers.post('/login', userController.login);
routers.post('/create',autherization,authentication(role.addUser), userController.createUser);
routers.get('/getAll',autherization,authentication(role.viewUser), userController.getAll);
routers.get('/getUser/:userid',autherization,authentication(role.viewUser), userController.getUser);
routers.post('/update',autherization,authentication(role.updateUser), userController.updateUser);
routers.get('/delete/:userid',autherization,authentication(role.deleteUser), userController.deleteUser);
module.exports = routers;