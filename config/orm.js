const promisePool = require("../config/connection.js");

/*
    selectAll()
insertOne()
updateOne()
*/

const orm = {

    selectAll: async function (table) {
        try {

            const queryString = "SELECT * FROM ??;";

            let [rows] = await promisePool.query(queryString, table);

            return rows;

        } catch (error) {
            throw error;
        }
    },

    insertOne: async function (table, vals) {
        try {

            const queryString = "INSERT INTO ?? SET ?";

            let result = await promisePool.query(queryString,[table,vals]);

            return result;

        } catch (error) {
            throw error;
        }
    },

    updateOne: async function(table,cols,valId){
        try {
            
            let queryString = "UPDATE ?? SET ?? WHERE id = ?";

            let result = await promisePool.query(queryString,[table,cols,valId]);

            return result;

        } catch (error) {
            throw error;
        }
    }
};

module.exports = orm;