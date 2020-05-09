// Dependencies
// =============================================================
const mysql = require("mysql2");

require('dotenv').config();

let pool;

// SET UP POOL CONNECTION
// =============================================================
if(process.env.JAWSDB_URL){
    pool = mysql2.createPool(process.env.JAWSDB_URL);
}
else{
    pool = mysql.createPool({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "root",
        database: "burgers_db"
});
};

const promisePool = pool.promise();

module.exports = promisePool;