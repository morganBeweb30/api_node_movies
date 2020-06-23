//  import du module mysql2
const mysql = require('mysql2');
const {Sequelize} = require('sequelize');

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

const sequelize = new Sequelize('api_movies', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});



//  connexion avec mysql
// const connex = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'api_movies'
// });


//  const getAllMovies = connex.query("SELECT * FROM movies", (err, results, fields) => {
//    console.log(results);
//    const result_tab = JSON.parse(results);
//    return result_tab;
//  });


//  une méthode est un middleware
//  exporter la connexion
//  module.exports = connex;
module.exports = sequelize;
