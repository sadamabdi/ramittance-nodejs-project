const db = require('../config/database');

const createRamittance = async (user) => {
    let send = user.send;
    let recieve = user.reciever;
    let amount = user.amountinUSD;
    let convertedamount = user.convertedamount;
    let charge = user.charge;
    let payment = user.payment;
    let status = user.status;
   
    let query = `insert into remittance values(
        REMITID_SEQ.nextval, '${send}','${recieve}','${amount}','${convertedamount}','${charge}','${payment}','${status}',sysdate
    )`;

    let result = await db.executeQuery(query);
    if (result.rowsAffected === 1)
    return true;
  return false;
}



module.exports = {
    createRamittance
}


    