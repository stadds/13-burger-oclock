const orm = require("../config/orm.js");

/*
    selectAll()
insertOne()
updateOne()
*/



const burger = {
    selectAll: async function () {
        try {
            let res = await orm.selectAll("burgers");

            return res;

        } catch (error) {
            throw error;
        }
    },

    insertOne: async function(vals){
        try {
            
            let res = await orm.insertOne("burgers",vals);

            return res;

        } catch (error) {
            throw error;
        }
    }
};

module.exports = burger;