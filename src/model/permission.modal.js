let db = require('../config/database')


let allPermissions = async () =>{
let qry = ' select *from permissions';
let response = await db.executeQuery(qry);
return response;
}


let getUserPermission = async (rolename) =>{
    let qry = `select distinct r.roleid,r.rolename,p.permissionname from roles r,permissions p,rolepermissions rp
    where  r.roleid=rp.roleid and p.permissionid=rp.permissionid and r.rolename = '${rolename}'`;
    let response = await db.executeQuery(qry);
    return response;
}

module.exports = {
    allPermissions,
    getUserPermission
}