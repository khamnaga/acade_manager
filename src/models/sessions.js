/* jshint esversion : 6 */

const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'DB_academanager'
});

connection.connect();

const GetAllSessions = (clbk) => {
    const sql = "SELECT * FROM sessions";

    connection.query(sql, (error, results, fields) => {
        if ( error) throw error;
        clbk(results);
    });
};

module.exports = {
    getAllSessions
};
