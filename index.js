const mysql = require("mysql");

let conn;
function connection(host, user, password, database) {
    conn = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database,
    });

    if (!conn) return console.log("Check your database.");
}

function checkData(data, callback) {
    conn.query(`SELECT * FROM ${data.table} WHERE ${data.paramstr}`,
        (error, results) => {
            if (error) return callback(err);
            if (results.length <= 0) callback(false);
            return callback(true);
        });
}

function tableData(data, callback) {
    conn.query(`SELECT * FROM ${data.table} WHERE ${data.paramstr}`,
        (err, result) => {
            if (err) return callback(err);
            if (result.length == 0) return callback(404);
            return callback(result);
        });

}

module.exports = { connection, checkData, tableData };