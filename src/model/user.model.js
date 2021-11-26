const db = require('../config/database')
// all users
const getAll = async () => {
    return await db.executeQuery('select * from users where active = 1');
}

// get user by email and password
const getUserByEmailAndPassword = async (email,password) => {
    let query = `SELECT U.USERID, U.FULLNAME, U.EMAIL, R.ROLENAME
    FROM USERS U
             INNER JOIN USERROLE UR on U.USERID = UR.userId
             INNER JOIN ROLES R on UR.roleId = R.ROLEID
    WHERE EMAIL = '${email}'
      AND PASSWORD = '${password}'
      AND ACTIVE = 1`;
    return await db.executeQuery(query);
}
// get single user
const getUser = async (userid) => {
    let qry = 'select * from users where userid = '+userid;
    console.log(qry);
    return await db.executeQuery(qry);
}
// update
const updateUser = async (user) => {
    let id = user.userid;
    let email = user.email;
    let password = user.password;
    let fullName = user.fullname;
    let active = 1;
    let result = await db.executeQuery(`update USERS set EMAIL = '${email}', PASSWORD = '${password}', FULLNAME = '${fullName}', ACTIVE = '${active}' where userid = '${id}'`);
                                       
    if (result.rowsAffected === 1)
        return true;
    return false;
}

// is email exists
const isEmailExist = async (email) => {
   let qry = `select *from users where email = '${email}'`;
    return await db.executeQuery(qry);
    // return userData.filter(d=> d.email == email).length;
}

// is user id exists
const isIdExist = async (id) => {
    let qry = 'select *from users where userid = '+id;
    return await db.executeQuery(qry);
    // return userData.filter(d=> d.email == email).length;
}

// delete user
const deleteUser = async (id) => {
    // newjson = userData.filter(d=> d.email == email);
    // newjson.map(function (value,index) {
    //    userData.splice(index,1);
    // });
    let qry = 'delete from users where userid='+id;
    let resp = await db.executeQuery(qry);
    if (resp.rowsAffected === 1)
    return true;

return false;
}

// create new user
const create = async (user) => {
    let email = user.email;
    let password = user.password;
    let fullName = user.fullName;
    let active = 1;
    let result = await db.executeQuery(`INSERT INTO USERS (USERID, EMAIL, PASSWORD, FULLNAME, ACTIVE)
                                        VALUES (USER_SEQ.nextval, '${email}', '${password}', '${fullName}','${active}')`
                                        );
    if (result.rowsAffected === 1)
        return true;
    return false;
}
module.exports = {
    getAll,
    getUser,
    isEmailExist,
    isIdExist,
    updateUser,
    deleteUser,
    getUserByEmailAndPassword,
    create

}