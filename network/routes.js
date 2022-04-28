const express = require('express');

// Aqui se listan las rutas de los Componentes que usara la apps
const message = require('../components/messages/network');
//

// Aqui se agrgan las rutas al server de express 
const routes = function (server) {
server.use('/message', message);

}
//

module.exports = routes;