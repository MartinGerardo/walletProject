const express = require('express');
const app = express();
app.use(require('./routers/index'))

app.listen(3000);
console.log("server escuchando en puerto 3000");