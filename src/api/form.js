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
    connection.connect(function(err) {
        if (err) throw error;
        console.log("vous êtes connecté");
    });

    // const form = (app) => {

        // app.post("/register", (req, res) => {
        //     // Requête mysql pour créer une instance d'user
        //     const q = `INSERT INTO users (firstname, lastname, age, bio, email, password, linkedin, github, roles) VALUES (${connection.escape(req.body.users.firstname)}, ${connection.escape(req.body.users.lastname)}, ${connection.escape(req.body.users.age)}, ${connection.escape(req.body.users.bio)}, ${connection.escape(req.body.users.email)}, ${connection.escape(req.body.users.password)}, ${connection.escape(req.body.users.linkedin)}, ${connection.escape(req.body.users.github)}, ${connection.escape(req.body.users.roles)})`;
        //     console.log(q);
        //
        //     connection.query(q, null, (error, result, field) => {
        //         if (error) throw error;
        //         else {
        //             res.status(200).send('ok');
        //         }
        //     })
        // });
    // }

    module.exports = connection;
    // return form(app);

// app.listen(3000);
