/* jshint esversion : 6 */

// Setup d'Express
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// Compte localhost & nom de la BDD
const connection = require('./form');
const cors = require("cors");

// BODY parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// config de CORS
app.use(cors({
    origin: [
        "http://localhost:8080",
        "http://localhost:8081",
        "http://localhost:8082"
    ],
    methods: ["GET", "DELETE", "PATCH", "POST", "PUT"], // verbes http
}));

console.log("API sessions");

// GET une SESSION
app.get('/session/:id', (req, res) => {
    const sql = "SELECT * FROM sessions WHERE id=?";
    console.log("sql");
    connection.query(sql, req.params.id, (error, results,fields) => {
        if (error) throw error;
        else {
            res.status(200).send(results);
        }
    })
});

// GET toutes les SESSIONS
app.get('/sessions', (req, res) => {
    const sql = "SELECT * FROM sessions";
    connection.query(sql, null, (error, results, field) => {
        if (error) throw error;
        else {
            res.status(200).send(results);
        }
    })
});


// POST pour la création d'une SESSION
app.post("/sessions", (req, res) => {
    console.log("POST d'une SESSION");

    console.log("req.body:", req.body.entitled);
    console.log("req.body:", req.body.name);
    console.log("req.body:", req.body.start_date);
    console.log("req.body:", req.body.end_date);
    console.log("req.body:", req.body.admin_firstname);
    console.log("req.body:", req.body.admin_lastname);

    // Requête mysql pour créer une instance d'user
    const sql = `INSERT INTO sessions (entitled, name, start_date, end_date, admin_firstname, admin_lastname) VALUES (${connection.escape(req.body.entitled)}, ${connection.escape(req.body.name)}, ${connection.escape(req.body.start_date)}, ${connection.escape(req.body.end_date)}, ${connection.escape(req.body.admin_firstname)}, ${connection.escape(req.body.admin_lastname)})`;
    console.log("sql:", sql);

    connection.query(sql, null, (error, result, field) => {
        console.log('test insertion session');
        if (error) throw error;
        else {
            console.log('création de la session');
            res.status(200).send('ok');
        }
    })
});

app.listen(3001);
