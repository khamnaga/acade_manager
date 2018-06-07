/* jshint esversion : 6 */

// Setup d'Express
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

// CORS cross origin
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

console.log('test app.js');

// app.use(cors());
// Test port 3000
app.get('/', (req,res) => {
    res.send('Vous êtes sur le port: 3000');
});

// GET un USER
app.get('/profile/:id', (req, res) => {
    const sql = "SELECT * FROM users WHERE id=?";
    // const sql = "SELECT * FROM users INNER JOIN sessions ON users.session_id = sessions.id WHERE users.id=?";
    console.log("ici le back !");
    connection.query(sql, req.params.id, (error, results,fields) => {
        console.log("results", results);
        if (error) throw error;
        else {
            res.status(200).send(results);
        }
    })
});

// GET tous les USERS
app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    connection.query(sql, null, (error, results, field) => {
        if (error) throw error;
        else {
            res.status(200).send(results);
        }
    })
});

// POST pour la création d'un compte USER
app.post("/register", (req, res) => {
    console.log("req.body:", req.body.id);
    console.log("req.body:", req.body.firstname);
    console.log("req.body:", req.body.lastname);
    console.log("req.body:", req.body.role);

    // Requête mysql pour créer une instance d'user
    const sql = `INSERT INTO users (firstname, lastname, age, bio, email, password, linkedin, github, session_id) VALUES (${connection.escape(req.body.firstname)}, ${connection.escape(req.body.lastname)}, ${connection.escape(req.body.age)}, ${connection.escape(req.body.bio)}, ${connection.escape(req.body.email)}, ${connection.escape(req.body.password)}, ${connection.escape(req.body.linkedin)}, ${connection.escape(req.body.github)}, ${connection.escape(req.body.session_id)})`;
    console.log(sql);

    connection.query(sql, null, (error, result, field) => {
        console.log('### TEST ###');
        if (error) throw error;
        else {
            console.log('user ajouté');
            // res.status(200).send('Votre profil a bien été créé');
            res.status(200).send(result);
        }
    })
});

// DELETE un USER par son ID
app.delete('/delete/:id', (req, res) => {
    console.log("id:", req.params.id);
    const sql = "DELETE FROM users WHERE id=?";

    connection.query(sql, req.params.id, (error, results, fields) => {
        if (error) throw error;
        else res.status(200).send(results);
    })
});

// UPDATE profil USER
app.put('/update/:id', (req, res) => {
    // console.log("id:",        req.body.id);
    // console.log("firstname:", req.body.firstname);
    // console.log("lastname:",  req.body.lastname);
    // console.log("bio:",       req.body.bio);
    console.log(req.body);
    // return;
    const sql = `UPDATE users SET firstname = ${connection.escape(req.body.firstname)}, lastname = ${connection.escape(req.body.lastname)}, age = ${connection.escape(req.body.age)}, bio = ${connection.escape(req.body.bio)}, email = ${connection.escape(req.body.email)}, password = ${connection.escape(req.body.password)}, linkedin = ${connection.escape(req.body.linkedin)}, github = ${connection.escape(req.body.github)}, avatar = ${connection.escape(req.body.avatar)} WHERE id = ${connection.escape(req.body.id)}`;
    console.log(sql);
    connection.query(sql, req.params.id, (error, results, fields) => {
        if (error) throw error;
        else res.status(200).send(results);
    })
});

app.listen(3000);
