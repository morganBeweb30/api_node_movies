const express = require('express');
const movieController = require('../controllers/movie_cont');
const app = express();

//  MW d'express qui se base sur l'url de la raq
const router = express.Router();


//  on fait un middleware
//  on appelle la méthode get de express, qui contient la méthode routes()
//  get() prend 2 attributs : requete et réponse : url + méthode
router.get('/', movieController.get_all_movies);
router.get('/all_movies', movieController.get_all_movies);
router.get('/one_movie/:id', movieController.get_one_movie);
router.post('/create_movie', movieController.create_movie);
router.put('/update_movie/:id', movieController.update_movie);

module.exports = router;
