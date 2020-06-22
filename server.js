const http = require('http');
const database = require('./database');



const port = 3000;

http.createServer().listen(port, ((req, res) => {
    console.log(`connex ok sur port ${port}`);
    database;
}))




