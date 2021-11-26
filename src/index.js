require('dotenv').config();
const express = require('express');
//const morganMiddeware = require('./middlewares/morgan');
const logger = require('./config/logger');
const {ApiError} = require("./payload/ApiError");
const httpStatus = require('http-status');
//const helmet = require("helmet");
const cors = require("cors");
//const i18n = require('i18n')
//const cookieParser = require("cookie-parser");
const routes = require('./routes')

const app = express();
app.use(express.json())
app.use(cors())
const port = process.env.port;
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    
//     next();
//   });

app.use('/v', routes);
 // Unknown API Error Handling
app.use((req, res, next) => {

    let status = httpStatus.NOT_FOUND;
    let error = "Api not Found";
    res.status(status).send(new ApiError(status, error));
});

// All error handling exception middleware
app.use((err, req, res, next) => {
    res.status(500).send(err)
})


app.listen(port, ()=>{
    console.log('working on port '+port)
})