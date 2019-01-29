// Inside `burger.js`, import `orm.js` into `burger.js`
const orm = require('../config/orm');

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (result) => {
            cb(result);
        });
    },
    insertOne: (selectedTable, columns, value1, value2, cb) => {
        orm.insertOne("burgers", columns, value1, value2, (result) => {
            cb(result)
        });
    },
    updateOne: (selectedTable, updatedValues, conditional, cb) => {
        orm.updateOne("burgers", updatedValues, conditional, (result) => {
            cb(result);
        });
    }
};

// * Export at the end of the `burger.js` file.
module.exports = burger;