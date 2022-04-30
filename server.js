const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('./socket');
const db = require('./db');
const router = require('./network/routes');
const config = require('./config');
require('dotenv').config()
// Express ya viene incluido el Body-Pasrser
app.use(express.json());
app.use(express.urlencoded({extended : true}));


//
// Activar el Router al final de los ENDPOINT
//app.use(router);

socket.connect(server);
router(app);

//
app.use(config.publicRoute,express.static('public')); 

// Abrir servdior Express 
server.listen(config.port, function() {
    console.log('La aplicacin esta corriendo en ' + config.host + ":" + config.port);
});



db(config.dbUrl);

app.use(cors());
//