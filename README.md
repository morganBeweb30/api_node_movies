# COURS API NODE #



## Description
Démo faite ensemble en présentiel : Node, Express, Mysql, Sequelize

## Technique

*  Télécharger le fichier zip et le décompresser
**Commandes en CLI pour initialiser npm** 
*  `npm init` : initialisation du gestionnaire de packages NPM

### Installation des modules nécessaires
*  `npm install --save mysql2` : installation de mysql2 pour la gestion de la bdd
*  `npm install --save express` : installation d'Express, framework MVC
*  `npm install --save sequelize` : installation d'un ORM pour express
*  `npm install --save body-parser` : installation d'un body-parser pour parser les données dans le body

### En dev, éviter la restriction cross origin    
*  Commande en CLI : `npm install --save cors`
*  Dans le fichier app, on a ajouté :
  * `const cors = require('cors');`
  * `app.use(cors);`





