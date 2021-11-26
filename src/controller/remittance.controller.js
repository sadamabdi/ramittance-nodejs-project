const status = require("http-status");
const {remittanceService} = require("../service");
const {ApiResponse} = require("../payload/ApiResponse");
const {handleAsync} = require("../utils/util");





const createRamittance = handleAsync(async (req, res) => {
    
    let  data = req.body;
    let  result = await remittanceService.createRamittance(data)  
    res.status(status.OK)
        .send(new ApiResponse(status.OK, 'message', 'thanks you send money to '+data.sender));

});

module.exports = {
    createRamittance
}