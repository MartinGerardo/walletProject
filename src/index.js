const express = require('express');
const app = express();
const cors = require('cors');
//middlewares
app.use(express.json( {type : '*/*'}));
app.use(express.urlencoded({extended:false}));
app.use(cors());


//routers
app.use(require('./routers/index'))

app.listen(3000);
console.log("server escuchando en puerto 3000");