//  importer le model
const Movie = require('../models/movie_model');

//  méthode pour créer un objet "en dur"
// movieModel.sync({ force: true }).then(() => { 
//   return movieModel.create({
//     title: 'Le Seigneur Des Anneaux',
//     synopsis: 'Dans ce chapitre de la trilogie, le jeune et timide Hobbit, Frodon Sacquet, hérite d\'un anneau.',
//     cover: '../assets/images/affiche_seigneur_des_anneaux.jpg'
//   });
// });

exports.get_all_movies = (req, res) => {
  Movie.findAll().then((movies) => {
    console.log(movies);
    res.send(movies);
  });
};

// project will be an instance of Project and stores the content of the table entry
// with id 123. if such an entry is not defined you will get null
exports.get_one_movie = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Movie.findByPk(id).then((movie) => {
    console.log(movie);
    res.send(movie);
  }).catch((err) => {
    console.log(err);
  });
}

//  create
exports.create_movie = (req, res) => {
  //  parenthèses appellent le constructeur
  // const movie = new Movie({
  //   title: req.body.title,
  //   synopsis: req.body.synopsis,
  //   cover: req.body.cover
  // });
  Movie.create({
      title: req.body.title,
      synopsis: req.body.synopsis,
      cover: req.body.cover
    }
  ).then(() => {
    res.send('enregistré');
  }).catch(err => {
    res.status(400).send(err);
  });
};

//  create
exports.update_movie = (req, res) => {
  
  const id = req.params.id;
  Movie.update({
      title: req.body.title,
      synopsis: req.body.synopsis,
      cover: req.body.cover
    },
    {
      where: {
        id: id
      }
    }
  ).then(() => {
    res.send('enregistré');
  }).catch(err => {
    res.status(400).send(err);
  });
};


