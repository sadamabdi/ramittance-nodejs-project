const db = require('../config/database');

const create = async (user) => {
  let name = user.name;
  let phone = user.phone;
  let country = user.country;
  let state = user.state;
  let city = user.city;
  let qry =  `insert into customers values(cus_seq.nextval,'${name}','${phone}',${country},${state},${city})`;
  let result = await db.executeQuery(qry);
  if (result.rowsAffected === 1)
  return true;
return false;

}
// get user by email and password
const getCustomerByPhoneAndPassword = async (phone,password) => {
    let query = `select customerid,customername,phone,co.countryid,countryname from customers c,country co where c.countryid = co.countryid 
    and phone = '${phone}' and password = '${password}'`;

    return await db.executeQuery(query);
}

const getCustomer = async (id,type) =>{
  let query =''
  if (type == 'equal'){
   query = `select c.customerid,currency_code,customername,co.countryid,countryname,rates  from customers c,country co,currencies cu where 
  c.countryid = co.countryid and co.countryid = cu.countryid and c.customerid = ${id}`
  }
  else{
   query = `select c.customerid,currency_code,customername,co.countryid,countryname,rates  from customers c,country co,currencies cu where 
  c.countryid = co.countryid and co.countryid = cu.countryid and c.customerid != ${id}`
  }
  return db.executeQuery(query)
}

// is email exists
const isPhoneExist = async (phone) => {
  let qry = `select *from customers where phone = '${phone}'`;
   return await db.executeQuery(qry);
   // return userData.filter(d=> d.email == email).length;
}

module.exports = {
    create,
    getCustomerByPhoneAndPassword,
    isPhoneExist,
    getCustomer
}