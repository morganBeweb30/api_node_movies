//  on importe express, qui permet de structurer node
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');
var corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions));
//  app.use(cors);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//  importer les methodes depuis le controller
const movieController = require('./controllers/movie_cont');

//  on importe la méthode connex depuis le fichier database
const database = require('./database');

const movieRoutes = require('./routes/movie_routes');
const { urlencoded } = require('body-parser');

//  dire à app d'utiliser movieRoutes
app.use(movieRoutes);

//  app.routes(movieRoutes);


//  exporter le module qui utilise express
module.exports = app;
