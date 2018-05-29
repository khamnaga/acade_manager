/* jshint esversion : 6 */
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./form');
const cors = require("cors");

// config de CORS
app.use(cors({
    origin: [
        "http://localhost:8080",
        "http://localhost:8081",
        "http://localhost:8082"
    ],
    methods: ["GET", "DELETE", "PATCH", "POST", "PUT"], // verbes http
}));

// BODY parser
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

console.log('ici app.js');

// app.use(cors());
app.get('/', (req,res) => {
    res.send('Vous êtes sur le port: 3000');
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    connection.query(sql, null, (error, result, field) => {
        if (error) throw error;
        else {
            res.status(200).send(result);
        }
    })
});

app.post("/register", (req, res) => {
    console.log("req.body:", req.body.firstname);
    console.log("req.body:", req.body.lastname);

    // Requête mysql pour créer une instance d'user
    const sql = `INSERT INTO users (firstname, lastname, age, bio, email, password, linkedin, github) VALUES (${connection.escape(req.body.firstname)}, ${connection.escape(req.body.lastname)}, ${connection.escape(req.body.age)}, ${connection.escape(req.body.bio)}, ${connection.escape(req.body.email)}, ${connection.escape(req.body.password)}, ${connection.escape(req.body.linkedin)}, ${connection.escape(req.body.github)})`;
    console.log(sql);

    connection.query(sql, null, (error, result, field) => {
        console.log('### TEST ###');
        if (error) throw error;
        else {
            console.log('user ajouté');
            res.status(200).send('ok');
        }
    })
});

app.listen(3000);
