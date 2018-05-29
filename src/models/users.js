/* jshint esversion : 6 */

const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'DB_academanager'
});

connection.connect();

// Création d'un compte utilisateur
const register = (clbk, data) => {
    checkmail(res => {
        console.log(res);
        // Vérifie si l'adresse mail existe dans la BDD
        if (res[0].count > 0) {
            return clbk({error: true, message: "Cette adresse mail existe déjà"});
        }

        // la BDD ne contient pas encore cette adresse mail, on poursuit l'insertion
        let query = `INSERT INTO users (mail, password) VALUES
        (${connection.escape(data.mail)}, ${connection.escape(data.password)})`;

        connection.query(query, (error, results, fields) => {
            if (error) trow error;
            results.error = false;
            results.message = "Bravo ! Vous êtes maintenant enregistré :)";
            clbk(results);
        });

    }, data.mail);
};

module.exports = {
    register
};
