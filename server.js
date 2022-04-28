const { application } = require('express');
const express = require('express');
const req = require('express/lib/request');
const { status } = require('express/lib/response');


var app = express();

/* app.use('/',function(req,res) {
res.send('hola');

}); */
// Express ya viene incluido el Body-Pasrser
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const router = require('./network/routes');
//
// Activar el Router al final de los ENDPOINT
//app.use(router);
router(app);
//
app.use('/app',express.static('public')); 

// Abrir servdior Express 
app.listen(3000);
console.log('La aplicacin esta corriendo en hhtp://localhos:3000');
//