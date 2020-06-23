//  importer la connexion à la db
//  const database = require('../database');

const sequelize = require('../database');
const Sequelize = require('sequelize');

const Movies = sequelize.define('movie', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    synopsis: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cover: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

//  exporter la méthode pour l'utiliser dans app
// exports.get_all_movies = () => {
//     const movies = {
//         title: ''
//     };
//     database.query("SELECT * FROM movies", (err, results, fields) => {
//         console.log(results);
//         movies.title = results[0].title;
//     })
//     return movies;
// };

module.exports = Movies;
