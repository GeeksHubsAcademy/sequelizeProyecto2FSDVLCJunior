const express = require('express');
const app = express();
const port = 3000;
const db = require('./db.js');


//Connecting to the database
db.then(()=>{
//Starting server
    app.listen(port, ()=> console.log(`Servidor levantado en http://localhost:${port}`));
})
.catch((err)=> console.log(err.message));   