// Setup d'Express
const express = require("express");
const app = express();

// Connecter BDD & Mysql

    const mysql = require("mysql");
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'DB_academanager'
    })
    // Execute puis lance la connexion
    connection.connect(function(error) {
        if (error) throw error;
        console.log("vous êtes connecté");
    });

    module.exports = connection;
