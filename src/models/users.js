/* jshint esversion : 6 */

const mysql = require('mysql');

// Compte localhost & nom de la BDD
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

// Read fiche profil d'un USER par exemple
const get = (clbk, id) => {
    var query;

    if (id) query = `SELECT id, firstname, lastname, FROM users WHERE id= ${connection.escape(id)}`;
    else    query = `SELECT id, `
};

// Suppression d'un compte utilisateur
const remove = (clbk, id) => {
    const query = `DELETE FROM users WHERE id = ${connection.escape(id)}`;

    connection.query(query, (error, results, fields) => {
        // S'il y a une erreur, une exception est levée
        if (error) throw error;
        results.error = false;
        results.message = "L'utilisateur a été supprimé de la base de données";

        // On passe les résultats de la requête (results) en argument
        clbk(results);
    });
};

// MAJ d'un compte utilisateur
const update = (clbk, id) => {
    const query = `UPDATE users SET WHERE firstname = ${connection.escape(req.body.firstname)}, lastname = ${connection.escape(req.body.lastname)}, age = ${connection.escape(req.body.age)}, bio = ${connection.escape(req.body.bio)}, email = ${connection.escape(req.body.mail)}, linkedin = ${connection.escape(req.body.linkedin)}, github = ${connection.escape(req.body.github)} id = ${connection.escape(id)}`;

    connection.query(query, (error, results, fields) => {
        // S'il y a une erreur, une exception est levée
        if (error) throw error;
        results.error = false;
        results.message = "Votre profil a bien été mis à jour";

        // On passe les résultats de la requête (results) en argument
        clbk(results);
    });
};

module.exports = {
    register,
    get,
    remove,
    update
};
