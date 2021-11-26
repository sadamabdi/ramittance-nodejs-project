const {ramittanceModel} = require('../model');

const createRamittance = async (data) => {
    let resp = await ramittanceModel.createRamittance(data);
    if (!resp) 
        throw new ApiError(401,`something seems to be wrong`)
    return resp;
}



module.exports = {
    createRamittance
}