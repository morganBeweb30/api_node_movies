//  connexion avec mysql
const mysql = require('mysql2');

const connex = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'api_movies'
});

const getAllMovies = connex.query("SELECT * FROM movies", (err, results, fields) => {
    console.log(results);
});






exports.getAllMovies;