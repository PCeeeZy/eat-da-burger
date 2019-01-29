// Inside `burger.js`, import `orm.js` into `burger.js`
const orm = require('../config/orm');

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (result) => {
            cb(result);
        });
    },
    insertOne: (selectedTable, column1, column2, value1, value2, cb) => {
        orm.insertOne("burgers", column1, column2, value1, value2, (result) => {
            cb(result)
        });
    },
    updateOne: (selectedTable, column1, column2, updatedValue1, updatedValue2, conditional, cb) => {
        orm.updateOne("burgers", column1, column2, updatedValue1, updatedValue2, conditional, (result) => {
            cb(result);
        });
    }
};

// * Export at the end of the `burger.js` file.
module.exports = burger;