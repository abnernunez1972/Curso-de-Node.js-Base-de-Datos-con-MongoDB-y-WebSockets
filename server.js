const { application } = require('express');
const express = require('express');
const req = require('express/lib/request');
const { status } = require('express/lib/response');
const db = require('./db');
const router = require('./network/routes');
var app = express();

// Express ya viene incluido el Body-Pasrser
app.use(express.json());
app.use(express.urlencoded({extended : true}));


//
// Activar el Router al final de los ENDPOINT
//app.use(router);
router(app);
//
app.use('/app',express.static('public')); 

// Abrir servdior Express 
app.listen(3000);
console.log('La aplicacin esta corriendo en hhtp://localhos:3000');

const url = `mongodb+srv://abner:UTVaDzNyc7xuBxwh@cluster0.y9pjg.mongodb.net/Platzi?retryWrites=true&w=majority`;

db(url);
//