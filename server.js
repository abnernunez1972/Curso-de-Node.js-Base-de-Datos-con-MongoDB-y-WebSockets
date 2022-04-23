const { application } = require('express');
const express = require('express');
const router = express.Router();
var app = express();

/* app.use('/',function(req,res) {
res.send('hola');

}); */
// Express ya viene incluido el Body-Pasrser
app.use(express.json());
app.use(express.urlencoded({extended : true}));
//

router.route("/")
.all((res, req, next) => {
   //Puede funcionar como middleware
    console.log("Accedo a la ruta /")
    next()
})
.get((req, res) => {
    //console.log(req.body);
    //console.log(req.query);
    console.log(req.headers);
    res.header({
        'custom-header': 'another value'
    })

    res.send('List message')
})
      
.post((req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("Mensaje anadido " + req.body.text);
    
})
.delete((req, res) => {
    res.send("Hola desde delete");
})

// Activar el Router al final de los ENDPOINT
app.use(router);
//


// Abrir servdior Express 
app.listen(3000);
console.log('La aplicacin esta corriendo en hhtp://localhos:3000');
//