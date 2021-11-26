const express = require('express');
const router = express.Router();
const userRoute = require('./user.route');
const operationRoute = require('./operation.route');
const ramittanceRoute = require('./remittance.route');
const customerRoute = require('./customer.route');
const routerPaths = [
    {
        path: '/oper',
        route: operationRoute
    },
    {
        path: '/user',
        route: userRoute
    }
    ,
    {
        path: '/ramit',
        route: ramittanceRoute
    },
    ,
    {
        path: '/cus',
        route: customerRoute
    }
];

routerPaths.forEach(route => {
    router.use(route.path, route.route)
})

module.exports = router;