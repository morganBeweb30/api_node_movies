//  const http = require('http');
//  const database = require('./database');
// app contient express
const app = require('./app');


const port = 3000;


// http.createServer().listen(port, ((req, res) => {
//     console.log(`connex ok sur port ${port}`);
//     database;
// }))



app.listen(port, () => {
    console.log(`connex ok sur port ${port}`);
})
