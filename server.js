const { application } = require('express');
const express = require('express');
const req = require('express/lib/request');
const { status } = require('express/lib/response');
const db = require('./db');
var app = express();

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


const user ='abner';
const pass = 'KHNRPUXKAn6MFDCN';
const host = 'cluster0.y9pjg.mongodb.net';
const database = 'Platzi';
const url = `mongodb+srv://abner:KHNRPUXKAn6MFDCN@cluster0.y9pjg.mongodb.net/Platzi?retryWrites=true&w=majority`;

db(url);
//