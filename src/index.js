var express = require('express');
var apiMocker = require('connect-api-mocker');
const settings = require('./settings.json');
 
const app = express();
 
app.use(apiMocker('src/api'));
 
const PORT = settings.port ?? 4000;
 
app.listen(PORT, console.log(`Mock Server listening on port: \x1b[32m${PORT}\x1b[0m\n http://localhost:4001/`));