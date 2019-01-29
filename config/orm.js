// * Import (require) `connection.js` into `orm.js`
const connection = require("./connection");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const orm = {
//   * `selectAll()`
    selectAll: (selectedTable, cb) => {
        const query = `SELECT * FROM ${selectedTable};`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
//   * `insertOne()`
    insertOne: (selectedTable, column1, column2, value1, value2, cb) => {
        const query = `INSERT INTO ${selectedTable} (${column1}, ${column2}) VALUES (${value1}, ${value2})`;

        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
//   * `updateOne()`
    updateOne: (selectedTable, column1, column2, updatedValue1, updatedValue2, conditional, cb) => {
        const query = `UPDATE ${selectedTable} SET ${column1}=${updatedValue1}, ${column2}=${updatedValue2} WHERE id=${conditional}`;

        connection.query(query, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};
// * Export the ORM object in `module.exports`.
module.exports = orm;