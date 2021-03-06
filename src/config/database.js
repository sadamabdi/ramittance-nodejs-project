const oracledb = require('oracledb');
const util = require("../utils/util");

const host = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
console.log(password)

oracledb.initOracleClient({libDir: 'C:\\instantclient_21_3'})
const executeQuery = async (query) => {
    let connection;
    try {

        connection = await oracledb.getConnection({
            username: username,
            password: password,
            connectString: host + '/' + database
        });

        let result = await connection.execute(query);
        connection.commit();

        return util.parseDatabaseObject(result)

    } catch (err) {
        console.log(`Error from database: ${err}`)
        return null;
    } finally {
        //connection.close();

    }
}

module.exports = {
    executeQuery
}