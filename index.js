const express = require('express');
const app = express();
const port = 3000;



//Starting server
app.listen(port, ()=> console.log(`Servidor levantado en http://localhost:${port}`));