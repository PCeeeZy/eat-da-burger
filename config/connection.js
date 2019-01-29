// dependencies
// ===================================

const pw = require("./mySQL-PW.js");
const mySQLpw = pw.password;
const mysql = require('mysql');

// * Inside the `connection.js` file, setup the code to connect Node to MySQL.

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: mySQLpw,
    database: 'burgers_db'
});

connection.connect(err => {
    if (err) {
        console.error(`Error connecting: ${err.stack}.`);
        return;
    }
    console.log(`Connected as id: ${connection.threadId}.`);
});

// * Export the connection.
module.exports = connection;