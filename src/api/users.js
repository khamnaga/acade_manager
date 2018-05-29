/* jshint esversion : 6 */

// ./src/api/users.js

// V1
// module.exports = (app) => {
//
//     const modelUser = require("./../models/users");
//
//     const users = () => {
//
//         app.get('/user', (req, res) => {
//             modelUser.get((response) => {
//                 res.status(200).send(response);
//             });
//         });
//
//         app.get('/user/:id', (req, res) => {
//             modelUser.get((response) => {
//                 res.send(response);
//             }, req.params.id); // 2nd paramètre
//         })
//
//         app.post('/user', (req, res) => {
//           try {
//             modelUser.register(response => {
//               res.status(201).send("Utilisateur a été créé");
//             }, req.body);
//           } catch(err) {
//             res.status(500).send("L'utilisateur ne peut être créé");
//           }
//     });
//
//     }
//
//     return users();
//
// };
